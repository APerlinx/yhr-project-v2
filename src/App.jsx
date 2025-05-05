import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';

import AppLayout from './ui/AppLayout';
import AboutPage from './features/AboutPage/AboutPage';
import ContactPage from './features/ContactPage/ContactPage';
import ProjectsPage, {
  loader as projectLoader,
} from './features/ProjectsPage/ProjectsPage';
import ProjectDetails, {
  loader as projectDetailsLoader,
} from './features/ProjectsPage/ProjectDetails';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
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
        path: '/projects',
        element: <ProjectsPage />,
        loader: projectLoader,
        errorElement: <Error />,
      },
      {
        path: '/projects/:projectName',
        element: <ProjectDetails />,
        loader: projectDetailsLoader,

        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
