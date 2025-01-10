import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  pages: {
    signIn: "/auth",
    verifyRequest: "/auth/verify-request",
  }
})