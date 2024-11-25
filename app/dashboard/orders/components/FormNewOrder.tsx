import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
  newOrderSchema,
  NewOrderType,
} from '../constants/validation/newOrderSchema';

const FormNewOrder: FC<{
  onSubmit: (data: NewOrderType) => void;
  onClose: () => void;
}> = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newOrderSchema),
    defaultValues: {
      clientName: '',
      numberContact: '',
      direction: '',
      products: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Input
          type="text"
          label="Nombre del Cliente"
          isRequired
          isInvalid={!!errors.clientName}
          errorMessage={errors.clientName?.message}
          {...register('clientName')}
        />
        <Input
          type="text"
          label="Número de Contacto"
          isRequired
          isInvalid={!!errors.numberContact}
          errorMessage={errors.numberContact?.message}
          {...register('numberContact')}
        />
      </div>
      <Input
        type="text"
        label="Dirección"
        isRequired
        isInvalid={!!errors.direction}
        errorMessage={errors.direction?.message}
        {...register('direction')}
      />
      <Textarea
        label="Productos"
        isRequired
        isInvalid={!!errors.products}
        errorMessage={errors.products?.message}
        {...register('products')}
      />

      <div className="flex items-center gap-4 justify-end">
        <Button color="danger" variant="flat" onPress={onClose}>
          Cancelar
        </Button>
        <Button color="primary" className="bg-primary-gradient" type="submit">
          Crear Orden
        </Button>
      </div>
    </form>
  );
};

export default FormNewOrder;
