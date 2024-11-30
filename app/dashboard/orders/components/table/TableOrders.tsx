'use client';

import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import TableData from '@/app/components/shared/data-table/TableData';
import { useOrderStore } from '@/app/store/useOrdersStore';
import ModalForm from '@/app/components/shared/data-table/ModalForm';
import { Order } from '@/app/interfaces/orders/order';

import FormNewOrderContainer from '../containers/FormNewOrderContainer';

import { columns } from './Columns';

const TableOrders = () => {
  const { orders, isLoading, getOrders, addOrder, updateOrder, deleteOrder } =
    useOrderStore();

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const handleAddOrder = (newOrder: Order) => {
    addOrder(newOrder);
  };

  const handleDeleteOrder = async (orderId: string) => {
    try {
      deleteOrder(orderId);
      toast.success(`Producto código ${orderId} eliminado correctamente`);
    } catch (error) {
      console.error(error);
      toast.error('No se pudo eliminar el producto');
    }
  };

  return (
    <TableData
      data={orders}
      isLoading={isLoading}
      columns={columns}
      handleDelete={handleDeleteOrder}
      handleUpdate={updateOrder}
      headerComponent={() => (
        <ModalForm
          triggerText="Crear Domicilio"
          modalTitle="Agrega una nueva orden"
          onSubmit={handleAddOrder}
        >
          <FormNewOrderContainer onClose={() => {}} addOrder={addOrder} />
        </ModalForm>
      )}
    />
  );
};

export default TableOrders;
