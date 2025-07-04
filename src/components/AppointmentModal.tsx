import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import {
  X,
  Calendar,
  User,
  Phone,
  Mail,
  Clock,
  FileText,
  MapPin,
  ChevronDown,
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDoctor?: string;
  selectedDepartment?: string;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedDoctor = "",
  selectedDepartment = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  // Complete Department-Doctor mapping with all departments
  const departmentDoctors: Record<string, string[]> = {
    Gastroenterology: ["Dr. Bimal Kumar"],
    "Gynaecologist & Obstetrician": [
      "Dr. Sangita Choudhary",
      "Dr. Rupam Sinha",
      "Dr. Vinita Singh",
      "Dr. Puja Kumari",
      "Dr. Bhoomika Shrivastava",
    ],
    "Laparoscopic & General": ["Dr. Alakh Narayan", "Dr. Manoj Kumar"],
    Radiology: ["Dr. Vinod Kumar"],
    Neurology: ["Dr. S Prasad"],
    Physiotherapy: ["Dr. Sudhir Kumar"],
    Anesthesiology: ["Dr. Navin Kumar", "Dr. Ravi Ranjan Kumar"],
    Urology: ["-----"],
    "General Medicine": ["Dr. Binod Kumar", "Dr. Surendra Kumar"],
    ENT: ["-----"],
    Paediatrics: ["Dr. Manmohan", "Dr. Jay Kishor Prasad"],
    Oncology: ["DR.BRAJESH KUMAR CHOUDHARY"],
    Cardiology: ["Dr. Sujit"],
    Nephrology: ["Dr. Mani Bhushan"],
    Pathology: ["Ashish Gupta"],
    Dental: ["-------"],
    Orthopedic: ["-------"],
  };

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ];

  // Set selected doctor and department when modal opens
  useEffect(() => {
    if (isOpen && (selectedDoctor || selectedDepartment)) {
      setFormData((prev) => ({
        ...prev,
        doctor: selectedDoctor,
        department: selectedDepartment,
      }));
    }
  }, [isOpen, selectedDoctor, selectedDepartment]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Clear doctor selection when department changes
      ...(name === "department" && { doctor: "" }),
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Appointment booking:", formData);
  //   alert(
  //     "Appointment request submitted successfully! We will contact you soon."
  //   );
  //   onClose();
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     gender: "",
  //     address: "",
  //     department: "",
  //     doctor: "",
  //     date: "",
  //     time: "",
  //     message: "",
  //   });
  // };


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://appointment-bimal.onrender.com/send-email", formData);
    // const response = await axios.post("http://localhost:5000/send-email", formData);
    console.log("Appointment booking:", formData);
    alert("Appointment request submitted successfully! We will contact you soon.");
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  } catch (error) {
    console.error("Error sending email", error);
    alert("There was an issue submitting your request. Please try again later.");
  }
};
  const availableDoctors = formData.department
    ? departmentDoctors[formData.department] || []
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Book Appointment
                  </h2>
                  <p className="text-gray-600">
                    Schedule your visit with our experts
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Phone and Gender Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *{" "}
                    <span className="text-red-500 text-xs">
                      (only 10 digit number)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Enter Phone No."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Gender Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Department and Doctor Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Department Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select department</option>
                      {Object.keys(departmentDoctors)
                        .sort()
                        .map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Doctor Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Doctor *
                  </label>
                  <div className="relative">
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.department}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <option value="">Select Doctor</option>
                      {availableDoctors.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none ${
                        !formData.department ? "text-gray-300" : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 cursor-pointer"
                  />
                </div>

                {/* Time Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Day & Time *
                  </label>
                  <div className="relative">
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
