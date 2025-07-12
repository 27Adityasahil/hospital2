import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse styling

const Physiotherapy = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Physiotherapy" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Physiotherapy</h3>
            <p className="desc-part">
              Our physiotherapy and Rehabilitation Centre offers healing and physiotherapy services to both – the In-patients as well as out-patients, right from early diagnosis to recovery and beyond. Whether helping a child catch up with developmental milestones, putting stroke patients back on their feet, or improving the quality of life for senior citizens – our Physiotherapy Department is committed to helping patients recover and rehabilitate as soon as possible.
            </p>
            <p className="desc-part">
              Our Rehabilitation Team brings immense clinical experience, handling each case with utmost care. The physical therapy team treats specialized fields like musculoskeletal, cardio-respiratory, neurosurgery, neurological, and pediatric cases — including pre- and post-operative trauma and developmental disorders. Physical rehabilitation is vital for recovery in cases of mobility issues or long-term bedridden patients.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/phy1.jpg" alt="Physiotherapy 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/phy2.jpg" alt="Physiotherapy 2" />
              </div>
            </div>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h4 className="title">Services Offered</h4>
            <p className="desc-part">
              The Department of Physiotherapy offers a convenient and specialized environment for physical therapy treatment and rehabilitation. Services include:
            </p>

            <h4 className="subtitle">Orthopedic / Musculoskeletal Rehabilitation</h4>
            <ul className="bullet-list">
              <li>Joint Replacement &amp; Sports Injury</li>
              <li>Trauma</li>
              <li>Degenerative Conditions (RA, OA, Spondylosis)</li>
              <li>Amputations, Arthritis</li>
            </ul>

            <h4 className="subtitle">Neurosurgery / Neurological Rehabilitation</h4>
            <ul className="bullet-list">
              <li>Craniotomy, Spinal Fracture, Disc Problems</li>
              <li>Stroke, Parkinson’s Disease</li>
              <li>Nerve Palsies, Multiple Sclerosis</li>
            </ul>

            <h4 className="subtitle">Cardio Respiratory Rehabilitation</h4>
            <ul className="bullet-list">
              <li>COPD, Pneumonia, and other respiratory disorders</li>
              <li>CABG, Valve Replacement</li>
            </ul>

            <h4 className="subtitle">Gynaecological Rehabilitation</h4>
            <p className="desc-part">
              Our department conducts special antenatal and postnatal exercise classes for expectant mothers, guided by trained physiotherapists.
            </p>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Physiotherapy Expert</h3>

            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2023-01-03/09871230cff75a5309a211b04fde0d6c.jpeg"
                alt="Dr. Sudhir Kumar"
              />
              <h4>Dr. Sudhir Kumar</h4>
              <span>Physiotherapy</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/16" className="btn-view">View Profile</a>
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
        title="Physiotherapy"
        subtitle="Rehabilitation for Better Recovery"
        backgroundImage="https://images.pexels.com/photos/6823571/pexels-photo-6823571.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Physiotherapy;
