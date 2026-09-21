import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import ThemeProvider from '~/components/providers/ThemeProvider/ThemeProvider';
import { DEFAULT_LOCALE } from '~/constants/locales';
import { fontVariables } from '~/lib/fonts';
import { buildMetadata } from '~/lib/metadata';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '~/lib/fontawesome';
import '~/styles/tokens.css';
import '~/styles/global.scss';

export const generateMetadata = async (): Promise<Metadata> => {
  return buildMetadata({ iconMetadata: true });
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html
      lang={DEFAULT_LOCALE}
      suppressHydrationWarning
      className={fontVariables}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
