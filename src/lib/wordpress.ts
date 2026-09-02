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

const WP_API_URL = import.meta.env["VITE_WP_API_URL"] || 'https://healthykitchennepal.xyz/wp-json/wp/v2';

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch(`${WP_API_URL}/posts?per_page=100&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts from WordPress');
  }
  return response.json();
};

export const fetchPostBySlug = async (slug: string): Promise<WordPressPost | null> => {
  const response = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch post from WordPress');
  }
  const posts: WordPressPost[] = await response.json();
  return posts[0] ?? null;

};

