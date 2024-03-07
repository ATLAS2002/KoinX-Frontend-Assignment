import { cn } from "@/lib/utils";
import { FCProps } from "@/types";

export const Hamburger: FCProps = ({ className }) => {
  return (
    <button
      className={cn(
        "lg:hidden scale-150 mr-6 p-2 rounded-full transition hover:bg-slate-200 motion-safe:duration-300",
        className
      )}
    >
      <div className="w-5 h-[2px] bg-blue-1100 mt-1" />
      <div className="w-5 h-[2px] bg-blue-1100 my-1" />
      <div className="w-5 h-[2px] bg-blue-1100 mb-1" />
    </button>
  );
};
