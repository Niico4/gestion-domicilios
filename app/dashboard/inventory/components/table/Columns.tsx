'use client';

import { Column } from '@/app/interfaces/table';
import { Product } from '@/app/interfaces/products/products';
import ButtonsHandle from '@/app/components/shared/ButtonsHandle';

export const columns: Column<Product>[] = [
  {
    id: 'idProduct',
    label: 'ID',
    cell: (item: Product) => {
      return <span>{item.id}</span>;
    },
  },
  {
    id: 'productName',
    label: 'Nombre del Producto',
    cell: (item: Product) => {
      return <span>{item.nameProduct}</span>;
    },
  },
  {
    id: 'price',
    label: 'Precio por unidad',
    cell: (item: Product) => {
      return <span>{item.price}</span>;
    },
  },
  {
    id: 'quantity',
    label: 'Cantidad',
    cell: (item: Product) => {
      return <span>{item.quantity}</span>;
    },
  },

  {
    id: 'stock',
    label: 'Disponible',
    cell: (item: Product) => {
      return (
        <span className={`${!item.inStock && 'text-red-600 font-semibold'}`}>
          {item.inStock ? 'Si' : 'No'}
        </span>
      );
    },
  },
  {
    id: 'actions',
    label: 'Acciones',
    cell: (
      item: Product,
      handleEdit: (producto: Product) => void,
      handleDelete: (productId: string) => void,
    ) => {
      return (
        <ButtonsHandle
          label="Producto"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          item={item}
        />
      );
    },
  },
];
