import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { aboutIntro } from "@/lib/site";

export function AboutIntro() {
  return (
    <section className="bg-white">
      <Container className="py-16 text-center md:py-24">
        <Reveal>
          <h2 className="relative inline-block pb-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            About <span className="text-orange">LEAN</span> | CREATE
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/underline.svg"
              alt=""
              width={357}
              height={17}
              className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none"
            />
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center">
          {aboutIntro.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 32)}>
              <p className="text-center text-sm leading-7 text-muted md:text-base md:leading-8">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
