import { plainText } from "./site";

export interface ContentsEntry {
  id: string;
  title: string;
  level: number;
}

/** Add anchors to already-sanitized article HTML, preserving existing anchors. */
export function buildTableOfContents(safeHtml: string) {
  const entries: ContentsEntry[] = [];
  const usedIds = new Set(
    [...safeHtml.matchAll(/\bid="([^"]*)"/g)].map((match) => plainText(match[1] ?? "")),
  );
  const html = safeHtml.replace(/<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (heading, level: string, attributes: string, body: string) => {
      const title = plainText(body);
      if (!title) return heading;
      const existingId = attributes.match(/\bid="([^"]+)"/i)?.[1];
      let id = existingId ? plainText(existingId) : "";
      if (!id) {
        const base = "article-" + (title.toLowerCase().normalize("NFC")
          .replace(/[^\p{L}\p{M}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "section");
        id = base;
        let suffix = 2;
        while (usedIds.has(id)) id = `${base}-${suffix++}`;
        usedIds.add(id);
        attributes = attributes.replace(/\s+id="[^"]*"/gi, "");
        attributes += ` id="${id}"`;
      }
      entries.push({ id, title, level: Number(level) });
      return `<h${level}${attributes}>${body}</h${level}>`;
    });
  return { html, entries };
}
