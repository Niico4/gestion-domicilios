import React from 'react';
import { Card, CardHeader, CardFooter } from '@nextui-org/react';

import LineChartDots from '@/app/components/shared/charts/LineChartDots';
import { chartData, chartConfig } from '@/app/mock/inventoryChartMock';

const dataCards = [
  {
    title: 'Inventario Total',
    value: 93472,
    description: 'Niveles de inventario actuales en todos los productos.',
  },
  {
    title: 'Productos en Stock',
    value: 90472,
    description: 'Productos actualmente disponibles para la venta.',
  },
  {
    title: 'Productos Agotados',
    value: 3000,
    description: 'Productos actualmente no disponibles para la venta.',
  },
];

const ChartSection = () => {
  return (
    <section className="w-[40%] flex flex-col items-center justify-center gap-6">
      {dataCards.map(({ title, value, description }, index) => (
        <Card key={index} className="flex-1 w-full">
          <CardHeader className="flex-col gap-1 items-start">
            <h3 className="text-2xl text-slate-800 font-semibold">{title}</h3>
            <span className="text-purple-600 text-5xl font-bold">
              {value.toLocaleString('es-CO')}
            </span>
          </CardHeader>

          <CardFooter>
            <p className="text-base">{description}</p>
          </CardFooter>
        </Card>
      ))}

      <LineChartDots
        title="Frecuencia de Abastecimiento"
        description=" Visualiza la periodicidad con la que se reabastecen los productos en
          tu inventario"
        data={chartData}
        chartConfig={chartConfig}
        xKey="month"
        yKey="supplying"
      />
    </section>
  );
};

export default ChartSection;
