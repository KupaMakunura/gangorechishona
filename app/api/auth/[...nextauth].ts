import NextAuth from "next-auth";
import GoogleAuthProvider from "next-auth/providers/google";
import { NextApiRequest, NextApiResponse } from "next";

export default NextAuth({
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // Add other providers as needed
  ],
});
