import { z } from "zod";

export const schema = z.object({
  url: z.string().url({ message: "URL inválida" }),
});

export type FormData = z.infer<typeof schema>;
