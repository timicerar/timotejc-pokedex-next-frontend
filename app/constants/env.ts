import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_APP_ENVIRONMENT: z.enum([
    'local',
    'development',
    'staging',
    'production',
  ]),
  NEXT_PUBLIC_API_URL: z.url(),
  NEXT_PUBLIC_SERVE_IMAGES_URL: z.url(),
  NEXT_PUBLIC_SITE_URL: z.url(),
});

export type EnvVariables = z.infer<typeof envSchema>;
export type EnvVariable = keyof EnvVariables;

// Next.js only inlines `process.env.NEXT_PUBLIC_*` for the client bundle
// when it sees the literal property access — a dynamic `process.env[key]`
// can't be statically replaced, so each var is listed explicitly here.
const envValues: Record<EnvVariable, string> = {
  NEXT_PUBLIC_APP_ENVIRONMENT: process.env.NEXT_PUBLIC_APP_ENVIRONMENT ?? '',
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? '',
  NEXT_PUBLIC_SERVE_IMAGES_URL: process.env.NEXT_PUBLIC_SERVE_IMAGES_URL ?? '',
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? '',
};

export const env = <K extends EnvVariable>(key: K): EnvVariables[K] => {
  return envValues[key] as EnvVariables[K];
};
