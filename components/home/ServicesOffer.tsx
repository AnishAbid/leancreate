import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { offerServices } from "@/lib/site";

export function ServicesOffer() {
  return (
    <section className="bg-cream">
      <Container className="py-20 md:py-24">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            Services We{" "}
            <span className="relative inline-block pb-3">
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
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {offerServices.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article>
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-12 text-center">
          <Button href="/what-we-do" arrow>
            View All Services
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
