import React from 'react';

import BarChartComponent from '@/app/components/shared/charts/BarChart';
import MultiLineChart from '@/app/components/shared/charts/LineChartMultiple';
import {
  chartConfigSalesPerformance,
  chartConfigSupplyCosts,
  chartDataInventoryRotation,
  chartDataSalesPerformance,
  chartDataStockLevel,
  chartDataSupplyCosts,
  chartRotationConfig,
  chartStockConfig,
} from '@/app/mock/chart/reportsChartMock';

const ChartSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6">
      <article className="w-full">
        <BarChartComponent
          title="Nivel de Stock Actual"
          description="Monitorea el nivel de stock de productos y alerta sobre niveles bajos."
          data={chartDataStockLevel}
          chartConfig={chartStockConfig}
          xKey="month"
          dataKey="stockLevel"
          colorStroke="#d19efa"
        />
      </article>
      <article className="grid grid-cols-3 gap-6">
        <MultiLineChart
          data={chartDataSalesPerformance}
          xKey="month"
          yKeys={[
            {
              key: 'freshProduce',
              color: chartConfigSupplyCosts.freshProduce.color,
            },
            { key: 'dairy', color: chartConfigSupplyCosts.dairy.color },
          ]}
          chartConfig={chartConfigSalesPerformance}
          title="Rendimiento de Ventas"
        />
        <BarChartComponent
          title="Rotación de Inventario"
          description="Mide la frecuencia con la que los productos se venden y reabastecen."
          data={chartDataInventoryRotation}
          chartConfig={chartRotationConfig}
          xKey="month"
          dataKey="inventoryRotation"
          colorStroke="#82c0ff"
        />
        <MultiLineChart
          data={chartDataSupplyCosts}
          xKey="month"
          yKeys={[
            {
              key: 'freshProduce',
              color: chartConfigSupplyCosts.freshProduce.color,
            },
            { key: 'dairy', color: chartConfigSupplyCosts.dairy.color },
          ]}
          chartConfig={chartConfigSupplyCosts}
          title="Costos de Abastecimiento"
        />
      </article>
    </section>
  );
};

export default ChartSection;
