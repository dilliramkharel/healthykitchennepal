import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import detox from "@/assets/guide-detox.jpg";
import grains from "@/assets/guide-grains.jpg";
import mohi from "@/assets/guide-mohi.jpg";
import farm from "@/assets/guide-farm.jpg";

export const guides = [
  {
    slug: "kitchen-detox-guide",
    title: "Simple Wisdom from the Village Kitchen",
    excerpt:
      "Everyday ways to use jimbu, turmeric, warm water and seasonal greens in a familiar Nepali kitchen.",
    image: detox,
    tag: "Kitchen wisdom",
    read: "8 min read",
  },
  {
    slug: "weight-loss-barley-millet",
    title: "Barley and Millet from Our Hills",
    excerpt:
      "A practical introduction to using traditional hill grains in satisfying everyday meals.",
    image: grains,
    tag: "Traditional grains",
    read: "6 min read",
  },
  {
    slug: "traditional-mohi-benefits",
    title: "Traditional Mohi for Everyday Meals",
    excerpt:
      "A familiar guide to freshly churned mohi, roasted cumin and simple Nepali lunch traditions.",
    image: mohi,
    tag: "Everyday food",
    read: "5 min read",
  },
  {
    slug: "organic-farming-farm-to-thali",
    title: "From Our Farm to the Village Kitchen",
    excerpt:
      "Stories of compost, seed saving, harvest and the path from local farms to the family table.",
    image: farm,
    tag: "Farm to kitchen",
    read: "10 min read",
  },
];

export function Guides() {
  return (
    <section id="guides" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">From the village kitchen</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Familiar food, seasonal ingredients and village wisdom
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple stories and practical ideas from the foods Nepali households have cooked for generations.
          </p>
        </div>

        <div id="detox" className="mt-12 grid scroll-mt-28 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => (
            <article
              key={g.title}
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="relative overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  {g.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {g.read}
                </p>
                <h3 className="mt-2 text-lg leading-snug font-semibold">{g.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {g.excerpt}
                </p>
                <Button variant="soft" size="sm" className="mt-5 self-start" asChild>
                  <Link to="/guides/$slug" params={{ slug: g.slug }}>
                    Read More <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
