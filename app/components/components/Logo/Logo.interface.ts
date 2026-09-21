import type { HTMLAttributes } from 'react';

export type LogoProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
  width?: number;
  height?: number;
  classes?: {
    root?: string;
    image?: string;
  };
};
