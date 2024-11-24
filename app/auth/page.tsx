import React from 'react';
import { Metadata } from 'next';

import SectionPage from './AuthSection';

export const metadata: Metadata = {
  title: ' Bienvenido a DomiSys',
  description:
    'Accede a tu plataforma de gestión personalizada. Simplifica tus procesos, lleva el control de tu inventario, realiza un seguimiento eficiente de tus entregas y analiza tus métricas en tiempo real. Todo en un solo lugar, diseñado para potenciar tu productividad y optimizar tu flujo de trabajo. ¡Inicia sesión o regístrate ahora y toma el control en tus manos!',
};

const AuthPage = () => {
  return (
    <main className="h-screen flex overflow-hidden relative">
      <SectionPage />
    </main>
  );
};

export default AuthPage;
