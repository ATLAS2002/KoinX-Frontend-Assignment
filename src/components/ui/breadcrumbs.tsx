"use client";

import { useMarketData } from "@/context/market-data-provider";
import { FCProps } from "@/types";
import { ChevronsRight } from "lucide-react";

export const BreadCrumbs: FCProps = () => {
  const { data } = useMarketData();
  if (!data) return;

  return (
    <h1 className="absolute px-12 py-3 text-grey-400">
      Cryptocurrencies
      <ChevronsRight className="inline scale-90" />
      <span className="text-grey-700 font-medium">{data.name}</span>
    </h1>
  );
};
