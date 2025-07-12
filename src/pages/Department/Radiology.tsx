import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse existing styles

const Radiology = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Radiology" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Radiology</h3>
            <p className="desc-part">
              The Department of Radiology at Bimal boasts of putting our patients first and strives to provide the best patient care in an ultramodern facility. We are committed to providing excellence in patient care, education and research, with state-of-the-art technology. Our team of professional radiologists uses the most recent innovations to help people recover from their illnesses.
            </p>
            <p className="desc-part">
              Our radiologists work in close collaboration with the doctors to enhance patient diagnosis and treatment. For us, early detection is a priority. We leave no stone unturned to make the optimum use of advanced imaging technology for early disease detection and then taking all steps necessary towards its cure.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/rad1.jpg" alt="Radiology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/rad2.jpg" alt="Radiology 2" />
              </div>
            </div>

            <h3 className="title">The Department Employs Latest Digital Technology That Includes:</h3>
            <ul className="bullet-list">
              <li>Neuroradiology</li>
              <li>Ultrasound Imaging</li>
              <li>Digital Mammography</li>
              <li>Diagnostic and Musculoskeletal Radiography</li>
              <li>Head and Neck Imaging</li>
              <li>General Diagnostic X-ray</li>
            </ul>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h3 className="title">Services Offered</h3>
            <ul className="bullet-list">
              <li>4D ULTRASOUND</li>
              <li>Scanning using hi-end machine - 4D imaging of most organs of body with high end resolution, TVS and color Doppler facilities. Additional facilities include DICOM capability & CD writing.</li>
              <li>Mammography</li>
              <li>Bone Densitometer</li>
              <li>High end ECHO</li>
            </ul>

            <h4 className="title">Digital X-Ray</h4>
            <p className="desc-part">
              Advanced computerized radiography for acquiring high quality x-ray imaging. Images can be processed, stored and transmitted to anywhere in the world.
            </p>

            <h4 className="title">Mobile X-ray Machine</h4>
            <h4 className="title">OPG & Cephalography</h4>
            <p className="desc-part">
              All special tests like Barium studies (Barium enema, Barium meal Follow Through, upper GIT) for imaging of Dental and Trauma patients.
            </p>
            <p className="desc-part">Intravenous Urography (IVP), Micturating Cystourethrography (MCURGU), Hysteropsalpingography (HSG), Sialography, Colonogram etc.</p>

            <ul className="bullet-list">
              <li>Angiography / Angioplasty and Stent Placement</li>
              <li>Embolization</li>
              <li>Radiofrequency Ablation</li>
              <li>Vertebroplasty</li>
              <li>Kyphoplasty</li>
              <li>Biopsy for Cancer</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Radiologist</h3>

            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2022-06-17/febfc8fb18199362de11efe06a109bfe.jpg"
                alt="Dr. Vinod Kumar"
              />
              <h4>Dr. Vinod Kumar</h4>
              <span>Radiology</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/11" className="btn-view">View Profile</a>
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
        title="Radiology"
        subtitle="Advanced Diagnostic Imaging"
        backgroundImage="https://images.pexels.com/photos/7088488/pexels-photo-7088488.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Radiology;
