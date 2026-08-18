import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { ServiceOfferCard } from "@/components/what-we-do/ServiceOfferCard";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "We work with organizations of every size and sector, because good strategy and solid execution translate everywhere.",
};

export default function WhoWeHelpPage() {
  const first = audiences.slice(0, 4);
  const rest = audiences.slice(4);

  return (
    <>
      <PageHero title="Who We Help" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-normal tracking-tight text-charcoal sm:text-4xl md:text-[2.6rem] md:leading-tight">
              Every Industry. Every Stage.
              <br />
              One{" "}
              <span className="relative inline-block pb-3 font-bold">
                Standard
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
                />
              </span>{" "}
              Of Work.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-muted md:text-base">
              We work with organizations of every size and sector, because good
              strategy and solid execution translate everywhere.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {first.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <ServiceOfferCard {...item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.2 + index * 0.05}
                className="h-full"
              >
                <ServiceOfferCard {...item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
