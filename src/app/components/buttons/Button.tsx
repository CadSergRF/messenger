'use client';

import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        styles.form__button,
        disabled && styles.form__button_disabled,
        fullWidth && styles.form__button_fullWidth,
        secondary ? styles.form__button_text_gray : styles.form__button_text_white,
        danger && styles.form__button_error,
        !secondary && !danger && styles.form__button_bg,
      )}>
      {children}
    </button>
  );
};

export { Button };
