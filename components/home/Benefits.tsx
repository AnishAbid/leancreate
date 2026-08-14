import Image from "next/image";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <section className="bg-white">
      <Container className="grid items-center gap-12 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Expertise, Without Unnecessary{" "}
            <span className="relative inline-block pb-3">
              Complexity.
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
          <ul className="mt-10 space-y-6">
            {benefits.map((item) => (
              <li key={item.title} className="flex gap-4">
                <FeatureIcon
                  name={item.icon}
                  className="size-12 shrink-0 rounded-full bg-[#f6ebe4]"
                />
                <div>
                  <h3 className="font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.12}
          className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] lg:max-w-none"
        >
          <Image
            src="/images/office.png"
            alt="Two colleagues collaborating in a modern office"
            fill
            className="img-zoom object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
