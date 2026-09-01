import { Quote, Star } from "lucide-react";

const voices = [
  {
    name: "Sunita Rai",
    place: "Bhaktapur",
    text: "This kitchen detox guide helped my weight loss! I lost 6 kg in three months without giving up dal bhat.",
  },
  {
    name: "Prakash Thapa",
    place: "Pokhara",
    text: "Thanks for the information on organic farming. We switched our terrace to compost-only and the yield doubled.",
  },
  {
    name: "Anita Gurung",
    place: "Kathmandu",
    text: "Drinking mohi every afternoon fixed my digestion. My whole family now asks for it instead of soda.",
  },
  {
    name: "Dipesh Shrestha",
    place: "Dharan",
    text: "The barley and millet article explained things my doctor never did. Kodo roti is now our breakfast.",
  },
  {
    name: "Kamala Adhikari",
    place: "Ilam",
    text: "I love that everything uses ingredients already in a Nepali kitchen. Nothing imported, nothing expensive.",
  },
  {
    name: "Ramesh Bhandari",
    place: "Chitwan",
    text: "The Himalayan apple piece convinced me to plant six trees. Great community, very generous with answers.",
  },
];

export function Community() {
  return (
    <section id="community" className="leaf-gradient scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Community voices</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Real kitchens, real results across Nepal
          </h2>
          <p className="mt-4 text-muted-foreground">
            Questions, wins and recipes shared by readers every week.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="card-hover relative rounded-2xl rounded-bl-sm border border-border bg-card p-6 shadow-soft"
            >
              <Quote className="size-7 text-primary-soft" />
              <blockquote className="mt-3 text-base leading-relaxed text-foreground/90">
                “{v.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary">
                  {v.name.charAt(0)}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold">{v.name}</span>
                  <span className="block text-xs text-muted-foreground">{v.place}</span>
                </span>
                <span className="flex gap-0.5 text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
