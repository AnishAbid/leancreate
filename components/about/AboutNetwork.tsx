import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { aboutModel, aboutNetwork } from "@/lib/site";

function ProseCard({
  title,
  titleWeight,
  paragraphs,
}: {
  title: string;
  titleWeight?: "split";
  paragraphs: string[];
}) {
  const [first, ...rest] = title.split(" ");

  return (
    <Reveal>
      <article className="rounded-[2rem] bg-white px-6 py-10 sm:px-10 md:px-14 md:py-14">
        <h2 className="text-3xl tracking-tight text-charcoal sm:text-4xl">
          {titleWeight === "split" ? (
            <>
              <span className="font-medium">{first}</span>{" "}
              <span className="font-bold">{rest.join(" ")}</span>
            </>
          ) : (
            <span className="font-bold">{title}</span>
          )}
        </h2>
        <div className="mt-8 space-y-5">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-7 text-muted md:text-base md:leading-8"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function AboutNetwork() {
  return (
    <section className="bg-cream">
      <Container className="space-y-6 py-10 md:space-y-8 md:py-12">
        <ProseCard title="The Network" paragraphs={aboutNetwork} />
        <ProseCard
          title="Our Model"
          titleWeight="split"
          paragraphs={aboutModel}
        />
      </Container>
    </section>
  );
}
