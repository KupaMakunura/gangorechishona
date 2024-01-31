import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleAuthProvider from "next-auth/providers/google";
import prisma from "../../../../prisma/client";
import { hashPassword } from "@/utils";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Sign in",
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
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        const hashed = await hashPassword(credentials.password);

        if (user && hashed === user?.password) {
          return user;
        } 

        return null;
      },
    }),
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      
    }),
  ],
});
export { handler as GET, handler as POST };
