import NextAuth from "next-auth";
import "next-auth";

declare module "next-auth" {
  interface User {
    role: "ADMIN" | "USER";
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: "ADMIN" | "USER";
  }
}
