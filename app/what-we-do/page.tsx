import type { Metadata } from "next";
import { ExpertiseSlider } from "@/components/home/ExpertiseSlider";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ServiceOfferCard } from "@/components/what-we-do/ServiceOfferCard";
import { whatWeDoOffers } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Lean Create helps organizations solve business problems, build digital products, and modernize how they work.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero title="What We Do?" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.6rem] md:leading-tight">
              From Idea To Execution, And{" "}
              <span className="relative inline-block pb-3">
                Everything
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
                />
              </span>{" "}
              In Between.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-muted md:text-base">
              Lean Create helps organizations solve business problems, build
              digital products, and modernize how they work. Wherever you are in
              the journey, we meet you there.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whatWeDoOffers.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
                <ServiceOfferCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white pb-8 md:pb-12">
        <CtaBanner
          eyebrow="Not Sure Which Of These You Need?"
          title="Start With Your Challenge And We'll Figure It Out Together."
          underline="Together."
          buttonLabel="Tell Us Your Challenge"
        />
      </section>
      <section className="bg-white pb-16 md:pb-20">
        <ExpertiseSlider />
      </section>
    </>
  );
}
