import { z } from "zod";

export * from "./team-member-schema";
export * from "./market-data-schema";
export * from "./trending-coins-schema";

export const validator = <T>(
  schema: z.ZodSchema,
  rawData: unknown
): T | null => {
  try {
    const data = schema.parse(rawData);
    return data;
  } catch (err) {
    console.error("Validation failed: ", err);
    return null;
  }
};
