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
    <section className="flex flex-col gap-2 md:gap-4 bg-white py-3 md:py-6 rounded-lg">
      <h1 className="font-semibold text-lg md:text-2xl px-3 md:px-6">
        Sentiment
      </h1>
      <h2 className="text-sm md:text-xl font-semibold flex px-3 md:px-6 gap-1 md:gap-2 items-center text-grey-700">
        Key Events <Info className="w-4 h-4 md:w-6 md:h-6" />
      </h2>
      <Carousel className="md:px-6">
        <CarouselContent className="flex pl-6 md:px-4 gap-2 md:gap-4 mb-3">
          <Item className="bg-blue-base" iconColor="bg-blue-secondary">
            <Newspaper className="w-full h-full text-white box-content" />
          </Item>
          <Item className="bg-green-base" iconColor="bg-green-secondary">
            <TrendingUp className="w-full h-full text-white box-content" />
          </Item>
          <Item className="bg-yellow-100" iconColor="bg-yellow-500">
            <Bitcoin className="w-full h-full text-white box-content" />
          </Item>
          <Item className="bg-purple-100" iconColor="bg-purple-500">
            <Handshake className="w-full h-full text-white box-content" />
          </Item>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <h2 className="text-sm md:text-xl font-semibold flex px-3 md:px-6 gap-1 md:gap-2 items-center text-grey-700">
        Analyst Estimates <Info className="w-4 h-4 md:w-6 md:h-6" />
      </h2>
      <AnalystEstimates />
    </section>
  );
};

const Item: FCProps<{ iconColor: string }> = ({
  children,
  className,
  iconColor,
}) => {
  return (
    <CarouselItem
      className={cn(
        "basis-5/6 sm:basis-4/5 md:basis-1/2 flex justify-between rounded-lg p-3 pb-6 pr-6 md:p-6 md:pb-8 md:pr-8",
        className
      )}
    >
      <div
        className={cn(
          "w-8 h-8 md:w-12 md:h-12 rounded-full p-2 md:p-3",
          iconColor
        )}
      >
        {children}
      </div>
      <article className="w-5/6 flex flex-col gap-1 md:gap-3">
        <h1 className="text-[0.6rem] md:text-sm text-grey-900">
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </h1>
        <p className="text-[0.5rem] md:text-sm text-grey-600">
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </article>
    </CarouselItem>
  );
};
