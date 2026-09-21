import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '~/lib/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.notFound');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const NotFoundPage = () => {
  return <h1>Page Not Found</h1>;
};

export default NotFoundPage;
