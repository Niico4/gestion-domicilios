'use client';
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
      clientFirstName: '',
      clientLastName: '',
      numberContact: '',
      address: '',
      products: '',
      dealerFirstName: '',
      dealerLastName: '',
      totalPayment: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <span>Cliente</span>
        <div className="flex gap-4">
          <Input
            type="text"
            label="Nombre"
            isRequired
            isInvalid={!!errors.clientFirstName}
            errorMessage={errors.clientFirstName?.message}
            {...register('clientFirstName')}
          />
          <Input
            type="text"
            label="Apellido"
            isRequired
            isInvalid={!!errors.clientLastName}
            errorMessage={errors.clientLastName?.message}
            {...register('clientLastName')}
          />
        </div>
        <div className="flex gap-4">
          <Input
            type="text"
            label="Número de Contacto"
            isRequired
            isInvalid={!!errors.numberContact}
            errorMessage={errors.numberContact?.message}
            {...register('numberContact')}
          />
          <Input
            type="text"
            label="Dirección"
            isRequired
            isInvalid={!!errors.address}
            errorMessage={errors.address?.message}
            {...register('address')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Repartidor</span>
        <div className="flex gap-4">
          <Input
            type="text"
            label="Nombre"
            isRequired
            isInvalid={!!errors.dealerFirstName}
            errorMessage={errors.dealerFirstName?.message}
            {...register('dealerFirstName')}
          />
          <Input
            type="text"
            label="Apellido"
            isRequired
            isInvalid={!!errors.dealerLastName}
            errorMessage={errors.dealerLastName?.message}
            {...register('dealerLastName')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span>Extras</span>
        <Textarea
          label="Productos"
          isRequired
          isInvalid={!!errors.products}
          errorMessage={errors.products?.message}
          {...register('products')}
        />
        <Input
          type="number"
          label="Monto total"
          isRequired
          isInvalid={!!errors.totalPayment}
          errorMessage={errors.totalPayment?.message}
          {...register('totalPayment')}
        />
      </div>

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
