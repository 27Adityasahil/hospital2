import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Star } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import bannerimg from '../assets/slider2.jpg'

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  const navigate = useNavigate();

  const handleNavigateToServices = () => {
    navigate("services");
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-40 overflow-hidden">
      <div className="hospital-banner w-full object-fill">
          <img src={bannerimg} alt="" />
        </div>
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-4 h-4 mr-2" />
              Trusted Healthcare Provider
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              WE CARE
              <br />
              <span className="text-blue-600">ABOUT YOUR</span>
              <br />
              HEALTH
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Providing comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals dedicated to your well-being.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={onBookAppointment}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button onClick={handleNavigateToServices} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Our Services
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">15+</span>
                </div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Heart className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">245K+</span>
                </div>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Star className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">34+</span>
                </div>
                <p className="text-gray-600">Doctors</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 max-w-lg mx-auto">
              <img
                // src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                src="https://content3.jdmagicbox.com/comp/patna/s5/0612px612.x612.150803170509.o6s5/catalogue/dr-bimal-kumar-bimal-hospital-and-research-centre-pvt-ltd-sheikhpura-patna-gastrointestinal-doctors-TKjoGovGTv.jpg"
                alt="Professional Doctor"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Elements - Fixed positioning */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ minWidth: '160px' }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Health First</p>
                  <p className="text-sm text-gray-600">24/7 Care</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              style={{ minWidth: '160px' }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certified</p>
                  <p className="text-sm text-gray-600">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;