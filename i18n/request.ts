import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE } from '~/constants/locales';

export default getRequestConfig(async () => {
  return {
    locale: DEFAULT_LOCALE,
    messages: (await import(`../public/locales/${DEFAULT_LOCALE}/translation.json`))
      .default,
  };
});
