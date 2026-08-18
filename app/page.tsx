import { AudienceTags } from "@/components/home/AudienceTags";
import { HomeHero } from "@/components/home/HomeHero";
import { Principles } from "@/components/home/Principles";
import { Services } from "@/components/home/Services";
import { ServicesOffer } from "@/components/home/ServicesOffer";
import { ValueGrid } from "@/components/home/ValueGrid";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Principles />
      <ServicesOffer />
      <ValueGrid />
      <Services />
      <AudienceTags />
    </>
  );
}
