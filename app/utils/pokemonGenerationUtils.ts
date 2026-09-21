import type { useTranslations } from 'next-intl';
import type { SelectOptionData } from '~/components/components/Select/Select.interface';
import { PokemonGenerations } from '~/constants/pokemon-generations';

export type PokemonGenerationOptionData = SelectOptionData;

export const getPokemonGenerationOptions = (
  t: ReturnType<typeof useTranslations>,
): PokemonGenerationOptionData[] =>
  Object.values(PokemonGenerations).map((generation) => ({
    value: generation,
    label: t(`pokemonGenerations.${generation}`),
  }));
