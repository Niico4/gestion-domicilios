import Sidebar from '../layout/sidebar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-blue-100 p-6 grid grid-cols-[300px_1fr] gap-6">
      <Sidebar />
      {children}
    </main>
  );
}
