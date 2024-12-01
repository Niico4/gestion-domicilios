/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataKey } from 'recharts/types/util/types';

import { ChartConfig } from '../components/shared/charts/chart';

type ChartData = {
  [key: string]: string | number;
};

export type ChartProps = {
  data: ChartData[];
  xKey: string;
  yKey?: string;
  dataKey?: DataKey<any>;
  chartConfig: ChartConfig;
  title: string;
  description?: string;
  colorStroke?: string;
};
