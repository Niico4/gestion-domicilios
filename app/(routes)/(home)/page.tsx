import { Button } from '@nextui-org/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domicilios | DomiSys',
  description:
    'Gestiona tus domicilios de forma eficiente y organizada con DomiSys. Desde el seguimiento en tiempo real hasta el control detallado de tus pedidos, esta sección te ofrece todas las herramientas necesarias para mantener tus entregas al día y optimizar la experiencia de tus clientes.',
};

export default function OrdersPage() {
  return (
    <div>
      <main className="h-full bg-slate-100 rounded-xl">
        <h1>Pagina Principal</h1>
        <Button>Test</Button>
      </main>
    </div>
  );
}
