import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import { loader as projectLoader } from './features/ProjectsPage/ProjectsPage'
import { loader as projectDetailsLoader } from './features/ProjectsPage/ProjectDetails/ProjectDetails'

import Error from './ui/Error'
import AppLayout from './ui/AppLayout'
import Loader from './ui/Loader'

const HomePage = lazy(() => import('./features/HomePage/HomePage'))
const ProjectsPage = lazy(() => import('./features/ProjectsPage/ProjectsPage'))
const ProjectDetails = lazy(() =>
  import('./features/ProjectsPage/ProjectDetails/ProjectDetails')
)
const AboutPage = lazy(() => import('./features/AboutPage/AboutPage'))
const ContactPage = lazy(() => import('./features/ContactPage/ContactPage'))

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <HomePage /> },
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
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
])

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
