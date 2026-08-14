import type { Metadata } from "next";
import { ExpertiseSlider } from "@/components/home/ExpertiseSlider";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceOfferCard } from "@/components/what-we-do/ServiceOfferCard";
import { expertIntro, expertOffers, expertRoles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experts",
  description:
    "Lean Create matches specialists to the work through completed projects, not a database of CVs.",
};

export default function ExpertsPage() {
  return (
    <>
      <PageHero title="Experts" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.6rem] md:leading-tight">
              {expertIntro.headingBefore}
              <br />
              <span className="relative inline-block pb-3">
                {expertIntro.underline}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
                />
              </span>{" "}
              {expertIntro.headingAfter}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-muted md:text-base">
              {expertIntro.body}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" arrow>
                Tell Us Your Challenge
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertOffers.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
                <ServiceOfferCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
        <div className="pb-16 md:pb-20">
          <ExpertiseSlider items={expertRoles} />
        </div>
      </section>
    </>
  );
}
