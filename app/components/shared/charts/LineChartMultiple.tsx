'use client';

import { FC } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/react';

import { ChartProps } from '@/app/interfaces/chartProps';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';

type MultiLineChartProps = ChartProps & {
  yKeys: { key: string; color: string }[];
};

const MultiLineChart: FC<MultiLineChartProps> = ({
  data,
  xKey,
  yKeys,
  chartConfig,
  title,
  description,
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="text-2xl text-slate-900 font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {yKeys.map(({ key, color }) => (
              <Line
                key={key}
                dataKey={key}
                type="monotone"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardBody>
      {description && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default MultiLineChart;
