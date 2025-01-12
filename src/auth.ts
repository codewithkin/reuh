import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../prisma"
import Resend from "next-auth/providers/resend"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Resend({
    from: "hello@onboarding.reuh.pro"
  })],
  pages: {
    signIn: "/auth",
    verifyRequest: "/auth/verify-request",
  }
})