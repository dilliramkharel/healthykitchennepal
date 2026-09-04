import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NutritionHealthCalculator } from "@/components/calculator/NutritionHealthCalculator";
import { CalculatorExplanations } from "@/components/calculator/CalculatorExplanations";
import { Leaf, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/health-calculator")({
  head: () => ({
    meta: [
      {
        title: "पोषण र स्वास्थ्य क्यालकुलेटर - Healthy Kitchen Nepal",
      },
      {
        name: "description",
        content:
          "तपाईंको दैनिक क्यालोरी, पानीको आवश्यकता र BMI थाहा पाउनुहोस्। Estimate your daily water and calorie needs with Healthy Kitchen Nepal's Nutrition & Health Calculator.",
      },
      {
        property: "og:title",
        content: "पोषण र स्वास्थ्य क्यालकुलेटर - Healthy Kitchen Nepal",
      },
      {
        property: "og:description",
        content:
          "दैनिक क्यालोरी र पानीको मात्रा थाहा पाउनुहोस्। वैज्ञानिक सूत्रमा आधारित नेपाली पोषण तथा स्वास्थ्य क्यालकुलेटर।",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),
  component: HealthCalculatorPage,
});

function HealthCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Breadcrumb & Hero Header */}
        <div className="mx-auto max-w-4xl px-4 text-center">
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Leaf className="size-3 text-primary" /> गृहपृष्ठ (Home)
            </Link>
            <ChevronRight className="size-3 text-muted-foreground/50" />
            <span className="text-foreground font-medium">स्वास्थ्य क्यालकुलेटर</span>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            पोषण र स्वास्थ्य क्यालकुलेटर
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            आफ्नो उमेर, तौल र सक्रियता अनुसार शरीरलाई आवश्यक पर्ने दैनिक पानीको मात्रा, क्यालोरी र
            स्वस्थ BMI तुरुन्त हिसाब गर्नुहोस्।
          </p>
        </div>

        {/* Calculator Component */}
        <NutritionHealthCalculator />

        {/* Explanations & Medical Advice */}
        <CalculatorExplanations />
      </main>

      <Footer />
    </div>
  );
}
