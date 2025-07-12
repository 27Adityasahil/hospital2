import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse this stylesheet

const Cardiology = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Cardiology" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h3 className="title">Cardiology</h3>
            <p className="desc-part">
              The Department of Cardiology aims to provide a holistic approach to cardiac care using both invasive and non-invasive diagnostic and therapeutic services. Our expert team of doctors is equipped to handle a wide spectrum of cardiac issues through dedicated Non-invasive and Invasive divisions.
            </p>

            <div className="row img-part mb-25">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/onc1.jpg" alt="Cardiology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/onc2.jpg" alt="Cardiology 2" />
              </div>
            </div>

            <h4 className="text-white">Surgeries Performed:</h4>
            <ul className="chevron-right-icon">
              <li>Angiography</li>
              <li>Angioplasty</li>
              <li>Chest OPD</li>
              <li>Mastectomy (Simple)</li>
              <li>Sudden Cardiac Arrest (SCA) Management</li>
            </ul>
          </>
        );

      case "facilities":
        return (
          <>
            <h4 className="title">Services Offered</h4>
            <ul className="chevron-right-icon">
              <li>
                The OPD treats cardiological issues including IHD, hypertension, valvular cardiovascular disorders, heart attacks, pericardial diseases, respiratory complications, multisystem infections, and regular cardiac follow-ups.
              </li>
              <li>
                The ICU is equipped with state-of-the-art cardiac monitors, pulse oximeters, infusion pumps, defibrillators, C-arms, and other critical cardiac care equipment.
              </li>
              <li>
                Emergency cardiac cases such as MI, heart block, cardiac tamponade, DVT, and pulmonary embolism are effectively managed in the ICU.
              </li>
              <li>
                Advanced diagnostic tools such as Doppler echocardiography, Holter monitoring, and TMT are available for complete cardiac evaluation.
              </li>
            </ul>
          </>
        );

      case "doctors":
        return (
          <>
            <h3 className="title">Our Cardiology Specialist</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img
                        src="https://drbimalhospital.in/assets/images/doctor/2022-06-15/302dccbd024a0f2c870a0fe2473b89f5.jpg"
                        alt="Dr. Sujit"
                      />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Sujit</a></h3>
                      <span className="team-title">Cardiology</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/24">View Profile</a>
                      <hr />
                      <a className="readon" href="#" data-toggle="modal" data-target="#modal2">Appointment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="dept-page">
      <CommonBanner
        title="Cardiology"
        subtitle="Expert Care for Every Heartbeat"
        backgroundImage="https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Cardiology;
