const SENDER_SUBSCRIBERS_URL = "https://api.sender.net/v2/subscribers";

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

function alreadySubscribed(payload, status) {
  if (status === 409) return true;
  const text = JSON.stringify(payload ?? "").toLowerCase();
  return (
    text.includes("already exists") ||
    text.includes("already subscribed") ||
    text.includes("already a subscriber") ||
    text.includes("subscriber already") ||
    text.includes("email has already been taken") ||
    text.includes("has already been taken")
  );
}

function senderHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

async function addToGroup({token, groupId, email}) {
  const response = await fetch(
    `https://api.sender.net/v2/subscribers/groups/${encodeURIComponent(groupId)}`,
    {
      method: "POST",
      headers: senderHeaders(token),
      body: JSON.stringify({subscribers: [email]}),
      signal: AbortSignal.timeout(10000),
    },
  );
  return response;
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

  const token = process.env.SENDER_API_TOKEN;
  const groupId = process.env.SENDER_GROUP_ID?.trim();
  if (!token || !groupId) {
    console.error("Newsletter signup is not configured");
    return reply(500, {ok: false});
  }

  const email = data.email.trim().toLowerCase();
  const name = cleanName(data.name);
  const payload = {
    email,
    groups: [groupId],
  };
  if (name) payload.firstname = name;

  let response;
  try {
    response = await fetch(SENDER_SUBSCRIBERS_URL, {
      method: "POST",
      headers: senderHeaders(token),
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("Newsletter signup request failed", error instanceof Error ? error.name : "Error");
    return reply(502, {ok: false});
  }

  if (response.status === 200 || response.status === 201) {
    return reply(200, {ok: true});
  }

  const errorBody = await response.json().catch(() => null);
  if (!alreadySubscribed(errorBody, response.status)) {
    console.error("Newsletter signup was rejected", response.status);
    return reply(502, {ok: false});
  }

  // Existing subscriber: ensure they are in the configured group, then succeed.
  try {
    const groupResponse = await addToGroup({token, groupId, email});
    if (!(groupResponse.status === 200 || groupResponse.status === 201)) {
      console.error("Newsletter group assign returned", groupResponse.status);
    }
  } catch (error) {
    console.error(
      "Newsletter group assign failed",
      error instanceof Error ? error.name : "Error",
    );
  }

  return reply(200, {ok: true});
}
