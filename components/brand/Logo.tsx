import Image from "next/image";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-small.png"
      alt=""
      width={84}
      height={81}
      className={cn("h-11 w-auto", className)}
    />
  );
}

export function HeroMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-larg.png"
      alt=""
      width={688}
      height={660}
      className={cn("h-auto w-full", className)}
      preload
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-auto" />
      <p className="text-lg font-semibold tracking-[0.18em] text-white">
        LEAN <span className="text-orange">|</span> CREATE
      </p>
    </div>
  );
}
