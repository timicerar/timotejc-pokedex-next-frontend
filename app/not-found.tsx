import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Container from '~/components/components/Container/Container';
import NotFound from '~/components/compositions/NotFound/NotFound';
import { NotFoundTypes } from '~/constants/not-found';
import { buildMetadata } from '~/lib/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.notFound');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const NotFoundPage = () => {
  return (
    <Container center fullHeight>
      <NotFound type={NotFoundTypes.GENERIC} />
    </Container>
  );
};

export default NotFoundPage;
