import * as z from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(1, {
      message: "Email is required",
    }),

  password: z.string().min(1, {
    message: "Password is required",
  }),

  code: z.string(),
});

export const ResetSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(1, {
      message: "Email is required",
    }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email",
    })
    .min(1, {
      message: "Email is required",
    }),

  password: z.string().min(6, {
    message: "Minimum of 6 characters  is required",
  }),

  name: z.string().min(1, { message: "Name is required" }),
});
