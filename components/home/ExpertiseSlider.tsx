"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { services } from "@/lib/site";

const GAP = 24;
const INTERVAL = 3800;

export function ExpertiseSlider() {
  const reduce = useReducedMotion();
  const firstCardRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(328);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  const slides = [...services, ...services];

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.getBoundingClientRect().width);
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
    if (index < services.length) return;
    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);
    return () => window.clearTimeout(timeout);
  }, [index]);

  const offset = index * (cardWidth + GAP);

  return (
    <div
      className="mt-12 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex"
        style={{
          gap: GAP,
          paddingLeft: "max(1.25rem, calc((100% - 80rem) / 2 + 1.25rem))",
          paddingRight: "1.25rem",
          transform: `translate3d(-${offset}px, 0, 0)`,
          transition: animate ? "transform 0.7s cubic-bezier(0.16, 0.84, 0.24, 1)" : "none",
        }}
      >
        {slides.map((service, i) => (
          <article
            key={`${service.title}-${i}`}
            ref={i === 0 ? firstCardRef : undefined}
            className="flex w-[min(20.5rem,82vw)] shrink-0 flex-col overflow-hidden rounded-[1.5rem] bg-cream md:w-[min(22rem,calc((100vw-6rem)/3.15))]"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pt-5 pb-5">
              <h3 className="text-xl font-bold tracking-tight text-charcoal">
                {service.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
