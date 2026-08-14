"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { insightCategories, insights } from "@/lib/site";

export function Insights() {
  const [active, setActive] = useState<(typeof insightCategories)[number]>("All");
  const items =
    active === "All"
      ? insights
      : insights.filter((item) => item.category === active);

  return (
    <section className="bg-cream">
      <Container className="py-20 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-charcoal sm:text-4xl md:text-[2.5rem]">
          Ideas, Perspectives And Practical{" "}
          <span className="relative inline-block pb-3">
            Thinking.
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
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {insightCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-charcoal text-white"
                    : "border border-charcoal bg-white text-charcoal hover:bg-charcoal hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title}>
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.excerpt}</p>
              <div className="mt-5">
                <Button
                  href={item.href}
                  variant="stroke"
                  arrow
                  className="px-4 py-1.5 text-[13px]"
                >
                  Read more
                </Button>
              </div>
            </article>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted">
            No articles in this category yet.
          </p>
        ) : null}
        <div className="mt-12 text-center">
          <Button href="/insights" variant="orange" arrow>
            Explore All Insights
          </Button>
        </div>
      </Container>
    </section>
  );
}
