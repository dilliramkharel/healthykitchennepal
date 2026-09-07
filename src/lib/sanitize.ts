import sanitizeHtml from "sanitize-html";

const internalHosts = new Set([
  "healthykitchennepal.com",
  "www.healthykitchennepal.com",
  "healthykitchennepal.xyz",
  "www.healthykitchennepal.xyz",
  "cms.healthykitchennepal.xyz",
]);

const wordpressArticleSlugs = new Set([
  "apple-benefits", "pumpkin-seeds-benefits", "chia-benefits", "moringa-benefits", "health-benefits-of-drinking-lemon-water", "homemade-lito-for-babies", "health-benefits-of-flax-seeds", "essential-nepali-spices", "nepali-kitchen-detox-guide", "traditional-nepali-food-for-weight-loss", "traditional-nepali-drinks-for-health", "healthy-eating-in-nepal", "healthy-fruits", "healthy-food-in-nepal", "10-best-healthy-breakfast-ideas-for-a-energetic-day", "organic-farming-benefits", "नेपालका-सुपरफुडहरू-जौ-र-क",
]);

function safeLinkAttributes(attribs: Record<string, string | undefined>) {
  let href = attribs["href"] ?? "";
  let isExternal = false;

  try {
    const url = new URL(href, "https://www.healthykitchennepal.xyz");
    const isInternal = internalHosts.has(url.hostname);
    isExternal = /^https?:$/i.test(url.protocol) && !isInternal;
    // Old WordPress links should stay inside this site instead of sending visitors to the legacy CMS.
    if (isInternal && /^https?:$/i.test(url.protocol)) {
      const pathname = url.pathname.replace(/^\/+|\/+$/g, "");
      let decodedPathname = pathname;
      try { decodedPathname = decodeURIComponent(pathname); } catch { /* Keep the encoded path. */ }
      if (wordpressArticleSlugs.has(decodedPathname)) {
        href = `/blog/${pathname}${url.search}${url.hash}`;
      } else if (pathname.startsWith("category/")) {
        href = "/blog";
      } else if (pathname === "wp-admin/post.php" && url.searchParams.get("post") === "173") {
        href = "/blog/traditional-nepali-food-for-weight-loss";
      } else {
        href = `${url.pathname}${url.search}${url.hash}`;
      }
    }
  } catch {
    // sanitize-html will remove malformed or unsafe URLs separately.
  }

  return {
    ...attribs,
    href,
    ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
}

/** Keep useful WordPress formatting while stripping executable or unsafe markup. */
export function sanitizeWordPressHtml(value: string): string {
  return sanitizeHtml(value, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "figure", "figcaption", "iframe", "table", "thead", "tbody", "tr", "th", "td"],
    allowedAttributes: {
      a: ["href", "name", "target", "rel", "title"],
      img: ["src", "srcset", "sizes", "alt", "title", "width", "height", "loading"],
      iframe: ["src", "title", "width", "height", "allow", "allowfullscreen", "loading"],
      "*": ["class", "id"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: { img: ["http", "https", "data"] },
    allowedIframeHostnames: ["www.youtube.com", "youtube.com", "player.vimeo.com"],
    transformTags: {
      a: (tagName, attribs) => ({ tagName, attribs: safeLinkAttributes(attribs) }),
    },
  });
}
