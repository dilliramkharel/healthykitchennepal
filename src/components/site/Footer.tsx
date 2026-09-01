import { Facebook, Instagram, Leaf, Mail, Youtube } from "lucide-react";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Featured Guides", href: "#guides" },
      { label: "Kitchen Detox", href: "#detox" },
      { label: "Community Voices", href: "#community" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  {
    title: "Topics",
    links: [
      { label: "Natural Weight Loss", href: "#guides" },
      { label: "Organic Farming", href: "#guides" },
      { label: "Traditional Nepali Diet", href: "#guides" },
      { label: "Himalayan Superfoods", href: "#guides" },
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
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                Healthy Kitchen Nepal
              </span>
            </div>
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
              <h3 className="text-sm font-semibold tracking-wide uppercase">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Healthy Kitchen Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
