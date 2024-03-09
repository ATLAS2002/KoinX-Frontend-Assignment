import { FCProps, ITrendingCoinData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { cryptoAPI as api } from "@/api";

interface ITrendingCoinContext {
  data: ITrendingCoinData | null | undefined;
  error: Error | null;
  isPending: boolean;
}

const defaultValue = {
  data: [],
  error: null,
  isPending: true,
};

const TrendingCoinContext = createContext<ITrendingCoinContext>(defaultValue);

export const TrendingCoinProvider: FCProps = ({ children }) => {
  const { isPending, error, data } = useQuery<ITrendingCoinData | null>({
    queryKey: ["trending-coins"],
    queryFn: () => api.getTrendingCoins(),
  });

  return (
    <TrendingCoinContext.Provider value={{ data, error, isPending }}>
      {children}
    </TrendingCoinContext.Provider>
  );
};

export const useTrendingCoinData = () => useContext(TrendingCoinContext);
