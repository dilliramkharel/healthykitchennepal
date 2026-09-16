import { createFileRoute } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WordPressPosts } from "@/components/WordPressPosts";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/detox")({
  head: () => ({
    meta: [
      { title: "Kitchen Detox & Wellness | Healthy Kitchen Nepal" },
      { name: "description", content: "Read balanced, practical articles about everyday digestion, hydration and traditional kitchen wellness." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/detox") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/detox") }],
  }),
  component: DetoxPage,
});

function DetoxPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        <section className="border-b border-border/60 bg-cream py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"><Droplets className="size-3.5" /> Everyday wellness</span>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">Gentle kitchen detox</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Simple routines, satisfying foods and mindful habits—not quick fixes or restrictive diets.</p>
          </div>
        </section>
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8"><p className="eyebrow">Wellness stories</p><h2 className="mt-2 text-3xl font-bold">Digestion, balance and healthy habits</h2></div><WordPressPosts topic="detox" /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
