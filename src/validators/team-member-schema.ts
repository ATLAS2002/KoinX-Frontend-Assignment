import { z } from "zod";

const teamMemberSchema = z.object({
  members: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      image: z.string(),
      designation: z.string(),
      description: z.string(),
    })
  ),
});

export type ITeamMember = z.infer<typeof teamMemberSchema.shape.members>;

export const validateTeamMemberSchema = (
  rawData: unknown
): ITeamMember | null => {
  try {
    const data = teamMemberSchema.parse(rawData);
    return data.members;
  } catch (err) {
    console.error(
      "[VALIDATION] Team Member data does not match the schema:",
      err
    );
    return null;
  }
};
