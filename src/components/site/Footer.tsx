import { Facebook, Linkedin, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site";
import footerFounderBanner from "@/assets/footer-founder-banner.jpg";
import siteLogo from "@/assets/healthy-kitchen-nepal-logo.png";

const groups = [
  {
    title: "Village Kitchen",
    links: [
      { label: "Kitchen wisdom", href: "/#guides", isRoute: false },
      { label: "Traditional grains", href: "/#detox", isRoute: false },
      { label: "Seasonal foods", href: "/#superfoods", isRoute: false },
      { label: "Recipe stories", href: "/blog", isRoute: true },
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
    title: "Our Food Stories",
    links: [
      { label: "Farm to kitchen", href: "/#guides", isRoute: false },
      { label: "Organic farming", href: "/#guides", isRoute: false },
      { label: "Traditional Nepali food", href: "/#guides", isRoute: false },
      { label: "Seasonal ingredients", href: "/#superfoods", isRoute: false },
    ],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/dilliram.kharel.75" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dilli-ram-kharel-79b890305/" },
  { icon: Mail, label: "Email", href: `mailto:${CONTACT_EMAIL}` },
];

export function Footer() {
  return (
    <footer className="bg-[#edf1e8] text-[#143c31]">
      <section className="hidden" aria-hidden="true">
        <img
          src={footerFounderBanner}
          alt="Dilli Ram Kharel, founder of Healthy Kitchen Nepal, with fresh fruit"
          width={1920}
          height={820}
          className="block h-auto w-full object-cover"
        />
        <div className="hidden" />
        <div className="hidden">
          <div className="max-w-md">
            <p className="text-[0.65rem] font-bold tracking-[0.18em] text-lime-300 uppercase">
              Healthy Kitchen Nepal
            </p>
            <h2 className="mt-3 text-4xl leading-[1.05] font-bold sm:text-5xl">
              Good food. <span className="block italic text-lime-300">Better everyday living.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/90">
              Practical recipes, familiar ingredients and thoughtful food guidance for every Nepali kitchen.
            </p>
            <p className="mt-5 text-[0.65rem] font-bold tracking-[0.15em] text-lime-300 uppercase">
              Dilli Ram Kharel · Founder
            </p>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src={siteLogo}
                alt="Healthy Kitchen Nepal"
                width={2172}
                height={724}
                className="h-20 w-auto max-w-80 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#143c31]/75">
              A village kitchen journal celebrating local farms, seasonal ingredients and traditional Nepali food.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex size-10 items-center justify-center rounded-full border border-[#143c31]/20 bg-white text-[#143c31]/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <s.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-primary">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.isRoute ? (
                      <Link
                        to={l.href}
                        className="text-sm text-[#143c31]/75 transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-[#143c31]/75 transition-colors hover:text-primary"
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
        <div className="mt-12 flex flex-col gap-4 border-t border-[#143c31]/15 pt-6 text-xs text-[#143c31]/65 sm:flex-row sm:items-center sm:justify-between">
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
