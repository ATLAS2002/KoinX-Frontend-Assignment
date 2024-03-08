import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { cryptoAPI as api } from "@/api";
import type { FCProps, IMarketValue } from "@/types";

const MarketDataContext = createContext<{
  data: IMarketValue | null | undefined;
  error: Error | null;
  isPending: boolean;
}>({
  data: null,
  error: null,
  isPending: true,
});

export const MarketDataProvider: FCProps = ({ children }) => {
  const coinId = usePathname().split("/")[1];
  const { isPending, error, data } = useQuery<IMarketValue | null>({
    queryKey: ["market-data"],
    queryFn: () => api.getMarketData(coinId),
  });

  return (
    <MarketDataContext.Provider value={{ data, error, isPending }}>
      {children}
    </MarketDataContext.Provider>
  );
};

export const useMarketData = () => useContext(MarketDataContext);
