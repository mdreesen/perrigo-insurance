import Image from "next/image";

// Import components
import Hero from '@/components/Hero';
import WhatWeOffer from "@/components/WhatWeOffer";
import Benefits from '@/components/Benefits';
import Contact from "@/components/Contact";
import Calendly from "@/components/Calendly";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <WhatWeOffer />
      <Benefits />
      <Contact />
    </div>
  );
}
