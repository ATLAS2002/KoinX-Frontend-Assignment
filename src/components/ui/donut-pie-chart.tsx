"use client";

import { PieChart, type PieChartProps } from "@mui/x-charts/PieChart";

export const DonutPieChart = (props: PieChartProps) => {
  return (
    <PieChart
      slotProps={{
        legend: {
          itemGap: 40,
        },
      }}
      {...props}
    />
  );
};
