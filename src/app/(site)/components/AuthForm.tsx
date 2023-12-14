'use client';

import React, { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.css';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Input } from '@/app/components/inputs/Input';
import { Button } from '@/app/components/buttons/Button';
import { AuthSocialButton } from '@/app/(site)/components/AuthSocialButton/AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
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
        {variant === 'REGISTER' && (
          <Input id="name" label="Name" register={register} errors={errors} disabled={isLoading} />
        )}
        <Input
          id="email"
          label="Email address"
          type="email"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Button disabled={isLoading} fullWidth type="submit">
          {variant === 'LOGIN' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </form>

      <div className={styles.login_variant__container}>
        <div className={styles.login_variant__delimiter_container}>
          <div className={styles.login_variant__delimiter} />
        </div>
        <div className={styles.login_variant__header_container}>
          <span className={styles.login_variant__header_text}>Или продолжить с:</span>
        </div>
      </div>

      <div className={styles.social_container}>
        <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} />
        <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
      </div>

      <div className={styles.form_question}>
        <div>{variant === 'LOGIN' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}</div>
        <div className={styles.form__toggle_login} onClick={toggleVariant}>
          {variant === 'LOGIN' ? 'Зарегистрироваться' : 'Логин'}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
