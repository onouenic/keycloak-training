import { Session } from 'next-auth';

interface AuthSession extends Session {
  error?: string;
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | undefined;
  access_token?: string | undefined;
}

declare module "next-auth" {
  interface Session extends AuthSession {
  }
}