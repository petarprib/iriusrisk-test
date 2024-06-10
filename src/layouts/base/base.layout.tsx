import { type ReactNode, useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Footer from './components/footer.component';
import Header from './components/header.component';
import Sidebar from './components/sidebar.component';
import './styles/base-layout.scss';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
