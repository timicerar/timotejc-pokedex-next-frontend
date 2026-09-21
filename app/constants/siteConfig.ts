export const SiteConfig = {
  URL: 'http://localhost:3000/',
} as const;

export const DEFAULT_IMAGE_PATH = '/images/seo/og-image.png';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || SiteConfig.URL;
