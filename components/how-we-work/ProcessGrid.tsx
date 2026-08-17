"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorksSteps } from "@/lib/site";

const R = 16;

function snakePath(
  points: { x: number; y: number }[],
  width: number,
): string {
  if (points.length !== 9) return "";

  const [p0, p1, p2, p3, p4, p5, p6, p7, p8] = points;
  const turnRight = width - 4;
  const turnLeft = 4;

  const roundRight = (from: { y: number }, to: { y: number }) => {
    const x = turnRight;
    return `L ${x - R} ${from.y} Q ${x} ${from.y} ${x} ${from.y + R} L ${x} ${to.y - R} Q ${x} ${to.y} ${x - R} ${to.y}`;
  };

  const roundLeft = (from: { y: number }, to: { y: number }) => {
    const x = turnLeft;
    return `L ${x + R} ${from.y} Q ${x} ${from.y} ${x} ${from.y + R} L ${x} ${to.y - R} Q ${x} ${to.y} ${x + R} ${to.y}`;
  };

  return [
    `M ${p0.x} ${p0.y}`,
    `L ${p1.x} ${p1.y}`,
    `L ${p2.x} ${p2.y}`,
    roundRight(p2, p5),
    `L ${p5.x} ${p5.y}`,
    `L ${p4.x} ${p4.y}`,
    `L ${p3.x} ${p3.y}`,
    roundLeft(p3, p6),
    `L ${p6.x} ${p6.y}`,
    `L ${p7.x} ${p7.y}`,
    `L ${p8.x} ${p8.y}`,
  ].join(" ");
}

export function ProcessGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const box = wrap.getBoundingClientRect();
    const pts = iconRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - box.left,
        y: r.top + r.height / 2 - box.top,
      };
    });
    if (pts.some((p) => !p)) return;
    setSize({ w: box.width, h: box.height });
    setPath(snakePath(pts as { x: number; y: number }[], box.width));
  }, []);

  useEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(wrap);
    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 200);
    const t2 = window.setTimeout(measure, 800);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  return (
    <div ref={wrapRef} className="relative mt-14 lg:px-5">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[15] hidden text-orange lg:block"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
        fill="none"
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16">
        {howItWorksSteps.map((step, index) => (
          <Reveal key={step.num} delay={index * 0.04} className="h-full">
            <article className="relative flex h-full flex-col pt-7">
              <div className="absolute top-0 left-0 z-20 flex h-14 w-full items-center">
                <span
                  ref={(el) => {
                    iconRefs.current[index] = el;
                  }}
                  className="relative z-10 ml-6 inline-flex size-14 items-center justify-center rounded-full border border-orange bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.icon}
                    alt=""
                    width={50}
                    height={50}
                    className="h-10 w-10 object-contain"
                  />
                </span>
              </div>
              <div className="relative z-10 flex h-full flex-col rounded-[1.5rem] bg-cream px-6 pb-7 pt-10 md:px-8 md:pb-8">
                <h3 className="text-lg font-bold tracking-tight text-charcoal">
                  {step.num}. {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
                <p className="mt-4 text-sm leading-7 text-muted italic">
                  What you receive: {step.receive}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
