import Image from "next/image";
import type { FCProps } from "@/types";
import { cn } from "@/lib/utils";
import { Hamburger } from "./ui/hamburger";

export const Header: FCProps = () => {
  return (
    <header className="bg-white flex h-20 w-full shadow-sm">
      <Image
        src="/koinx-logo.png"
        alt="KoinX"
        width={100}
        height={80}
        className="mx-6 lg:mx-14"
      />
      <div className="w-full flex-row-reverse flex items-center">
        <Hamburger />
        <HeaderButtons className="hidden lg:block mr-14 ml-8 bg-blue-gradient px-6 text-white hover:opacity-80">
          Get Started
        </HeaderButtons>
        <ul className="hidden lg:flex gap-2">
          {routes.map((route, key) => (
            <HeaderButtons key={key}>{route}</HeaderButtons>
          ))}
        </ul>
      </div>
    </header>
  );
};

const routes = ["Crypto Taxes", "Free Tools", "Resource Center"];

const HeaderButtons: FCProps = ({ children, className }) => {
  return (
    <button
      className={cn(
        "rounded-lg py-2 px-3 text-blue-1000 transition hover:bg-slate-200 motion-safe:duration-300",
        className
      )}
    >
      <h1 className="font-semibold">{children}</h1>
    </button>
  );
};
