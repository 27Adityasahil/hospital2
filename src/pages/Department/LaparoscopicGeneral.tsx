import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Same styling as others (reuse or create new)

const LaparoscopicGeneral = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Laparoscopic & General Surgery" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Laparoscopic & General</h3>
            <p className="desc-part">
              The Department of Laparoscopic Surgery at Dr. Bimal Hospital is an advanced center of surgical proficiency. The department specializes in treating internal abdominal conditions with small and painless surgical incisions. The balance between providing personalized care to the patients and following a scientific protocol in close coordination with other clinical specialties is one of the major highlights of the department.
            </p>
            <p className="desc-part">
              Being the renowned hospital in Patna for laparoscopic surgeries, Dr. Bimal Hospital is living up to the name it has earned. It is well-equipped with state-of-the-art facilities and advanced equipment to deliver minimally invasive treatment to patients. The team of doctors in the laparoscopic department is avidly involved in providing excellent patient care and service.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/lps1.jpg" alt="Laparoscopic 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/lps2.jpg" alt="Laparoscopic 2" />
              </div>
            </div>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h3 className="title">Laparoscopic Services</h3>
            <ul className="bullet-list">
              <li>Laparoscopic Cholecystectomy</li>
              <li>Laparoscopic Liver Abscess Drainage</li>
              <li>CBD exploration by Laparoscope</li>
              <li>Laparoscopic Surgery for Hydatid Cyst of Liver</li>
              <li>Total Laparoscopic Hysterectomy</li>
              <li>Laparoscopic Appendectomy</li>
              <li>Laparoscopic Ovarian Drilling</li>
              <li>Laparoscopic Hernia Repair</li>
              <li>Dye Test</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Laparoscopic Surgeons</h3>

            <div className="doctor-profile">
              <img src="https://drbimalhospital.in/assets/images/doctor/2022-06-11/b79d5cef5c17015a4a40dc5dc5683054.jpg" alt="Dr. Alakh Narayan" />
              <h4>Dr. Alakh Narayan</h4>
              <span>Laparoscopic & General</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/7" className="btn-view">View Profile</a>
                <a href="#" className="btn-appoint">Book Appointment</a>
              </div>
            </div>

            <div className="doctor-profile">
              <img src="https://drbimalhospital.in/assets/images/doctor/2022-06-11/4e3e3eba0bbffff212068bda982ce22b.jpg" alt="Dr. Manoj Kumar" />
              <h4>Dr. Manoj Kumar</h4>
              <span>Laparoscopic & General</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/9" className="btn-view">View Profile</a>
                <a href="#" className="btn-appoint">Book Appointment</a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="dept-page">
      <CommonBanner
        title="Laparoscopic & General Surgery"
        subtitle="Minimally Invasive Precision Care"
        backgroundImage="https://images.pexels.com/photos/6941893/pexels-photo-6941893.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="gastro-page">
        <div className="tabs">
          <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
            Overview
          </button>
          <button className={activeTab === "facilities" ? "active" : ""} onClick={() => setActiveTab("facilities")}>
            Facilities / Services
          </button>
          <button className={activeTab === "doctors" ? "active" : ""} onClick={() => setActiveTab("doctors")}>
            Doctors
          </button>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default LaparoscopicGeneral;
