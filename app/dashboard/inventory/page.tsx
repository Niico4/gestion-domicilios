import { Metadata } from 'next';
import React from 'react';

import Title from '@/app/components/shared/Title';

import ChartSection from './ChartSection';
import TableInventory from './components/table/TableInventory';

export const metadata: Metadata = {
  title: 'Inventario | DomiSys',
  description:
    'Administra y controla tu inventario de manera eficiente. Nuestra herramienta te permite gestionar productos, cantidades y movimientos en tiempo real para optimizar tu negocio.',
};

export default function InventoryPage() {
  return (
    <div>
      <Title title="Control de Inventario" />
      <div className="mt-10 flex items-start gap-6">
        <section className="w-full">
          <TableInventory />
        </section>
        <ChartSection />
      </div>
    </div>
  );
}
