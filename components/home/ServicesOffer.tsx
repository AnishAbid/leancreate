import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ExpertiseSlider } from "@/components/home/ExpertiseSlider";

export function ServicesOffer() {
  return (
    <section className="overflow-hidden bg-grid-cream">
      <Container className="pt-20 md:pt-24">
        <Reveal>
          <h2 className="text-center text-3xl font-normal tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            Services We{" "}
            <span className="relative inline-block pb-3 font-bold">
              Offer.
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
      </Container>
      <ExpertiseSlider cardClassName="bg-white shadow-[0_12px_32px_-20px_rgba(26,26,26,0.28)]" />
      <Container className="pt-12 pb-20 text-center md:pb-24">
        <Reveal delay={0.15}>
          <Button href="/what-we-do" arrow>
            View All Services
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
