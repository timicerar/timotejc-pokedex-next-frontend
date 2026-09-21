import { useTranslations } from 'next-intl';

const PokedexPage = () => {
  const t = useTranslations();

  return <h1>{t('shared.pokedex')}</h1>;
};

export default PokedexPage;
