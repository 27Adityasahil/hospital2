import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Users, CheckCircle } from "lucide-react";
import CommonBanner from "../../components/CommonBanner";
import img1 from '../../assets/images1/f8.jpg'
import img2 from '../../assets/images1/f9.jpg'
import FacilitySidebar from "../../components/FacilitySidebar";
import './Facilities.css'
const facilityData: Record<string, any> = {
  "Ambulance Services": {
    title: "Outpatient Department Complex",
    description:
      "",
    image1:
      img2,
    image2:
      img1,
    imageDescription:
      " An elaborate area has been provided for Out Patients at Dr. Bimal Hospital with more than 32 consulting rooms arranged in the first floor itself. The OPD block can accommodate 130 people in the waiting area. ",
    // features: [
    //   "Advanced Life Support (ALS) ambulances",
    //   "Basic Life Support (BLS) ambulances",
    //   "Neonatal and pediatric transport",
    //   "Inter-hospital transfers",
    //   "Emergency response within 15 minutes",
    //   "GPS tracking and communication systems",
    // ],
    // hours: "24/7 Emergency Service",
    // contact: "+91 70709 31814",
    // location: "Saguna More, Patna",
  },
};

function OutPatient() {
  const data = facilityData["Ambulance Services"];
  return (
    <>
      
      <section className="facility-container amb-section flex p-4 justify-around"> 
        
      <motion.div
        // key={facility}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-[50vw] rounded-lg shadow-lg overflow-hidden hospital-facilities"
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
              <div className="relative overflow-hidden rounded-lg shadow-md res-image">
                <img
                  src={data.image1}
                  alt={`${data.title} - Image 1`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 faility-image "
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md res-image">
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
          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features & Services
              </h3>
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
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Facility Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Operating Hours
                      </p>
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
                  <h4 className="text-lg font-bold text-gray-900">
                    Need Assistance?
                  </h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Our staff is available to help you with any questions about
                  our {data.title.toLowerCase()}.
                </p>
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </motion.div>
      </section>
    </>
  );
}

export default OutPatient;
