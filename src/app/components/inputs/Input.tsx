'se client';

import React from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type, required, register, errors, disabled }) => {
  return (
    <>
      <label className={styles.form__label} htmlFor={id}>
        {label}
      </label>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            styles.form__input,
            errors[id] && [styles.form__input_error],
            disabled && [styles.form__input_disabled],
          )}
        />
      </div>
    </>
  );
};

export { Input };
