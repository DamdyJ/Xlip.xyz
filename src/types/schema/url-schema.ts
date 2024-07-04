import { z } from "zod";

export const urlSchema = z.object({
  url: z.string().trim().url({
    message: "Please input valid url"
  }),
});

export type URLType = z.infer<typeof urlSchema>;
