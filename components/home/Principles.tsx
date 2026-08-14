import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { principles } from "@/lib/site";

export function Principles() {
  return (
    <section className="bg-white">
      <Container className="pt-20 pb-10 md:pt-24 md:pb-12">
        <Reveal>
          <p className="text-center text-sm font-medium text-orange">
            Why Lean Create
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
            Built For Expertise, Not{" "}
            <span className="relative inline-block pb-3">
              Overheads.
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
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[1.25rem] bg-cream p-6 md:p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="h-12 w-12 object-contain"
                />
                <h3 className="mt-5 text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
