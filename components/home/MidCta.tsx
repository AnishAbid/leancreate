import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function MidCta() {
  return (
    <Container className="pb-8 md:pb-12">
      <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-b-[2rem] px-6 py-16 text-center sm:px-12 md:min-h-[32rem] md:py-24">
        <Image
          src="/images/backgroundlayer.png"
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 80rem"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
              Not Sure What Kind Of Expert
              <br />
              You Need?{" "}
              <span className="relative inline-block pb-3">
                That&apos;s Okay.
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
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white md:text-base">
              Tell us what you&apos;re trying to solve. We&apos;ll help identify
              the right expertise, approach and next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="orange" arrow>
                Tell Us Your Challenge
              </Button>
              <Button href="/contact" variant="outline" arrow>
                Talk to Lean Create
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
