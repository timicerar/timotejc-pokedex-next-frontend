import classNames from 'classnames';
import Link from 'next/link';
import type { ButtonProps } from '~/components/components/Button/Button.interface';
import { ButtonSizes, ButtonVariants } from '~/constants/button';
import classes from './Button.module.scss';

const Button = ({
  type = 'button',
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.DEFAULT,
  ariaLabel,
  disabled,
  leadingIcon,
  trailingIcon,
  fullWidth,
  className,
  children,
  href,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    classes.button,
    classes[variant],
    classes[size],
    { [classes.fullWidth]: fullWidth },
    className,
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={buttonClasses}>
        {leadingIcon}
        {children}
        {trailingIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
};

export default Button;
