import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getServerPokemon } from '~/api/pokemon/server';
import Container from '~/components/components/Container/Container';
import NotFound from '~/components/compositions/NotFound/NotFound';
import PokemonDetails from '~/components/compositions/PokemonDetails/PokemonDetails';
import { NotFoundTypes } from '~/constants/not-found';
import { buildMetadata } from '~/lib/metadata';

export const dynamic = 'force-dynamic';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.details');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const PokemonDetailsSsr = async ({
  params,
}: PageProps<'/pokemon/[pokemon]/ssr'>) => {
  const { pokemon: pokemonName } = await params;
  const pokemon = await getServerPokemon(pokemonName);

  if (!pokemon) {
    return (
      <Container center>
        <NotFound type={NotFoundTypes.POKEMON_DETAILS} />
      </Container>
    );
  }

  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonDetailsSsr;
