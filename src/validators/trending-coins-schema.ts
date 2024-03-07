import { getPercentage } from "@/lib/utils";
import { z } from "zod";

const trendingCoinSchema = z
  .object({
    coins: z.array(
      z.object({
        item: z.object({
          id: z.string(),
          name: z.string(),
          symbol: z.string(),
          thumb: z.string(),
          data: z.object({
            price: z.string(),
            price_change_percentage_24h: z.object({
              usd: z.number(),
            }),
            sparkline: z.string(),
          }),
        }),
      })
    ),
  })
  .transform((data) =>
    data.coins.map(({ item }) => ({
      id: item.id,
      name: item.name,
      logo: item.thumb,
      symbol: item.symbol,
      price: {
        value: item.data.price,
        hike: item.data.price_change_percentage_24h.usd >= 0,
        change: getPercentage(item.data.price_change_percentage_24h.usd),
      },
      sparkline: item.data.sparkline,
    }))
  );

export type ITrendingCoinData = z.infer<typeof trendingCoinSchema>;

export const validateTrendingCoinData = (
  rawData: unknown
): ITrendingCoinData | null => {
  try {
    const data = trendingCoinSchema.parse(rawData);
    return data;
  } catch (err) {
    console.error(
      "[VALIDATION] Trending Coin data does not match the schema:",
      err
    );
    return null;
  }
};
