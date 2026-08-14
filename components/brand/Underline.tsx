import { cn } from "@/lib/cn";

export function ScribbleUnderline({
  className,
  variant = "wide",
}: {
  className?: string;
  variant?: "wide" | "accent";
}) {
  if (variant === "accent") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/assets/underline.svg"
        alt=""
        aria-hidden="true"
        className={cn(
          "pointer-events-none max-w-none select-none",
          className,
        )}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 180 14"
      className={className}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M3 9.5c28-6.5 52 4 88-1.5 28-4.2 52-7 86 1.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
