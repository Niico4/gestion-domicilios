'use client';
import React from 'react';

import { useOrders } from '@/app/hooks/useOrder';
import TableData from '@/app/components/shared/data-table/TableData';

import { columns } from './Columns';
import ModalNewOrder from './ModalNewOrder';

const TableOrders = () => {
  const { orders, editOrder, deleteOrder, addOrder } = useOrders();

  return (
    <TableData
      data={orders}
      columns={columns}
      headerComponent={() => <ModalNewOrder addOrder={addOrder} />}
      handleDelete={deleteOrder}
      handleEdit={editOrder}
    />
  );
};

export default TableOrders;
