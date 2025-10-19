import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Username must not be more than 20 Characters !")
  .max(20, "Username must be atleast of 4 Characters !");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address !" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters!" })
    .max(40, { message: "Password must not be more than 40 characters!" }),
});