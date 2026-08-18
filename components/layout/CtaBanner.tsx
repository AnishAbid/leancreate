import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  title: string;
  underline?: string;
  eyebrow?: string;
  buttonLabel: string;
  href?: string;
  tone?: "orange" | "dark";
  className?: string;
};

export function CtaBanner({
  title,
  underline,
  eyebrow,
  buttonLabel,
  href = "/contact",
  tone = "orange",
  className,
}: CtaBannerProps) {
  const parts = underline ? title.split(underline) : [title];

  return (
    <Container className={className}>
      <Reveal>
        <div
        className={cn(
          "rounded-[2rem] px-6 py-14 text-center transition-transform duration-500 ease-out hover:scale-[1.01] sm:px-12 md:py-16",
          tone === "orange" ? "hero-wash bg-grid-light" : "bg-charcoal",
        )}
      >
        {eyebrow ? (
          <p className="text-[24px] text-white">{eyebrow}</p>
        ) : null}
        <h2
          className={cn(
            "mx-auto max-w-3xl text-3xl tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-tight",
            underline ? "font-normal" : "font-bold",
            eyebrow ? "mt-4" : "",
          )}
        >
          {parts[0]}
          {underline ? (
            <span className="relative inline-block pb-3 font-bold">
              {underline}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/underline.svg"
                alt=""
                width={357}
                height={17}
                className="pointer-events-none absolute bottom-0 left-0 h-[12px] w-full select-none brightness-0"
              />
            </span>
          ) : null}
          {parts[1] ?? ""}
        </h2>
        <div className="mt-8">
          <Button
            href={href}
            arrow
            variant={tone === "orange" ? "dark" : "orange"}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
      </Reveal>
    </Container>
  );
}
