import { Metadata } from 'next';

import Title from '@/app/components/shared/Title';

import ChartSection from './ChartSection';

export const metadata: Metadata = {
  title: 'Reportes | DomiSys',
  description:
    'Explora reportes detallados y visuales sobre el rendimiento de tus operaciones. Analiza métricas clave como órdenes canceladas, tendencias mensuales y más, para tomar decisiones informadas y optimizar tus resultados.',
};

export default function ReportsPage() {
  return (
    <div>
      <Title title="Reportes" />
      <div className="mt-10 flex items-start gap-6">
        <ChartSection />
      </div>
    </div>
  );
}
