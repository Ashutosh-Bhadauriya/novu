import React, { MouseEventHandler } from 'react';
import { Button as MantineButton, ButtonProps, Sx } from '@mantine/core';

import useStyles from './Button.styles';

export type Size = 'md' | 'lg' | undefined;

interface IButtonProps extends ButtonProps {
  id?: string;
  loading?: boolean;
  size?: Size;
  variant?: 'outline' | 'gradient' | 'subtle';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  submit?: boolean;
  onClick?: (e: any) => void;
  onMouseEnter?: MouseEventHandler<any>;
  onMouseLeave?: MouseEventHandler<any>;
  inherit?: boolean;
  pulse?: boolean;
  sx?: Sx;
  iconPosition?: 'left' | 'right';
}

/**
 * Button component
 *
 */
export function Button({
  id,
  loading,
  children,
  submit = false,
  icon,
  size = 'md',
  fullWidth,
  disabled = false,
  inherit = false,
  onClick,
  variant = 'gradient',
  pulse,
  iconPosition = 'left',
  ...props
}: IButtonProps) {
  const { classes } = useStyles({ disabled, inherit, variant, pulse });
  const withIconProps = icon ? (iconPosition === 'left' ? { leftIcon: icon } : { rightIcon: icon }) : {};

  return (
    <MantineButton
      id={id}
      radius="md"
      classNames={classes}
      {...withIconProps}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      size={size}
      loading={loading}
      fullWidth={fullWidth}
      variant={variant}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
