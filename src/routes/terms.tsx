import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl } from "@/lib/site";
import { FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Healthy Kitchen Nepal" },
      {
        name: "description",
        content:
          "Terms and Conditions of Use for Healthy Kitchen Nepal. Understand our content guidelines, copyright, and user obligations.",
      },
      { property: "og:title", content: "Terms of Service | Healthy Kitchen Nepal" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[72px]">
        {/* Header Banner */}
        <section className="bg-cream border-b border-border/60 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              <FileText className="size-3.5" />
              Legal & Compliance
            </div>
            <h1 className="mt-4 text-3xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-9 text-foreground/85 leading-relaxed text-base">
            
            <p className="text-base font-medium text-foreground">
              Welcome to <strong>Healthy Kitchen Nepal</strong>. By accessing or using our website located at{" "}
              <span className="text-primary font-semibold">healthykitchennepal.com</span>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                1. Intellectual Property & Content Rights
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                All materials, articles, recipes, guides, logos, photographs, and text published on Healthy Kitchen Nepal are the intellectual property of Healthy Kitchen Nepal unless otherwise attributed.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>You may view, print, or download snippets for personal, non-commercial use only.</li>
                <li>Republishing, reproducing, or syndicating entire articles or recipes without prior written permission is strictly prohibited.</li>
                <li>Excerpts may be quoted provided clear editorial credit and a direct do-follow link to the original article on healthykitchennepal.com are included.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                2. Acceptable Use Policy
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                By using our website, you agree not to:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Use the site in any way that causes damage, impairment, or interruption of accessibility.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Post unlawful, offensive, abusive, or defamatory comments in our community spaces.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span>Attempt unauthorized access to our servers, database, or API infrastructure.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                3. Third-Party Advertisements & External Links
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Healthy Kitchen Nepal participates in third-party advertising programs such as <strong>Google AdSense</strong> to support our content creation. These advertisements are managed by third-party ad networks. We do not personally endorse every product or service displayed in automated ads.
              </p>
              <p className="text-sm leading-relaxed">
                Our content may also contain links to external third-party sites for informational reference. We have no control over the content, privacy practices, or accuracy of third-party websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                4. Disclaimer of Warranties & Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                All content provided on this website is provided "as is" and "as available." While we strive to provide authentic traditional wellness and organic farming insights, Healthy Kitchen Nepal makes no warranties regarding complete accuracy or results for every individual.
              </p>
              <p className="text-sm leading-relaxed">
                Under no circumstances shall Healthy Kitchen Nepal or its authors be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the advice, recipes, or information on this site. Please review our full{" "}
                <a href="/disclaimer" className="text-primary font-semibold underline">
                  Health Disclaimer
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                5. Governing Law
              </h2>
              <p className="text-sm leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Nepal. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Kathmandu, Nepal.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                6. Contact Information
              </h2>
              <p className="text-sm leading-relaxed">
                If you have any questions regarding our Terms of Service, please contact us at{" "}
                <span className="font-semibold text-foreground">legal@healthykitchennepal.com</span> or via our{" "}
                <a href="/contact" className="text-primary font-semibold underline">
                  Contact page
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
