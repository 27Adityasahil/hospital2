import { Suspense, StrictMode } from 'react';
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './pages/Home.tsx';
import ServicesPage from './components/ServicePage.tsx';
import About from './pages/About.tsx';
import Doctors from './pages/Doctors.tsx';
import AmbulanceService from './pages/Facilities/AmbulanceService.tsx';
import TPA from './pages/TPA.tsx';
import Preloader from './components/Preloader.tsx';
import Gallery from './pages/Gallery.tsx';
import DepartmentPage from './pages/DepartmentPage.tsx';
import Anesthesiology from './pages/Department/Anesthesiology.tsx';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"services",
        element: <ServicesPage />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"doctors",
        element: <Doctors />
      },
      {
        path:"ambulanceservice",
        element: <AmbulanceService />
      },
      {
        path:"TPA",
        element: <TPA />
      },
      {
        path:"gallery",
        element: <Gallery />
      },
      {
        path:"department/:name",
        element:<DepartmentPage />
      },
      {
        path: "anesthesiology",
        element: <Anesthesiology />
      }
    ]
  }
])

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Suspense fallback={<Preloader />}>
//       <RouterProvider router={router} />
//     </Suspense>
//   </StrictMode>
// );

function AppWithPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadTime = 5000; // 2 seconds
    const timer = setTimeout(() => setLoading(false), minLoadTime);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithPreloader />
  </StrictMode>
);