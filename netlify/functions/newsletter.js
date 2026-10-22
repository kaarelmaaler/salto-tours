const MAILERLITE_SUBSCRIBERS_URL = "https://connect.mailerlite.com/api/subscribers";

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function reply(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {...jsonHeaders, ...extraHeaders},
    body: JSON.stringify(body),
  };
}

function readJson(event) {
  if (!event.body) return null;
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
  if (raw.length > 4000) return null;
  return JSON.parse(raw);
}

function isEmail(value) {
  if (typeof value !== "string") return false;
  const email = value.trim();
  if (email.length < 3 || email.length > 254) return false;
  if (/[\s<>]/.test(email)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanName(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 100);
}

function alreadySubscribed(payload) {
  const text = JSON.stringify(payload ?? "").toLowerCase();
  return text.includes("already exists") || text.includes("already subscribed") || text.includes("already a subscriber");
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return reply(405, {ok: false}, {Allow: "POST"});
  }

  let data;
  try {
    data = readJson(event);
  } catch {
    return reply(400, {ok: false});
  }

  if (!data || typeof data !== "object") {
    return reply(400, {ok: false});
  }

  if (data.hp != null && String(data.hp).trim() !== "") {
    return reply(200, {ok: true});
  }

  if (!isEmail(data.email)) {
    return reply(400, {ok: false});
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  const groupId = process.env.MAILERLITE_GROUP_ID?.trim();
  if (!token || !groupId) {
    console.error("Newsletter signup is not configured");
    return reply(500, {ok: false});
  }

  const email = data.email.trim().toLowerCase();
  const name = cleanName(data.name);
  const payload = {
    email,
    groups: [groupId],
    status: "active",
  };
  if (name) payload.fields = {name};

  let response;
  try {
    response = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("Newsletter signup request failed", error instanceof Error ? error.name : "Error");
    return reply(502, {ok: false});
  }

  if (response.status === 200 || response.status === 201 || response.status === 409) {
    return reply(200, {ok: true});
  }

  const errorBody = await response.json().catch(() => null);
  if (alreadySubscribed(errorBody)) {
    return reply(200, {ok: true});
  }

  console.error("Newsletter signup was rejected", response.status);
  return reply(502, {ok: false});
}
