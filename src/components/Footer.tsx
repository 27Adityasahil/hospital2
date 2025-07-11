// import React from 'react';
// import { motion } from 'framer-motion';
// import logo from '../assets/logo2.png'
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   Linkedin,
//   Heart,
//   MessageCircle
// } from 'lucide-react';

// const Footer = () => {
//   const importantLinks = [
//     'Home',
//     'About Us',
//     'Facilities',
//     'Services',
//     'Corporate TPA'
//   ];

//   const quickLinks = [
//     'Appointment',
//     'Doctors',
//     'Department',
//     'Contact Us',
//     'Career'
//   ];

  

//   return (
//     <footer className="bg-gray-900 text-white overflow-hidden">
//       <div className="container mx-auto px-4 py-16 max-w-7xl">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Hospital Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center space-x-3 mb-6">
//               {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">B</span>
//               </div> */}
//               <div>
//                 <img src={logo} alt="" />
//               </div>
//               {/* <div>
//                 <h3 className="text-xl font-bold">Bimal Hospital</h3>
//                 <p className="text-gray-400">Research Center</p>
//               </div> */}
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Dr.Bimal Hospital has the most modern world class facilities for Gastroenterology, Nephrology, Obst. & Gynecology. It has One Modular Operation Theater, One minor Operation Theater & One Emergency Operation Theater. The OT’s have World class OT Lights, Anaesthesia Ventilator, Central Suction & Central Gas Pipelines, One of the best Cautery & Vessel Sealers.
//             </p>
//             <div className="flex space-x-4">
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
//                 <a
//                 href="https://www.facebook.com/profile.php?id=100005962939497"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Facebook
//                   size={16}
//                   className="cursor-pointer hover:text-blue-300"
//                 />
//               </a>
//               </div>
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
//                 <a
//                 href="https://wa.me/917070931814"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <MessageCircle
//                   size={16}
//                   className="cursor-pointer hover:text-blue-300"
//                 />
//               </a>
//               </div>
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
//                 <a
//                 href="https://www.instagram.com/dr.bimalhospital/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Instagram
//                   size={16}
//                   className="cursor-pointer hover:text-blue-300"
//                 />
//               </a>
//               </div>
//               {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
//                 <Linkedin className="w-5 h-5" />
//               </div> */}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-xl font-bold mb-6">Quick Links</h4>
//             <ul className="space-y-4">
//               {importantLinks.map((link) => (
//                 <li key={link}>
//                   <a 
//                     href="#" 
//                     className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-xl font-bold mb-6">Our Services</h4>
//             <ul className="space-y-4">
//               {quickLinks.map((service) => (
//                 <li key={service}>
//                   <a 
//                     href="#" 
//                     className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
//                   >
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-xl font-bold mb-6">Contact Info</h4>
//             <div className="space-y-6">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400">
//                     Raj Ballabh Singh Dwar, Narayan Path Adarsh Colony, Bailey Rd, Saguna More, Patna, Bihar 801503
//                   </p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400">+91 70709 31814</p>
//                   <p className="text-gray-400">+91 8877873877</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                 <p className="text-gray-400">info@drbimalhospital.in</p>
//               </div>
              
//               <div className="flex items-start space-x-3">
//                 <div>
//                   <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.543098910841!2d85.04089597543862!3d25.6200945774411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56674e9f9d57%3A0xdb8423da8fc229ed!2sDr.%20Bimal%20Hospital%20and%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751040934010!5m2!1sen!2sin" width="200" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6 max-w-7xl">
//           <div className="flex flex-col md:flex-row justify-center items-center">
//             <p className="text-gray-400 text-sm">
//               © 2024 Dr. Bimal Hospital Research Center. All rights reserved.
//             </p>
//             {/* <div className="flex items-center space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
//                 Terms of Service
//               </a>
//               {/* <div className="flex items-center text-gray-400 text-sm">
//                 Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for better health
//               </div> 
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo2.png';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const importantLinks = ['Home', 'About Us', 'Facilities', 'Services', 'Corporate TPA'];
  const quickLinks = ['Appointment', 'Doctors', 'Department', 'Career'];

  const linkPaths: Record<string, string> = {
    'Home': '/',
    'About Us': '/about',
    'Facilities': '/facilities',
    'Services': '/services',
    'Corporate TPA': '/tpa',
    'Appointment': '/appointment',
    'Doctors': '/doctors',
    'Department': '/departments',
    'Contact Us': '/contact',
    'Career': '/career'
  };

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Hospital Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <img src={logo} alt="Dr. Bimal Hospital Logo" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dr.Bimal Hospital has the most modern world class facilities for Gastroenterology, Nephrology, Obst. & Gynecology. It has One Modular Operation Theater, One minor Operation Theater & One Emergency Operation Theater...
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100005962939497" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Facebook size={16} />
                </div>
              </a>
              <a href="https://wa.me/917070931814" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <MessageCircle size={16} />
                </div>
              </a>
              <a href="https://www.instagram.com/dr.bimalhospital/" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <Instagram size={16} />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {importantLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={linkPaths[link] || '/'}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={linkPaths[link] || '/'}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  Raj Ballabh Singh Dwar, Narayan Path Adarsh Colony, Bailey Rd, Saguna More, Patna, Bihar 801503
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 70709 31814</p>
                  <p className="text-gray-400">+91 8877873877</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-gray-400">info@drbimalhospital.in</p>
              </div>
              <div className="flex items-start space-x-3">
                <iframe
                  className="rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.543098910841!2d85.04089597543862!3d25.6200945774411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed56674e9f9d57%3A0xdb8423da8fc229ed!2sDr.%20Bimal%20Hospital%20and%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751040934010!5m2!1sen!2sin"
                  width="200"
                  height="150"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dr. Bimal Hospital Research Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
