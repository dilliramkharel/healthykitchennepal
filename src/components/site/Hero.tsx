import { ArrowRight, Sprout, HeartPulse, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-thali.jpg";

const stats = [
  { icon: Sprout, label: "Organic farming guides" },
  { icon: HeartPulse, label: "Natural weight loss" },
  { icon: Apple, label: "Himalayan superfoods" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Traditional Nepali thali with organic grains, buttermilk and Himalayan apples"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="hero-gradient absolute inset-0 -z-10 opacity-25" />
      <div className="absolute inset-0 -z-10 bg-foreground/35" />




      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-36 pb-24 lg:px-8 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-secondary-foreground/90">
            Organic wellness hub · Kathmandu
          </p>
          <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
            Discover the Healing Power of Traditional Nepali Kitchens.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Your ultimate guide to organic farming, kitchen detoxes, and natural weight loss.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#detox">
                Explore the Kitchen Detox Guide <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#community">Join the Community</a>
            </Button>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm"
            >
              <s.icon className="size-4" />
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
