import NextAuth from "next-auth";
import GoogleAuthProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
});
export { handler as GET, handler as POST };
