import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CaseStudySlider } from "@/components/home/CaseStudySlider";

export function CaseStudy() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="pt-20 md:pt-24">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            Turning Ideas Into Meaningful{" "}
            <span className="relative inline-block pb-3">
              Outcomes.
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
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-muted md:text-base">
            See how Lean Create helps organizations solve complex challenges
            through strategy, product, technology, AI and innovation.
          </p>
        </Reveal>
      </Container>
      <CaseStudySlider />
    </section>
  );
}
