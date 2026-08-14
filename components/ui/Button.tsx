import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  dark: "bg-charcoal text-white hover:bg-black",
  muted: "bg-[#2a2a2a] text-white hover:bg-[#333333]",
  orange: "bg-orange text-white hover:bg-orange-hover",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-charcoal",
  stroke:
    "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white",
  ghost: "text-white hover:text-white/80",
} as const;

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "dark",
  arrow,
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out disabled:opacity-60 hover:scale-[1.03] active:scale-[0.98]",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.4}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
