import { FCProps } from "@/types";
import { Bitcoin, Handshake, Info, Newspaper, TrendingUp } from "lucide-react";
import { AnalystEstimates } from "./analyst-estimates";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "@/lib/utils";

export const Sentiment: FCProps = () => {
  return (
    <section className="flex flex-col gap-4 bg-white p-6 rounded-lg">
      <h1 className="font-semibold text-2xl">Sentiment</h1>
      <h2 className="text-xl font-semibold flex gap-2 items-center text-grey-700">
        Key Events <Info />
      </h2>
      <Carousel>
        <CarouselContent className="flex pl-5 gap-4">
          <Item className="bg-blue-base">
            <Newspaper className="bg-blue-secondary text-white box-content p-4 rounded-full scale-90" />
          </Item>
          <Item className="bg-green-base">
            <TrendingUp className="bg-green-secondary text-white box-content p-4 rounded-full scale-90" />
          </Item>
          <Item className="bg-yellow-100">
            <Bitcoin className="bg-yellow-500 text-white box-content p-4 rounded-full scale-90" />
          </Item>
          <Item className="bg-purple-100">
            <Handshake className="bg-purple-500 text-white box-content p-4 rounded-full scale-90" />
          </Item>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h2 className="text-xl font-semibold mt-3 flex gap-2 items-center text-grey-700">
        Analyst Estimates <Info />
      </h2>
      <AnalystEstimates />
    </section>
  );
};

const Item: FCProps = ({ children, className }) => {
  return (
    <CarouselItem
      className={cn(
        "sm:basis-4/5 md:basis-1/2 flex justify-between rounded-lg p-8 pt-4 pl-4",
        className
      )}
    >
      {children}
      <article className="w-5/6 flex flex-col gap-3">
        <h1 className="text-sm text-grey-900">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h1>
        <p className="text-xs md:text-sm text-grey-600">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </article>
    </CarouselItem>
  );
};
