'use client';

import { Tooltip, Button } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

import { Column } from '@/app/interfaces/table';
import { Product } from '@/app/interfaces/products/products';

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
        <div className="flex items-center gap-4">
          <Tooltip content="Editar Producto" showArrow color="secondary">
            <Button
              color="secondary"
              isIconOnly
              startContent={<IconEdit stroke={1.5} />}
              size="sm"
              variant="flat"
              onClick={() => handleEdit(item)}
            />
          </Tooltip>
          <Tooltip content="Eliminar Producto" showArrow color="danger">
            <Button
              color="danger"
              isIconOnly
              startContent={<IconTrash stroke={1.5} />}
              size="sm"
              variant="flat"
              onClick={() => handleDelete(item.id)}
            />
          </Tooltip>
        </div>
      );
    },
  },
];
