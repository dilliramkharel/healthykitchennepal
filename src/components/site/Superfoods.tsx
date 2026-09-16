import { Sprout, Sparkles, Wheat, Droplets, ShieldCheck, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import kodoImage from "@/assets/superfood-kodo.jpg";
import mohiImage from "@/assets/superfood-mohi.jpg";
import jimbuTimurImage from "@/assets/superfood-jimbu-timur.jpg";
import gundrukSinkiImage from "@/assets/superfood-gundruk-sinki.jpg";
import jauImage from "@/assets/superfood-jau.jpg";
import gheeImage from "@/assets/superfood-ghee.jpg";

const superfoods = [
  {
    icon: Wheat,
    image: kodoImage,
    name: "Kodo (Finger Millet)",
    nepali: "कोदो",
    badge: "Metabolic Balance",
    badgeColor: "text-amber-700 bg-amber-100/80 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-700/50",
    benefits: "A fibre-rich whole grain with calcium and complex carbohydrates that can be part of balanced meals.",
    use: "Traditional Kodo ko roti and dhiro for sustained energy without afternoon lethargy.",
  },
  {
    icon: Droplets,
    image: mohiImage,
    name: "Mohi (Cultured Buttermilk)",
    nepali: "मोही",
    badge: "Gut Probiotic",
    badgeColor: "text-emerald-700 bg-emerald-100/80 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700/50",
    benefits: "A refreshing cultured dairy drink that can provide protein, calcium and live cultures when freshly prepared.",
    use: "Freshly churned with roasted cumin (jeera) and Himalayan rock salt after lunchtime dal bhat.",
  },
  {
    icon: Sparkles,
    image: jimbuTimurImage,
    name: "Jimbu & Timur",
    nepali: "जिम्बु र टिमुर",
    badge: "Himalayan Herbs",
    badgeColor: "text-rose-700 bg-rose-100/80 border-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:border-rose-700/50",
    benefits: "Aromatic Himalayan herbs used to add flavour and warmth to traditional meals.",
    use: "Tempered hot in cold-pressed mustard oil over black lentils or spiced in roasted tomato choila.",
  },
  {
    icon: Sprout,
    image: gundrukSinkiImage,
    name: "Gundruk & Sinki",
    nepali: "गुन्द्रुक र सिन्की",
    badge: "Fermented Greens",
    badgeColor: "text-lime-700 bg-lime-100/80 border-lime-200 dark:bg-lime-900/40 dark:text-lime-300 dark:border-lime-700/50",
    benefits: "Traditional fermented greens that add distinctive flavour and nutrients to a varied diet.",
    use: "Simmered into a warming winter broth with roasted soybeans, garlic, and wild herbs.",
  },
  {
    icon: HeartPulse,
    image: jauImage,
    name: "Jau (Highland Barley)",
    nepali: "जौ",
    badge: "Heart & Detox",
    badgeColor: "text-indigo-700 bg-indigo-100/80 border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-700/50",
    benefits: "A whole grain containing beta-glucan fibre that can support satisfying, balanced meals.",
    use: "Slow-roasted Sattu porridge dissolved into water or buttermilk as a nutrient-dense breakfast.",
  },
  {
    icon: ShieldCheck,
    image: gheeImage,
    name: "Pure A2 Cow Ghee",
    nepali: "घ्यू",
    badge: "Healing Fats",
    badgeColor: "text-yellow-700 bg-yellow-100/80 border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-300 dark:border-yellow-700/50",
    benefits: "A traditional cooking fat best enjoyed in modest amounts as part of an overall balanced diet.",
    use: "A single teaspoon warmed over brown rice to enhance nutrient assimilation and lubricate joints.",
  },
];

export function Superfoods() {
  return (
    <section id="superfoods" className="leaf-gradient scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
          <p className="eyebrow">Seasonal food from our hills</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl font-[family-name:var(--font-display)] tracking-tight">
              Traditional foods for the everyday Nepali kitchen
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Familiar grains, fermented foods and herbs that bring seasonal flavour and variety to everyday meals.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 self-start md:self-end text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            See latest food stories
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {superfoods.map((food) => {
            const Icon = food.icon;
            return (
              <div
                key={food.name}
                className="card-hover relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${food.badgeColor}`}>
                      {food.badge}
                    </span>
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-foreground">
                      {food.name}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      ({food.nepali})
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    {food.benefits}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-secondary uppercase tracking-wider text-[0.65rem] block mb-1">
                      Traditional Culinary Use:
                    </span>
                    {food.use}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
