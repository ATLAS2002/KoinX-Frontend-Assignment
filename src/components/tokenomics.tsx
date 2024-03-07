import { FCProps } from "@/types";
import { DonutPieChart } from "./ui/donut-pie-chart";
import { localAPI } from "@/api";

export const Tokenomics: FCProps = () => {
  const data = localAPI.getInitialDistribution();

  return (
    <section className="flex flex-col bg-white p-6 pb-12 gap-6 rounded-lg">
      <h1 className="font-semibold text-2xl">Tokenomics</h1>
      <h2 className="text-xl font-semibold flex gap-2 items-center">
        Initial Distribution
      </h2>
      <div>
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
      <p>
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
