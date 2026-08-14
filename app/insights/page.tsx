import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { insights, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Stories from teams we have shipped with, plus practical thinking.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero title="Insights" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Stories from teams we have shipped with.
          </h2>
          <p className="mt-3 text-center text-sm text-muted">
            4.9 across client reviews
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="lift-card rounded-3xl bg-cream p-6">
                <p className="text-orange">★★★★★</p>
                <blockquote className="mt-4 text-lg font-semibold leading-7 text-charcoal">
                  “{item.quote}”
                </blockquote>
                <p className="mt-5 text-sm font-bold text-charcoal">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal">
            Ideas, perspectives and practical thinking.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="group lift-card overflow-hidden rounded-3xl bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-8 pb-16 md:pb-20">
        <CtaBanner
          title="Tell us what you are trying to solve."
          buttonLabel="Start A Project"
        />
      </section>
    </>
  );
}
