"use client";

import { FCProps } from "@/types";
import { ReactQueryProvider } from "./react-query-provider";
import { TrendingCoinProvider } from "./trending-coin-provider";
import { MarketDataProvider } from "./market-data-provider";

export const Provider: FCProps = ({ children }) => {
  return (
    <ReactQueryProvider>
      <TrendingCoinProvider>
        <MarketDataProvider>{children}</MarketDataProvider>
      </TrendingCoinProvider>
    </ReactQueryProvider>
  );
};
