import { Metadata } from 'next';
import { Grandstander } from 'next/font/google';

import Footer from '../layout/landing/Footer';
import NavBar from '../layout/landing/Navbar';

import { FeatureSection, HeroSection, TestimonialsSection } from './sections';

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
    <main
      className={`bg-landing-gradient w-full min-h-screen flex flex-col ${grandstander.className}`}
    >
      <NavBar />
      <div className="w-4/5 mx-auto mb-20">
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
