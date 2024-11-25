import { Metadata } from 'next';

import Title from '@/app/components/shared/Title';
import TableData from '@/app/components/shared/data-table/TableData';
import { mockOrders } from '@/app/mock/ordersMock';

import { columns } from './components/Columns';
import ModalNewOrder from './components/ModalNewOrder';

export const metadata: Metadata = {
  title: 'Domicilios | DomiSys',
  description:
    'Gestiona tus domicilios de forma eficiente y organizada con DomiSys. Desde el seguimiento en tiempo real hasta el control detallado de tus pedidos, esta sección te ofrece todas las herramientas necesarias para mantener tus entregas al día y optimizar la experiencia de tus clientes.',
};

export default function OrdersPage() {
  return (
    <main className="h-full bg-white rounded-xl p-8">
      <Title title="Gestión de Domicilios" />
      <article className="mt-10">
        <TableData
          data={mockOrders}
          columns={columns}
          headerComponent={ModalNewOrder}
        />
      </article>
    </main>
  );
}
