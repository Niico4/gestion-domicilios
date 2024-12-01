'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { FC } from 'react';

import { ChartProps } from '@/app/interfaces/chartProps';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';

const BarChartComponent: FC<ChartProps> = ({
  data,
  chartConfig,
  xKey,
  dataKey,
  title,
  description,
  colorStroke,
}) => {
  return (
    <Card className="h-full flex-1">
      <CardHeader>
        <h3 className="text-2xl text-slate-900 font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={dataKey ?? ''} fill={colorStroke} radius={8} />
          </BarChart>
        </ChartContainer>
      </CardBody>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <p className="text-lg text-slate-700">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default BarChartComponent;
