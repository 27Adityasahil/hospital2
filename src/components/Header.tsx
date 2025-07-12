import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  ChevronDown,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import nabh from "../assets/nabh.png";
import logo from "../assets/logo.png";

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutDropdownItems = [
    "About Us",
    // "Chairman Desk",
    "Vision & Mission",
    // "Achievements & Certificate",
    "Quality Initiative",
    // "Milestone",
  ];

  const departmentDropdownItems = [
    "Gastroenterology",
    "Gynaecologist & Obstetrician",
    "Laparoscopic & General",
    "Radiology",
    "Neurology",
    "Physiotherapy",
    "Anesthesiology",
    "Urology",
    "General Medicine",
    "ENT",
    "Paediatrics",
    "Oncology",
    "Cardiology",
    "Nephrology",
  ];

  const facilitiesDropdownItems = [
    "Ambulance Services",
    "Cafeteria",
    "Day Care",
    "Guest House",
    "In Patient Department",
    "Outpatient Department Complex",
    "Pharmacy",
  ];

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", dropdown: aboutDropdownItems },
    { name: "DEPARTMENTS", dropdown: departmentDropdownItems },
    {
      name: "FACILITIES",
      dropdown: facilitiesDropdownItems,
    },
    { name: "SERVICES", path: "/services" },
    { name: "DOCTOR'S TEAM", path: "/doctors" },
    { name: "TPA", path: "/tpa" },
  ];

  const routeMap: Record<string, string> = {
    // About Pages
    "About Us": "/about",
    "Chairman Desk": "/about/chairman",
    "Vision & Mission": "/about/vision-mission",
    "Achievements & Certificate": "/about/achievements",
    "Quality Initiative": "/about/quality-initiative",
    Milestone: "/about/milestone",

    // Department Page
    Anesthesiology: "/anesthesiology",
    Cardiology: "/cardiology",
    ENT: "/ent",
    Gastroenterology: "/gastroenterology",
    "General Medicine": "/general-medicine",
    "Gynaecologist & Obstetrician": "/gynaecologist-obstetrician",
    "Laparoscopic & General": "/laparoscopic-general",
    Nephrology: "/nephrology",
    Neurology: "/neurology",
    Oncology: "/oncology",
    Paediatrics: "/paediatric",
    Physiotherapy: "/physiotherapy",
    Radiology: "/radiology",
    Urology: "/urology",
  };

  const handleDropdownItemClick = (
    parentItem: { name: string; path?: string },
    dropdownItem: string
  ) => {
    if (routeMap[dropdownItem]) {
      navigate(routeMap[dropdownItem]);
    } else if (parentItem.name === "FACILITIES") {
      navigate(`/facilities/${encodeURIComponent(dropdownItem)}`);
    } else if (parentItem.path) {
      navigate(parentItem.path);
    }

    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@drbimalhospital.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 70709 31814, +91 8877873877</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Saguna More, Patna</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2 lg:mt-0">
            {/* <span className="cursor-pointer hover:text-blue-300">Contact</span> */}
            <span className="cursor-pointer hover:text-blue-300">Career</span>
            <Link to="/blogs">
              <span className="cursor-pointer hover:text-blue-300">Blog</span>
            </Link>
            <Link to="/gallery">
              <span className="cursor-pointer hover:text-blue-300">
                Gallery
              </span>
            </Link>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=100005962939497"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook
                  size={16}
                  className="cursor-pointer hover:text-blue-300"
                />
              </a>
              <a
                href="https://wa.me/917070931814"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle
                  size={16}
                  className="cursor-pointer hover:text-blue-300"
                />
              </a>
              <a
                href="https://www.instagram.com/dr.bimalhospital/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram
                  size={16}
                  className="cursor-pointer hover:text-blue-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={logo} className="h-12 rounded-lg" alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => {
                      if (item.path && !item.dropdown) navigate(item.path);
                    }}
                    aria-haspopup={item.dropdown ? "true" : undefined}
                    aria-expanded={
                      item.dropdown && activeDropdown === item.name
                        ? "true"
                        : "false"
                    }
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem: string) => (
                              <button
                                key={`${item.name}-${dropdownItem}`}
                                onClick={() =>
                                  handleDropdownItemClick(item, dropdownItem)
                                }
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                              >
                                {dropdownItem}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <button
                onClick={onBookAppointment}
                className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition-colors duration-200"
              >
                BOOK APPOINTMENT
              </button>
            </nav>

            {/* Certification Badge */}
            <div className="hidden lg:block mr-8">
              <a href="https://nabh.co/" target="_blank" rel="noreferrer">
                <img src={nabh} alt="Certification" className="w-16" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Stethoscope size={24} className="text-blue-600" />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden mt-4 pb-4 border-t border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-4 pt-4">
                  {navItems.map((item) => (
                    <div key={`mobile-${item.name}`}>
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                        onClick={() => {
                          if (item.dropdown) {
                            handleDropdownToggle(item.name);
                          } else {
                            if (item.path) navigate(item.path);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          className="ml-4 mt-2 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem: string) => (
                            <button
                              key={`mobile-${item.name}-${dropdownItem}`}
                              onClick={() =>
                                handleDropdownItemClick(item, dropdownItem)
                              }
                              className="block w-full text-left text-gray-600 hover:text-blue-600 py-1"
                            >
                              {dropdownItem}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      onBookAppointment();
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition-colors duration-200 w-fit"
                  >
                    BOOK APPOINTMENT
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
