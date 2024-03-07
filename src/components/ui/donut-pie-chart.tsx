"use client";

import { PieChart, type PieChartProps } from "@mui/x-charts/PieChart";

export const DonutPieChart = (props: PieChartProps) => {
  return (
    <PieChart
      {...props}
      slotProps={{
        legend: {
          itemGap: 40,
        },
      }}
    />
  );
};
