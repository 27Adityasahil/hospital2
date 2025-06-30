
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import s1 from "../assets/images1/s1.png";
import s2 from "../assets/images1/s2.png";
import s3 from "../assets/images1/s3.png";
import s4 from "../assets/images1/s4.png";
import s5 from "../assets/images1/s5.png";
import s6 from "../assets/images1/s6.png";

const QualityServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      // icon: {s1},
      icon: () => <img src={s1} alt="OPD" className="w-8 h-8" />,
      title: "O.P.D Services",
      description:
        "It is known as outpatient department in which we provide the facility of diagnosis and take care of the patients who can not stay overnight",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      // icon: Microscope,
      icon: () => <img src={s2} alt="OPD" className="w-8 h-8" />,
      title: "Operation Theatres Complex",
      description:
        "The operation theatre complex at the Dr. Bimal Hospital is situated on the second floor. We have one recovery unit outside the theaters",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      // icon: Ambulance,
      icon: () => <img src={s3} alt="OPD" className="w-8 h-8" />,
      title: "I.C.U",
      description:
        "An intensive care unit (ICU), also known as an intensive therapy unit or intensive treatment unit.",
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      // icon: Clock,
      icon: () => <img src={s4} alt="OPD" className="w-8 h-8" />,
      title: "Dialysis unit",
      description:
        "Dialysis is a treatment for individuals whose kidneys are failing. There are two types of dialysis, hemodialysis and peritoneal dialysis.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      // icon: Shield,
      icon: () => <img src={s5} alt="OPD" className="w-8 h-8" />,
      title: "Pathology Laboratory",
      description:
        "Pathology Laboratory provides tertiary and reference testing services to all of lowa, including clinics, independent hospitals.",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      // icon: HeartHandshake,
      icon: () => <img src={s6} alt="OPD" className="w-8 h-8" />,
      title: "Radiology",
      description:
        "Radiology is a branch of medicine that users imaging technology to diagnose and treat disease.",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            QUALITY SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with a focus on
            quality, safety, and patient satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-full mb-6 quality-card`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {/* <service.icon className={`w-8 h-8 ${service.iconColor}`} /> */}
                {typeof service.icon === "function" ? (
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                ) : (
                  service.icon
                )}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityServices;
