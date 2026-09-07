import { ArrowRight, Leaf, Sprout, Wheat } from "lucide-react";

const steps = [
  { icon: Sprout, title: "Grow with the season", text: "Notice what is growing in local fields and home gardens." },
  { icon: Wheat, title: "Choose familiar ingredients", text: "Use grains, greens and herbs that belong in everyday Nepali meals." },
  { icon: Leaf, title: "Cook and share", text: "Bring simple ingredients together for nourishing food at home." },
];

export function FarmToKitchen() {
  return (
    <section id="farm-to-kitchen" className="scroll-mt-24 bg-[#143c31] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.18em] text-lime-300 uppercase">From our fields to your plate</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A simple path from farm to kitchen</h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Healthy Kitchen Nepal celebrates the small, everyday choices that keep local food traditions alive.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative rounded-2xl border border-white/15 bg-white/5 p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-lime-300 text-[#143c31]">
                  <Icon className="size-5" />
                </span>
                <span className="absolute top-8 right-7 text-xs font-bold tracking-wider text-lime-300">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{step.text}</p>
                {index < steps.length - 1 && <ArrowRight className="mt-6 size-4 text-lime-300 md:hidden" />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
