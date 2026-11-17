import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Features } from "@/components/sections/Features";
import { Sleep } from "@/components/sections/Sleep";
import { HeartHealth } from "@/components/sections/HeartHealth";
import { AICoach } from "@/components/sections/AICoach";
import { Sports } from "@/components/sections/Sports";
import { FamilyCare } from "@/components/sections/FamilyCare";
import { Bands } from "@/components/sections/Bands";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Features />
      <Sleep />
      <HeartHealth />
      <AICoach />
      <Sports />
      <FamilyCare />
      <Bands />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  );
}
