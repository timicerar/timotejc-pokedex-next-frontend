import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { DEFAULT_IMAGE_PATH, SITE_URL } from '~/constants/siteConfig';

type BuildMetadataParams = {
  title?: string;
  description?: string;
  imageUrl?: string;
  iconMetadata?: boolean;
};

const iconsMetadata: Pick<Metadata, 'icons' | 'manifest' | 'metadataBase'> = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      {
        url: '/favicon/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export const buildMetadata = async ({
  title,
  description,
  imageUrl = DEFAULT_IMAGE_PATH,
  iconMetadata = false,
}: BuildMetadataParams = {}): Promise<Metadata> => {
  const t = await getTranslations('meta.home');

  const metaTitle = title ?? t('title');
  const metaDescription = description ?? t('description');

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      type: 'website',
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, alt: metaTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [{ url: imageUrl, alt: metaTitle }],
    },
    ...(iconMetadata && iconsMetadata),
  };
};
