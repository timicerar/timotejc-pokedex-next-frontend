type PokemonDetailsPageProps = {
  pokemon: string;
};

const PokemonDetailsPage = ({ pokemon }: PokemonDetailsPageProps) => {
  return <>Pokemon Details Page: {pokemon}</>;
};

export default PokemonDetailsPage;
