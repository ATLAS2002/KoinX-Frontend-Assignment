import type { DecisionProps, ITeamMember } from "@/types";
import members from "./data/team-data.json";
import distribution from "./data/distribution.json";
import { validateTeamMemberSchema } from "@/validators/team-member-schema";

export class LocalAPI {
  getTeamMemberData(): { data: ITeamMember | null } {
    const memberData = validateTeamMemberSchema(members);

    return { data: memberData };
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
