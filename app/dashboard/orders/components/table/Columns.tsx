'use client';

import { Chip } from '@nextui-org/react';

import { Column } from '@/app/interfaces/table';
import { Order, OrderState } from '@/app/interfaces/orders/order';
import ButtonsHandle from '@/app/components/shared/ButtonsHandle';

const getOrderStateClass = (orderState: OrderState) => {
  switch (orderState) {
    case OrderState.PENDING:
      return 'warning';
    case OrderState.CANCELED:
      return 'danger';
    case OrderState.ORDER_SENT:
      return 'secondary';
    case OrderState.DELIVERED:
      return 'success';
    default:
      return 'default';
  }
};

export const columns: Column<Order>[] = [
  {
    id: 'numberOrder',
    label: 'ID',
    cell: (item: Order) => {
      return <span>{item.id}</span>;
    },
  },
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
      return <span>{item.client?.paymentMethod?.paymentType}</span>;
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
      handleEdit: (order: Order) => void,
      handleDelete: (orderId: string) => void,
    ) => {
      return (
        <ButtonsHandle
          label="Domicilio"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          item={item}
        />
      );
    },
  },
];
