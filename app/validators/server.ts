import { z } from "zod";


export const subscribeValidationSchema = z.object({
  email: z.string().email("Invalid email"),
});
