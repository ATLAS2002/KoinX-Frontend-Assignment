import { ITeamMember } from "@/types";
import members from "./team-data.json";
import { validateTeamMemberSchema } from "@/validators/team-member-schema";

export class LocalAPI {
  getTeamMemberData(): { data: ITeamMember | null } {
    const memberData = validateTeamMemberSchema(members);

    return { data: memberData };
  }
}
