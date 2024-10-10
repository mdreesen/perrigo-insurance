import Image from "next/image";

// Import components
import Hero from '@/components/Hero';
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <section>
        <Hero/>
      </section>
      <section>
        <WhatWeOffer/>
      </section>
    </div>
  );
}
