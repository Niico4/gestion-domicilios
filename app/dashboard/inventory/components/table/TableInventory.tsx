'use client';

import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import TableData from '@/app/components/shared/data-table/TableData';
import ModalForm from '@/app/components/shared/data-table/ModalForm';
import { Product } from '@/app/interfaces/products/products';
import { useInventoryStore } from '@/app/store/useProductsStore';

import FormNewProductContainer from '../containers/FormNewProductContainer';

import { columns } from './Columns';

const TableInventory = () => {
  const {
    addProduct,
    deleteProduct,
    getProducts,
    isLoading,
    products,
    updateProduct,
  } = useInventoryStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleAddProduct = (newProduct: Product) => {
    addProduct(newProduct);
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      deleteProduct(productId);
      toast.success(`Producto código ${productId} eliminado correctamente`);
    } catch (error) {
      console.error(error);
      toast.error('No se pudo eliminar el producto');
    }
  };

  return (
    <TableData
      data={products}
      isLoading={isLoading}
      columns={columns}
      handleDelete={handleDeleteProduct}
      handleUpdate={updateProduct}
      headerComponent={() => (
        <ModalForm
          triggerText=" Agregar Producto"
          modalTitle="Agrega un nuevo producto"
          onSubmit={handleAddProduct}
        >
          <FormNewProductContainer onClose={() => {}} addProduct={addProduct} />
        </ModalForm>
      )}
    />
  );
};

export default TableInventory;
