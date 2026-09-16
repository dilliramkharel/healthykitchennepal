import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import siteLogo from "@/assets/healthy-kitchen-nepal-logo.png";
import { useLanguage } from "@/lib/language";

interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const links: NavLink[] = [
  { label: "Recipes", href: "/recipes", isRoute: true },
  { label: "Guides", href: "/guides", isRoute: true },
  { label: "Detox", href: "/detox", isRoute: true },
  { label: "Traditional Foods", href: "/traditional-foods", isRoute: true },
  { label: "Calculator", href: "/health-calculator", isRoute: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const labels: Record<string, string> = language === "ne" ? { Recipes: "रेसिपी", Guides: "गाइड", Detox: "डिटक्स", "Traditional Foods": "परम्परागत खाना", Calculator: "क्याल्कुलेटर", Latest: "नयाँ लेख" } : {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300",
        "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xs",
      )}
    >
      <nav className="mx-auto flex max-w-7xl h-full items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={siteLogo}
            alt="Healthy Kitchen Nepal"
            width={2172}
            height={724}
            className="h-16 w-auto max-w-70 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            l.isRoute ? (
              <Link
                key={l.label}
                to={l.href}
                className="relative text-sm font-medium text-foreground/85 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {labels[l.label] ?? l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-foreground/85 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {labels[l.label] ?? l.label}
              </a>
            )
          ))}
          <button type="button" onClick={toggleLanguage} className="rounded-lg border border-border px-2.5 py-1.5 text-xs font-bold text-primary hover:bg-primary-soft" aria-label="Switch language">{language === "en" ? "ने" : "EN"}</button>
          <Button variant="default" size="default" asChild>
            <Link to="/blog">{labels.Latest ?? "LATEST"}</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 mb-4 rounded-2xl bg-card p-4 shadow-lift md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                {l.isRoute ? (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary-soft hover:text-primary"
                  >
                    {labels[l.label] ?? l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary-soft hover:text-primary"
                  >
                    {labels[l.label] ?? l.label}
                  </a>
                )}
              </li>
            ))}
            <li><button type="button" onClick={toggleLanguage} className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium hover:bg-primary-soft hover:text-primary">{language === "en" ? "नेपालीमा हेर्नुहोस्" : "View in English"}</button></li>
            <li>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary-soft hover:text-primary"
              >
                {labels.Latest ?? "Latest articles"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
