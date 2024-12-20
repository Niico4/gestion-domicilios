import React, { FC } from 'react';
import { Button, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';

import { Order, OrderState } from '@/app/interfaces/orders/order';
import { PaymentType } from '@/app/interfaces/payments/payment-method';
import { FormNewItemFormProps } from '@/app/interfaces/formNewItem';

const FormNewOrder: FC<FormNewItemFormProps<Order>> = ({
  register,
  errors,
  handleSubmit,
  onClose,
  onSubmit,
  setValue,
  watch,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span>Datos del Cliente</span>
        <div className="flex gap-4">
          <Input
            type="text"
            label="Nombre"
            isRequired
            isInvalid={!!errors.client?.firstName}
            errorMessage={errors.client?.firstName?.message}
            {...register('client.firstName')}
          />
          <Input
            type="text"
            label="Apellido"
            isRequired
            isInvalid={!!errors.client?.lastName}
            errorMessage={errors.client?.lastName?.message}
            {...register('client.lastName')}
          />
        </div>
        <div className="flex gap-4">
          <Input
            type="text"
            label="Número de Contacto"
            isRequired
            isInvalid={!!errors.client?.numberContact}
            errorMessage={errors.client?.numberContact?.message}
            {...register('client.numberContact')}
          />
          <Input
            type="text"
            label="Dirección"
            isRequired
            isInvalid={!!errors.client?.address}
            errorMessage={errors.client?.address?.message}
            {...register('client.address')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span>Extras</span>
        <Textarea
          label="Productos"
          placeholder="Separa por comas(,) cada producto"
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
        <RadioGroup
          label="Tipo de Pago"
          orientation="horizontal"
          color="secondary"
          value={watch('client.paymentMethod.paymentType')}
          onValueChange={(value) =>
            setValue('client.paymentMethod.paymentType', value as PaymentType)
          }
          isInvalid={!!errors.client?.paymentMethod?.paymentType}
          errorMessage={errors.client?.paymentMethod?.paymentType?.message}
          isRequired
        >
          {Object.values(PaymentType).map((payment) => (
            <Radio value={payment} key={payment}>
              {payment}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-2">
        <RadioGroup
          label="Estado del Pedido"
          orientation="horizontal"
          color="secondary"
          value={watch('orderState')}
          onValueChange={(value) => setValue('orderState', value as OrderState)}
          isInvalid={!!errors.orderState}
          errorMessage={errors.orderState?.message}
          isRequired
        >
          {Object.values(OrderState).map((state) => (
            <Radio value={state} key={state}>
              {state}
            </Radio>
          ))}
        </RadioGroup>
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
