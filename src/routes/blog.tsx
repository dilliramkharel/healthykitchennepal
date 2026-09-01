import { createFileRoute } from '@tanstack/react-router'
import { WordPressPosts } from '@/components/WordPressPosts'
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { fetchPosts } from '@/lib/wordpress'

export const Route = createFileRoute('/blog')({
  loader: async ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData({
      queryKey: ['wordpress-posts'],
      queryFn: fetchPosts,
    })
  },
  head: () => ({
    meta: [
      { title: "Wellness Blog | Healthy Kitchen Nepal" },
      { name: "description", content: "Discover the latest insights on healthy eating, natural detox, and traditional Nepali wellness straight from our experts." },
      { property: "og:title", content: "Wellness Blog | Healthy Kitchen Nepal" },
      { property: "og:description", content: "Discover the latest insights on healthy eating, natural detox, and traditional Nepali wellness straight from our experts." }
    ]
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Dark Hero Header for the Blog Page */}
        <section className="relative isolate overflow-hidden bg-foreground">
          <div className="absolute inset-0 -z-10 bg-emerald-950/90" />
          <div className="mx-auto flex max-w-7xl flex-col px-5 pt-36 pb-20 lg:px-8 lg:pt-44">
            <div className="max-w-3xl">
              <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
                Wellness Blog
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
                Discover the latest insights on healthy eating, natural detox, and traditional Nepali wellness straight from our experts.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto px-5 lg:px-8 max-w-7xl">
            <WordPressPosts />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
