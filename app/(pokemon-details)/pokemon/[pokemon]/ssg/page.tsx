import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getPokemons } from '~/api/pokemon';
import { getServerPokemon } from '~/api/pokemon/server';
import Container from '~/components/components/Container/Container';
import NotFound from '~/components/compositions/NotFound/NotFound';
import PokemonDetails from '~/components/compositions/PokemonDetails/PokemonDetails';
import { NotFoundTypes } from '~/constants/not-found';
import { buildMetadata } from '~/lib/metadata';

// Generation I only (151 Pokémon) to keep build times reasonable.
export const generateStaticParams = async () => {
  const { results } = await getPokemons({ limit: 151, offset: 0 });

  return (results ?? []).map(({ name }) => ({ pokemon: name }));
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('meta.details');

  return buildMetadata({ title: t('title'), description: t('description') });
};

const PokemonDetailsSsg = async ({
  params,
}: PageProps<'/pokemon/[pokemon]/ssg'>) => {
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

export default PokemonDetailsSsg;
