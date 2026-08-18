import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { aboutHowWeWork } from "@/lib/site";

export function AboutHowWeWork() {
  return (
    <section className="bg-white">
      <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            How We{" "}
            <span className="relative inline-block pb-3">
              Work
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
        <div className="space-y-4">
          {aboutHowWeWork.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="rounded-[1.5rem] bg-cream px-6 py-6 md:px-8 md:py-7">
                <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={0.12} className="pt-4">
            <Button href="/contact" arrow>
              Tell Us Your Challenge
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
