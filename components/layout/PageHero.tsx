"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";

export function PageHero({ title }: { title: string }) {
  const reduce = useReducedMotion();

  return (
    <section className="hero-wash bg-grid-light">
      <Container className="flex min-h-[280px] items-end justify-center pb-16 pt-36 md:min-h-[340px] md:pb-20">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.84, 0.24, 1] }}
          className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
      </Container>
    </section>
  );
}
