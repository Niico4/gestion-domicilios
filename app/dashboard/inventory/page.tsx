import { Button } from '@nextui-org/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventario | DomiSys',
  description: 'HACCER DESCRIPCION',
};

export default function InventoryPage() {
  return (
    <div>
      <main className="h-screen bg-black/20">
        <h1>Pagina Principal</h1>
        <Button>Test</Button>
      </main>
    </div>
  );
}
