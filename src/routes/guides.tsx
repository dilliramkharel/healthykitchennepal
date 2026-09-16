import { createFileRoute, Outlet } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Nepali Wellness Guides | Healthy Kitchen Nepal" },
      { name: "description", content: "Browse practical guides on traditional Nepali food, seasonal grains, kitchen wellness and organic farming." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/guides") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/guides") }],
  }),
  component: Outlet,
});
