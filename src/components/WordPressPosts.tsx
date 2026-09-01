import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/wordpress';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

export function WordPressPosts() {
  const { data: posts, error } = useSuspenseQuery({
    queryKey: ['wordpress-posts'],
    queryFn: fetchPosts,
  });

  // Skeleton loading is handled via Suspense in SSR

  if (error) {
    return (
      <div className="text-center p-8 text-red-500 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-lg font-semibold mb-2">Error Loading Posts</h3>
        <p>Could not connect to the WordPress backend. Ensure it is running at <strong>http://localhost/wordpress</strong> and has REST API enabled.</p>
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
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        
        return (
          <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 group border-border/50">
            {featuredImage && (
              <div className="w-full h-48 overflow-hidden bg-muted">
                <img 
                  src={featuredImage} 
                  alt={post.title.rendered} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <div className="text-xs text-muted-foreground mb-2 font-medium">
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <CardTitle className="line-clamp-2 text-xl leading-tight">
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-muted-foreground/80">
              <div 
                className="line-clamp-3 text-sm leading-relaxed [&>p]:mb-0"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
              />
            </CardContent>
            <CardFooter>
              <a 
                href={`#`} 
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
