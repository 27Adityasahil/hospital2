import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Clock, Heart } from 'lucide-react';

const CounterStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    patients: 0,
    awards: 0,
    experience: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: Users,
      title: 'Happy Patients',
      value: 245,
      suffix: 'k+',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: 'Department',
      value: 30,
      suffix: '+',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Years Experience',
      value: 15,
      suffix: '+',
      color: 'text-purple-600'
    },
    // {
    //   icon: Heart,
    //   title: 'Patient Satisfaction',
    //   value: 98,
    //   suffix: '%',
    //   color: 'text-red-600'
    // },
    {
      icon: Heart,
      title: 'Doctors',
      value: 34,
      suffix: '+',
      color: 'text-red-600'
    }
  ];

  useEffect(() => {
    if (inView) {
      const animateCounters = () => {
        stats.forEach((stat, index) => {
          let current = 0;
          const increment = stat.value / 100;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              current = stat.value;
              clearInterval(timer);
            }
            
            setCounters(prev => ({
              ...prev,
              [index === 0 ? 'patients' : index === 1 ? 'awards' : index === 2 ? 'experience' : 'satisfaction']: Math.floor(current)
            }));
          }, 20);
        });
      };

      const timeout = setTimeout(animateCounters, 500);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that reflect our commitment to providing exceptional healthcare services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <motion.div
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                {index === 0 ? counters.patients.toLocaleString() : 
                 index === 1 ? counters.awards : 
                 index === 2 ? counters.experience : 
                 counters.satisfaction}
                {stat.suffix}
              </motion.div>
              
              <p className="text-blue-100 font-medium">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStats;