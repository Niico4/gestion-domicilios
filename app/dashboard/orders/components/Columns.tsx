'use client';

import { Tooltip, Button, Chip } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

import { Column } from '@/app/interfaces/table';
import { Order } from '@/app/interfaces/orders/order';
import { OrderState } from '@/app/interfaces/orders/order-state';

const getOrderStateClass = (orderState: OrderState) => {
  switch (orderState) {
    case OrderState.CANCELED:
      return 'danger';
    case OrderState.PENDING:
      return 'warning';
    case OrderState.DELIVERED:
      return 'success';
    default:
      return 'secondary';
  }
};

export const columns: Column<Order>[] = [
  {
    id: 'clientName',
    label: 'Cliente',
    cell: (item: Order) => {
      return (
        <span>
          {item.client.firstName} {item.client.lastName}
        </span>
      );
    },
  },
  {
    id: 'numberContact',
    label: 'Número de Contacto',
    cell: (item: Order) => {
      return <span>{item.client.numberContact}</span>;
    },
  },
  {
    id: 'direction',
    label: 'Dirección',
    cell: (item: Order) => {
      return <span>{item.client.address}</span>;
    },
  },
  {
    id: 'products',
    label: 'Productos',
    cell: (item: Order) => {
      return (
        <span>
          {item.products.map((product) => product.nameProduct).join(' - ')}
        </span>
      );
    },
  },
  {
    id: 'paymentType',
    label: 'Tipo de Pago',
    cell: (item: Order) => {
      return <span>{item.client.paymentMethod.paymentType}</span>;
    },
  },
  {
    id: 'orderState',
    label: 'Estado de la Orden',
    cell: (item: Order) => {
      return (
        <Chip variant="flat" color={getOrderStateClass(item.orderState)}>
          {item.orderState}
        </Chip>
      );
    },
  },
  {
    id: 'dealer',
    label: 'Repartidor',
    cell: (item: Order) => {
      return (
        <span>
          {item.orderShipping.dealer.firstName}{' '}
          {item.orderShipping.dealer.lastName[0]}.
        </span>
      );
    },
  },
  {
    id: 'totalPayment',
    label: 'Monto Total',
    cell: (item: Order) => {
      return <span>${item.totalPayment.toLocaleString('es-CO')}</span>;
    },
  },
  {
    id: 'actions',
    label: 'Acciones',
    cell: (
      item: Order,
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
