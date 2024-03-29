import { localAPI as api } from "@/api";
import { cn } from "@/lib/utils";
import type { DecisionProps, FCProps } from "@/types";

const styles: Record<string, string> = {
  buy: "bg-green-base text-green-secondary",
  hold: "bg-white-base text-grey",
  sell: "bg-red-base text-red-secondary",
};

const getMajorityVotes = ({ buy, hold, sell }: DecisionProps) => {
  const highestVotes = Math.max(buy, hold, sell);

  switch (highestVotes) {
    case buy:
      return { majority: "buy", highestVotes };
    case hold:
      return { majority: "hold", highestVotes };
    default:
      return { majority: "sell", highestVotes };
  }
};

export const AnalystEstimates: FCProps = () => {
  const data = api.getAnalystEstimates();
  const { highestVotes, majority } = getMajorityVotes(data);
  return (
    <div className="flex md:gap-8 px-3 md:px-6 items-center mb-4">
      <div
        className={cn(
          "w-20 md:w-36 p-3 md:p-0 md:pl-1 flex md:gap-1 items-center font-medium justify-center aspect-square rounded-full",
          styles[majority]
        )}
      >
        <h1 className="text-xl md:text-4xl">{highestVotes}</h1>
        <span className="text-xs md:text-base">%</span>
      </div>
      <ul className="flex flex-col ml-5 gap-1 md:gap-3 justify-evenly h-full w-full">
        {Object.entries(data).map(([label, value], id) => (
          <li
            key={id}
            className="text-grey-600 flex items-center text-xs md:text-base"
          >
            <h1 className="min-w-10 md:min-w-12">
              {label[0].toUpperCase().concat(label.slice(1))}
            </h1>
            <ProgressBar
              className="h-1 md:hidden"
              label={label}
              value={value}
              factor={1.5}
            />
            <ProgressBar
              className="h-2 hidden md:block"
              label={label}
              value={value}
              factor={5}
            />
            <h1 className="mx-2">{value}%</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProgressBar: FCProps<{
  factor: number;
  value: number;
  label: string;
}> = ({ className, factor, value, label }) => {
  return (
    <div
      style={{
        width: value * factor,
      }}
      className={cn(
        `${
          label === "buy"
            ? "bg-green-primary"
            : label === "sell"
            ? "bg-red-secondary"
            : "bg-grey-200"
        } rounded-sm`,
        className
      )}
    />
  );
};
