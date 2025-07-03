import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Brain, Bone, Eye, Baby, Stethoscope } from "lucide-react";
import d1 from "../assets/images1/d1.jpg";
import d2 from "../assets/images1/d2.jpg";
import d3 from "../assets/images1/d3.jpg";
import d4 from "../assets/images1/d4.jpg";
import d5 from "../assets/images1/d5.jpg";
import d6 from "../assets/images1/d6.jpg";
import d7 from "../assets/images1/d7.jpg";
import d8 from "../assets/images1/d8.jpg";
import d9 from "../assets/images1/d9.jpg";
import d10 from "../assets/images1/d10.jpg";
import d11 from "../assets/images1/d11.jpg";
import d12 from "../assets/images1/d12.jpg";
import d13 from "../assets/images1/d13.jpg";
import d14 from "../assets/images1/d14.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CentersOfExcellence = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const centers = [
    {
      icon: Heart,
      title: "Anesthesiology",
      description:
        "Advanced heart care with cutting-edge technology and experienced cardiologists.",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      image: d7,
    },
    {
      icon: Brain,
      title: "Cardiology",
      description:
        "Comprehensive brain and nervous system treatment with modern facilities.",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      image: d13,
    },
    {
      icon: Bone,
      title: "ENT",
      description:
        "Expert bone, joint, and muscle care with advanced surgical techniques.",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      image: d10,
    },
    {
      icon: Eye,
      title: "Gastroenterology",
      description:
        "Complete eye care services with state-of-the-art equipment.",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      image: d1,
    },
    {
      icon: Baby,
      title: "General Medicine",
      description: "Specialized care for infants, children, and adolescents.",
      color: "bg-pink-500",
      bgColor: "bg-pink-50",
      image: d9,
    },
    {
      icon: Stethoscope,
      title: "Gyanaecologist & Obstetrician",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d2,
    },
    {
      icon: Stethoscope,
      title: "Laparoscopic & General",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d3,
    },
    {
      icon: Stethoscope,
      title: "Nephrology",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d14,
    },
    {
      icon: Stethoscope,
      title: "Neurology",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d5,
    },
    {
      icon: Stethoscope,
      title: "Oncology",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d12,
    },
    {
      icon: Stethoscope,
      title: "Paediatrics",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d11,
    },
    {
      icon: Stethoscope,
      title: "Physiotherapy",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d6,
    },
    {
      icon: Stethoscope,
      title: "Radiology",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d4,
    },
    {
      icon: Stethoscope,
      title: "Urology",
      description: "Comprehensive primary care and internal medicine services.",
      color: "bg-teal-500",
      bgColor: "bg-teal-50",
      image: d8,
    },
  ];
  const sliderSettings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    arrows: true,
    dots: true,
    autoplay: true, // <-- add this
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            CENTERS OF EXCELLENCE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized medical centers provide world-class healthcare
            services with cutting-edge technology and expert medical
            professionals.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <Slider {...sliderSettings}>
          {centers.map((center, index) => (
            <motion.div
              key={center.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-b-4 border-b-blue-900"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden ">
                <img
                  src={center.image}
                  alt={center.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* <div className={`absolute top-4 right-4 w-12 h-12 ${center.color} rounded-full flex items-center justify-center`}>
                  {/* <center.icon className="w-6 h-6 text-white" /> 
                </div> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {center.title}
                </h3>
                {/* <p className="text-gray-600 mb-4">
                  {center.description}
                </p> */}
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
            
          ))}
          </Slider>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CentersOfExcellence;
