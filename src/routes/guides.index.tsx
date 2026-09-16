import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Sprout } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Guides } from "@/components/site/Guides";
import { WordPressPosts } from "@/components/WordPressPosts";

export const Route = createFileRoute("/guides/")({ component: GuidesIndexPage });

function GuidesIndexPage() {
  return <div className="flex min-h-screen flex-col bg-background"><Navbar /><main className="flex-1 pt-[72px]">
    <section className="border-b border-border/60 bg-cream py-14 lg:py-20"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary"><BookOpen className="size-3.5" /> Browse by topic</span><h1 className="mt-5 text-4xl font-bold sm:text-5xl">Wellness guides from the Nepali kitchen</h1><p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Choose a guide and read it at your own pace—from familiar grains and cultured foods to mindful farming.</p></div></section>
    <Guides />
    <section className="border-t border-border/60 py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8"><p className="eyebrow">More to read</p><h2 className="mt-2 text-3xl font-bold">Latest wellness guides</h2></div><WordPressPosts topic="guides" /></div></section>
    <section className="border-t border-border/60 bg-primary-soft/30 py-12"><div className="mx-auto flex max-w-4xl items-start gap-4 px-5 lg:px-8"><Sprout className="mt-1 size-6 shrink-0 text-primary" /><p className="text-sm leading-relaxed text-muted-foreground">Our articles share food education, not medical treatment. For a personal health concern, please speak with a qualified professional.</p></div></section>
  </main><Footer /></div>;
}
