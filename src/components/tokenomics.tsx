import { FCProps } from "@/types";
import { DonutPieChart } from "./ui/donut-pie-chart";
import { localAPI } from "@/api";

export const Tokenomics: FCProps = () => {
  const data = localAPI.getInitialDistribution();

  return (
    <section className="flex flex-col bg-white p-3 pb-6 md:p-6 md:pb-12 gap-3 md:gap-6 rounded-lg">
      <h1 className="font-semibold text-lg md:text-2xl">Tokenomics</h1>
      <h2 className="text-sm md:text-xl font-semibold text-grey-700">
        Initial Distribution
      </h2>
      <div className="md:hidden -translate-x-8">
        <DonutPieChart
          series={[
            {
              data,
              innerRadius: 60,
              outerRadius: 90,
            },
          ]}
          margin={{ bottom: 50, left: 75 }}
          width={375}
          height={250}
          slotProps={{
            legend: {
              direction: "row",
              position: {
                vertical: "bottom",
                horizontal: "middle",
              },
            },
          }}
        />
      </div>
      <div className="hidden md:block">
        <DonutPieChart
          series={[
            {
              data,
              innerRadius: 60,
              outerRadius: 90,
            },
          ]}
          margin={{ right: 250 }}
          width={450}
          height={180}
        />
      </div>
      <p className="text-xs md:text-base">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </section>
  );
};
