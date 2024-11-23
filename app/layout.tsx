import { Raleway } from 'next/font/google';

import { NextUI } from './providers/nextui';

import './style/globals.css';

const raleRaleway = Raleway({
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
      <body className={`${raleRaleway.className} antialiased`}>
        <NextUI>{children}</NextUI>
      </body>
    </html>
  );
}
