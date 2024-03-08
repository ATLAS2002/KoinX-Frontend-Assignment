import { z } from "zod";

export const teamMemberSchema = z.object({
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
