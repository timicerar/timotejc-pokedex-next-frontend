import type { useTranslations } from 'next-intl';
import type { SelectOptionData } from '~/components/components/Select/Select.interface';
import type { Color } from '~/constants/colors';
import { PokemonTypes } from '~/constants/pokemon-types';

export type PokemonTypeOptionData = SelectOptionData & { color: Color };

export const getPokemonTypeColor = (type: string): Color =>
  `type-${type}` as Color;

export const getPokemonTypeOptions = (
  t: ReturnType<typeof useTranslations>,
): PokemonTypeOptionData[] =>
  Object.values(PokemonTypes).map((type) => ({
    value: type,
    label: t(`pokemonTypes.${type}`),
    color: getPokemonTypeColor(type),
  }));
