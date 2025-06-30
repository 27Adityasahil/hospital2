import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Users, CheckCircle } from 'lucide-react';

interface FacilityContentProps {
  facility: string;
}

const FacilityContent: React.FC<FacilityContentProps> = ({ facility }) => {
  const facilityData: Record<string, any> = {
    'Ambulance Services': {
      title: 'Ambulance Services',
      description: 'Our 24/7 ambulance services provide rapid emergency medical transportation with advanced life support equipment and trained paramedics.',
      image1: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our state-of-the-art ambulance fleet is equipped with the latest medical technology and staffed by certified paramedics who are trained to handle emergency situations with precision and care. Each ambulance is maintained to the highest standards to ensure reliability during critical moments.',
      features: [
        'Advanced Life Support (ALS) ambulances',
        'Basic Life Support (BLS) ambulances',
        'Neonatal and pediatric transport',
        'Inter-hospital transfers',
        'Emergency response within 15 minutes',
        'GPS tracking and communication systems'
      ],
      hours: '24/7 Emergency Service',
      contact: '+91 70709 31814',
      location: 'Saguna More, Patna'
    },
    'Cafeteria': {
      title: 'Cafeteria',
      description: 'Our modern cafeteria provides nutritious meals and refreshments for patients, families, and staff in a comfortable dining environment.',
      image1: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our cafeteria features a welcoming atmosphere with modern seating arrangements and a diverse menu that caters to various dietary needs. We prioritize food safety and nutrition, ensuring that every meal served meets the highest quality standards while providing comfort to patients and their families.',
      features: [
        'Hygienic food preparation',
        'Nutritious meal options',
        'Special dietary requirements',
        'Fresh beverages and snacks',
        'Comfortable seating area',
        'Affordable pricing'
      ],
      hours: '6:00 AM - 10:00 PM',
      contact: '+91 70709 31814',
      location: 'Ground Floor, Main Building'
    },
    'Day Care': {
      title: 'Day Care Services',
      description: 'Our day care facility provides comprehensive medical procedures and treatments that allow patients to return home the same day.',
      image1: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our day care unit is designed to provide efficient and comfortable care for patients undergoing same-day procedures. The facility features modern recovery areas, advanced monitoring equipment, and a dedicated team of healthcare professionals who ensure patient safety and comfort throughout their visit.',
      features: [
        'Minor surgical procedures',
        'Diagnostic procedures',
        'Chemotherapy treatments',
        'Dialysis services',
        'Recovery monitoring',
        'Discharge planning'
      ],
      hours: '8:00 AM - 6:00 PM',
      contact: '+91 70709 31814',
      location: '2nd Floor, Medical Wing'
    },
    'Guest House': {
      title: 'Guest House',
      description: 'Comfortable accommodation facility for patients\' families and out-of-town visitors with modern amenities and convenient location.',
      image1: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our guest house provides a home-away-from-home experience for families of patients who need to stay close to the hospital. Each room is thoughtfully designed with comfort in mind, featuring modern amenities and easy access to the main hospital building, ensuring convenience during stressful times.',
      features: [
        'Clean and comfortable rooms',
        'Air conditioning and heating',
        'Attached bathrooms',
        'Wi-Fi connectivity',
        'Room service available',
        'Proximity to hospital'
      ],
      hours: '24/7 Check-in Available',
      contact: '+91 70709 31814',
      location: 'Adjacent to Main Hospital'
    },
    'In Patient Department': {
      title: 'In Patient Department',
      description: 'Our inpatient department provides comprehensive care for patients requiring hospitalization with modern facilities and expert nursing care.',
      image1: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/4173228/pexels-photo-4173228.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our inpatient department combines medical excellence with patient comfort, featuring spacious rooms equipped with modern medical technology and amenities. Our dedicated nursing staff provides round-the-clock care, ensuring that patients receive personalized attention and support throughout their stay.',
      features: [
        'Private and semi-private rooms',
        'ICU and CCU facilities',
        'Specialized nursing care',
        'Patient monitoring systems',
        'Visitor facilities',
        'Discharge planning services'
      ],
      hours: '24/7 Patient Care',
      contact: '+91 70709 31814',
      location: '3rd & 4th Floor, Main Building'
    },
    'Outpatient Department Complex': {
      title: 'Outpatient Department Complex',
      description: 'State-of-the-art outpatient facilities with specialized consultation rooms and diagnostic services for comprehensive medical care.',
      image1: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our outpatient department complex is designed for efficiency and patient comfort, featuring modern consultation rooms, advanced diagnostic equipment, and streamlined processes. The facility ensures minimal waiting times and maximum convenience for patients seeking specialized medical care and routine check-ups.',
      features: [
        'Specialist consultation rooms',
        'Diagnostic facilities',
        'Pharmacy services',
        'Laboratory services',
        'Comfortable waiting areas',
        'Appointment scheduling system'
      ],
      hours: '8:00 AM - 8:00 PM',
      contact: '+91 70709 31814',
      location: '1st Floor, Main Building'
    },
    'Pharmacy': {
      title: 'Pharmacy Services',
      description: 'Our fully-stocked pharmacy provides prescription medications, over-the-counter drugs, and medical supplies with expert pharmaceutical care.',
      image1: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
      image2: 'https://images.pexels.com/photos/5452297/pexels-photo-5452297.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageDescription: 'Our pharmacy is staffed by licensed pharmacists who provide expert medication counseling and ensure the safe dispensing of prescription drugs. We maintain a comprehensive inventory of medications and medical supplies, with convenient services including insurance processing and home delivery options.',
      features: [
        'Prescription medications',
        'Over-the-counter drugs',
        'Medical supplies and equipment',
        'Medication counseling',
        'Insurance claim processing',
        'Home delivery services'
      ],
      hours: '8:00 AM - 10:00 PM',
      contact: '+91 70709 31814',
      location: 'Ground Floor, Near Reception'
    }
  };

  const data = facilityData[facility] || facilityData['Ambulance Services'];

  return (
    <motion.div
      key={facility}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
        <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
        <p className="text-blue-100 text-lg">{data.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Images Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={data.image1}
                alt={`${data.title} - Image 1`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={data.image2}
                alt={`${data.title} - Image 2`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.imageDescription}
          </p>
        </div>

        {/* Features and Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Information Panel - Takes 1 column on large screens */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Facility Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Operating Hours</p>
                    <p className="text-gray-700">{data.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <p className="text-gray-700">{data.contact}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-700">{data.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-900">Need Assistance?</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Our staff is available to help you with any questions about our {data.title.toLowerCase()}.
              </p>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityContent;