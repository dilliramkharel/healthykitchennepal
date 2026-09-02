import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AlertTriangle, HeartPulse, ShieldAlert, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Health & Nutrition Disclaimer | Healthy Kitchen Nepal" },
      {
        name: "description",
        content:
          "Important health, nutritional, and medical disclaimer for Healthy Kitchen Nepal. Our traditional wellness guides are for educational purposes only.",
      },
      { property: "og:title", content: "Health & Nutrition Disclaimer | Healthy Kitchen Nepal" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[72px]">
        {/* Header Banner */}
        <section className="bg-cream border-b border-border/60 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
              <AlertTriangle className="size-3.5" />
              Medical & Health Notice
            </div>
            <h1 className="mt-4 text-3xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-4xl lg:text-5xl">
              Health & Nutrition Disclaimer
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-9 text-foreground/85 leading-relaxed text-base">
            
            {/* Prominent YMYL Warning Box */}
            <div className="rounded-2xl border border-amber-300 bg-amber-50/70 dark:bg-amber-950/20 p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <Stethoscope className="size-7 text-amber-700 dark:text-amber-400 shrink-0 mt-1" />
                <div>
                  <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200">
                    Important Medical & Health Notice
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/80">
                    The content on <strong>Healthy Kitchen Nepal</strong>—including articles on kitchen detoxes, traditional herbal remedies, millet and barley diets, and Ayurvedic foods—is strictly intended for informational, educational, and cultural awareness purposes only. <strong>It does not constitute medical, dietary, or healthcare advice.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3 flex items-center gap-2">
                <HeartPulse className="size-5 text-primary" />
                1. Not a Substitute for Professional Medical Advice
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Never disregard professional medical advice, delay seeking medical attention, or alter your prescribed treatment plans because of something you have read on healthykitchennepal.com.
              </p>
              <p className="text-sm leading-relaxed">
                Always consult your physician, qualified doctor, or registered dietitian before making significant changes to your diet, adopting fasting regimens, or introducing concentrated herbs (such as Timur, Jimbu, or raw detox concoctions), especially if you have pre-existing conditions such as diabetes, hypertension, kidney conditions, or pregnancy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3 flex items-center gap-2">
                <ShieldAlert className="size-5 text-secondary" />
                2. Dietary Sensitivities & Allergies
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Traditional recipes frequently use whole grains, fermented ingredients (such as Gundruk, Sinki, or Mohi), and wild mountain spices. Every individual has unique digestive physiology and tolerances.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>You are solely responsible for verifying that any ingredient you prepare or consume is safe for your personal health profile and free from allergens.</li>
                <li>Healthy Kitchen Nepal is not responsible for adverse reactions, foodborne illness from improper home fermentation, or allergic sensitivities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                3. Individual Results May Vary
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Any weight loss stories, wellness testimonials, or dietary results mentioned on this site are individual experiences. Metabolic rates, genetic factors, physical activity, and overall health status differ widely between individuals; therefore, no guaranteed outcomes or specific health improvements are promised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                4. Advertising & Sponsored Content Transparency
              </h2>
              <p className="text-sm leading-relaxed">
                Healthy Kitchen Nepal displays automated third-party advertisements served by networks including <strong>Google AdSense</strong>. The presence of third-party advertisements on our website does not represent an endorsement, warranty, or recommendation by Healthy Kitchen Nepal for any advertised product, medical claim, or service.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                5. Questions & Feedback
              </h2>
              <p className="text-sm leading-relaxed">
                If you have any questions regarding this disclaimer, please reach out via our{" "}
                <a href="/contact" className="text-primary font-semibold underline">
                  Contact Us page
                </a>{" "}
                or email us at{" "}
                <span className="font-semibold text-foreground">editorial@healthykitchennepal.com</span>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
