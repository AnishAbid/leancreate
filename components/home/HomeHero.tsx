"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 0.84, 0.24, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const hide = reduce ? false : { opacity: 0, y: 24 };

  return (
    <section className="hero-wash bg-grid-light relative overflow-hidden">
      <Container className="relative grid items-center gap-12 pt-36 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:pt-40 lg:pb-24">
        <div className="relative z-10">
          <motion.h1
            initial={hide}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="max-w-none text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            From Idea To
            <br />
            Execution. And
            <br />
            <span className="whitespace-nowrap">
              <span className="relative inline-block pb-4">
                Everything
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/underline.svg"
                  alt=""
                  width={357}
                  height={17}
                  className="pointer-events-none absolute bottom-0 left-0 h-[17px] w-full select-none brightness-0"
                />
              </span>{" "}
              In Between.
            </span>
          </motion.h1>
          <motion.p
            initial={hide}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-2xl text-base leading-7 text-white md:text-[1.05rem] md:leading-8"
          >
            Lean Create is a strategy, innovation, and technology consultancy.
            We
            <br />
            help organizations plan smarter, build faster, provide experts who
            work
            <br />
            efficiently and adopt AI that actually works. Advice is where we
            start, not
            <br />
            where we stop.
          </motion.p>
          <motion.div
            initial={hide}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-8"
          >
            <Button href="/contact" arrow>
              Tell Us Your Challenge
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
          className="hero-float mx-auto w-full max-w-md lg:max-w-none lg:translate-x-10 lg:translate-y-12 lg:scale-[1.15]"
        >
          <HeroMark />
        </motion.div>
      </Container>
    </section>
  );
}
