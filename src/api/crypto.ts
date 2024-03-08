import type { ITrendingCoinData, IMarketValue } from "@/types";
import { validator, trendingCoinSchema, marketValueSchema } from "@/validators";
import axios, { type AxiosInstance } from "axios";

export class CryptoAPI {
  private readonly api: AxiosInstance;
  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async getTrendingCoins(): Promise<ITrendingCoinData | null> {
    try {
      const { status, data } = await this.api.get("/search/trending");
      if (status !== 200) return null;

      const trendingCoinData = validator<ITrendingCoinData>(
        trendingCoinSchema,
        data
      );
      if (!trendingCoinData) return null;

      return trendingCoinData;
    } catch (err) {
      console.log("Failed to get trending coin data");
      console.error(err);

      return null;
    }
  }

  async getMarketData(coinId: string): Promise<IMarketValue | null> {
    const coinDataPromise = this.api.get(`/coins/${coinId}`);
    const marketDataPromise = this.api.get("/simple/price", {
      params: {
        ids: coinId,
        vs_currencies: "usd,inr",
        include_market_cap: true,
        include_24hr_vol: true,
        include_24hr_change: true,
        precision: 2,
      },
    });

    return Promise.all([coinDataPromise, marketDataPromise])
      .then(([{ data: coinDataResponse }, { data: marketDataResponse }]) => {
        const data = validator<IMarketValue>(marketValueSchema, {
          coinResponse: coinDataResponse,
          marketResponse: (
            marketDataResponse as unknown as Record<string, unknown>
          )[coinId],
        });

        return data;
      })
      .catch((err) => {
        console.log("Failed to get coin data");
        console.error(err);

        return null;
      });
  }
}
