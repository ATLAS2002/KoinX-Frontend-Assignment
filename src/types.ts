export type FCProps<T = unknown> = React.FC<
  Partial<{
    children: React.ReactNode;
    className: string;
  }> &
    T
>;

export type { ITrendingCoinData } from "./validators/trending-coins-schema";
export type { ITeamMember } from "./validators/team-member-schema";
