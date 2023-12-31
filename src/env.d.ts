/// <reference types="astro/client" />

export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL: string;
      POSTGRES_USER: string;
      VERCEL: string;
      VERCEL_ENV: string;
    }
  }
}

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
