import { SITE_URL } from "@/lib/site";
import { fetchPosts } from "@/lib/wordpress";

const staticPages = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/disclaimer",
  "/health-calculator",
  "/privacy-policy",
  "/terms",
];
const guideSlugs = [
  "kitchen-detox-guide",
  "weight-loss-barley-millet",
  "traditional-mohi-benefits",
  "organic-farming-farm-to-thali",
];

function xmlEscape(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] ?? character);
}

function sitemapSlug(slug: string): string {
  // WordPress may return a Unicode slug or an already percent-encoded one.
  // Decode once before encoding so sitemap URLs are always canonical, never %25-encoded.
  try {
    return encodeURIComponent(decodeURIComponent(slug));
  } catch {
    return encodeURIComponent(slug);
  }
}

export async function createSitemapResponse(): Promise<Response> {
  let posts: Awaited<ReturnType<typeof fetchPosts>> = [];
  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error("Could not include WordPress posts in sitemap:", error);
  }
  const urls = [
    ...staticPages.map((path) => ({ loc: `${SITE_URL}${path}`, lastmod: undefined })),
    ...guideSlugs.map((slug) => ({ loc: `${SITE_URL}/guides/${slug}`, lastmod: undefined })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${sitemapSlug(post.slug)}`,
      lastmod: post.date,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(({ loc, lastmod }) => `  <url><loc>${xmlEscape(loc)}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>` : ""}</url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
