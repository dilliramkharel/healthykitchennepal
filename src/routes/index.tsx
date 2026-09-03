import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Guides } from "@/components/site/Guides";
import { Superfoods } from "@/components/site/Superfoods";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Healthy Kitchen Nepal | Organic Wellness & Kitchen Detox" },
      {
        name: "description",
        content:
          "Traditional Nepali kitchen wisdom: detox guides, natural weight loss with barley & millet, buttermilk benefits and organic farming.",
      },
      { property: "og:title", content: "Healthy Kitchen Nepal | Organic Wellness & Kitchen Detox" },
      {
        property: "og:description",
        content:
          "Guides on kitchen detoxes, natural weight loss and organic farming rooted in traditional Nepali diets.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Guides />
        <Superfoods />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
