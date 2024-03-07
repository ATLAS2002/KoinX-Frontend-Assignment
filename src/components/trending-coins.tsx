"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import type { FCProps, ITrendingCoinData } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Triangle } from "./ui/triangle";
import { cn } from "@/lib/utils";

const variant = [
  "bg-failure-base text-failure-primary selection:bg-red-200",
  "bg-success-base text-success-primary selection:bg-emerald-200",
];

export const TrendingCoins: FCProps = () => {
  const { isPending, error, data } = useQuery<ITrendingCoinData | null>({
    queryKey: ["trending-coins"],
    queryFn: () => api.getTrendingCoins(),
  });

  if (isPending) {
    return "Loading...";
  }

  if (error || !data) {
    return;
  }

  return (
    <div className="bg-white p-6 rounded-xl selection:bg-stone-200">
      <h1 className="font-semibold text-2xl ml-2">Trending Coins (24h)</h1>
      <ul className="flex flex-col gap-3 mt-5">
        {data
          .slice(0, 3)
          .map(({ id, name, logo, symbol, price: { hike, change } }) => (
            <TrendingCoinRow
              key={id}
              logo={logo}
              symbol={symbol}
              hike={hike}
              change={change}
            >
              {name}
            </TrendingCoinRow>
          ))}
      </ul>
    </div>
  );
};

const TrendingCoinRow: FCProps<{
  logo: string;
  symbol: string;
  hike: boolean;
  change: string;
}> = ({ children, logo, symbol, hike, change }) => (
  <li className="flex justify-between items-center">
    <div className="flex items-center">
      <Avatar className="scale-75">
        <AvatarImage src={logo} />
        <AvatarFallback>{symbol[0]}</AvatarFallback>
      </Avatar>
      <h3>
        {children} ({symbol})
      </h3>
    </div>
    <div
      className={cn(
        "h-5/6 min-w-24 flex items-center justify-around gap-1 font-semibold px-2 py-1 rounded",
        variant[hike ? 1 : 0]
      )}
    >
      <Triangle hike={hike} className="mx-1" />
      {change}
    </div>
  </li>
);
