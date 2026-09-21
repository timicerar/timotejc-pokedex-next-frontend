import path from 'node:path';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { env } from '~/constants/env';

const apiUrl = env('NEXT_PUBLIC_API_URL');
const serveImagesUrl = env('NEXT_PUBLIC_SERVE_IMAGES_URL');

const cspHeader = `
    default-src 'self';
    connect-src 'self' blob: data: ${apiUrl};
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: ${serveImagesUrl};
    font-src 'self';
    worker-src 'self' blob:;
    object-src data: ${serveImagesUrl};
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

const permissionsPolicy = `
  accelerometer=(),
  camera=(),
  geolocation=(),
  gyroscope=(),
  magnetometer=(),
  microphone=(),
  payment=(),
  usb=()
`;

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: permissionsPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/g, ''),
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: [path.join(process.cwd())],
  },
  images: {
    remotePatterns: serveImagesUrl
      ? [{ hostname: new URL(serveImagesUrl).hostname }]
      : [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
