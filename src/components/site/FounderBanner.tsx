import founderFoodBanner from "@/assets/footer-founder-banner.jpg";

/** Brand-story image displayed in the upper-middle of the home page. */
export function FounderBanner() {
  return (
    <section
      id="our-story"
      aria-label="Healthy Kitchen Nepal founder story"
      className="bg-muted/40 px-5 py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/60 shadow-lift">
        <img
          src={founderFoodBanner}
          alt="Dilli Ram Kharel, founder of Healthy Kitchen Nepal, with fresh fruit"
          width={1920}
          height={820}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
