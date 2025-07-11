import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Users, CheckCircle } from "lucide-react";
import CommonBanner from "../../components/CommonBanner";
import img1 from '../../assets/images1/f1.jpg'
import img2 from '../../assets/images1/f14.jpg'
import FacilitySidebar from "../../components/FacilitySidebar";
import './Facilities.css'
const facilityData: Record<string, any> = {
  "Ambulance Services": {
    title: "Guest House",
    description:
      "",
    image1:
      img2,
    image2:
      img1,
    imageDescription:
      " Dr. Bimal Hospital Annex Guest house for AC and non-AC rooms ",
    
  },
};

function GuestHouse() {
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
            <h4> <span className="font-bold">For Booking:</span>  <a href="tel:+919570445414">9570445414</a></h4>
            
          </div>
        </div>
      </motion.div>
      </section>
    </>
  );
}

export default GuestHouse;
