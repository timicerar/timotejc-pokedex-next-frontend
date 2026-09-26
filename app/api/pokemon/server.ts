import type { Pokemon } from '~/api/models/Pokemon';
import { getPokemon } from '~/api/pokemon';

export const getServerPokemon = async (
  name: string,
): Promise<Pokemon | null> => {
  try {
    return await getPokemon({ name });
  } catch {
    return null;
  }
};
