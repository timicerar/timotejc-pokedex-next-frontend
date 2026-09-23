import { z } from 'zod';

export const envSchema = z.object({
  PUBLIC_APP_ENVIRONMENT: z.enum([
    'local',
    'development',
    'staging',
    'production',
  ]),
  PUBLIC_API_URL: z.url(),
  PUBLIC_SERVE_IMAGES_URL: z.url(),
  PUBLIC_SITE_URL: z.url(),
});

export type EnvVariables = z.infer<typeof envSchema>;
export type EnvVariable = keyof EnvVariables;

declare global {
  interface Window {
    __ENV_CONFIG__?: Record<EnvVariable, string>;
  }
}

export const env = <K extends EnvVariable>(key: K): EnvVariables[K] => {
  const value =
    typeof window === 'undefined'
      ? (process.env[key] ?? '')
      : (window.__ENV_CONFIG__?.[key] ?? '');

  return value as EnvVariables[K];
};
