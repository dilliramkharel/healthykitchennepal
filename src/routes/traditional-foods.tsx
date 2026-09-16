import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Superfoods } from "@/components/site/Superfoods";
import { WordPressPosts } from "@/components/WordPressPosts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/traditional-foods")({
  head: () => ({
    meta: [
      { title: "Traditional Nepali Foods | Healthy Kitchen Nepal" },
      { name: "description", content: "Explore familiar Nepali grains, fermented foods and Himalayan herbs for everyday balanced meals." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/traditional-foods") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/traditional-foods") }],
  }),
  component: TraditionalFoodsPage,
});

function TraditionalFoodsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <section className="border-b border-border/60 bg-cream py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"><Leaf className="size-3.5" /> From our hills</span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">Traditional foods for everyday meals</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Discover the grains, cultured foods and herbs that give Nepali home cooking its distinctive seasonal character.</p>
          </div>
        </section>
        <Superfoods />
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8"><p className="eyebrow">Food stories</p><h2 className="mt-2 text-3xl font-bold">Recipes and traditional ingredients</h2></div><WordPressPosts topic="traditional-foods" /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
