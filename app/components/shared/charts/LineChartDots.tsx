'use client';

import { FC } from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Card, CardHeader, CardFooter, CardBody } from '@nextui-org/react';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/app/components/shared/charts/chart';

type ChartData = {
  [key: string]: string | number;
};

type LineChartDotsProps = {
  data: ChartData[];
  xKey: string;
  yKey: string;
  chartConfig: ChartConfig;
  title: string;
  description: string;
};

const LineChartDots: FC<LineChartDotsProps> = ({
  data,
  chartConfig,
  xKey,
  yKey,
  title,
  description,
}) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-2xl text-slate-900 font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              top: 20,
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey={yKey}
              type="monotone"
              stroke="#559fff"
              strokeWidth={2}
              dot={{
                fill: '#000',
              }}
              activeDot={{
                r: 6,
              }}
            ></Line>
          </LineChart>
        </ChartContainer>
      </CardBody>
      <CardFooter className="bg-blue-200">
        <p className="text-lg text-slate-700">{description}</p>
      </CardFooter>
    </Card>
  );
};

export default LineChartDots;
