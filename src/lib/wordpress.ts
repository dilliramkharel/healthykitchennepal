export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "author"?: Array<{
      name: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
  date: string;
  slug: string;
  link: string;
}

const WP_API_URL = import.meta.env["VITE_WP_API_URL"] || "https://cms.healthykitchennepal.xyz/wp-json/wp/v2";

const legacyMediaHosts = /https?:\/\/(?:www\.)?(?:healthykitchennepal\.xyz|healthykitchennepal\.com)\/wp-content\//gi;
const legacySuperfoodPath = "/नेपालका-सुपरफुडहरू-जौ-र-क";
const encodedLegacySuperfoodPath = encodeURI(legacySuperfoodPath);
const superfoodGuidePath = "/guides/weight-loss-barley-millet";

function fixMediaUrls(post: WordPressPost): WordPressPost {
  const json = JSON.stringify(post);
  // The old WordPress domain is still present in some post bodies and image metadata.
  // Point every media request at the HTTPS CMS origin so crawlers do not encounter
  // HTTP links, redirects, or broken legacy image URLs.
  const fixed = json
    .replace(legacyMediaHosts, "https://cms.healthykitchennepal.xyz/wp-content/");
  return JSON.parse(fixed);
}

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const perPage = 100;
  const firstResponse = await fetch(`${WP_API_URL}/posts?per_page=${perPage}&page=1&_embed`);
  if (!firstResponse.ok) {
    throw new Error(`WordPress posts request failed with status ${firstResponse.status}`);
  }
  const firstPage: WordPressPost[] = await firstResponse.json();
  const totalPages = Number(firstResponse.headers.get("x-wp-totalpages") ?? "1");
  if (!Number.isFinite(totalPages) || totalPages <= 1) return firstPage.map(fixMediaUrls);

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      fetch(`${WP_API_URL}/posts?per_page=${perPage}&page=${index + 2}&_embed`).then(async (response) => {
        if (!response.ok) throw new Error(`WordPress posts page ${index + 2} failed with status ${response.status}`);
        return response.json() as Promise<WordPressPost[]>;
      }),
    ),
  );
  return [firstPage, ...remainingPages].flat().map(fixMediaUrls);
};

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  const response = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!response.ok) {
    throw new Error(`WordPress post request failed with status ${response.status}`);
  }
  const posts: WordPressPost[] = await response.json();
  const post = posts[0] ?? null;
  return post ? fixMediaUrls(post) : null;
};

