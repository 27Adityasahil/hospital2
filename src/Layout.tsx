"use client";

import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import AppointmentModal from "./components/AppointmentModal";
import FacilitiesPage from "./pages/FacilitiesPage";
import ServicesPage from "./components/ServicePage";
import Home from "./pages/Home";
import AmbulanceService from "./pages/Facilities/AmbulanceService";
import { Outlet } from "react-router-dom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleBookAppointment = (doctorName?: string, department?: string) => {
    setSelectedDoctor(doctorName || "");
    setSelectedDepartment(department || "");
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctor("");
    setSelectedDepartment("");
  };

  return (
    <html lang="en">
      <body>
        {/* <Header
          onBookAppointment={handleBookAppointment}
          onNavigate={handleNavigate}
        />

        {currentPage === "home" && (
          <Home onBookAppointment={handleBookAppointment} />
        )}

        {currentPage === "facilities" && <FacilitiesPage />}
        {currentPage === "services" && <ServicesPage />}

        <Outlet />

        <Footer />
        <FloatingElements />
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={handleCloseAppointmentModal}
          selectedDoctor={selectedDoctor}
          selectedDepartment={selectedDepartment}
        /> */}

        <Header onBookAppointment={handleBookAppointment} />
      <main>
        <Outlet /> {/* 🔥 This is where the route content shows up */}
      </main>
      <Footer />
      <FloatingElements />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        selectedDoctor={selectedDoctor}
        selectedDepartment={selectedDepartment}
      />
      </body>
    </html>
  );
}
