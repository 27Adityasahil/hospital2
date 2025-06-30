import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Stethoscope, 
  Activity, 
  Users, 
  Scissors, 
  Zap, 
  Waves, 
  Dumbbell, 
  Pill, 
  LucideKey as Kidney, 
  Ear, 
  Shield,
  ArrowRight
} from 'lucide-react';
import CommonBanner from './CommonBanner';
import Breadcrumb from './Breadcrumb';
import ServiceModal from './ServiceModal';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment facilities.',
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
      subServices: [
        'Echocardiography',
        'Cardiac Catheterization',
        'Angioplasty',
        'Pacemaker Implantation',
        'Heart Surgery',
        'Cardiac Rehabilitation',
        'Stress Testing',
        'Holter Monitoring',
        'ECG & EKG',
        'Heart Failure Management',
        'Arrhythmia Treatment',
        'Preventive Cardiology'
      ]
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for brain, spine, and nervous system disorders.',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      subServices: [
        'Stroke Treatment',
        'Epilepsy Management',
        'Parkinson\'s Disease Care',
        'Multiple Sclerosis Treatment',
        'Migraine & Headache Clinic',
        'Memory Disorders',
        'Neuromuscular Disorders',
        'Brain Tumor Treatment',
        'Spinal Cord Injuries',
        'Neurological Rehabilitation',
        'EEG & EMG Testing',
        'Cognitive Assessment'
      ]
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone, joint, and musculoskeletal care and surgery.',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      subServices: [
        'Joint Replacement Surgery',
        'Arthroscopic Surgery',
        'Sports Medicine',
        'Fracture Treatment',
        'Spine Surgery',
        'Hand & Wrist Surgery',
        'Foot & Ankle Care',
        'Pediatric Orthopedics',
        'Trauma Surgery',
        'Physical Therapy',
        'Bone Density Testing',
        'Orthopedic Rehabilitation'
      ]
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services with modern diagnostic equipment.',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      subServices: [
        'Cataract Surgery',
        'Retinal Disorders',
        'Glaucoma Treatment',
        'LASIK Surgery',
        'Diabetic Eye Care',
        'Pediatric Ophthalmology',
        'Corneal Transplant',
        'Macular Degeneration',
        'Eye Trauma Care',
        'Contact Lens Fitting',
        'Vision Therapy',
        'Comprehensive Eye Exams'
      ]
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized medical care for infants, children, and adolescents.',
      color: 'bg-pink-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
      subServices: [
        'Newborn Care',
        'Vaccination Programs',
        'Growth & Development',
        'Pediatric Emergency Care',
        'Childhood Infections',
        'Asthma & Allergies',
        'Behavioral Health',
        'Nutrition Counseling',
        'Adolescent Medicine',
        'Pediatric Surgery',
        'Special Needs Care',
        'Well-Child Checkups'
      ]
    },
    {
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Comprehensive primary care and internal medicine services.',
      color: 'bg-teal-500',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-600',
      subServices: [
        'Preventive Care',
        'Chronic Disease Management',
        'Health Screenings',
        'Diabetes Care',
        'Hypertension Management',
        'Respiratory Disorders',
        'Infectious Diseases',
        'Geriatric Medicine',
        'Travel Medicine',
        'Executive Health Checkups',
        'Lifestyle Counseling',
        'Medication Management'
      ]
    },
    {
      icon: Activity,
      title: 'Gastroenterology',
      description: 'Advanced digestive system care and endoscopic procedures.',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      subServices: [
        'Endoscopy',
        'Colonoscopy',
        'Liver Disease Treatment',
        'Inflammatory Bowel Disease',
        'Acid Reflux Treatment',
        'Pancreatic Disorders',
        'Gallbladder Surgery',
        'Hepatitis Management',
        'Colon Cancer Screening',
        'Nutritional Counseling',
        'Digestive Disorders',
        'ERCP Procedures'
      ]
    },
    {
      icon: Users,
      title: 'Gynecology & Obstetrics',
      description: 'Comprehensive women\'s health and maternity care services.',
      color: 'bg-rose-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-600',
      subServices: [
        'Prenatal Care',
        'Labor & Delivery',
        'Cesarean Section',
        'High-Risk Pregnancy',
        'Gynecological Surgery',
        'Fertility Treatment',
        'Menopause Management',
        'Family Planning',
        'Breast Health',
        'Pelvic Floor Disorders',
        'Minimally Invasive Surgery',
        'Reproductive Health'
      ]
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      description: 'Advanced surgical procedures with minimally invasive techniques.',
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-600',
      subServices: [
        'Laparoscopic Surgery',
        'Hernia Repair',
        'Gallbladder Surgery',
        'Appendectomy',
        'Thyroid Surgery',
        'Breast Surgery',
        'Colorectal Surgery',
        'Trauma Surgery',
        'Emergency Surgery',
        'Wound Care',
        'Surgical Oncology',
        'Robotic Surgery'
      ]
    },
    {
      icon: Zap,
      title: 'Radiology',
      description: 'Advanced imaging and diagnostic radiology services.',
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-600',
      subServices: [
        'X-Ray Imaging',
        'CT Scan',
        'MRI Scanning',
        'Ultrasound',
        'Mammography',
        'Nuclear Medicine',
        'PET Scan',
        'Interventional Radiology',
        'Bone Densitometry',
        'Fluoroscopy',
        'Digital Radiography',
        'Image-Guided Procedures'
      ]
    },
    {
      icon: Dumbbell,
      title: 'Physiotherapy',
      description: 'Rehabilitation and physical therapy for recovery and wellness.',
      color: 'bg-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      textColor: 'text-cyan-600',
      subServices: [
        'Post-Surgical Rehabilitation',
        'Sports Injury Recovery',
        'Stroke Rehabilitation',
        'Spinal Therapy',
        'Joint Mobilization',
        'Pain Management',
        'Exercise Therapy',
        'Electrotherapy',
        'Occupational Therapy',
        'Speech Therapy',
        'Pediatric Physiotherapy',
        'Geriatric Rehabilitation'
      ]
    },
    {
      icon: Waves,
      title: 'Anesthesiology',
      description: 'Expert anesthesia care for surgical and pain management procedures.',
      color: 'bg-violet-500',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      textColor: 'text-violet-600',
      subServices: [
        'General Anesthesia',
        'Regional Anesthesia',
        'Local Anesthesia',
        'Sedation Services',
        'Pain Management',
        'Epidural Anesthesia',
        'Spinal Anesthesia',
        'Pediatric Anesthesia',
        'Cardiac Anesthesia',
        'Obstetric Anesthesia',
        'Critical Care',
        'Chronic Pain Treatment'
      ]
    },
    {
      icon: Pill,
      title: 'Urology',
      description: 'Specialized care for urinary tract and male reproductive system.',
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      subServices: [
        'Kidney Stone Treatment',
        'Prostate Surgery',
        'Bladder Disorders',
        'Urinary Incontinence',
        'Male Infertility',
        'Erectile Dysfunction',
        'Urological Cancer',
        'Pediatric Urology',
        'Minimally Invasive Surgery',
        'Dialysis Access',
        'Reconstructive Surgery',
        'Urodynamic Testing'
      ]
    },
    {
      icon: Ear,
      title: 'ENT (Otolaryngology)',
      description: 'Comprehensive ear, nose, and throat specialist care.',
      color: 'bg-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      subServices: [
        'Hearing Loss Treatment',
        'Sinus Surgery',
        'Tonsillectomy',
        'Voice Disorders',
        'Sleep Apnea Treatment',
        'Nasal Reconstruction',
        'Ear Infections',
        'Throat Cancer Treatment',
        'Allergy Testing',
        'Cochlear Implants',
        'Facial Plastic Surgery',
        'Pediatric ENT'
      ]
    },
    {
      icon: Shield,
      title: 'Oncology',
      description: 'Comprehensive cancer care and treatment services.',
      color: 'bg-slate-500',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      textColor: 'text-slate-600',
      subServices: [
        'Chemotherapy',
        'Radiation Therapy',
        'Surgical Oncology',
        'Immunotherapy',
        'Targeted Therapy',
        'Bone Marrow Transplant',
        'Cancer Screening',
        'Palliative Care',
        'Genetic Counseling',
        'Clinical Trials',
        'Supportive Care',
        'Cancer Rehabilitation'
      ]
    },
    {
      icon: Kidney,
      title: 'Nephrology',
      description: 'Kidney care, dialysis services, and renal disease management.',
      color: 'bg-lime-500',
      bgColor: 'bg-lime-50',
      borderColor: 'border-lime-200',
      textColor: 'text-lime-600',
      subServices: [
        'Hemodialysis',
        'Peritoneal Dialysis',
        'Kidney Transplant',
        'Chronic Kidney Disease',
        'Acute Kidney Injury',
        'Hypertension Management',
        'Electrolyte Disorders',
        'Glomerular Diseases',
        'Polycystic Kidney Disease',
        'Diabetic Nephropathy',
        'Kidney Biopsy',
        'Vascular Access Care'
      ]
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const breadcrumbItems = [
    { label: 'Services' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <CommonBanner 
        title="OUR SERVICES"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Services Grid */}
      <section className="py-12 md:py-20" ref={ref}>
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              MEDICAL SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of medical services designed to provide you with the highest quality healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-2xl p-6 border-2 ${service.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleServiceClick(service)}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className={`flex items-center ${service.textColor} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>

                {/* Service Count Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">
                    {service.subServices.length} specialized services
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-gray-600 mb-6">
                Our medical experts are here to guide you to the most appropriate care for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Book Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default ServicesPage;