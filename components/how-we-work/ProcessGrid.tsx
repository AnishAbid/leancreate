"use client";

import {
  ClipboardList,
  FolderUp,
  Gauge,
  Lightbulb,
  MessagesSquare,
  RefreshCw,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorksSteps } from "@/lib/site";

const icons: Record<(typeof howItWorksSteps)[number]["icon"], LucideIcon> = {
  search: Lightbulb,
  plan: ClipboardList,
  setup: Workflow,
  team: Users,
  execute: MessagesSquare,
  target: Target,
  scope: RefreshCw,
  handover: FolderUp,
  measure: Gauge,
};

export function ProcessGrid() {
  return (
    <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-16">
      {howItWorksSteps.map((step, index) => {
        const Icon = icons[step.icon];
        const col = index % 3;

        return (
          <Reveal key={step.num} delay={index * 0.04} className="h-full">
            <article className="relative flex h-full flex-col pt-7">
              {index === 2 || index === 3 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-7 left-[3.25rem] z-0 hidden h-[calc(100%+4.25rem)] w-px bg-orange lg:block"
                />
              ) : null}
              <div className="absolute top-0 left-0 z-20 flex h-14 w-full items-center">
                {col !== 0 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 right-[calc(100%-3.25rem)] hidden h-px w-[calc(3.25rem+0.625rem)] bg-orange lg:block"
                  />
                ) : null}
                {col !== 2 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-[3.25rem] hidden h-px w-[calc(100%-3.25rem+0.625rem)] bg-orange lg:block"
                  />
                ) : null}
                <span className="relative z-10 ml-6 inline-flex size-14 items-center justify-center rounded-full border border-orange bg-white text-orange">
                  <Icon className="size-6" strokeWidth={1.6} />
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
        );
      })}
    </div>
  );
}
