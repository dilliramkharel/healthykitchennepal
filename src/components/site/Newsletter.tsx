import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/site";
import ebookMockup from "@/assets/healthy-nepali-recipes-ebook.jpg";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Village Kitchen e-book request");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nPlease send me the Village Kitchen e-book when it is ready.`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="newsletter" className="scroll-mt-24 bg-[#f4f1e8] px-5 pt-20 pb-0 lg:px-8 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-t-3xl bg-card p-7 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:p-16">
        <div className="mx-auto w-full max-w-2xl lg:scale-125" aria-hidden="true">
          <img
            src={ebookMockup}
            alt=""
            width={1536}
            height={1024}
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>

        <div>
          <p className="eyebrow flex items-center gap-2"><Sparkles className="size-3.5" /> Free e-book</p>
          <h2 className="mt-3 max-w-xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Healthy Nepali recipes and easy cooking ideas.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Request our free village kitchen e-book with familiar grains, seasonal ingredients and practical home-cooking ideas.
          </p>

          <form onSubmit={onSubmit} className="mt-7 grid gap-3 sm:grid-cols-2" aria-label="Free e-book request">
            <div className="space-y-2">
              <Label htmlFor="ebook-name" className="sr-only">Your name</Label>
              <Input id="ebook-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ebook-email" className="sr-only">Email address</Label>
              <Input id="ebook-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required className="h-12" />
            </div>
            <Button type="submit" variant="default" size="lg" className="sm:col-span-2 sm:w-fit">
              Request free e-book <Send className="size-4" />
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">We will reply when the e-book is ready. No spam.</p>
        </div>
      </div>
    </section>
  );
}
