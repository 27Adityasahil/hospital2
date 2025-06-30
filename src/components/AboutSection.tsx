import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    'State-of-the-art medical equipment',
    'Experienced medical professionals',
    '24/7 emergency services',
    'Comprehensive health programs',
    'Patient-centered care approach',
    'Advanced surgical facilities'
  ];

  const navigate = useNavigate();

  const handleNavigateToServices = () => {
    navigate("services");
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                WELCOME TO DR. BIMAL
                <br />
                <span className="text-blue-600">HOSPITAL RESEARCH CENTER</span>
                <br />
                PVT LTD
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 25 years, we have been dedicated to providing exceptional healthcare services to our community. Our state-of-the-art facility combines advanced medical technology with compassionate care to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in a holistic approach to healthcare, focusing not just on treating illness but on promoting overall wellness and preventive care. Our team of experienced medical professionals is committed to delivering personalized care that meets each patient's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                Learn More About Us
              </button>
              <button onClick={handleNavigateToServices} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hospital Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-lg mx-auto">
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hospital Building"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Stats - Fixed positioning and z-index */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ minWidth: '160px' }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-600">Awards Won</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                style={{ minWidth: '160px' }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;