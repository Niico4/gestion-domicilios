import Sidebar from '../layout/sidebar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-full bg-blue-100 grid grid-cols-[300px_1fr] gap-6 p-6">
      <Sidebar />
      <main className="h-screen bg-white rounded-xl p-8 overflow-scroll">
        {children}
      </main>
    </main>
  );
}
