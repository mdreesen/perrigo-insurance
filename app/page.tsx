import Image from "next/image";

// Import components
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeOffer from "@/components/WhatWeOffer";
import Benefits from '@/components/Benefits';
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <WhoWeAre/>
      <Contact />
    </div>
  );
}
