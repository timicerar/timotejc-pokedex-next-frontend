'use client';

import { useTranslations } from 'next-intl';
import Typography from '~/components/components/Typography/Typography';
import { NotFoundTypes } from '~/constants/not-found';
import { TypographyTypes } from '~/constants/typography';
import { getNotFoundData } from '~/utils/notFoundUtils';
import classes from './PokemonMoveError.module.scss';

const PokemonMoveError = () => {
  const t = useTranslations();
  const { title } = getNotFoundData(NotFoundTypes.POKEMON_MOVE, t);

  return (
    <Typography
      type={TypographyTypes.BODY_SM}
      color="muted-foreground"
      className={classes.error}
    >
      {title}
    </Typography>
  );
};

export default PokemonMoveError;
