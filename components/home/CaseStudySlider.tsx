"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/site";

const GAP = 40;
const INTERVAL = 5200;

const details = [
  { key: "challenge", title: "Challenge" },
  { key: "whatWeDid", title: "What We Did" },
  { key: "outcome", title: "Outcome" },
] as const;

export function CaseStudySlider() {
  const reduce = useReducedMotion();
  const firstSlideRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(980);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  const slides = [...caseStudies, ...caseStudies];

  useEffect(() => {
    const measure = () => {
      if (firstSlideRef.current) {
        setSlideWidth(firstSlideRef.current.getBoundingClientRect().width);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  useEffect(() => {
    if (index < caseStudies.length) return;
    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);
    return () => window.clearTimeout(timeout);
  }, [index]);

  const offset = index * (slideWidth + GAP);

  return (
    <div
      className="mt-12 overflow-hidden pb-20 md:mt-14 md:pb-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex items-stretch pl-5 sm:pl-8 xl:pl-[calc((100%-80rem)/2+2rem)]"
        style={{
          gap: GAP,
          paddingRight: "1.25rem",
          transform: `translate3d(-${offset}px, 0, 0)`,
          transition: animate
            ? "transform 0.7s cubic-bezier(0.16, 0.84, 0.24, 1)"
            : "none",
        }}
      >
        {slides.map((study, i) => (
          <article
            key={`${study.label}-${i}`}
            ref={i === 0 ? firstSlideRef : undefined}
            className="flex w-[min(72.5rem,calc(100vw-3.5rem))] shrink-0 flex-col gap-8 md:w-[min(72.5rem,calc(100vw-10.5rem))] md:flex-row md:items-center md:gap-10 lg:gap-14"
          >
            <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-[2rem] md:aspect-[4/5] md:w-[min(28rem,42%)]">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 448px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-orange">{study.label}</p>
              <h3 className="mt-3 max-w-md text-2xl font-bold leading-snug tracking-tight text-charcoal sm:text-[1.75rem] md:text-[2rem] md:leading-tight">
                {study.title}
              </h3>
              <div className="mt-6 space-y-5">
                {details.map((detail) => (
                  <div
                    key={detail.key}
                    className="border-l-2 border-orange pl-4"
                  >
                    <h4 className="text-[15px] font-bold text-charcoal">
                      {detail.title}
                    </h4>
                    <p className="mt-1 max-w-md text-sm leading-6 text-muted">
                      {study[detail.key]}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={study.href} variant="orange" arrow>
                  View Case Study
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
