import { Button } from '@nextui-org/react';
import { IconMoped } from '@tabler/icons-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Grandstander } from 'next/font/google';

import NavBar from './(landing)/layout/Navbar';

export const metadata: Metadata = {
  title: 'Bienvenidos a DomiSys',
  description:
    'Descubre una plataforma diseñada para gestionar pedidos, inventarios y analíticas de tu negocio de forma eficiente. Simplifica tus operaciones y maximiza tu productividad.',
};

const grandstander = Grandstander({
  subsets: ['latin'],
  display: 'swap',
});

const LandingPage = () => {
  return (
    <div className={`bg-landing h-screen ${grandstander.className}`}>
      <NavBar />
      <div className="flex flex-col items-center mt-44 gap-8">
        <div className="w-4/5 mx-auto">
          <h1 className="text-6xl font-semibold text-purple-200 text-center mb-5">
            Optimiza tu Negocio con Nuestra Solución Integral
          </h1>
          <p className="text-slate-300 text-lg font-medium text-center">
            Gestiona tus pedidos, controla tu inventario y analiza el
            rendimiento de tu negocio desde una plataforma intuitiva y
            eficiente. Diseñada para simplificar tus operaciones diarias,
            nuestra herramienta te permite enfocarte en lo que realmente
            importa: hacer crecer tu empresa.
          </p>
        </div>
        <Button
          as={Link}
          color="primary"
          className="bg-primary-gradient text-lg"
          href="/auth/"
          startContent={<IconMoped stroke={1.5} />}
        >
          Ir al Software
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
