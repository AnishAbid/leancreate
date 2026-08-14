"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { footerLinkCols, site } from "@/lib/site";

function SocialGlyph({
  name,
  className,
}: {
  name: "twitter" | "linkedin" | "facebook" | "instagram";
  className?: string;
}) {
  const paths = {
    twitter:
      "M14.7 10.3 22 2h-2.2l-6.3 7.2L8.4 2H2l7.8 11.1L2 22h2.2l6.9-7.9L15.6 22H22l-7.3-11.7Zm-2.4 2.8-.8-1.1-6.4-9h2.2l5.2 7.3.8 1.1 6.7 9.4h-2.2l-5.5-7.7Z",
    linkedin:
      "M6.5 9H3.7v12h2.8V9ZM5.1 3C4.1 3 3.3 3.8 3.3 4.8S4.1 6.6 5.1 6.6s1.8-.8 1.8-1.8S6.1 3 5.1 3ZM20.7 9h-2.7v1.6h-.1c-.5-.9-1.6-1.8-3.2-1.8-3.4 0-4 2.2-4 5.1V21h2.8v-6.3c0-1.5 0-3.4 2.1-3.4s2.4 1.6 2.4 3.5V21h2.8V9Z",
    facebook:
      "M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H17.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H9v2.8h2.4V21h3.1Z",
    instagram:
      "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm9.2 1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 8.2A3.8 3.8 0 1 1 12 15.8 3.8 3.8 0 0 1 12 8.2Zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 1 0 0-3.6Z",
  };

  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={paths[name]} />
    </svg>
  );
}

const social = [
  { label: "Twitter", href: "https://twitter.com", name: "twitter" as const },
  { label: "LinkedIn", href: "https://linkedin.com", name: "linkedin" as const },
  { label: "Facebook", href: "https://facebook.com", name: "facebook" as const },
  { label: "Instagram", href: "https://instagram.com", name: "instagram" as const },
];

function FooterCta({ pathname }: { pathname: string }) {
  if (
    pathname === "/about" ||
    pathname === "/what-we-do" ||
    pathname === "/experts"
  )
    return null;

  const inner =
    pathname === "/who-we-help" ? (
      <>
        <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
          Tell Us What You Are Trying To Solve, We Will Help Identify The Right{" "}
          <span className="relative inline-block pb-3">
            Expertise
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/underline.svg"
              alt=""
              width={357}
              height={17}
              className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none brightness-0"
            />
          </span>
          , Approach
        </h2>
        <div className="mt-8">
          <Button href="/contact" arrow>
            Tell Us Your Challenge
          </Button>
        </div>
      </>
    ) : pathname === "/how-we-work" ? (
      <>
        <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
          Every Engagement Begins The Same Way, With A Conversation And{" "}
          <span className="relative inline-block pb-3">
            No Obligation.
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/underline.svg"
              alt=""
              width={357}
              height={17}
              className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none brightness-0"
            />
          </span>
        </h2>
        <div className="mt-8">
          <Button href="/contact" arrow>
            Tell Us Your Challenge
          </Button>
        </div>
      </>
    ) : (
      <>
        <h2 className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
          Tell Us Your Challenge. We Will Work Out{" "}
          <span className="font-bold">
            <span className="relative inline-block pb-3">
              The Rest.
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/underline.svg"
                alt=""
                width={357}
                height={17}
                className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none brightness-0 invert"
              />
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white md:text-base">
          Most of our clients arrive with a situation rather than a specification,
          and that is the right place to begin. Describe what you are facing in
          your own words. We will tell you plainly what resolving it would
          involve, what it would take, and whether we are the right people for it.
          If we are not, we will say so and point you toward someone who is.
        </p>
        <div className="mt-8">
          <Button href="/contact" arrow>
            Tell Us Your Challenge
          </Button>
        </div>
        <p className="mt-4 text-sm text-white/90">
          No cost, no obligation, and no sales pitch.
        </p>
      </>
    );

  return (
    <div className={pathname === "/how-we-work" ? "bg-cream" : "bg-white"}>
      <Container>
        <div className="rounded-t-[2.5rem] bg-orange px-6 py-14 text-center sm:px-12 md:py-20">
          {inner}
        </div>
      </Container>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();

  return (
    <footer>
      <FooterCta pathname={pathname} />

      <div className="bg-charcoal bg-grid-dark">
        <Container className="pt-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-sm shrink-0">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logo-samll-color.svg"
                  alt=""
                  width={67}
                  height={64}
                  className="h-11 w-auto"
                />
                <p className="text-lg font-semibold tracking-[0.18em]">
                  <span className="text-orange">LEAN</span>{" "}
                  <span className="text-white">|</span>{" "}
                  <span className="text-white">CREATE</span>
                </p>
              </div>
              <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-white">
                {site.tagline}
              </p>
              <p className="mt-5 text-sm leading-6 text-white/55">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-white">Quick Links</h2>
              <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-2.5">
                {footerLinkCols.map((column) => (
                  <ul key={column[0].href} className="space-y-2.5">
                    {column.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-white/55 transition-colors hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <h2 className="text-base font-semibold text-white">Contact Us</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li>
                  <span className="text-white/55">(Contact)</span>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-white underline decoration-white underline-offset-[5px]"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-white/55">(Phone)</span>{" "}
                  <a href={site.phoneHref} className="text-white">
                    +1(770)655-5934
                  </a>
                </li>
                <li>
                  <span className="text-white/55">(location)</span>{" "}
                  <span className="text-white">{site.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <div className="mt-16 bg-orange">
          <Container className="flex flex-col items-start justify-between gap-4 py-3.5 sm:flex-row sm:items-center">
            <p className="text-sm text-white">© 2026 all rights reserved</p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-white">Social Media :</span>
              {social.map(({ label, href, name }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-full bg-white text-charcoal"
                >
                  <SocialGlyph name={name} className="size-3.5" />
                </a>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
