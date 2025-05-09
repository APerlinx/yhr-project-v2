import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Error from './ui/Error';

import AppLayout from './ui/AppLayout';
import AboutPage from './features/AboutPage/AboutPage';
import ContactPage from './features/ContactPage/ContactPage';
import ProjectsPage, {
  loader as projectLoader,
} from './features/ProjectsPage/ProjectsPage';
import AdminPage from './features/AdminPage/AdminPage';
import AccessibilityPage from './features/AccessibilityPage/AccessibilityPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <ProjectsPage />,
        loader: projectLoader,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
      {
        path: '/accessibility',
        element: <AccessibilityPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
