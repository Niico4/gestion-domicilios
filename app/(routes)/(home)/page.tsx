import { Button } from '@nextui-org/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Domicilios | DomiSys',
  description:
    'La solución definitiva para gestionar y optimizar tus domicilios. Ya sea que estés a cargo de un negocio de entregas o busques mejorar la organización de tus pedidos, nuestra plataforma te ofrece una gestión ágil, eficiente y sin complicaciones.',
};

export default function Home() {
  return (
    <div>
      <main>
        <h1>Pagina Principal</h1>
        <Button>Test</Button>
      </main>
    </div>
  );
}
