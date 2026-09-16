import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Search, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { recipes, type RecipeCategory } from "@/lib/recipes";
import { useLanguage } from "@/lib/language";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [{ title: "Nepali Recipes | Healthy Kitchen Nepal" }, { name: "description", content: "Browse simple, wholesome Nepali recipes with ingredients and clear cooking steps." }],
    links: [{ rel: "canonical", href: absoluteUrl("/recipes") }],
  }),
  component: RecipesPage,
});

const categories: Array<RecipeCategory | "All"> = ["All", "Breakfast", "Main meal", "Drink", "Side dish"];

function RecipesPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RecipeCategory | "All">("All");
  const filtered = useMemo(() => recipes.filter((recipe) => {
    const matchesCategory = category === "All" || recipe.category === category;
    const text = `${recipe.title.en} ${recipe.title.ne} ${recipe.description.en} ${recipe.description.ne}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase().trim());
  }), [category, query]);
  const copy = language === "ne" ? { eyebrow: "घरको स्वाद", title: "सजिलो र स्वस्थ नेपाली रेसिपी", intro: "मनपर्ने परिकार खोज्नुहोस्, सामग्री हेर्नुहोस् र चरणै–चरण पकाउनुहोस्।", search: "रेसिपी खोज्नुहोस्", all: "सबै", read: "रेसिपी हेर्नुहोस्", noResults: "तपाईंको खोजअनुसार रेसिपी भेटिएन।" } : { eyebrow: "From our kitchen", title: "Simple, wholesome Nepali recipes", intro: "Search familiar dishes, check the ingredients and cook step by step.", search: "Search recipes", all: "All", read: "View recipe", noResults: "No recipes match your search." };

  return <div className="flex min-h-screen flex-col bg-background"><Navbar /><main className="flex-1 pt-[72px]">
    <section className="border-b border-border/60 bg-cream py-14 lg:py-20"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><p className="eyebrow">{copy.eyebrow}</p><h1 className="mt-4 text-4xl font-bold sm:text-5xl">{copy.title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{copy.intro}</p></div></section>
    <section className="py-14 lg:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft md:flex-row md:items-center md:justify-between"><label className="relative block w-full md:max-w-md"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.search} className="h-11 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/30" /></label><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-3 py-2 text-xs font-semibold ${category === item ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary-soft"}`}>{item === "All" ? copy.all : item}</button>)}</div></div>
      {filtered.length ? <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((recipe) => <article key={recipe.slug} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"><Link to="/recipes/$slug" params={{ slug: recipe.slug }} className="block overflow-hidden"><img src={recipe.image} alt={recipe.title[language]} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" /></Link><div className="p-6"><p className="text-xs font-semibold uppercase tracking-wider text-secondary">{recipe.category}</p><h2 className="mt-2 text-2xl font-bold">{recipe.title[language]}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recipe.description[language]}</p><div className="mt-4 flex gap-4 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><Clock className="size-3.5" />{recipe.time}</span><span className="inline-flex items-center gap-1"><Users className="size-3.5" />{recipe.servings}</span></div><Link to="/recipes/$slug" params={{ slug: recipe.slug }} className="mt-5 inline-block text-sm font-bold text-primary hover:underline">{copy.read} →</Link></div></article>)}</div> : <p className="py-16 text-center text-muted-foreground">{copy.noResults}</p>}</div></section>
  </main><Footer /></div>;
}
