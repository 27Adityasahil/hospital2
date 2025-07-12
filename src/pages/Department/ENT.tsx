import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse your existing CSS

const ENT = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "ENT" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">ENT</h3>
            <p className="desc-part">
              The Division of ENT and Head Neck Surgery at Dr. Bimal Hospital is a comprehensive center equipped to deal with all ENT-related issues. Our experts treat conditions such as hearing loss, ear discharge, vertigo, infections, nasal bleeding, sinus and tonsil infections, voice disorders, swallowing difficulties, snoring, and more.
            </p>
            <p className="desc-part">
              Minimally invasive and advanced procedures like Balloon Sinuplasty, Coblator-assisted adeno-tonsillectomy, Microflap microlaryngeal surgeries, Endoscopic Skullbase surgeries, and Laser surgeries are regularly performed by the department.
            </p>

            <div className="row img-part mb-25">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/ent1.jpg" alt="ENT 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/ent2.jpg" alt="ENT 2" />
              </div>
            </div>

            <h3 className="title">Common Conditions Treated</h3>
            <p className="desc-part">
              <strong>Ears –</strong> Includes infections, hearing loss, discharge, vertigo, tinnitus, cranial nerve disorders, and congenital deformities.
            </p>
            <p className="desc-part">
              <strong>Nose –</strong> Conditions include allergic rhinitis, deviated nasal septum, sinusitis, nasal obstruction, bleeding, tumors, and smell disorders.
            </p>
            <p className="desc-part">
              <strong>Throat –</strong> Speech, swallowing, and voice-related disorders involving the larynx, esophagus, and throat are treated with advanced expertise.
            </p>
            <p className="desc-part">
              <strong>Head and Neck –</strong> Tumors (benign/malignant), facial trauma, facial nerve palsy, and facial deformities are handled with surgical precision.
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h4 className="title">Services Offered</h4>
            <p className="desc-part">
              <strong>OPD & Emergency Services –</strong> Comprehensive care for ENT and head & neck conditions is available through regular OPD and emergency care.
            </p>
            <p className="desc-part">
              <strong>Ear Surgeries –</strong> Tympanoplasty, Myringoplasty, Myringotomy, Ossiculoplasty, Stapedotomy, Radical Mastoidectomy, Facial Nerve Decompression, and more.
            </p>
            <p className="desc-part">
              <strong>Nose Surgeries –</strong> Septoplasty, CSF Rhinorrhoea Repair, FESS, Endoscopic Orbital Decompression, Endoscopic DCR, and Turbinoplasty.
            </p>
            <p className="desc-part">
              <strong>Throat Surgeries –</strong> Adenotonsillectomy, Microlaryngeal Surgery (MLS), vocal polyp and nodule removal, tumor surgeries, UPPP, and foreign body removal.
            </p>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Specialists</h3>
            <p className="desc-part">Doctor information will be updated soon.</p>
            {/* Optionally add a placeholder or loader */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="dept-page">
      <CommonBanner
        title="ENT"
        subtitle="Ear, Nose & Throat Care with Advanced Techniques"
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

export default ENT;
