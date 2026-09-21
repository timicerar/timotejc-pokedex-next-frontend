'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import type { PokemonGeneration } from '~/constants/pokemon-generations';
import type { PokemonType } from '~/constants/pokemon-types';
import { parseList, serializeList } from '~/utils/filterUtils';

export type PokemonFiltersState = {
  search?: string;
  type?: PokemonType[];
  generation?: PokemonGeneration[];
};

export const usePokemonFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo<PokemonFiltersState>(
    () => ({
      search: searchParams.get('search') ?? '',
      type: parseList<PokemonType>(searchParams.get('type')),
      generation: parseList<PokemonGeneration>(searchParams.get('generation')),
    }),
    [searchParams],
  );

  const setParams = useCallback(
    (updates: Record<string, string | null>) => {
      const next = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (!value) {
          next.delete(key);
        } else {
          next.set(key, value);
        }
      }

      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const setSearch = useCallback(
    (value: string) => setParams({ search: value || null }),
    [setParams],
  );

  const setTypes = useCallback(
    (value: PokemonType[]) => setParams({ type: serializeList(value) }),
    [setParams],
  );

  const setGenerations = useCallback(
    (value: PokemonGeneration[]) =>
      setParams({ generation: serializeList(value) }),
    [setParams],
  );

  const clearFilters = useCallback(() => {
    setParams({ search: null, type: null, generation: null });
  }, [setParams]);

  return {
    filters,
    setSearch,
    setTypes,
    setGenerations,
    clearFilters,
  };
};
