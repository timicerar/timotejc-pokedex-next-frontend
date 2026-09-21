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

export const env = <K extends EnvVariable>(key: K): EnvVariables[K] => {
  return (process.env[key] ?? '') as EnvVariables[K];
};
