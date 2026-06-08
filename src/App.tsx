import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Sleep } from "@/components/sections/Sleep";
import { HeartHealth } from "@/components/sections/HeartHealth";
import { AICoach } from "@/components/sections/AICoach";
import { Sports } from "@/components/sections/Sports";
import { FamilyCare } from "@/components/sections/FamilyCare";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { useSeo } from "@/hooks/useSeo";

function App() {
  useSeo({
    title: "PulzFit 1 — The Most Advanced AI Health Bracelet",
    description:
      "PulzFit 1 is the next-generation AI health bracelet delivering advanced health insights, recovery tracking, and wellness intelligence through continuous monitoring. Know Your Body. Improve Your Life.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "PulzFit 1",
      description:
        "The most advanced AI health bracelet for complete wellness monitoring.",
      brand: { "@type": "Brand", name: "PulzFit" },
      offers: {
        "@type": "Offer",
        price: "349",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5000",
      },
    },
  });

  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Sleep />
        <HeartHealth />
        <AICoach />
        <Sports />
        <FamilyCare />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
