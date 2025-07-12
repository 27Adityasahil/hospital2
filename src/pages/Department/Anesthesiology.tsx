import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse styling

const Anaesthesiology = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Anaesthesiology" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Anaesthesiology</h3>
            <p className="desc-part">
              The Department of Anaesthesia at Dr. Bimal Hospital provides optimal care to adults and children during the perioperative period. Anaesthetists are available 24/7 for planned and emergency surgeries, supported by modern anaesthesia machines, multipara monitors, fibre-optic endoscopes, and nerve locators to ensure safe administration of anaesthesia.
            </p>
            <p className="desc-part">
              Our team supports various surgical specialties including urology, gastroenterology (ERCP, endoscopy, bronchoscopy), ophthalmology (e.g. cataract surgery), ENT, plastic/reconstructive surgery, neurosurgery, and cardiac surgeries. Equipped with cardiac OT, cath lab, and ICU, we handle complex procedures like CABG, valve replacements, and PTCA.
            </p>
            <p className="desc-part">
              Our anaesthesiology team uses general and regional techniques. Advanced monitoring tools like ECG, capnography, and infusion pumps ensure precise, safe drug delivery. Patients are also evaluated pre-operatively in our dedicated Anaesthesiology OPD.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/ana1.jpg" alt="Anaesthesia 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/ana2.jpg" alt="Anaesthesia 2" />
              </div>
            </div>

            <h4 className="subtitle">Services Offered</h4>
            <p className="desc-part">
              We use modern, safe drugs and monitoring technology including pulse oximeters, capnography, respiratory gas monitors, and invasive monitors like arterial BP and cardiac output. Infusion pumps in every OT help deliver precise drug doses.
            </p>
            <ul className="bullet-list">
              <li>Cardiac Catheterization Lab</li>
              <li>Endoscopy</li>
              <li>Digital Subtraction Angiography (DSA) Lab</li>
              <li>IVF</li>
            </ul>
            <p className="desc-part">
              Our Anaesthesia OPD allows pre-op consultations where patients are evaluated and counselled on anaesthesia plans.
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h4 className="title">Advanced Anaesthesia Services</h4>

            <p className="desc-part">
              <b>Spinal Anaesthesia –</b> Drug is injected into the spinal cord to perform lower-body surgeries safely.
            </p>
            <p className="desc-part">
              <b>Anaesthesia outside OT –</b> Given increasing demand, anaesthesia is administered in ER, CT/MRI suites, and pain clinics.
            </p>
            <p className="desc-part">
              <b>Perioperative Anaesthesia –</b> Comprehensive care includes pre-evaluation, intraoperative monitoring, and post-op care.
            </p>
            <p className="desc-part">
              <b>Acute Pain Management –</b> Post-surgical pain relief with specialized invasive methods, reducing hospital stay and chronic pain risk.
            </p>
            <p className="desc-part">
              <b>Chronic Pain Management –</b> We treat back pain, joint pain, diabetic neuropathy, fibromyalgia, post-trauma pain, CRPS, and other chronic pain disorders.
            </p>

            <ul className="bullet-list">
              <li>Anaesthesia in Surgical ICU</li>
              <li>Labour Analgesia</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Anaesthesiologists</h3>
            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2025-02-24/8b607d08608fd4f5633b3a9ffb96d1a2.jpeg"
                alt="Dr. Navin Kumar"
              />
              <h4>Dr. Navin Kumar</h4>
              <span>Anaesthesiology</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/12" className="btn-view">View Profile</a>
                <a href="#" className="btn-appoint">Book Appointment</a>
              </div>
            </div>
            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2023-01-03/f1c65d3cc0059cc417032baf1b90bed8.jpeg"
                alt="Dr. Ravi Ranjan Kumar"
              />
              <h4>Dr. Ravi Ranjan Kumar</h4>
              <span>Anaesthesiology</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/13" className="btn-view">View Profile</a>
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
        title="Anaesthesiology"
        subtitle="Excellence in Surgical Support"
        backgroundImage="https://images.pexels.com/photos/8460151/pexels-photo-8460151.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="gastro-page">
        <div className="tabs">
          <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
            Overview
          </button>
          <button className={activeTab === "facilities" ? "active" : ""} onClick={() => setActiveTab("facilities")}>
            Services
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

export default Anaesthesiology;
