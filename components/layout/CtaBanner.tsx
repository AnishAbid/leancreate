import { Reveal } from "@/components/motion/Reveal";
import { ScribbleUnderline } from "@/components/brand/Underline";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type CtaBannerProps = {
  title: string;
  underline?: string;
  buttonLabel: string;
  href?: string;
  tone?: "orange" | "dark";
  className?: string;
};

export function CtaBanner({
  title,
  underline,
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
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.6rem] md:leading-tight">
          {parts[0]}
          {underline ? (
            <span className="relative inline-block">
              {underline}
              <ScribbleUnderline className="absolute -bottom-1 left-0 h-3 w-full text-charcoal" />
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
