import type { Metadata } from "next";
import { InfoCard } from "@/components/content/InfoCard";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { experts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experts",
  description:
    "Senior engineers, advisors, and product specialists who sit in the work with you.",
};

export default function ExpertsPage() {
  return (
    <>
      <PageHero title="Experts" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            You work with the people doing the work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted md:text-base">
            AI-enabled engineers, tech advisors, and product specialists — no
            account layers, no diluted brief.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {experts.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white pb-16 md:pb-20">
        <CtaBanner
          title="Talk to an expert about the outcome you need."
          buttonLabel="Talk To An Expert"
        />
      </section>
    </>
  );
}
