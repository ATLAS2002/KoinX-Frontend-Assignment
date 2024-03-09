"use client";

import type { FCProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Triangle } from "./ui/triangle";
import { cn } from "@/lib/utils";
import { useTrendingCoinData } from "@/context/trending-coin-provider";

const variant = [
  "bg-red-base text-red-primary selection:bg-red-200",
  "bg-green-base text-green-primary selection:bg-emerald-200",
];

export const TrendingCoins: FCProps = () => {
  const { isPending, error, data } = useTrendingCoinData();
  if (isPending || error || !data) return;

  return (
    <div className="bg-white p-3 md:p-6 rounded-xl selection:bg-stone-200">
      <h1 className="font-semibold text-lg md:text-2xl ml-2">
        Trending Coins (24h)
      </h1>
      <ul className="flex flex-col gap-3 mt-2 md:mt-5">
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
      <Avatar className="scale-[0.6] md:scale-75">
        <AvatarImage src={logo} />
        <AvatarFallback>{symbol[0]}</AvatarFallback>
      </Avatar>
      <h3 className="text-xs md:text-base">
        {children} ({symbol})
      </h3>
    </div>
    <div
      className={cn(
        "h-5/6 scale-75 md:scale-100 min-w-24 flex items-center justify-around gap-1 font-semibold px-2 py-1 rounded",
        variant[hike ? 1 : 0]
      )}
    >
      <Triangle hike={hike} className="mx-1" />
      {change}
    </div>
  </li>
);
