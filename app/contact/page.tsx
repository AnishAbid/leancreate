import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FaqList } from "@/components/content/FaqList";
import { ScribbleUnderline } from "@/components/brand/Underline";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us your challenge. We will help identify the right expertise and approach.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Tell Us Your{" "}
            <span className="relative inline-block">
              Challenge.
              <ScribbleUnderline className="absolute -bottom-1 left-0 h-3 w-full text-orange" />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-muted md:text-base">
            First conversations are straightforward. Share the problem, the
            constraint, or the idea — we will help you figure out the right
            next step.
          </p>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.4fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
      <section className="bg-cream">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Frequently asked questions.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-muted">
            Looking for clarity? These answers cover how we work, timelines, and
            getting started.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqList />
          </div>
        </Container>
      </section>
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal">
            What happens next
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.num} className="rounded-3xl bg-cream p-6">
                <p className="text-3xl font-bold text-orange">{step.num}</p>
                <h3 className="mt-4 font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
