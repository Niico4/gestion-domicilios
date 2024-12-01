import { Metadata } from 'next';

import Title from '@/app/components/shared/Title';

import TableDelivery from './components/table/TableDelivery';
import ChartSection from './ChartSection';

export const metadata: Metadata = {
  title: 'Domiciliarios | DomiSys',
  description:
    'Plataforma para gestionar domiciliarios y optimizar la logística de entregas. Controla el estado de cada pedido y asigna tareas a los repartidores de manera eficiente.',
};

export default function DeliveryPage() {
  return (
    <div>
      <Title title="Domiciliarios" />
      <div className="mt-10 flex items-start gap-6">
        <section className="w-full">
          <TableDelivery />
        </section>
        <ChartSection />
      </div>
    </div>
  );
}
