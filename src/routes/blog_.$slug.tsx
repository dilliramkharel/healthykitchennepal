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
import { absoluteUrl, plainText, seoDescription, seoTitle } from "@/lib/site";
import { sanitizeWordPressHtml } from "@/lib/sanitize";
import { buildTableOfContents } from "@/lib/table-of-contents";

function BlogDetailImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      decoding="async"
      onError={() => {
        if (imgSrc !== defaultFoodImage) {
          setImgSrc(defaultFoodImage);
        }
      }}
      className="w-full max-h-[500px] object-cover"
    />
  );
}

function imageKey(value: string): string {
  const filename = (value.split("?")[0] ?? "").split("/").pop()?.toLowerCase() ?? "";
  return filename
    .replace(/-\d+x\d+(?=\.[a-z0-9]+$)/, "")
    .replace(/-scaled(?=\.[a-z0-9]+$)/, "");
}

function firstContentImage(content: string): string | undefined {
  return sanitizeWordPressHtml(content).match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i)?.[1];
}

function removeDuplicateFeaturedImage(content: string, featuredImage?: string): string {
  const safeContent = sanitizeWordPressHtml(content);
  if (!featuredImage) return safeContent;

  const firstImage = safeContent.match(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/i);
  if (!firstImage || imageKey(firstImage[1] ?? "") !== imageKey(featuredImage)) return safeContent;

  // The page already displays the featured image above the article. Remove only the first
  // body image if it is the same photo (WordPress may serve a resized variant).
  // Remove the exact image we compared above. Chaining separate replacements for
  // figure, paragraph, and img can accidentally delete subsequent article images.
  return safeContent.replace(firstImage[0], "");
}

export const Route = createFileRoute('/blog_/$slug')({
  loader: async ({ params: { slug }, context }) => {
    try {
      const post = context?.queryClient
        ? await context.queryClient.ensureQueryData({
          queryKey: ['wordpress-post', slug],
          queryFn: () => fetchPostBySlug(slug),
        })
        : await fetchPostBySlug(slug);
      if (!post) throw notFound();
      return post;
    } catch (error) {
      // A temporary CMS outage must not turn a public article URL into a server error.
      if (error && typeof error === "object" && "routerCode" in error) throw error;
      return null;
    }
  },
  head: ({ loaderData, params }) => {
    const post = loaderData;
    const cleanTitle = plainText(post?.title?.rendered?.replace(/[\ufffc\ufffd]/g, "") ?? "Healthy Kitchen Nepal");
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
        { name: "twitter:title", content: cleanTitle },
        { name: "twitter:description", content: description },
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
    initialData: loaderData ?? undefined,
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

  const cleanTitle = plainText(post.title.rendered.replace(/[\ufffc\ufffd]/g, ""));
  // A few older WordPress posts have no featured-media record. Use their first genuine
  // article image instead of showing an unrelated fallback food photo.
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || firstContentImage(post.content.rendered) || defaultFoodImage;
  const authorName = post._embedded?.author?.[0]?.name || 'Healthy Kitchen Nepal';
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const articleContent = removeDuplicateFeaturedImage(post.content.rendered, featuredImage === defaultFoodImage ? undefined : featuredImage);
  const { html: articleHtml, entries: contents } = buildTableOfContents(articleContent);

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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {cleanTitle}
            </h1>

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
          {contents.length > 0 && (
            <nav aria-label="Table of contents" className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
              <details key={slug} open>
                <summary className="cursor-pointer text-lg font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  Table of contents
                </summary>
                <ul className="mt-4 space-y-2 text-sm sm:text-base">
                  {contents.map((entry, index) => (
                    <li key={`${entry.id}-${index}`} className={entry.level === 3 ? "ml-5" : undefined}>
                      <a href={`#${encodeURIComponent(entry.id)}`} className="block rounded py-1 text-foreground/80 underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary">
                        {entry.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </nav>
          )}
          <div
            className="prose prose-emerald prose-lg max-w-none text-foreground/90 
                       [&_h2]:scroll-mt-32 [&_h3]:scroll-mt-32
                       [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-base sm:[&>p]:text-lg
                       [&>h2]:text-2xl sm:[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
                       [&>h3]:text-xl sm:[&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                       [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                       [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic
                       [&>figure]:my-8 [&>figure>img]:rounded-xl [&>figure>img]:w-full
                       [&_img]:my-7 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl
                       [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-3 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:p-3
                       [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:decoration-blue-400 [&_a]:underline-offset-4 [&_a:hover]:text-blue-900"
            dangerouslySetInnerHTML={{ __html: articleHtml }}
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
