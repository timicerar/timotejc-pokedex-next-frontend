'use client';

import { useSearchParams } from 'next/navigation';

export const usePokemonImageMode = () => {
  const searchParams = useSearchParams();
  const lowerResImg = searchParams.get('lowerResImg') === 'true';

  return { lowerResImg };
};
