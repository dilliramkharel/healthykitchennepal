import { CalendarDays, CookingPot, Sprout } from "lucide-react";

const highlights = [
  {
    icon: CalendarDays,
    title: "Seasonal ingredients",
    text: "Recipes inspired by the vegetables, grains and fruit that are naturally available through the year.",
  },
  {
    icon: CookingPot,
    title: "Traditional cooking",
    text: "Simple home methods, familiar flavours and practical recipes for everyday Nepali meals.",
  },
  {
    icon: Sprout,
    title: "From farm to kitchen",
    text: "A celebration of local growers, home gardens and the food stories behind every plate.",
  },
];

export function VillageHighlights() {
  return (
    <section className="border-b border-border/60 bg-card py-14 lg:py-18">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Healthy Kitchen Nepal</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Food that feels like home</h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Not a restaurant menu. A welcoming place for village kitchen stories, local ingredients and everyday food wisdom.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-border/70 bg-background p-5 shadow-soft">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
