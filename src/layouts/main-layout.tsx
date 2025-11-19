import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const MainLayout = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-6 md:px-12 md:py-12">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
