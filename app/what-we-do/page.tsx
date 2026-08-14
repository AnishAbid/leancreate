import type { Metadata } from "next";
import { InfoCard } from "@/components/content/InfoCard";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { allServices, buildGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Engineering that holds up across the product lifecycle — AI, web, mobile, cloud, and platform work.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero title="What We Do" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Engineering that holds up across the product lifecycle.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted md:text-base">
            One partner for your transformation journey — whether you are
            modernizing, scaling, or transforming with AI.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      {buildGroups.map((group) => (
        <section key={group.heading} className="bg-cream">
          <Container className="py-16 md:py-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal">
              {group.heading}
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </Container>
        </section>
      ))}
      <section className="bg-white py-8 pb-16 md:pb-20">
        <CtaBanner
          title="Tell us the outcome you need. We'll map the build."
          buttonLabel="Talk To An Expert"
        />
      </section>
    </>
  );
}
