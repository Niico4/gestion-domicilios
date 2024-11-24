import { Raleway } from 'next/font/google';

import { NextUI } from './providers/nextui';
import { Toaster } from 'react-hot-toast';
import './style/globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.className} antialiased `}>
        <NextUI>{children}</NextUI>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
