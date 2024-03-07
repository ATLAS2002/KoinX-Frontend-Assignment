import type { DecisionProps, ITrendingCoinData } from "@/types";
import { validateTrendingCoinData } from "@/validators/trending-coins-schema";
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

  getAnalystEstimates(): DecisionProps {
    return {
      buy: 76,
      hold: 8,
      sell: 16,
    };
  }

  async getTrendingCoins(): Promise<ITrendingCoinData | null> {
    const { status, data } = await this.api.get("/search/trending");
    if (status !== 200) return null;

    const trendingCoinData = validateTrendingCoinData(data);
    if (!trendingCoinData) return null;

    return trendingCoinData;
  }
}
