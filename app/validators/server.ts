import { z } from "zod";

export const subscribeValidationSchema = z.object({
  email: z.string().email("Invalid email"),
});
export const signInValidationSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signUpValidationSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const cartValidationSchema = z.object({
  courseId:z.string()
})
