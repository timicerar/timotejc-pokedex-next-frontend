import { useTranslations } from 'next-intl';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';

const PokedexPage = () => {
  const t = useTranslations();

  return (
    <>
      <Typography>{t('shared.pokedex')}</Typography>
      <ThemeToggle showLabel />
    </>
  );
};

export default PokedexPage;
