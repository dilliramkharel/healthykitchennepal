import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guides } from "@/components/site/Guides";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl, seoDescription, seoTitle } from "@/lib/site";

const content: Record<string, { intro: string; sections: Array<{ title: string; text: string[] }> }> = {
  "kitchen-detox-guide": {
    intro: "A gentle kitchen detox is not about skipping meals or expensive products. It is about choosing simple, nourishing foods, drinking enough water, and giving your digestion a quieter rhythm for a few days.",
    sections: [
      { title: "Start with simple, warming foods", text: ["Build meals around seasonal vegetables, dal, soups, whole grains and fresh fruit. Warm, lightly spiced foods are often easier to enjoy than heavily processed or fried options.", "Turmeric, ginger, garlic, cumin and jimbu can add flavour without needing excess salt, sugar or packaged sauces."] },
      { title: "Keep the routine realistic", text: ["Try regular meals, plenty of vegetables, less alcohol and fewer ultra-processed snacks for a few days. Notice how your energy, digestion and sleep feel.", "If you are pregnant, managing a medical condition, or take regular medication, seek advice from a qualified health professional before changing your diet significantly."] },
    ],
  },
  "weight-loss-barley-millet": {
    intro: "Barley and millet have long been staples in Nepali kitchens. Their fibre-rich, satisfying texture makes them a useful part of meals designed to support steady energy and a healthy weight.",
    sections: [
      { title: "Why whole grains can help", text: ["Compared with refined grains, barley and millet retain more fibre. Fibre adds bulk to meals and can help you stay satisfied for longer after eating.", "Weight change still depends on your overall eating pattern, activity, sleep and health. Think of these grains as helpful staples, not a quick fix."] },
      { title: "Easy ways to use जौ and कोदो", text: ["Cook barley into vegetable khichdi or add it to soup. Use millet for a warm porridge, a roti-style flatbread, or as part of a balanced dal-bhat plate.", "Pair grains with protein such as dal, beans, eggs, curd or lean meat, plus vegetables. This makes the meal more complete and filling."] },
    ],
  },
  "traditional-mohi-benefits": {
    intro: "Traditional mohi is a light, refreshing drink made from churned curd. It is a familiar accompaniment to Nepali meals, especially in warm weather.",
    sections: [
      { title: "A light addition to meals", text: ["Plain mohi can be a refreshing alternative to sugary drinks. It provides fluid and, depending on how it is made, nutrients found in dairy such as protein and calcium.", "Freshly prepared, unsweetened mohi is a simple choice alongside a balanced lunch or snack."] },
      { title: "Make it at home", text: ["Whisk plain curd with cool, clean water until smooth. Add a pinch of roasted cumin, mint, coriander or black salt for flavour, while keeping added salt modest.", "Keep it refrigerated and enjoy it fresh. Use pasteurised dairy and clean utensils to support food safety."] },
    ],
  },
  "organic-farming-farm-to-thali": {
    intro: "From terraced fields to the family thali, farming choices shape the food we eat. Organic farming aims to work with soil health, biodiversity and careful resource use.",
    sections: [
      { title: "Healthy soil comes first", text: ["Compost, crop rotation and ground cover can help improve soil structure and return nutrients to the land. Healthy soil supports resilient crops and helps retain water.", "Small farms often combine traditional practices with practical local knowledge, adapting methods to their land and climate."] },
      { title: "From harvest to a mindful meal", text: ["Buying seasonal produce from trusted growers is one way to feel closer to the source of your food. Wash vegetables well, store them carefully, and use as much of the crop as possible to reduce waste.", "A simple thali with grains, dal, vegetables and seasonal greens can celebrate both nourishment and the work behind each ingredient."] },
    ],
  },
};

export const Route = createFileRoute("/guides/$slug")({
  beforeLoad: ({ params }) => {
    if (!guides.some((guide) => guide.slug === params.slug) || !content[params.slug]) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const guide = guides.find((item) => item.slug === params.slug);
    const title = guide?.title ?? "Healthy Kitchen Nepal Guide";
    const description = seoDescription(guide?.excerpt ?? "Explore traditional Nepali kitchen wisdom.");
    const url = absoluteUrl(`/guides/${params.slug}`);
    return {
      meta: [
        { title: seoTitle(title) },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(guide ? [{ property: "og:image", content: absoluteUrl(guide.image) }, { property: "og:image:alt", content: title }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: GuideDetail,
});

function GuideDetail() {
  const { slug } = Route.useParams();
  const guide = guides.find((item) => item.slug === slug);
  const article = content[slug];

  if (!guide || !article) {
    return <div className="flex min-h-screen flex-col bg-background"><Navbar /><main className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center"><h1 className="text-3xl font-bold">Guide Not Found</h1><p className="mt-3 text-muted-foreground">This guide is not available.</p><Button className="mt-7" asChild><Link to="/#guides">Back to guides</Link></Button></main><Footer /></div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <header className="border-b border-border/60 bg-muted/40 pt-32 pb-14 sm:pt-40 sm:pb-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><Link to="/#guides" className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to all guides</Link><span className="block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{guide.tag}</span><h1 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">{guide.title}</h1><div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="size-4 text-primary" /> {guide.read}</div></div></header>
        <div className="mx-auto max-w-4xl px-5 lg:px-8 -mt-6 sm:-mt-8"><img src={guide.image} alt={guide.title} className="h-64 w-full rounded-2xl border border-border/60 object-cover shadow-xl sm:h-96" /></div>
        <article className="mx-auto max-w-3xl px-5 py-12 lg:px-8 md:py-16"><p className="text-lg leading-relaxed text-foreground/85 sm:text-xl">{article.intro}</p>{article.sections.map((section) => <section key={section.title} className="mt-10"><h2 className="text-2xl font-bold sm:text-3xl">{section.title}</h2>{section.text.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{paragraph}</p>)}</section>)}<div className="mt-12 border-t border-border pt-8"><Button variant="outline" asChild><Link to="/#guides" className="gap-2"><ArrowLeft className="size-4" /> Back to guides</Link></Button></div></article>
      </main>
      <Footer />
    </div>
  );
}
