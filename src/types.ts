export type FCProps<T = unknown> = React.FC<
  Partial<{
    children: React.ReactNode;
    className: string;
  }> &
    T
>;

export enum STATUS {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

export type { ITrendingCoinData } from "./validators/trending-coins-schema";

export type APIResponse<TData> = {
  status: STATUS;
  data: TData | null;
};
