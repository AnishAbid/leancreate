import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { contactIntro } from "@/lib/site";

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
          <Reveal>
            <h2 className="text-center text-3xl font-normal tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
              {contactIntro.headingBefore}{" "}
              <span className="relative inline-block pb-3 font-bold">
                {contactIntro.underline}
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
            <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-7 text-muted md:text-base">
              {contactIntro.body}
            </p>
          </Reveal>
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-[0.9fr_1.4fr]">
            <Reveal>
              <ContactInfo />
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
