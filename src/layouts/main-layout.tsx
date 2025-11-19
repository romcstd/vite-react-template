import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-6 py-6 md:px-12 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
