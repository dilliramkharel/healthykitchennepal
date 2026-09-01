import { useState } from "react";
import { Mail, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("You're subscribed!", {
      description: `Daily health & detox tips are on the way, ${name || "friend"}.`,
    });
    setName("");
    setEmail("");
  };

  return (
    <section id="newsletter" className="scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <div className="hero-gradient mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-lift">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
              <Mail className="size-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Get Daily Health &amp; Detox Tips Directly to Your Inbox.
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              One short email a day: a seasonal ingredient, a simple detox habit and a traditional
              recipe worth keeping.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/75">
              <ShieldCheck className="size-4" /> No spam. Unsubscribe anytime.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-card p-6 shadow-soft sm:p-8"
            aria-label="Newsletter signup"
          >
            <div className="space-y-2">
              <Label htmlFor="nl-name">Your name</Label>
              <Input
                id="nl-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sita Sharma"
                required
                className="h-11"
              />
            </div>
            <div className="mt-4 space-y-2">
              <Label htmlFor="nl-email">Email address</Label>
              <Input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="h-11"
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full">
              Send Me Daily Tips <Send className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
