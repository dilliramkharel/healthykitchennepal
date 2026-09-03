import { createAPIFileRoute } from "@tanstack/react-start/api";

import { guides } from "@/components/site/Guides";
import { SITE_URL } from "@/lib/site";
import { fetchPosts } from "@/lib/wordpress";

const staticPages = ["", "/about", "/blog", "/contact", "/disclaimer", "/privacy-policy", "/terms"];

function xmlEscape(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[character] ?? character);
}

export const APIRoute = createAPIFileRoute("/api/sitemap")({
  GET: async () => {
    const posts = await fetchPosts();
    const urls = [
      ...staticPages.map((path) => ({ loc: `${SITE_URL}${path}`, lastmod: undefined })),
      ...guides.map((guide) => ({ loc: `${SITE_URL}/guides/${guide.slug}`, lastmod: undefined })),
      ...posts.map((post) => ({
        loc: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
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
  },
});
