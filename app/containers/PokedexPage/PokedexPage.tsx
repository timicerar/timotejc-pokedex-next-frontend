import { Suspense } from 'react';
import Container from '~/components/components/Container/Container';
import PokemonList from '~/components/compositions/PokemonList/PokemonList';
import PokemonListSkeleton from '~/components/compositions/PokemonList/PokemonListSkeleton';
import ScrollToTop from '~/components/compositions/ScrollToTop/ScrollToTop';
import { Breakpoints } from '~/constants/breakpoints';

const PokedexPage = () => {
  return (
    <Container maxWidth={Breakpoints.xl}>
      <Suspense fallback={<PokemonListSkeleton />}>
        <PokemonList />
      </Suspense>
      <ScrollToTop />
    </Container>
  );
};

export default PokedexPage;
