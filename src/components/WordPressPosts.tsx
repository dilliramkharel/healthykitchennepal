import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/wordpress';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import defaultFoodImage from "@/assets/hero-thali.jpg";
import { sanitizeWordPressHtml } from "@/lib/sanitize";
import { plainText } from "@/lib/site";

function BlogCardImage({ src, alt }: { src?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || defaultFoodImage);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (imgSrc !== defaultFoodImage) {
          setImgSrc(defaultFoodImage);
        }
      }}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  );
}

export function WordPressPosts() {
  const { data: posts, error, isLoading } = useQuery({
    queryKey: ['wordpress-posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="overflow-hidden rounded-2xl border border-border/60 bg-card p-5">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="mt-5 h-4 w-24" />
            <Skeleton className="mt-3 h-7 w-full" />
            <Skeleton className="mt-2 h-4 w-4/5" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-500 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-lg font-semibold mb-2">Error Loading Posts</h3>
        <p>We could not load articles right now. Please try again shortly.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center p-12 text-muted-foreground bg-muted/30 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-2">No posts found</h3>
        <p>Check back later for updates!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || defaultFoodImage;
        const cleanTitle = plainText(post.title.rendered.replace(/[\ufffc\ufffd]/g, ""));

        return (
          <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50">
            <Link to="/blog/$slug" params={{ slug: post.slug }} className="block w-full h-48 overflow-hidden bg-muted">
              <BlogCardImage src={featuredImage} alt={cleanTitle} />
            </Link>
            <CardHeader>
              <div className="text-xs text-muted-foreground mb-2 font-medium">
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <CardTitle className="line-clamp-2 text-xl leading-tight">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary transition-colors">
                  {cleanTitle}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-muted-foreground/80">
              <div 
                className="line-clamp-3 text-sm leading-relaxed [&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: sanitizeWordPressHtml(post.excerpt.rendered) }}
              />
            </CardContent>
            <CardFooter>
              <Link 
                to="/blog/$slug" 
                params={{ slug: post.slug }}
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/link"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover/link:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
