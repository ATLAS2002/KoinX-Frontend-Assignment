"use client";

import { AboutSection } from "@/components/about";
import { PriceChart } from "@/components/price-chart";
import { Sentiment } from "@/components/sentiment";

export default function CoinPage() {
  return (
    <main className="flex flex-col gap-6">
      <PriceChart />
      <Sentiment />
      <AboutSection />
    </main>
  );
}
