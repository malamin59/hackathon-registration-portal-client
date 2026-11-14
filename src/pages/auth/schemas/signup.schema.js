
import { z } from "zod";

const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export default signupSchema;
