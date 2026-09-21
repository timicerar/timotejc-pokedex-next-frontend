const PokemonDetailsPage = async ({
  params,
}: PageProps<'/pokemon/[pokemon]'>) => {
  const { pokemon } = await params;

  return <h1>Pokemon Details: {pokemon}</h1>;
};

export default PokemonDetailsPage;
