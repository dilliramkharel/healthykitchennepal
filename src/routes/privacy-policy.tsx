import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Healthy Kitchen Nepal" },
      {
        name: "description",
        content:
          "Privacy Policy for Healthy Kitchen Nepal. Learn how we collect, use, and protect your information, including Google AdSense and cookie disclosures.",
      },
      { property: "og:title", content: "Privacy Policy | Healthy Kitchen Nepal" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[72px]">
        {/* Header Banner */}
        <section className="bg-cream border-b border-border/60 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              <Shield className="size-3.5" />
              Legal & Compliance
            </div>
            <h1 className="mt-4 text-3xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-10 text-foreground/85 leading-relaxed text-base">
            
            <div className="rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
              <p className="text-sm font-medium text-foreground">
                At <strong>Healthy Kitchen Nepal</strong> (accessible from{" "}
                <span className="text-primary font-semibold">healthykitchennepal.com</span>), one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Healthy Kitchen Nepal and how we use it, in strict adherence to Google AdSense policies, GDPR, and CCPA standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3 flex items-center gap-2">
                <Lock className="size-5 text-primary" />
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you visit Healthy Kitchen Nepal, we may collect information in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Voluntary Information:</strong> When you subscribe to our newsletter, leave comments, or contact us through our website forms, we may collect your name, email address, and message contents.
                </li>
                <li>
                  <strong>Automated Log Files:</strong> Like most standard website servers, we utilize log files. These logs record internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks to analyze trends, administer the site, and track user navigation. These are not linked to personally identifiable information.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-7">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3 flex items-center gap-2">
                <Eye className="size-5 text-secondary" />
                2. Google AdSense & DoubleClick DART Cookies
              </h2>
              <p className="text-sm mb-3">
                Google is one of the third-party vendors on our site. It also uses cookies, known as <strong>DART cookies</strong>, to serve ads to our site visitors based upon their visit to healthykitchennepal.com and other sites on the internet.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                <li>
                  Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
                </li>
                <li>
                  Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
                </li>
                <li>
                  Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at:{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline hover:text-primary/80"
                  >
                    https://policies.google.com/technologies/ads
                  </a>
                </li>
                <li>
                  You can also opt out of third-party vendor's use of cookies for personalized advertising by visiting{" "}
                  <a
                    href="https://www.aboutads.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold underline hover:text-primary/80"
                  >
                    www.aboutads.info
                  </a>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                3. Third-Party Privacy Policies
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Healthy Kitchen Nepal's Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p className="text-sm leading-relaxed">
                You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                4. GDPR Data Protection Rights
              </h2>
              <p className="text-sm mb-3">
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="flex items-start gap-2 p-3 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>The right to access:</strong> You have the right to request copies of your personal data.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>The right to rectification:</strong> You can request corrections to inaccurate information.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>The right to erasure:</strong> You have the right to request that we erase your personal data.</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg border border-border bg-card">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>The right to object:</strong> You have the right to object to our processing of your personal data.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                5. CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Under the California Consumer Privacy Act (CCPA), California consumers have the right to request that a business disclose the categories and specific pieces of personal data collected, request deletion of data, and request that a business that sells personal data not sell their personal data.
              </p>
              <p className="text-sm leading-relaxed">
                Healthy Kitchen Nepal does not sell your personal data to any third party under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                6. Children's Information
              </h2>
              <p className="text-sm leading-relaxed">
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Healthy Kitchen Nepal does not knowingly collect any Personal Identifiable Information from children under the age of 13.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                7. Contact Us Regarding Your Privacy
              </h2>
              <p className="text-sm leading-relaxed">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us by visiting our{" "}
                <a href="/contact" className="text-primary font-semibold underline">
                  Contact Us page
                </a>{" "}
                or emailing us directly at{" "}
                <span className="font-semibold text-foreground">contact@healthykitchennepal.com</span>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
