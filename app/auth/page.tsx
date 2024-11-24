import React from 'react';
import { Metadata } from 'next';

import SectionPage from './SectionPage';

export const metadata: Metadata = {
  title: ' Bienvenido a DomiSys',
};

const AuthPage = () => {
  return (
    <main className="h-screen flex overflow-hidden relative">
      <SectionPage />
    </main>
  );
};

export default AuthPage;
