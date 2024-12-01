import React from 'react';
import { Card, CardHeader, CardFooter } from '@nextui-org/react';

import LineChartDots from '@/app/components/shared/charts/LineChartDots';
import {
  chartDealersMockData,
  chartDealersConfig,
} from '@/app/mock/chart/dealersChartMock';

const ChartSection = () => {
  return (
    <section className="w-[40%] flex flex-col items-center justify-center gap-6">
      <Card className="flex-1 w-full">
        <CardHeader className="flex-col gap-1 items-start">
          <h3 className="text-2xl text-slate-800 font-semibold">
            Total de Domiciliarios
          </h3>
          <span className="text-purple-600 text-5xl font-bold">10</span>
        </CardHeader>

        <CardFooter>
          <p className="text-base">
            Cantidad de Domiciliarios Disponibles en el almacén
          </p>
        </CardFooter>
      </Card>

      <LineChartDots
        title="Domicilios Cancelados"
        description="Analiza la frecuencia y patrones de cancelación en los domicilios, obteniendo una visión clara de su periodicidad."
        data={chartDealersMockData}
        chartConfig={chartDealersConfig}
        xKey="month"
        yKey="ordersCanceled"
        colorStroke="#c176fe"
      />
    </section>
  );
};

export default ChartSection;
