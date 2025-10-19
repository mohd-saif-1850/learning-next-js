import { z } from "zod";

export const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, { message: "Please enter your email or username" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(40, { message: "Password must not exceed 40 characters" }),
});
