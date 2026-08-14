import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { valueProps } from "@/lib/site";

export function ValueGrid() {
  return (
    <section className="bg-cream">
      <Container className="py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-5xl md:leading-tight">
              How It{" "}
              <span className="relative inline-block pb-3">
                Works.
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[14px] w-full select-none"
                />
              </span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted md:text-base">
              Whether you are validating an idea, improving a product, adopting
              AI, or transforming your operations, the starting point is the
              same: a real business challenge. Tell us yours, and we&apos;ll
              bring the right thinking and the right people to solve it.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[1.5rem] bg-white p-6 md:p-7">
                <Image
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="h-11 w-11 object-contain"
                />
                <h3 className="mt-5 text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-12 text-center">
          <Button href="/how-we-work" arrow>
            Learn More
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
