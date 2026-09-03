import { useState } from 'react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { fetchPostBySlug } from '@/lib/wordpress';
import { format } from "date-fns";
import defaultFoodImage from "@/assets/hero-thali.jpg";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { absoluteUrl, seoDescription, seoTitle } from "@/lib/site";

function BlogDetailImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== defaultFoodImage) {
          setImgSrc(defaultFoodImage);
        }
      }}
      className="w-full max-h-[500px] object-cover"
    />
  );
}

export const Route = createFileRoute('/blog_/$slug')({
  loader: async ({ params: { slug }, context }) => {
    const post = context?.queryClient
      ? await context.queryClient.ensureQueryData({
        queryKey: ['wordpress-post', slug],
        queryFn: () => fetchPostBySlug(slug),
      })
      : await fetchPostBySlug(slug);

    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    const post = loaderData;
    const cleanTitle = post?.title?.rendered?.replace(/[\ufffc\ufffd]/g, "").trim() ?? "Healthy Kitchen Nepal";
    const description = seoDescription(post?.excerpt?.rendered ?? "Traditional Nepali wellness guidance from Healthy Kitchen Nepal.");
    const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return {
      meta: [
        { title: seoTitle(cleanTitle) },
        { name: "description", content: description },
        { property: "og:title", content: cleanTitle },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/blog/${params.slug}`) },
        ...(image ? [{ property: "og:image", content: image }, { property: "og:image:alt", content: cleanTitle }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/blog/${params.slug}`) }],
    };
  },
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const { slug } = Route.useParams();
  const loaderData = Route.useLoaderData();

  const { data: post, isLoading } = useQuery({
    queryKey: ['wordpress-post', slug],
    queryFn: () => fetchPostBySlug(slug),
    initialData: loaderData,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center px-5 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            The article you are looking for might have been moved or doesn't exist in our records.
          </p>
          <Button asChild>
            <Link to="/blog" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const cleanTitle = post.title.rendered.replace(/[\ufffc\ufffd]/g, '').trim();
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || defaultFoodImage;
  const authorName = post._embedded?.author?.[0]?.name || 'Healthy Kitchen Nepal';
  const categories = post._embedded?.['wp:term']?.[0] || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Post Header Hero */}
        <div className="bg-muted/40 border-b border-border/60 pt-36 pb-14 sm:pt-40 sm:pb-16">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to all articles
            </Link>

            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map((cat) => (
                  <span
                    key={cat.id}
                    className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 uppercase tracking-wider"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight"
              dangerouslySetInnerHTML={{ __html: cleanTitle }}
            />

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>{authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl px-5 lg:px-8 -mt-6 sm:-mt-8">
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl bg-card">
            <BlogDetailImage src={featuredImage} alt={cleanTitle} />
          </div>
        </div>

        {/* Post Content Body */}
        <article className="mx-auto max-w-3xl px-5 lg:px-8 py-12 md:py-16">
          <div
            className="prose prose-emerald prose-lg max-w-none text-foreground/90 
                       [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-base sm:[&>p]:text-lg
                       [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
                       [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                       [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                       [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic
                       [&>figure]:my-8 [&>figure>img]:rounded-xl [&>figure>img]:w-full"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <hr className="my-12 border-border/80" />

          {/* Bottom Back Button */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/blog" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </Button>
            <Button asChild>
              <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Top ↑
              </a>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
