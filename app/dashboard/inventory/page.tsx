import { Metadata } from 'next';
import React from 'react';

import Title from '@/app/components/shared/Title';
import TableData from '@/app/components/shared/data-table/TableData';
import { inventoryMock } from '@/app/mock/inventoryMock';

import { columns } from './components/Columns';
import ModalNewProduct from './components/ModalNewProduct';
import ChartSection from './ChartSection';

export const metadata: Metadata = {
  title: 'Inventario | DomiSys',
  description:
    'Administra y controla tu inventario de manera eficiente. Nuestra herramienta te permite gestionar productos, cantidades y movimientos en tiempo real para optimizar tu negocio.',
};

export default function InventoryPage() {
  return (
    <main className="h-full bg-white rounded-xl p-8">
      <Title title="Control de Inventario" />
      <div className="mt-10 flex items-start gap-6">
        <section className="w-full">
          <TableData
            data={inventoryMock}
            columns={columns}
            headerComponent={ModalNewProduct}
          />
        </section>
        <ChartSection />
      </div>
    </main>
  );
}
