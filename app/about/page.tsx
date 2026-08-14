import type { Metadata } from "next";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { capabilityTags, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" />
      <section className="bg-white">
        <Container className="py-16 text-center md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              Software engineering that delivers — from idea to impact.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted">
              {site.description} We pair senior specialists with the work that
              actually needs them, so ambitious teams can move without the usual
              agency overhead.
            </p>
          </div>
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-charcoal">
            The stack we ship on
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {capabilityTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cream px-5 py-2 text-sm font-medium text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white pb-16 md:pb-20">
        <CtaBanner
          title="Let's map your arc — from idea to impact."
          buttonLabel="Book a Call"
        />
      </section>
    </>
  );
}
