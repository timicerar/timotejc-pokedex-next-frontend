import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  center?: boolean;
  maxWidth?: number;
  fullHeight?: boolean;
  children?: ReactNode;
};
