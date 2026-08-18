import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ExpertiseSlider } from "@/components/home/ExpertiseSlider";
import { expertRoles } from "@/lib/site";

const expertiseCards = expertRoles.filter((role) =>
  [
    "Strategy and Business",
    "Product",
    "Engineering",
    "Data and Artificial Intelligence",
  ].includes(role.title),
);

export function Services() {
  return (
    <section>
      <div className="hero-wash bg-grid-light pt-20 pb-10 md:pt-24 md:pb-12">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-left text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
                Expertise That{" "}
                <span className="relative inline-block pb-3">
                  Moves Ideas
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/underline.svg"
                    alt=""
                    width={357}
                    height={17}
                    className="pointer-events-none absolute bottom-0 left-0 h-[14px] w-full select-none brightness-0 invert"
                  />
                </span>{" "}
                Forward.
              </h2>
              <Button href="/what-we-do" arrow className="shrink-0 self-start sm:self-auto">
                Explore All Expertise
              </Button>
            </div>
          </Reveal>
        </Container>

        <ExpertiseSlider items={expertiseCards} cardClassName="bg-white" />
      </div>
    </section>
  );
}
