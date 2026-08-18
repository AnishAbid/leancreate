import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { audienceTags } from "@/lib/site";

const firstRow = audienceTags.slice(0, 4);
const secondRow = audienceTags.slice(4);

export function AudienceTags() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] bg-cream px-6 py-14 text-center sm:px-10 md:py-16">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
              Who We{" "}
              <span className="relative inline-block pb-3">
                Work With.
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
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {firstRow.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {secondRow.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
