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

function fixMediaUrls(post: WordPressPost): WordPressPost {
  const json = JSON.stringify(post);
  // The old WordPress domain is still present in some post bodies and image metadata.
  // Point every media request at the HTTPS CMS origin so crawlers do not encounter
  // HTTP links, redirects, or broken legacy image URLs.
  const fixed = json.replace(legacyMediaHosts, "https://cms.healthykitchennepal.xyz/wp-content/");
  return JSON.parse(fixed);
}

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?per_page=100&_embed`);
    if (!response.ok) {
      return [];
    }
    const posts: WordPressPost[] = await response.json();
    return posts.map(fixMediaUrls);
  } catch (err) {
    console.error('Error fetching posts:', err);
    return [];
  }
};

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
    if (!response.ok) {
      return null;
    }
    const posts: WordPressPost[] = await response.json();
    const post = posts[0] ?? null;
    return post ? fixMediaUrls(post) : null;
  } catch (err) {
    console.error('Error fetching post by slug:', err);
    return null;
  }
};

