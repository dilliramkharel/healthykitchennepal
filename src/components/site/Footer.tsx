import { Facebook, Instagram, Leaf, Mail, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Featured Guides", href: "/#guides", isRoute: false },
      { label: "Kitchen Detox", href: "/#detox", isRoute: false },
      { label: "Himalayan Superfoods", href: "/#superfoods", isRoute: false },
      { label: "Health Calculator", href: "/health-calculator", isRoute: true },
      { label: "Wellness Blog", href: "/blog", isRoute: true },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { label: "Terms of Service", href: "/terms", isRoute: true },
      { label: "Health Disclaimer", href: "/disclaimer", isRoute: true },
      { label: "About Us", href: "/about", isRoute: true },
      { label: "Contact Us", href: "/contact", isRoute: true },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Natural Weight Loss", href: "/#guides", isRoute: false },
      { label: "Organic Farming", href: "/#guides", isRoute: false },
      { label: "Traditional Nepali Diet", href: "/#guides", isRoute: false },
      { label: "Ancestral Nutrition", href: "/#superfoods", isRoute: false },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                <Leaf className="size-5" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                Healthy Kitchen Nepal
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A health, wellness and organic food hub celebrating traditional Nepali kitchens —
              millet, barley, buttermilk and Himalayan apples.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#top"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.isRoute ? (
                      <Link
                        to={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* AdSense Mandatory Compliance Footer Bar */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Healthy Kitchen Nepal. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">·</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="text-border">·</span>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">
              Health Disclaimer
            </Link>
            <span className="text-border">·</span>
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <span className="text-border">·</span>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
