'use client';

import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Button from '~/components/components/Button/Button';
import type { ThemeToggleProps } from '~/components/components/ThemeToggle/ThemeToggle.interface';
import { ButtonSizes, ButtonVariants } from '~/constants/button';
import { Themes } from '~/constants/theme';
import classes from './ThemeToggle.module.scss';

const ThemeToggle = ({ showLabel = false }: ThemeToggleProps) => {
  const t = useTranslations('theme');

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === Themes.DARK;

  const toggleTheme = () => {
    setTheme(isDark ? Themes.LIGHT : Themes.DARK);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant={ButtonVariants.SECONDARY}
      size={ButtonSizes.DEFAULT}
      className={classes.toggle}
      ariaLabel={t('toggle')}
      onClick={toggleTheme}
      leadingIcon={
        <FontAwesomeIcon
          icon={isDark ? faMoon : faSun}
          className={isDark ? classes['icon--dark'] : classes['icon--light']}
        />
      }
    >
      {showLabel && (
        <span className={classes.label}>{t(isDark ? 'dark' : 'light')}</span>
      )}
    </Button>
  );
};

export default ThemeToggle;
