import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import {
  signUpSchema,
  SignUpType,
} from '../../constants/validation/signUpSchema';

const FormSignUp = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignUpType) => {
    try {
      const response = {
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };

      console.log('Datos enviados', response);
      toast.success('Cuenta creada correctamente');
      setTimeout(() => {
        push('/dashboard/orders');
      }, 2000);
      reset();
    } catch (error) {
      console.error(error);
      toast.error('No se pudo crear la cuenta');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
      <Input
        label="Nombre"
        type="text"
        size="lg"
        color="secondary"
        variant="faded"
        isRequired
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Apellido"
        type="text"
        size="lg"
        color="secondary"
        variant="faded"
        isRequired
        isInvalid={!!errors.lastName}
        errorMessage={errors.lastName?.message}
        {...register('lastName')}
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
      <Input
        label="Confirmar Contraseña"
        type="password"
        size="lg"
        color="secondary"
        variant="faded"
        isRequired
        isInvalid={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <div style={{ gridColumn: '1 / -1' }}>
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
      </div>
      <Button
        type="submit"
        color="primary"
        className="mx-auto bg-primary-gradient"
        size="lg"
        fullWidth
        style={{ gridColumn: '1 / -1' }}
      >
        Crear Cuenta
      </Button>
    </form>
  );
};

export default FormSignUp;
