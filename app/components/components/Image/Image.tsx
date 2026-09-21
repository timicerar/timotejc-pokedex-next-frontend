import classNames from 'classnames';
import NextImage from 'next/image';
import type { ImageProps } from '~/components/components/Image/Image.interface';
import classes from './Image.module.scss';

const Image = ({ className, style, borderRadius, ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      style={{ ...style, borderRadius }}
      className={classNames(classes.image, className)}
    />
  );
};

export default Image;
