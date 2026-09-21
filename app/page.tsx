import { useTranslations } from 'next-intl';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';

const PokedexPage = () => {
  const t = useTranslations();

  return (
    <>
      <h1>{t('shared.pokedex')}</h1>
      <ThemeToggle showLabel />
    </>
  );
};

export default PokedexPage;
