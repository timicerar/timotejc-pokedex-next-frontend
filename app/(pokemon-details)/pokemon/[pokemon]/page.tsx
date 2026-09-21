import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '~/lib/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.details');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const PokemonDetailsPage = async ({
  params,
}: PageProps<'/pokemon/[pokemon]'>) => {
  const { pokemon } = await params;

  return <h1>Pokemon Details: {pokemon}</h1>;
};

export default PokemonDetailsPage;
