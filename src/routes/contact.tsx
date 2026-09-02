import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Healthy Kitchen Nepal" },
      {
        name: "description",
        content:
          "Get in touch with the Healthy Kitchen Nepal team. Send inquiries, recipe questions, editorial feedback, or advertising requests.",
      },
      { property: "og:title", content: "Contact Us | Healthy Kitchen Nepal" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow mt-[72px]">
        {/* Header Banner */}
        <section className="bg-cream border-b border-border/60 py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              <Mail className="size-3.5" />
              Get in Touch
            </div>
            <h1 className="mt-4 text-3xl font-bold font-[family-name:var(--font-display)] text-foreground sm:text-4xl lg:text-5xl">
              Contact Healthy Kitchen Nepal
            </h1>
            <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
              Have questions about our recipes, kitchen detox guides, organic farming, or editorial inquiries? We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Form and Contact Details */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12">
              
              {/* Left Column: Direct Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-foreground mb-2">
                    Direct Inquiries
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team is based in the Kathmandu Valley. We reply to all reader and partner messages within 24 to 48 hours.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                        Email Us
                      </span>
                      <a
                        href="mailto:contact@healthykitchennepal.com"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        contact@healthykitchennepal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-border/60 pt-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="size-5" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Kathmandu Valley, Bagmati Province, Nepal
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-border/60 pt-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                        Response Time
                      </span>
                      <span className="text-sm text-foreground">
                        Monday – Friday: 9:00 AM – 6:00 PM NPT
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary-soft/30 p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Editorial & Privacy Requests
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    For recipe corrections, copyright, or data privacy requests, please mention "Editorial Inquiry" in the subject line.
                  </p>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-border bg-card p-7 sm:p-9 shadow-soft">
                  <h2 className="text-xl font-bold font-[family-name:var(--font-display)] text-foreground mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill out the form below and we will get back to your inbox shortly.
                  </p>

                  {submitted ? (
                    <div className="rounded-2xl border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/20 p-8 text-center">
                      <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                        Your message has been received. Our team will review your inquiry and get back to you at <strong>{formData.email}</strong>.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-6"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Shrestha"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                          Subject *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="General Inquiry">General Question</option>
                          <option value="Recipe Feedback">Recipe or Diet Question</option>
                          <option value="Editorial & Privacy">Editorial / Privacy Request</option>
                          <option value="Advertising">Advertising / Partnership</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground/80 mb-1.5 uppercase tracking-wider">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Send className="size-4" /> Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
