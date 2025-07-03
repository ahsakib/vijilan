import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6 pt-38">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
