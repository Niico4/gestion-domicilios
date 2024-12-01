'use client';

import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import TableData from '@/app/components/shared/data-table/TableData';
import { useDealerStorage } from '@/app/store/useDealersStore';

import { columns } from './Columns';

const TableDelivery = () => {
  const { dealers, deleteDealer, getDealers, isLoading, updateDealer } =
    useDealerStorage();

  useEffect(() => {
    getDealers();
  }, [getDealers]);

  const handleDeleteProduct = async (dealerId: string) => {
    try {
      deleteDealer(dealerId);
      toast.success(`Repartidor código ${dealerId} eliminado correctamente`);
    } catch (error) {
      console.error(error);
      toast.error('No se pudo eliminar el repartidor');
    }
  };

  return (
    <TableData
      data={dealers}
      isLoading={isLoading}
      columns={columns}
      handleDelete={handleDeleteProduct}
      handleUpdate={updateDealer}
    />
  );
};

export default TableDelivery;
