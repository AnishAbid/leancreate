import type { Metadata } from "next";
import { InfoCard } from "@/components/content/InfoCard";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { howWeWork, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Discovery, advisory, and delivery — from first conversation to production.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero title="How We Work" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Direction first. Then the build.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted md:text-base">
            We start with the outcome you need, then bring the engineers who can
            ship it into production.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {howWeWork.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal">
            What happens next
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.num} className="rounded-3xl bg-white p-6">
                <p className="text-3xl font-bold text-orange">{step.num}</p>
                <h3 className="mt-4 font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-8 pb-16 md:pb-20">
        <CtaBanner
          title="Not sure where your arc begins? That's okay."
          buttonLabel="Book a Call"
        />
      </section>
    </>
  );
}
