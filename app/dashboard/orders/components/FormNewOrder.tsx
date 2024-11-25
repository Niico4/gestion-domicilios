'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Textarea,
} from '@nextui-org/react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import {
  newOrderSchema,
  NewOrderType,
} from '../constants/validation/newOrderSchema';
import { PaymentType } from '@/app/interfaces/payments/payment-method';
import { OrderState } from '@/app/interfaces/orders/order-state';

const FormNewOrder: FC<{
  onSubmit: (data: NewOrderType) => void;
  onClose: () => void;
}> = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
      totalPayment: 0,
      paymentType: [PaymentType.CASH],
      orderState: [OrderState.PENDING],
    },
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
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
          {...register('totalPayment', {
            setValueAs: (value) => Number(value),
          })}
        />
      </div>
      <div className="flex gap-2">
        <CheckboxGroup
          label="Tipo de Pago"
          orientation="horizontal"
          color="secondary"
          value={watch('paymentType')}
          onChange={(values) =>
            setValue('paymentType', values as PaymentType[])
          }
          isInvalid={!!errors.paymentType}
          errorMessage={errors.paymentType?.message}
          isRequired
        >
          {Object.values(PaymentType).map((payment) => (
            <Checkbox
              value={payment}
              key={payment}
              onChange={(e) => handleOnChange(e)}
            >
              {payment}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>

      <div className="flex gap-2">
        <CheckboxGroup
          label="Estado del Pedido"
          orientation="horizontal"
          color="secondary"
          value={watch('orderState')}
          onChange={(values) => setValue('orderState', values as OrderState[])}
          isInvalid={!!errors.orderState}
          errorMessage={errors.orderState?.message}
          isRequired
        >
          {Object.values(OrderState).map((state) => (
            <Checkbox
              value={state}
              key={state}
              onChange={(e) => handleOnChange(e)}
            >
              {state}
            </Checkbox>
          ))}
        </CheckboxGroup>
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
