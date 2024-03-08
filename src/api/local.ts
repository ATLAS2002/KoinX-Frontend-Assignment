import members from "./data/team-data.json";
import distribution from "./data/distribution.json";
import { validator, teamMemberSchema } from "@/validators";
import type { DecisionProps, ITeamMember } from "@/types";

export class LocalAPI {
  getTeamMemberData(): { data: ITeamMember | null } {
    const memberData = validator<{ members: ITeamMember }>(
      teamMemberSchema,
      members
    );

    return { data: memberData?.members ?? null };
  }

  getInitialDistribution() {
    return distribution.data;
  }

  getAnalystEstimates(): DecisionProps {
    return {
      buy: 76,
      hold: 8,
      sell: 16,
    };
  }
}
