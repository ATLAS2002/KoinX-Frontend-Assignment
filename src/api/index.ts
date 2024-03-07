import { CryptoAPI } from "./crypto";
import { LocalAPI } from "./local";

export const cryptoAPI = new CryptoAPI("https://api.coingecko.com/api/v3");
export const localAPI = new LocalAPI();
