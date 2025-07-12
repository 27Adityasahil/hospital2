import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse existing styles

const GeneralMedicine = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "General Medicine" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">General Medicine</h3>
            <p className="desc-part">
              The General Medicine Department at Dr. Bimal Hospital focuses on the prevention, diagnosis, and non-surgical treatment of a wide range of diseases. As the first point of contact for most patients, general practitioners play a crucial role in evaluating symptoms, recommending tests, and coordinating care.
            </p>
            <p className="desc-part">
              Based on the physical analysis and test results, our physicians diagnose conditions and either provide treatment directly or refer patients to specialized departments for further care.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/uro1.jpg" alt="general-medicine-1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/uro2.jpg" alt="general-medicine-2" />
              </div>
            </div>

            <p className="desc-part">
              With access to modern diagnostics, talented medical professionals, and a 24-hour pharmacy, our department offers a complete and convenient healthcare experience that patients trust.
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h4 className="title">Services Offered</h4>
            <p className="desc-part">
              The Department of General Medicine provides a comprehensive and centralized approach to diagnosis and treatment. From managing chronic conditions to offering hospital-based care, our specialists ensure effective and efficient treatment.
            </p>
            <p className="desc-part">
              Patients are thoroughly evaluated, including reviews of their medical history, medications, and infections. Based on their condition, patients may receive treatment within the department or be referred to relevant specialties. For cases needing intensive care (e.g., IV drips or hospital observation), in-patient facilities are readily available.
            </p>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Specialists</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img src="https://drbimalhospital.in/assets/images/doctor/2022-06-17/b5883fa1246cd389abc48efef5fe1638.jpg" alt="Dr. Binod Kumar" />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">DR. BINOD KUMAR</a></h3>
                      <span className="team-title">General Medicine</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/19">View Profile</a>
                      <hr />
                      <a className="readon" href="#" data-toggle="modal" data-target="#modal2">Appointment</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img src="https://drbimalhospital.in/assets/images/doctor/2022-12-30/7e0f9ca4922b8eb7b81b0eae3f482c7a.jpg" alt="Dr. Surendra Kumar" />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Surendra Kumar</a></h3>
                      <span className="team-title">General Medicine</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/29">View Profile</a>
                      <hr />
                      <a className="readon" href="#" data-toggle="modal" data-target="#modal2">Appointment</a>
                    </div>
                  </div>
                </div>
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
        title="General Medicine"
        subtitle="Comprehensive Diagnosis & Internal Medicine"
        backgroundImage="https://images.pexels.com/photos/8376275/pexels-photo-8376275.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default GeneralMedicine;
