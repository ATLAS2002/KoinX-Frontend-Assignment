import Image from "next/image";
import { FCProps } from "@/types";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useMarketData } from "@/context/market-data-provider";

export const AboutSection: FCProps = () => {
  const { data } = useMarketData();

  return (
    <section className="flex flex-col gap-4 bg-white p-6 rounded-lg pb-12">
      <h1 className="font-semibold text-2xl">
        About {data?.name ?? "Cryptocurrency"}
      </h1>
      <h2 className="text-xl font-semibold">
        What is {data?.name ?? "Bitcoin"}?
      </h2>
      <p>
        Bitcoin’s price today is US$
        {data?.value.usd.toLocaleString() ?? "16,951.82"}, with a 24-hour
        trading volume of ${data?.vol.usd.toLocaleString() ?? "19.14 B"}.{" "}
        {data?.symbol ?? "BTC"} is {data?.hike ? "+" : "-"}
        {data?.change.usd ?? "0.36"}% in the last 24 hours. It is currently
        -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
        7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24
        M BTC and a max supply of 21 M BTC.
      </p>
      <Separator />
      <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet</h2>
      <div className="flex flex-col gap-6">
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
        <Separator />
        <h1 className="font-semibold text-2xl">
          Already Holding {data?.name ?? "Crypto"}?
        </h1>
        <div className="flex-row md:flex gap-8">
          <Card image="/image-1.png" className="bg-green-gradient mb-3 md:mb-0">
            Calculate you Profits
          </Card>
          <Card
            image="/image-2.png"
            className="bg-orange-gradient mt-3 md:mt-0"
          >
            Calculate you tax liability
          </Card>
        </div>
        <Separator />
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </section>
  );
};

const Card: FCProps<{
  image: string;
}> = ({ children, className, image }) => {
  return (
    <div className={cn("flex p-3 w-full rounded-lg", className)}>
      <div className="w-1/3 aspect-square relative">
        <Image src={image} alt="placeholder" fill className="absolute" />
      </div>
      <div className="py-4 px-8 w-2/3">
        <h1 className="text-xl text-white font-bold mb-3">{children}</h1>
        <button className="flex items-center group gap-1 text-sm text-blue-1000 bg-white-off px-3 py-1 font-semibold rounded-lg selection:bg-slate-300">
          Check Now
          <ArrowRight className="scale-75 group-hover:translate-x-2 transition motion-safe:duration-300" />
        </button>
      </div>
    </div>
  );
};
