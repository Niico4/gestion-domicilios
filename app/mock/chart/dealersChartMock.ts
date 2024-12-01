import { ChartConfig } from '@/app/components/shared/charts/chart';

export const chartDealersMockData = [
  { month: 'Enero', ordersCanceled: 120 },
  { month: 'Febrero', ordersCanceled: 150 },
  { month: 'Marzo', ordersCanceled: 180 },
  { month: 'Abril', ordersCanceled: 90 },
  { month: 'Mayo', ordersCanceled: 200 },
  { month: 'Junio', ordersCanceled: 75 },
  { month: 'Julio', ordersCanceled: 100 },
  { month: 'Agosto', ordersCanceled: 50 },
  { month: 'Septiembre', ordersCanceled: 40 },
  { month: 'Octubre', ordersCanceled: 30 },
  { month: 'Noviembre', ordersCanceled: 20 },
  { month: 'Diciembre', ordersCanceled: 250 },
];

export const chartDealersConfig = {
  ordersCanceled: {
    label: 'Órdenes Canceladas: ',
    color: '#FF6F61',
  },
} satisfies ChartConfig;
