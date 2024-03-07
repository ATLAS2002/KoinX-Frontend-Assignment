"use client";

import { useTrendingCoinData } from "@/context/trending-coin-provider";
import { FCProps, ITrendingCoinData } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const variant = [
  "bg-red-base text-red-primary selection:bg-red-200",
  "bg-green-base text-green-primary selection:bg-emerald-200",
];

export const Recommendations: FCProps = () => {
  const { data, isPending, error } = useTrendingCoinData();

  if (isPending || error || !data) return;

  return (
    <section className="flex flex-col p-16 pb-12 gap-6 rounded-lg">
      <h1 className="font-semibold text-2xl">You May Also Like</h1>
      <CardCarousel data={data} />
      <h1 className="font-semibold text-2xl">Trending Coins</h1>
      <CardCarousel data={data} />
    </section>
  );
};

const CardCarousel: FCProps<{ data: ITrendingCoinData }> = ({ data }) => {
  return (
    <Carousel>
      <CarouselContent className="flex gap-4 pl-5">
        {data.map(({ id, ...props }) => (
          <Card key={id} props={props} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const Card: FCProps<{
  props: Omit<ITrendingCoinData[number], "id">;
}> = ({
  props: {
    symbol,
    logo,
    price: { value, hike, change },
    sparkline,
  },
}) => {
  return (
    <CarouselItem className="border-2 border-white-off w-1/6 aspect-[16/9] rounded-lg basis-1/5 p-3">
      <div className="flex items-center">
        <div className="flex gap-1 items-center">
          <Avatar className="scale-75">
            <AvatarImage src={logo} />
            <AvatarFallback>{symbol[0]}</AvatarFallback>
          </Avatar>
          <h3>{symbol}</h3>
        </div>
        <div
          className={cn(
            "h-5/6 flex items-center justify-around gap-1 text-xs p-1 rounded",
            variant[hike ? 1 : 0]
          )}
        >
          {hike ? "+" : "-"}
          {change}
        </div>
      </div>
      <h1 className="text-xl font-medium">{value}</h1>
      <div className="relative h-20 scale-90">
        <Image src={sparkline} alt={symbol} fill className="absolute" />
      </div>
    </CarouselItem>
  );
};
