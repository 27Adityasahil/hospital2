import React, {useState} from 'react'
import Hero from '../components/Hero'
import CentersOfExcellence from '../components/CentersOfExcellence'
import AboutSection from '../components/AboutSection'
import CounterStats from '../components/CounterStats'
import QualityServices from '../components/QualityServices'
import DoctorsSection from '../components/DoctorsSection'
import BlogSection from '../components/BlogSection'
import FloatingElements from '../components/FloatingElements'
import AppointmentModal from '../components/AppointmentModal'

function Home() {

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleBookAppointment = (doctorName?: string, department?: string) => {
    setSelectedDoctor(doctorName || '');
    setSelectedDepartment(department || '');
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctor('');
    setSelectedDepartment('');
  };


  return (
    <div className="min-h-screen overflow-x-hidden">
        <Hero onBookAppointment={handleBookAppointment} />
      <CentersOfExcellence />
      <AboutSection />
      <CounterStats />
      <QualityServices />
      <DoctorsSection onBookAppointment={handleBookAppointment} />
      <BlogSection />
      <FloatingElements />
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={handleCloseAppointmentModal}
        selectedDoctor={selectedDoctor}
        selectedDepartment={selectedDepartment}
      />
    </div>
  )
}

export default Home