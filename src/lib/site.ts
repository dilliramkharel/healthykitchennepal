export const SITE_URL = "https://www.healthykitchennepal.xyz";
export const CONTACT_EMAIL = "contact@healthykitchennepal.com";

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

export function plainText(value: string): string {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&#(x[\da-f]+|\d+);?/gi, (_, entity: string) => {
      const codePoint = entity.toLowerCase().startsWith("x")
        ? Number.parseInt(entity.slice(1), 16)
        : Number.parseInt(entity, 10);
      try {
        return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : " ";
      } catch {
        return " ";
      }
    })
    .replace(/\s+/g, " ")
    .trim();
}

export function seoTitle(title: string): string {
  const suffix = " | Healthy Kitchen Nepal";
  const maxTitleLength = 60;
  const cleanTitle = plainText(title);
  const available = maxTitleLength - suffix.length;

  if (cleanTitle.length <= available) return `${cleanTitle}${suffix}`;
  return `${cleanTitle.slice(0, available - 1).trimEnd()}…${suffix}`;
}

export function seoDescription(description: string): string {
  const cleanDescription = plainText(description);
  const maxLength = 155;
  if (cleanDescription.length <= maxLength) return cleanDescription;
  return `${cleanDescription.slice(0, maxLength - 1).trimEnd()}…`;
}
