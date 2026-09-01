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
  };
  date: string;
  slug: string;
  link: string;
}

const WP_API_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost/wordpress/wp-json/wp/v2';

export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch(`${WP_API_URL}/posts?_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts from WordPress');
  }
  return response.json();
};
