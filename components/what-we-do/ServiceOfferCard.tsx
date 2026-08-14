"use client";

import { useState } from "react";

export function ServiceOfferCard({
  title,
  icon,
  body,
  preview,
}: {
  title: string;
  icon: string;
  body: string;
  preview?: string;
}) {
  const [open, setOpen] = useState(false);
  const truncated = Boolean(preview) && !open;

  return (
    <article className="h-full rounded-[1.5rem] bg-cream p-7 md:p-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        width={70}
        height={70}
        className="h-12 w-12 object-contain"
      />
      <h3 className="mt-5 text-xl font-bold tracking-tight text-charcoal">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">
        {truncated ? preview : body}
        {truncated ? (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="font-bold text-charcoal transition-colors hover:text-orange"
            >
              Read more
            </button>
          </>
        ) : null}
      </p>
    </article>
  );
}
