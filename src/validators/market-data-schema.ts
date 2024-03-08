import { getPercentage } from "@/lib/utils";
import { z } from "zod";

export const marketValueSchema = z
  .object({
    coinResponse: z.object({
      name: z.string(),
      symbol: z.string(),
      market_cap_rank: z.number(),
      image: z.object({
        small: z.string(),
      }),
    }),
    marketResponse: z.object({
      usd: z.number(),
      usd_market_cap: z.number(),
      usd_24h_vol: z.number(),
      usd_24h_change: z.number(),
      inr: z.number(),
      inr_market_cap: z.number(),
      inr_24h_vol: z.number(),
      inr_24h_change: z.number(),
    }),
  })
  .transform(({ coinResponse, marketResponse }) => ({
    name: coinResponse.name,
    symbol: coinResponse.symbol,
    rank: coinResponse.market_cap_rank,
    logo: coinResponse.image.small,
    value: {
      usd: marketResponse.usd,
      inr: marketResponse.inr,
    },
    marketCap: {
      usd: marketResponse.usd_market_cap,
      inr: marketResponse.inr_market_cap,
    },
    vol: {
      usd: marketResponse.usd_24h_vol,
      inr: marketResponse.inr_24h_vol,
    },
    change: {
      usd: getPercentage(marketResponse.usd_24h_change),
      inr: getPercentage(marketResponse.inr_24h_change),
    },
    hike: marketResponse.usd_24h_change >= 0,
  }));

export type IMarketValue = z.infer<typeof marketValueSchema>;
