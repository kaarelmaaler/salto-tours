type Span = {
  _type?: string;
  text?: string;
  marks?: string[];
};

type MarkDef = {
  _key?: string;
  _type?: string;
  href?: string;
};

type Block = {
  _type?: string;
  style?: string;
  children?: Span[];
  markDefs?: MarkDef[];
};

export type PortableParagraph = {
  html: string;
  class?: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function safeHref(href: string | undefined): string | undefined {
  if (!href) return undefined;
  const trimmed = href.trim();
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
  return undefined;
}

function renderSpan(span: Span, markDefs: Map<string | undefined, MarkDef>): string {
  let text = escapeHtml(span.text ?? "").replaceAll("\n", "<br>");
  if (!text) return "";
  const marks = span.marks ?? [];
  if (marks.includes("strong")) text = `<strong>${text}</strong>`;
  const linkKey = marks.find((mark) => mark !== "strong");
  const href = linkKey ? safeHref(markDefs.get(linkKey)?.href) : undefined;
  if (href) text = `<a href="${escapeHtml(href)}">${text}</a>`;
  return text;
}

/** Paragraphs, bold, links, and the existing schedule lines. */
export function portableTextToParagraphs(value: unknown): PortableParagraph[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((entry) => {
    const block = entry as Block;
    if (block?._type !== "block" || !Array.isArray(block.children)) return [];

    const markDefs = new Map((block.markDefs ?? []).map((mark) => [mark._key, mark]));
    if (block.style === "schedule") {
      const html = block.children
        .filter((span) => span?._type === "span")
        .map((span) => `<span>${escapeHtml(span.text ?? "")}</span>`)
        .join("");
      return html ? [{html, class: "schedule"}] : [];
    }

    const html = block.children
      .map((span) => (span?._type === "span" ? renderSpan(span, markDefs) : ""))
      .join("");

    return html.trim() ? [{html}] : [];
  });
}

export function portableTextToHtml(value: unknown): string {
  return portableTextToParagraphs(value)
    .map((paragraph) => `<p>${paragraph.html}</p>`)
    .join("");
}
