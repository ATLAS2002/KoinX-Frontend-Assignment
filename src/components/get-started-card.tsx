import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FCProps } from "@/types";

export const GetStartedCard: FCProps = () => {
  return (
    <div className="w-full aspect-[426/515] flex flex-col gap-4 items-center p-10 rounded-2xl text-center bg-blue-primary text-white selection:bg-blue-secondary">
      <h1 className="font-bold text-2xl px-6">
        Get Started with KoinX for FREE
      </h1>
      <p className="text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image
        src="/get-started-image.png"
        alt="get started"
        width={200}
        height={200}
        className="mt-3 mb-1"
      />
      <button className="flex group gap-2 text-blue-1000 bg-white px-6 py-3 font-semibold rounded-lg selection:bg-slate-300">
        Get Started for FREE
        <ArrowRight className="scale-75 group-hover:translate-x-2 transition motion-safe:duration-300" />
      </button>
    </div>
  );
};
