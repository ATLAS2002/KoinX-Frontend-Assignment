import { type ITrendingCoinData } from "@/types";
import { validateTrendingCoinData } from "@/validators/trending-coins-schema";
import axios, { type AxiosInstance } from "axios";

class CryptoAPI {
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
    const { status, data } = await this.api.get("/search/trending");
    if (status !== 200) {
      console.log("unknown");
      return null;
    }

    const trendingCoinData = validateTrendingCoinData(data);
    if (!trendingCoinData) {
      console.log("Validation error");
      return null;
    }

    console.log("data :", trendingCoinData);
    return trendingCoinData;
  }
}

export default new CryptoAPI("https://api.coingecko.com/api/v3");
