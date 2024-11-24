import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  signInSchema,
  SignInType,
} from '../../constants/validation/signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const FormSignIn = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInType) => {
    try {
      const response = {
        email: data.email,
        password: data.password,
      };
      console.log('Datos enviados', response);
      toast.success('Sesión iniciada correctamente');
      setTimeout(() => {
        push('/');
      }, 2000);
      reset();
    } catch (error) {
      console.error(error);
      toast.error('No se pudo iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        label="Correo electrónico"
        type="email"
        size="lg"
        color="secondary"
        variant="faded"
        isRequired
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Contraseña"
        type="password"
        size="lg"
        color="secondary"
        variant="faded"
        isRequired
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
        {...register('password')}
      />
      <Link href="#" className="underline text-blue-500 text-base text-end">
        ¿Olvidaste tu contraseña?
      </Link>
      <Button
        type="submit"
        color="primary"
        className="mx-auto bg-primary-gradient"
        size="lg"
        fullWidth
      >
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default FormSignIn;
