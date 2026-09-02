import { ArrowRight, Sprout, HeartPulse, Apple } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-thali.jpg";

const stats = [
  { icon: Sprout, label: "Organic farming guides" },
  { icon: HeartPulse, label: "Natural weight loss" },
  { icon: Apple, label: "Himalayan superfoods" },
];

export function Hero() {
  return (
    <section id="top" className="relative mt-[72px] min-h-[calc(88vh-72px)] lg:h-[calc(90vh-72px)] lg:max-h-[740px] flex items-center bg-background py-10 lg:py-0 overflow-hidden">
      {/* Subtle warm background glow */}
      <div className="absolute top-1/4 left-1/4 -z-10 size-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 -z-10 size-96 rounded-full bg-secondary/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Clear, High-Contrast Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-secondary/30 bg-secondary/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-secondary uppercase">
              <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
              Organic wellness hub · Kathmandu
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]">
              Discover the Healing Power of Traditional Nepali Kitchens.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Your ultimate guide to organic farming, kitchen detoxes, and natural weight loss rooted in ancestral Himalayan wisdom.
            </p>

            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button variant="default" size="lg" asChild>
                <a href="#detox" className="gap-2 shadow-soft hover:bg-primary/95">
                  Explore Kitchen Detox Guide <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">Explore Wellness Blog</Link>
              </Button>
            </div>

            {/* Highlight Pills */}
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/85 shadow-xs transition-transform hover:-translate-y-0.5"
                >
                  <s.icon className="size-4 text-primary" />
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 100% Uncropped Full Photography */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md lg:max-w-none">
              {/* Decorative subtle backdrop halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-lift">
                <img
                  src={heroImage}
                  alt="Traditional Nepali thali with organic grains, buttermilk and Himalayan apples"
                  width={1600}
                  height={1104}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating pill badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl border border-white/20 bg-black/55 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md flex items-center justify-between shadow-soft">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    Traditional Himalayan Thali
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-white/75 font-semibold">
                    100% Organic
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
