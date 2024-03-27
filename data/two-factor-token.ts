import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: any) => {
  try {
    const twoFactor = await db.twoFactorToken.findUnique({
      where: { token },
    });

    return twoFactor;
  } catch (error) {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: any) => {
  try {
    const twoFactor = await db.twoFactorToken.findFirst({
      where: { email },
    });

    return twoFactor;
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByUserId = async (userId: any) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
