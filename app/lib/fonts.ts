import classNames from 'classnames';
import { Press_Start_2P, Rubik, VT323 } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const vt323 = VT323({
  variable: '--font-mono',
  weight: '400',
  subsets: ['latin'],
});

export const fontVariables = classNames(
  pressStart2P.variable,
  rubik.variable,
  vt323.variable,
);
