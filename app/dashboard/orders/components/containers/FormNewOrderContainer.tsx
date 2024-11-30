'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { Order } from '@/app/interfaces/orders/order';
import { OrderFactory } from '@/app/factories/orderFactory';
import { newOrderSchema } from '@/app/validations/newOrderSchema';
import { OrdersRepository } from '@/app/repositories/ordersRepository';

import FormNewOrder from '../presentation/FormNewOrder';

const FormNewOrderContainer: FC<{
  addOrder: (newOrder: Order) => void;
  onClose: () => void;
}> = ({ addOrder, onClose }) => {
  const initialOrder = OrderFactory.createNewOrder();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newOrderSchema),
    defaultValues: initialOrder,
  });

  const onSubmit = async (data: Order) => {
    try {
      const newOrder = await OrdersRepository.createOrder(data);
      addOrder(newOrder);

      toast.success('Orden agregada correctamente');
    } catch (error) {
      console.error(error);
      toast.error('No se pudo agregar la orden');
    } finally {
      onClose();
      reset();
    }
  };

  return (
    <FormNewOrder
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onClose={onClose}
      register={register}
      setValue={setValue}
      watch={watch}
    />
  );
};

export default FormNewOrderContainer;
