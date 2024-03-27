"use server";

import { sendPasswordResetEmail } from "@/data/mail";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { generatePasswordResetToken } from "@/data/tokens";
import { getUserByEmail } from "@/data/user";
import { ResetSchema } from "@/schemas";
import { z } from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields: any = ResetSchema.safeParse(values);

  if (!validateFields) {
    return { error: "Invalid email!" };
  }

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  // TODO: generate token and send mail notification
  const passwordResetToken = await generatePasswordResetToken(email);

  const sendMail = await sendPasswordResetEmail(
    passwordResetToken?.email,
    passwordResetToken?.token
  );

  if (sendMail?.error) {
    return { error: sendMail?.error };
  }

  return { success: "Reset Email sent!" };
};
