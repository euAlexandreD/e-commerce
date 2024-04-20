import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import { PrismaClient } from "./prisma";
import { AuthOptions } from "next-auth"; 

export const authOptions : AuthOptions = {
  adapter: PrismaAdapter(PrismaClient),
    providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})],
}