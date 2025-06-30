import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Phone, Star } from 'lucide-react';
import drBimal from '../assets/images1/drbimal.jpg'
import drSangita from '../assets/doctors/drSangita.jpg'
import drDharmendra from '../assets/doctors/drDharmendra.jpeg'
import drVinod from '../assets/doctors/drVinod.jpg'
import drNavin from '../assets/doctors/drNavin.jpeg'
import drRavi from '../assets/doctors/drRaviRanjan.jpeg'
import drSudhir from '../assets/doctors/drSudhir.jpeg'
import drBinod from '../assets/doctors/drBinod.jpg'
import drBrajesh from '../assets/doctors/drBrajesh.jpg'
import drMani from '../assets/doctors/drMani.jpeg'
import drSurendra from '../assets/doctors/drSurendra.jpg'
import drBhoomika from '../assets/doctors/drBhoomika.jpg'


interface DoctorsSectionProps {
  onBookAppointment?: (doctorName: string, department: string) => void;
}

const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookAppointment }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const doctors = [
    {
      name: 'Dr. Bimal Kumar',
      // specialty: 'Senior Cardiologist',
      // department: 'Cardiology',
      // experience: '15+ Years Experience',
      designation: "Managing Director and Senior Gasteroenterologists",
      image: drBimal,
      // rating: 4.9,
      // patients: '2000+'
    },
    {
      name: 'Dr. Sangita Choudhary',
      designation: "Founder & Director, Head of the Department, Obstetrics and Gynaecology, Infertility Specialist",
      image: drSangita,
    },
    {
      name: 'Dr. Dharmendra Kumar',
      designation: "Consultant Laparoscopic & Genereal Surgeon",
      image: drDharmendra,
    },
    {
      name: 'Dr. Vinod Kumar',
      designation: "Radiologist",
      image: drVinod,
    },
    {
      name: 'Dr. Navin Kumar',
      designation: "Anaesthesiology",
      image: drNavin,
    },
    {
      name: 'Dr. Ravi Ranjan Kumar',
      designation: "Consultant Anaesthetist",
      image: drRavi,
    },
    {
      name: 'Dr. Sudhir Kumar',
      designation: "Senior Consultant Physiotherapy",
      image: drSudhir,
    },
    {
      name: 'Dr. Binod Kumar',
      designation: "General Physician",
      image: drBinod,
    },
    {
      name: 'Dr. Brajesh Kumar Choudhary',
      designation: "Consultant CLinical Oncologist",
      image: drBrajesh,
    },
    {
      name: 'Dr. Mani Bhusan',
      designation: "Consultant Nepehrosurgeon",
      image: drMani,
    },
    {
      name: 'Dr. Surendra Kumar',
      designation: "Consultant General Medicine",
      image: drSurendra,
    },
    {
      name: 'Dr. Bhoomika Srivastava',
      designation: "Consultant Obstetrics and Gyanecology",
      image: drBhoomika,
    },
  ];

  const handleBookNow = (doctorName: string, department: string) => {
    if (onBookAppointment) {
      onBookAppointment(doctorName, department);
    }
  };

  return (
    <section id="doctors" className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            MEET WITH DOCTORS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced and dedicated medical professionals is here to provide you with the best possible care and treatment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-blue-800"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {doctor.designation}
                </p>
                {/* <p className="text-gray-600 mb-4">
                  {doctor.experience}
                </p> */}
                {/* <p className="text-sm text-gray-500 mb-6">
                  Treated {doctor.patients} patients
                </p> */}
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleBookNow(doctor.name, doctor.department)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </button>
                  {/* <button className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;