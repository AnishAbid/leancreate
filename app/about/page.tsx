import type { Metadata } from "next";
import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutHowWeWork } from "@/components/about/AboutHowWeWork";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutNetwork } from "@/components/about/AboutNetwork";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lean Create is a strategy and technology consultancy. We start with your challenge, then bring the expertise required to resolve it.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" />
      <AboutIntro />
      <AboutFounder />
      <AboutNetwork />
      <AboutHowWeWork />
    </>
  );
}
