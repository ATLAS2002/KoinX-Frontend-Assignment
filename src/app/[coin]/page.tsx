"use client";

import { AboutSection } from "@/components/about";
import { Sentiment } from "@/components/sentiment";

export default function CoinPage() {
  return (
    <main className="flex flex-col gap-6">
      <Sentiment />
      <AboutSection />
    </main>
  );
}
