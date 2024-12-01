'use client';

import { Column } from '@/app/interfaces/table';
import ButtonsHandle from '@/app/components/shared/ButtonsHandle';
import { Dealer } from '@/app/interfaces/users/dealer';

export const columns: Column<Dealer>[] = [
  {
    id: 'idProduct',
    label: 'ID',
    cell: (item: Dealer) => {
      return <span>{item.id}</span>;
    },
  },
  {
    id: 'productName',
    label: 'Nombre del Repartidor',
    cell: (item: Dealer) => {
      return (
        <span>
          {item.firstName} {item.lastName}
        </span>
      );
    },
  },
  {
    id: 'numberContact',
    label: 'Numero de Contacto',
    cell: (item: Dealer) => {
      return <span>{item.numberContact}</span>;
    },
  },
  {
    id: 'email',
    label: 'Correo Electrónico',
    cell: (item: Dealer) => {
      return <span>{item.email}</span>;
    },
  },

  {
    id: 'asignedAddresses',
    label: 'Domicilios Asignados',
    cell: (item: Dealer) => {
      return <span>{item.domicilie.length}</span>;
    },
  },
  {
    id: 'actions',
    label: 'Acciones',
    cell: (
      item: Dealer,
      handleEdit: (producto: Dealer) => void,
      handleDelete: (productId: string) => void,
    ) => {
      return (
        <ButtonsHandle
          label="Repartidor"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          item={item}
        />
      );
    },
  },
];
