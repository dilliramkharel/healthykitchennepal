import { createFileRoute, Link } from '@tanstack/react-router'
import { WordPressPosts } from '@/components/WordPressPosts'
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { fetchPosts } from '@/lib/wordpress'
import { absoluteUrl } from "@/lib/site"

export const Route = createFileRoute('/blog')({
  loader: async ({ context: { queryClient } }) => {
    try {
      return await queryClient.ensureQueryData({
        queryKey: ['wordpress-posts'],
        queryFn: fetchPosts,
      });
    } catch {
      // Keep the page shell available if the remote WordPress API is temporarily unavailable.
      return [];
    }
  },
  head: () => ({
    meta: [
      { title: "Latest Articles | Healthy Kitchen Nepal" },
      { name: "description", content: "See the newest healthy eating, kitchen detox and traditional Nepali food articles, then explore each topic in depth." },
      { property: "og:title", content: "Latest Articles | Healthy Kitchen Nepal" },
      { property: "og:description", content: "See the newest healthy eating, kitchen detox and traditional Nepali food articles, then explore each topic in depth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/blog") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/blog") }],
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Latest-articles hub: topic pages contain the full themed collections. */}
        <section className="relative isolate overflow-hidden bg-foreground">
          <div className="absolute inset-0 -z-10 bg-emerald-950/90" />
          <div className="mx-auto flex max-w-7xl flex-col px-5 pt-36 pb-20 lg:px-8 lg:pt-44">
            <div className="max-w-3xl">
              <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
                Latest Articles
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
                New articles from our kitchen. Explore Guides, Detox and Traditional Foods for the complete topic collections.
              </p>
            </div>
          </div>
        </section>

        {/* Latest six posts only; themed pages hold the wider collections. */}
        <section className="py-16 md:py-24">
          <div className="mx-auto px-5 lg:px-8 max-w-7xl">
            <WordPressPosts limit={6} />
            <div className="mt-14 grid gap-4 border-t border-border/70 pt-10 sm:grid-cols-3">
              <Link to="/guides" className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"><span className="text-xs font-semibold uppercase tracking-wider text-secondary">Explore topic</span><h2 className="mt-2 text-xl font-bold">Guides</h2><p className="mt-1 text-sm text-muted-foreground">Practical kitchen and wellness guidance.</p></Link>
              <Link to="/detox" className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"><span className="text-xs font-semibold uppercase tracking-wider text-secondary">Explore topic</span><h2 className="mt-2 text-xl font-bold">Detox</h2><p className="mt-1 text-sm text-muted-foreground">Gentle habits for digestion and balance.</p></Link>
              <Link to="/traditional-foods" className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary-soft/40"><span className="text-xs font-semibold uppercase tracking-wider text-secondary">Explore topic</span><h2 className="mt-2 text-xl font-bold">Traditional Foods</h2><p className="mt-1 text-sm text-muted-foreground">Foods, recipes and ingredients from home.</p></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
