import { AuthSession } from "@/types/next-auth";
import { Awaitable, DefaultSession, NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import KeycloakProvider from 'next-auth/providers/keycloak';
import { SessionContextValue } from "next-auth/react";

interface ISession extends DefaultSession {
  access_token: string;
}

interface AdapterUser {
}

const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
      clientSecret: `${process.env.KEYCLOAK_SECRET}`,
      issuer: `${process.env.KEYCLOAK_AUTH_ISSUER}`
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token, user }: { session: AuthSession; token: JWT; user: AdapterUser; } & { newSession: any; trigger: "update"; }): Promise<AuthSession | Session> {
      if (typeof token.access_token === 'string') {
        session.access_token = token.access_token;
      }

      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}