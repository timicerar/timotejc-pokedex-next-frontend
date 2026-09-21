'use client';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Logo from '~/components/components/Logo/Logo';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';
import { Routes } from '~/constants/routes';
import classes from './NavBar.module.scss';

const NavBar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const isHome = pathname === Routes.POKEDEX();

  return (
    <header className={classes.navbar}>
      <div className={classes.wrapper}>
        <Link href={Routes.POKEDEX()}>
          <Logo classes={{ root: classes.logo }} />
        </Link>
        {!isHome && (
          <Link href={Routes.POKEDEX()} className={classes.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
            <Typography as="span" type="label" uppercase>
              {t('shared.backToPokedex')}
            </Typography>
          </Link>
        )}
      </div>
      <div className={classes.actions}>
        <ThemeToggle showLabel />
      </div>
    </header>
  );
};

export default NavBar;
