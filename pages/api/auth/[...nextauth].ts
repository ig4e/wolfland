import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET! || "MYSUPERSECRET",
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        (session.user as any).id = token.sub;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
