import { type EnvVariable, env, envSchema } from '~/constants/env';

export const dynamic = 'force-dynamic';

export async function GET() {
  const result: Record<string, string> = {};

  for (const key in envSchema.shape) {
    result[key] = env(key as EnvVariable);
  }

  const body = `window.__ENV_CONFIG__ = ${JSON.stringify(result)};`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'no-store',
    },
  });
}
