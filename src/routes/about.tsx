import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl } from "@/lib/site";
import { Sprout, Heart, BookOpen, Users, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Healthy Kitchen Nepal" },
      {
        name: "description",
        content:
          "Learn about Healthy Kitchen Nepal's mission to revive traditional Himalayan food wisdom, promote organic farming, and inspire natural kitchen wellness.",
      },
      { property: "og:title", content: "About Us | Healthy Kitchen Nepal" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pillars = [
    {
      icon: Sprout,
      title: "Ancestral Nutrition",
      description:
        "We believe the healthiest solutions already exist in traditional Nepali homes: finger millet (kodo), barley (jau), fermented greens, and living probiotics.",
    },
    {
      icon: Compass,
      title: "Organic Farm-to-Thali",
      description:
        "Advocating for pesticide-free soil health, heritage seeds, and empowering local Himalayan farmers through community organic farming guides.",
    },
    {
      icon: Heart,
      title: "Holistic Wellbeing",
      description:
        "True health is not about crash diets or imported superfood powders; it is about seasonal rhythm, balanced digestion, and wholesome nourishment.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Wisdom",
      description:
        "Connecting ancestral Ayurvedic kitchen practices with modern nutritional science so you can make informed decisions for your family.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[72px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-cream border-b border-border/60 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              <Users className="size-3.5" />
              Our Story & Philosophy
            </div>
            <h1 className="mt-5 text-4xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-5xl lg:text-6xl tracking-tight">
              Reviving the Healing Traditions of the Nepali Kitchen
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Healthy Kitchen Nepal was founded in Kathmandu to celebrate our rich culinary heritage and help families reclaim vibrant vitality through the wholesome foods of our ancestors.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-12 text-foreground/85 leading-relaxed text-base">
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-3xl mb-4">
                Why We Started
              </h2>
              <p className="mb-4">
                In recent decades, urban lifestyle changes have separated many households from the time-tested nutritional wisdom of the Nepali kitchen. Ultra-processed foods, refined oils, and artificial sweeteners have replaced nutrient-dense staples like <em>Kodo</em> (millet), <em>Jau</em> (barley), fresh <em>Mohi</em> (buttermilk), and seasonal wild greens.
              </p>
              <p>
                At <strong>Healthy Kitchen Nepal</strong>, our mission is simple: to make traditional, organic, and unrefined eating practical, accessible, and delicious for every modern kitchen. We document the biological benefits of indigenous foods, share kitchen detox protocols, and celebrate the smallholder farmers across the hills of Nepal who sustain our soil.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-3xl mb-6">
                What We Stand For
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-3xl mb-4">
                Our Editorial Standards
              </h2>
              <p className="mb-4 text-sm leading-relaxed">
                Trust and accuracy are at the heart of our platform. Every article and guide published on Healthy Kitchen Nepal undergoes careful review:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Authentic Sourcing:</strong> We consult traditional practitioners, local organic farmers, and verified nutritional databases.
                </li>
                <li>
                  <strong>No Misleading Cures:</strong> We reject sensationalist health claims. We advocate steady, sustainable lifestyle habits rather than overnight "miracle cures."
                </li>
                <li>
                  <strong>Transparency:</strong> Our guides are ad-supported to remain freely accessible to everyone across Nepal and the worldwide Nepali diaspora.
                </li>
              </ul>
            </div>

            {/* Call to action */}
            <div className="rounded-3xl border border-border/80 bg-cream p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-foreground">
                  Explore our Wellness Guides
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Read our latest articles on detox, grains, and traditional farming.
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 transition-colors shrink-0"
              >
                Read Wellness Blog <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
