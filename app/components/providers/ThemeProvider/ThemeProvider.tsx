import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import { StorageKeys } from '~/constants/storage-keys';
import { Themes } from '~/constants/theme';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      storageKey={StorageKeys.POKEDEX_THEME}
      themes={[Themes.LIGHT, Themes.DARK]}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
