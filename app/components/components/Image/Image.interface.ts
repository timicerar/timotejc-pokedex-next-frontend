import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps & {
  borderRadius?: string | number;
};
