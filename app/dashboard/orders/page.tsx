import { Metadata } from 'next';

import Title from '@/app/components/shared/Title';

import TableOrders from './components/table/TableOrders';

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
        <TableOrders />
      </article>
    </main>
  );
}
