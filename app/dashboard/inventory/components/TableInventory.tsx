'use client';

import React from 'react';

import TableData from '@/app/components/shared/data-table/TableData';
import { useInventory } from '@/app/hooks/useInventory';

import { columns } from './Columns';
import ModalNewProduct from './ModalNewProduct';

const TableInventory = () => {
  const { addProduct, deleteProduct, editProduct, inventory } = useInventory();

  return (
    <TableData
      data={inventory}
      columns={columns}
      handleDelete={deleteProduct}
      handleEdit={editProduct}
      headerComponent={() => <ModalNewProduct addProduct={addProduct} />}
    />
  );
};

export default TableInventory;
