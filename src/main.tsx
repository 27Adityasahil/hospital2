import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './pages/Home.tsx';
import ServicesPage from './components/ServicePage.tsx';
import About from './pages/About.tsx';
import Doctors from './pages/Doctors.tsx';
import AmbulanceService from './pages/Facilities/AmbulanceService.tsx';
import TPA from './pages/TPA.tsx';
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
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
