import type { Metadata } from "next";
import { ProcessGrid } from "@/components/how-we-work/ProcessGrid";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { engagementModels, howItWorksIntro } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A clear process from first conversation to measurable result, with engagement models that fit the work.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero title="How It Works" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.6rem] md:leading-tight">
              {howItWorksIntro.headingBefore}{" "}
              <span className="relative inline-block pb-3">
                {howItWorksIntro.underline}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
                />
              </span>{" "}
              {howItWorksIntro.headingAfter}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-muted md:text-base">
              {howItWorksIntro.body}
            </p>
          </Reveal>
          <ProcessGrid />
        </Container>
      </section>
      <section className="bg-cream pb-16 md:pb-20">
        <Container>
          <Reveal>
            <h2 className="text-center text-3xl font-normal tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
              Engagement{" "}
              <span className="relative inline-block pb-3 font-bold">
                Models
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
                />
              </span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-[1.5rem] bg-white p-6 md:p-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.icon}
                    alt=""
                    width={70}
                    height={70}
                    className="h-12 w-12 object-contain"
                  />
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
