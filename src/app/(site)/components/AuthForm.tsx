'use client';

import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.css';
import { Input } from '@/app/components/inputs/Input';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toogleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      // РЕГИСТРАЦИЯ
    }

    if (variant === 'LOGIN') {
      // ЛОГИН
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // Social ЛОГИН
  };

  return (
    <div className={styles.form__container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input />
      </form>
    </div>
  );
};

export default AuthForm;
