import React from 'react';
import { motion } from 'framer-motion';

interface FacilityBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const FacilityBanner: React.FC<FacilityBannerProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200'
}) => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-xl text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white border-opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white border-opacity-20 rounded-full"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-white bg-opacity-30 rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white bg-opacity-20 rounded-full"></div>
    </section>
  );
};

export default FacilityBanner;