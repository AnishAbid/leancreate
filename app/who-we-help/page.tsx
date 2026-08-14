import type { Metadata } from "next";
import { InfoCard } from "@/components/content/InfoCard";
import { ScribbleUnderline } from "@/components/brand/Underline";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Domain knowledge built into the codebase — healthcare, marketplaces, manufacturing, and more.",
};

export default function WhoWeHelpPage() {
  const first = audiences.slice(0, 4);
  const rest = audiences.slice(4);

  return (
    <>
      <PageHero title="Who We Help" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.6rem] md:leading-tight">
            Every Industry. Every Stage. One{" "}
            <span className="relative inline-block">
              Standard
              <ScribbleUnderline className="absolute -bottom-1 left-0 h-3 w-full text-charcoal" />
            </span>{" "}
            Of Work.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted md:text-base">
            We have shipped into regulated, high-stakes environments — and
            learned where the hard problems hide.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {first.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white pb-16 md:pb-20">
        <CtaBanner
          title="Tell Us What You Are Trying To Solve, We Will Help Identify The Right Expertise, Approach."
          underline="Expertise"
          buttonLabel="Tell Us Your Challenge"
        />
      </section>
    </>
  );
}
