import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import siteLogo from "@/assets/healthy-kitchen-nepal-logo.png";

interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const links: NavLink[] = [
  { label: "Guides", href: "/#guides" },
  { label: "Detox", href: "/#detox" },
  { label: "Superfoods", href: "/#superfoods" },
  { label: "Calculator", href: "https://cms.healthykitchennepal.xyz/health-calculator/" },
  { label: "Newsletter", href: "/#newsletter" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-foreground/85 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            )
          ))}
          <Button variant="default" size="default" asChild>
            <Link to="/blog">BLOG</Link>
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
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary-soft hover:text-primary"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-primary-soft hover:text-primary"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
