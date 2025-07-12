import { Suspense, StrictMode } from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Layout and Pages
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import ServicesPage from "./components/ServicePage.tsx";
import About from "./pages/About.tsx";
import Doctors from "./pages/Doctors.tsx";
import TPA from "./pages/TPA.tsx";
import Gallery from "./pages/Gallery.tsx";
import DepartmentPage from "./pages/DepartmentPage.tsx";
import Blogs from "./pages/Blogs.tsx";

// Facilities (individual files)
import AmbulanceService from "./pages/Facilities/AmbulanceService.tsx";
import Cafeteria from "./pages/Facilities/Cafeteria.tsx";
import Daycare from "./pages/Facilities/Daycare.tsx";
import GuestHouse from "./pages/Facilities/GuestHouse.tsx";
import InPatient from "./pages/Facilities/InPatient.tsx";
import OutPatient from "./pages/Facilities/OutPatient.tsx";
import Pharmacy from "./pages/Facilities/Pharmacy.tsx";
import FacilitiesPage from "./pages/FacilitiesPage.tsx"; // Unified page
import Anesthesiology from './pages/Department/Anesthesiology.tsx';
import Cardiology from './pages/Department/Cardiology.tsx';
import ENT from './pages/Department/ENT.tsx';
import Gastroenterology from "./pages/Department/Gastroenterology.tsx";
import GeneralMedicine from './pages/Department/GeneralMedicine.tsx';
import GynaecologistObstetrician from "./pages/Department/GyanaecologistObstetrician.tsx";
import LaparoscopicGeneral from './pages/Department/LaparoscopicGeneral.tsx';
import Nephrology from './pages/Department/Nephrology.tsx';
import Neurology from './pages/Department/Neurology.tsx';
import Oncology from './pages/Department/Oncology.tsx';
import Paediatric from './pages/Department/Paediatrics.tsx';
import Physiotherapy from './pages/Department/Physiotherapy.tsx';
import Radiology from './pages/Department/Radiology.tsx';
import Urology from './pages/Department/Urology.tsx';

// Preloader
import Preloader from "./components/Preloader.tsx";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <About /> },
      { path: "doctors", element: <Doctors /> },
      { path: "TPA", element: <TPA /> },
      { path: "gallery", element: <Gallery /> },
      { path: "department/:name", element: <DepartmentPage /> },
      { path: "anesthesiology", element: <Anesthesiology /> },
      { path: "blogs", element: <Blogs /> },

      // Unified facilities route
      {
        path: "facilities",
        children: [
          { path: "", element: <FacilitiesPage /> },
          { path: ":facilityName", element: <FacilitiesPage /> },
        ],
      },

      // Optional: legacy or SEO-friendly routes (redirects to unified one)
      {
        path: "ambulance-services",
        element: <Navigate to="/facilities/Ambulance%20Services" />,
      },
      { path: "cafeteria", element: <Navigate to="/facilities/Cafeteria" /> },
      { path: "Day-Care", element: <Navigate to="/facilities/Day%20Care" /> },
      {
        path: "guest-house",
        element: <Navigate to="/facilities/Guest%20House" />,
      },
      {
        path: "in-patient-department",
        element: <Navigate to="/facilities/In%20Patient%20Department" />,
      },
      {
        path: "outpatient-department-complex",
        element: (
          <Navigate to="/facilities/Outpatient%20Department%20Complex" />
        ),
      },
      // { path: "outpatient", element: <Navigate to="/facilities/Outpatient%20Department%20Complex" /> },
      { path: "pharmacy", element: <Navigate to="/facilities/pharmacy" /> },

      { path: "gastroenterology", element: <Gastroenterology /> },
      { path: "anesthesiology", element: <Anesthesiology /> },
      { path: "cardiology", element: <Cardiology /> },
      { path: "ent", element: <ENT /> },
      { path: "general-medicine", element: <GeneralMedicine /> },
      {
        path: "gynaecologist-obstetrician",
        element: <GynaecologistObstetrician />,
      },
      { path: "laparoscopic-general", element: <LaparoscopicGeneral /> },
      { path: "nephrology", element: <Nephrology /> },
      { path: "neurology", element: <Neurology /> },
      { path: "oncology", element: <Oncology /> },
      { path: "paediatric", element: <Paediatric /> },
      { path: "physiotherapy", element: <Physiotherapy /> },
      { path: "radiology", element: <Radiology /> },
      { path: "urology", element: <Urology /> },
    ],
  },
]);

// Preloader logic
function AppWithPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadTime = 3000;
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithPreloader />
  </StrictMode>
);
