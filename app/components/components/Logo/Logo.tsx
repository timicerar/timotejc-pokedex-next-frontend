import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Image from '~/components/components/Image/Image';
import type { LogoProps } from '~/components/components/Logo/Logo.interface';
import classes from './Logo.module.scss';

const Logo = ({
  classes: styles,
  width = 140,
  height = 42,
  ...props
}: LogoProps) => {
  const t = useTranslations('shared');

  return (
    <span className={classNames(classes.logo, styles?.root)} {...props}>
      <Image
        src="/images/pokedex-logo-light.svg"
        alt={t('pokedex')}
        width={width}
        height={height}
        unoptimized
        className={classNames(
          classes.image,
          classes['image--light'],
          styles?.image,
        )}
        loading="eager"
      />
      <Image
        src="/images/pokedex-logo-dark.svg"
        alt={t('pokedex')}
        width={width}
        height={height}
        unoptimized
        className={classNames(
          classes.image,
          classes['image--dark'],
          styles?.image,
        )}
        loading="eager"
      />
    </span>
  );
};

export default Logo;
