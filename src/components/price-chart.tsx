import { FCProps } from "@/types";
import { default as TradingViewWidget } from "./ui/trading-view-widget";
import { useMarketData } from "@/context/market-data-provider";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Triangle } from "./ui/triangle";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const variant = [
  "bg-red-base text-red-primary selection:bg-red-200",
  "bg-green-base text-green-primary selection:bg-emerald-200",
];

export const PriceChart: FCProps = () => {
  const { data, error, isPending } = useMarketData();
  if (isPending || error || !data) return;

  return (
    <div>
      <CryptoHeader
        className="md:hidden"
        name={data.name}
        logo={data.logo}
        symbol={data.symbol}
        rank={data.rank}
      />
      <section className="flex flex-col gap-4 bg-white p-6 rounded-lg">
        <CryptoHeader
          className="hidden md:flex"
          name={data.name}
          logo={data.logo}
          symbol={data.symbol}
          rank={data.rank}
        />
        <div className="flex pl-2 scale-[0.85] -translate-x-8 md:translate-x-0 md:scale-100">
          <h1 className="text-4xl font-medium">
            ${data.value.usd.toLocaleString()}
            <span className="block text-lg my-1">
              ₹ {Math.round(data.value.inr).toLocaleString()}
            </span>
          </h1>
          <div
            className={cn(
              "h-5/6 ml-12 flex items-center justify-around gap-1 font-semibold px-2 py-1 rounded",
              variant[data.hike ? 1 : 0]
            )}
          >
            <Triangle hike={data.hike} className="mx-1" />
            {data.change.usd}
          </div>
          <p className="text-grey font-medium mx-4 my-1">(24H)</p>
        </div>
        <Separator />
        <div>
          <h3 className="font-medium">{data.name} Price Chart (USD)</h3>
          <TradingViewWidget symbol={data.symbol} className="h-full" />
        </div>
      </section>
    </div>
  );
};

const CryptoHeader: FCProps<{
  logo: string;
  name: string;
  symbol: string;
  rank: number;
}> = ({ logo, name, symbol, rank, className }) => {
  return (
    <div className={cn("flex items-center gap-2 mb-6", className)}>
      <Avatar>
        <AvatarImage src={logo} />
        <AvatarFallback>{symbol[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-grey-400 text-lg font-semibold">
        {symbol.toUpperCase()}
      </p>
      <div className="bg-slate-500 min-w-max max-w-max mx-10 scale-105 opacity-90 p-2 text-white font-medium rounded-md">
        Rank #{rank}
      </div>
    </div>
  );
};
