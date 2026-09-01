import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import detox from "@/assets/guide-detox.jpg";
import grains from "@/assets/guide-grains.jpg";
import mohi from "@/assets/guide-mohi.jpg";
import farm from "@/assets/guide-farm.jpg";

const guides = [
  {
    title: "The Ultimate Kitchen Detox Guide",
    excerpt:
      "Cleanse your body using what already sits in your Nepali kitchen — jimbu, turmeric, warm water and seasonal greens.",
    image: detox,
    tag: "Detox",
    read: "8 min read",
  },
  {
    title: "Weight Loss with Barley and Millet (जौ र कोदो)",
    excerpt:
      "Why these ancient hill grains keep you full longer, steady your blood sugar and quietly melt stubborn weight.",
    image: grains,
    tag: "Weight loss",
    read: "6 min read",
  },
  {
    title: "The Health Benefits of Traditional Mohi (Buttermilk)",
    excerpt:
      "A daily glass of freshly churned mohi cools the gut, aids digestion and delivers natural probiotics.",
    image: mohi,
    tag: "Nutrition",
    read: "5 min read",
  },
  {
    title: "Organic Farming: From Farm to Thali",
    excerpt:
      "Follow terraced Himalayan farms through compost, seed saving and harvest to the plate you eat from tonight.",
    image: farm,
    tag: "Organic farming",
    read: "10 min read",
  },
];

export function Guides() {
  return (
    <section id="guides" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Featured guides</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Traditional wisdom, explained for modern kitchens
          </h2>
          <p className="mt-4 text-muted-foreground">
            Practical, research-backed reads on the ingredients Nepali households have trusted for
            generations.
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
                  <a href="#newsletter">
                    Read More <ArrowRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
