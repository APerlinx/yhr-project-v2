import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import ScrollToTop from '../utils/ScrollToTop';

import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <>
      <ScrollToTop />
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        {isLoading && <Loader />}

        <Header />

        <div className="overflow-x-hidden">
          <main className="mx-auto overflow-x-hidden">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
