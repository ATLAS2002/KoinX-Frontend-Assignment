import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FCProps } from "@/types";

export const GetStartedCard: FCProps = () => {
  return (
    <div className="w-full flex flex-col gap-2 md:gap-4 items-center p-6 md:p-10 md:pb-16 rounded-2xl text-center bg-blue-primary text-white selection:bg-blue-secondary">
      <h1 className="font-bold text-base md:text-2xl md:leading-10 px-3 md:px-6 order-2">
        Get Started with KoinX for FREE
      </h1>
      <p className="text-xs md:text-sm order-3">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="relative w-1/2 aspect-square my-3 order-1 md:order-5">
        <Image
          src="/get-started-image.png"
          alt="get started"
          fill
          className="absolute"
        />
      </div>
      <button className="flex group gap-1 md:gap-2 order-5 text-blue-1000 bg-white text-xs md:text-base px-3 py-1 items-center md:px-6 md:py-3 mt-2 font-semibold rounded-lg selection:bg-slate-300">
        Get Started for FREE
        <ArrowRight className="scale-75 group-hover:translate-x-2 transition motion-safe:duration-300" />
      </button>
    </div>
  );
};
