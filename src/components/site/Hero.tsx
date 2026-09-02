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
    <section id="top" className="relative isolate mt-[72px] min-h-[560px] lg:h-[82vh] lg:max-h-[700px] flex items-center overflow-hidden">
      {/* Background Image: Full-width banner, crystal clear without blur */}
      <img
        src={heroImage}
        alt="Traditional Nepali thali with organic grains, buttermilk and Himalayan apples"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
      />

      {/* Clean high-contrast scrim strictly on left for text legibility, keeping food crisp and unblurred on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-black/15" />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-7 px-5 py-12 sm:py-16 lg:px-8 lg:py-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-black/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-secondary uppercase backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
            Organic wellness hub · Kathmandu
          </div>

          <h1 className="mt-4 text-3xl leading-[1.12] font-bold text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight drop-shadow-md">
            Discover the Healing Power of Traditional Nepali Kitchens.
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-sm">
            Your ultimate guide to organic farming, kitchen detoxes, and natural weight loss rooted in ancestral Himalayan wisdom.
          </p>

          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#detox" className="gap-2">
                Explore the Kitchen Detox Guide <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/blog">Explore Wellness Blog</Link>
            </Button>
          </div>
        </div>

        {/* Highlight Pills */}
        <ul className="flex flex-wrap gap-2.5 pt-1">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md shadow-sm transition-transform hover:scale-105"
            >
              <s.icon className="size-4 text-secondary" />
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
