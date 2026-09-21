import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PokemonDetailsPage from '~/containers/PokemonDetailsPage/PokemonDetailsPage';
import { buildMetadata } from '~/lib/metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.details');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const PokemonDetails = async ({ params }: PageProps<'/pokemon/[pokemon]'>) => {
  const { pokemon } = await params;

  return <PokemonDetailsPage pokemon={pokemon} />;
};

export default PokemonDetails;
