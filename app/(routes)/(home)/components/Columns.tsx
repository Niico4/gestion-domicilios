'use client';

import { Tooltip, Button } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

import { Column } from '@/app/constants/interfaces/table';

import { Order } from '../constants/interfaces/Order';

export const columns: Column<Order>[] = [
  {
    id: 'clientName',
    label: 'Nombre del Cliente',
  },
  {
    id: 'numberContact',
    label: 'Número de Contacto',
  },
  {
    id: 'direction',
    label: 'Dirección',
  },
  {
    id: 'products',
    label: 'Productos',
    cell: (item: Order) => {
      return <span>{item.products.join(' - ')}</span>;
    },
  },
  {
    id: 'paymentType',
    label: 'Tipo de Pago',
  },
  {
    id: 'orderState',
    label: 'Estado de la Orden',
  },
  {
    id: 'actions',
    label: 'Acciones',
    cell: (
      item,
      handleEdit: (orderId: string) => void,
      handleDelete: (orderId: string) => void,
    ) => {
      return (
        <div className="flex items-center gap-4">
          <Tooltip content="Editar Domicilio" showArrow color="secondary">
            <Button
              color="secondary"
              isIconOnly
              startContent={<IconEdit stroke={1.5} />}
              size="sm"
              variant="flat"
              onClick={() => handleEdit(item.id)}
            />
          </Tooltip>
          <Tooltip content="Eliminar Domicilio" showArrow color="danger">
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
