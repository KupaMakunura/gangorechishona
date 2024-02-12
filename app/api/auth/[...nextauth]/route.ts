import NextAuth from "next-auth";
import { getSession } from "next-auth/react";
import GoogleAuthProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../prisma/client";
import { comparePassword } from "@/utils";

const handler = NextAuth({
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "sign-in",
      credentials: {
        email: {
          type: "email",
          placeholder: "Email",
        },
        password: {
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, req) {
        if (!credentials) return null;

        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (user) {
          const password = await comparePassword(
            credentials.password,
            user.password
          );
          if (password) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
  callbacks:{
    async session({session}){
      return session
    },
  
  }
});
export { handler as GET, handler as POST };
