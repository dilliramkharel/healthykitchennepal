import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { recipes } from "@/lib/recipes";
import { useLanguage } from "@/lib/language";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/recipes/$slug")({
  beforeLoad: ({ params }) => { if (!recipes.some((recipe) => recipe.slug === params.slug)) throw notFound(); },
  head: ({ params }) => { const recipe = recipes.find((item) => item.slug === params.slug); return { meta: [{ title: `${recipe?.title.en ?? "Recipe"} | Healthy Kitchen Nepal` }, { name: "description", content: recipe?.description.en ?? "Traditional Nepali recipe." }], links: [{ rel: "canonical", href: absoluteUrl(`/recipes/${params.slug}`) }] }; },
  component: RecipeDetail,
});

function RecipeDetail() {
  const { slug } = Route.useParams(); const recipe = recipes.find((item) => item.slug === slug); const { language } = useLanguage();
  if (!recipe) return null;
  const copy = language === "ne" ? { back: "सबै रेसिपी", ingredients: "सामग्री", steps: "बनाउने तरिका", serves: "परोस" } : { back: "All recipes", ingredients: "Ingredients", steps: "Method", serves: "Serves" };
  return <div className="flex min-h-screen flex-col bg-background"><Navbar /><main className="flex-1 pt-[72px]"><header className="bg-muted/40 py-12"><div className="mx-auto max-w-4xl px-5 lg:px-8"><Link to="/recipes" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" />{copy.back}</Link><p className="mt-8 text-xs font-semibold uppercase tracking-wider text-secondary">{recipe.category}</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">{recipe.title[language]}</h1><p className="mt-4 max-w-2xl text-lg text-muted-foreground">{recipe.description[language]}</p><div className="mt-5 flex gap-5 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><Clock className="size-4" />{recipe.time}</span><span className="inline-flex items-center gap-2"><Users className="size-4" />{copy.serves}: {recipe.servings}</span></div></div></header><div className="mx-auto max-w-4xl px-5 pt-8 lg:px-8"><img src={recipe.image} alt={recipe.title[language]} className="h-72 w-full rounded-3xl object-cover shadow-lift sm:h-96" /></div><article className="mx-auto grid max-w-4xl gap-10 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-16"><section className="rounded-2xl bg-primary-soft/35 p-6"><h2 className="text-2xl font-bold">{copy.ingredients}</h2><ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80">{recipe.ingredients[language].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />{item}</li>)}</ul></section><section><h2 className="text-2xl font-bold">{copy.steps}</h2><ol className="mt-5 space-y-5">{recipe.steps[language].map((item, index) => <li key={item} className="flex gap-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{index + 1}</span><p className="pt-0.5 leading-relaxed text-muted-foreground">{item}</p></li>)}</ol></section></article></main><Footer /></div>;
}
