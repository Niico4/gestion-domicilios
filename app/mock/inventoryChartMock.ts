import { ChartConfig } from '../components/shared/charts/chart';

export const chartData = [
  { month: 'Enero', supplying: 186 },
  { month: 'Febrero', supplying: 305 },
  { month: 'Marzo', supplying: 237 },
  { month: 'Abril', supplying: 73 },
  { month: 'Mayo', supplying: 209 },
  { month: 'Junio', supplying: 56 },
  { month: 'Julio', supplying: 214 },
  { month: 'Agosto', supplying: 12 },
  { month: 'Septiembre', supplying: 1 },
  { month: 'Octubre', supplying: 0 },
  { month: 'Noviembre', supplying: 0 },
  { month: 'Diciembre', supplying: 300 },
];

export const chartConfig = {
  supplying: {
    label: 'Abastecimiento: ',
    color: '#1e1e1e',
  },
} satisfies ChartConfig;
