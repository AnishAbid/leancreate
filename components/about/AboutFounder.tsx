import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { aboutFounder } from "@/lib/site";

export function AboutFounder() {
  const [lead, rest] = aboutFounder.paragraphs;
  const [before, after] = lead.split(aboutFounder.name);

  return (
    <section className="overflow-visible bg-white">
      <Container className="grid items-center gap-12 overflow-visible pb-16 md:pb-24 lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 xl:gap-20">
        <Reveal>
          <h2 className="text-3xl tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            <span className="font-medium">The </span>
            <span className="relative inline-block pb-3 font-bold">
              Founder
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/underline.svg"
                alt=""
                width={357}
                height={17}
                className="pointer-events-none absolute bottom-0 left-0 h-[11px] w-[118%] select-none"
              />
            </span>
          </h2>
          <p className="mt-10 max-w-xl text-[15px] leading-8 text-[#5c5c5c] md:text-base md:leading-8">
            {before}
            <strong className="font-semibold text-charcoal">
              {aboutFounder.name}
            </strong>
            {after}
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#5c5c5c] md:text-base md:leading-8">
            {rest}
          </p>
        </Reveal>
        <Reveal
          delay={0.12}
          className="relative mx-auto w-full max-w-[22rem] overflow-visible sm:max-w-[26rem] lg:max-w-[28rem]"
        >
          <div className="relative pt-[20%]">
            <div className="relative aspect-square overflow-visible">
              <div
                className="absolute inset-0 rounded-[3.25rem] bg-[#c05636]"
                aria-hidden
              />
              <Image
                src={aboutFounder.image}
                alt={`${aboutFounder.name}, founder of Lean Create`}
                width={371}
                height={491}
                className="absolute bottom-0 left-1/2 z-10 w-[90%] max-w-none -translate-x-1/2"
                sizes="(max-width: 1024px) 70vw, 420px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
