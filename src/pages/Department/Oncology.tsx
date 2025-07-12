import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Use same styles

const Oncology = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Oncology" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h3 className="title">Oncology</h3>
            <p className="desc-part">
              Oncology is a branch of medicine which involves the diagnosis and treatment of tumors across various parts of the body including the brain, head, neck, lungs, liver, pancreas, gallbladder, intestine, kidneys, ovaries, uterus, breast, prostate, colon, and rectum.
            </p>
            <p className="desc-part">
              The Oncology Department at Dr. Bimal Hospital offers comprehensive cancer care services — from screening and early detection to multi-disciplinary treatment and rehabilitation. Equipped with cutting-edge technology and a team of qualified specialists and surgeons, the department provides round-the-clock services for a wide spectrum of cancers.
            </p>

            <div className="row img-part mb-25">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/onc1.jpg" alt="Oncology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/onc2.jpg" alt="Oncology 2" />
              </div>
            </div>

            <p className="desc-part">
              The department provides both medical and surgical treatment for a wide range of benign and malignant tumors, focusing on evidence-based oncology care.
            </p>
          </>
        );

      case "facilities":
        return (
          <>
            <h4 className="title">Services Offered</h4>

            <h5 className="subtitle">Medical Oncology</h5>
            <p className="desc-part">
              The department delivers high-quality chemotherapy and pharmacological treatment for solid tumors and hematologic cancers. Pediatric oncology and hemato-oncology cases are also treated by expert oncologists.
            </p>
            <ul className="chevron-right-icon">
              <li>Leukemia and Lymphoma</li>
              <li>Brain Tumor</li>
              <li>Solid Tumors</li>
            </ul>

            <h5 className="subtitle">Surgical Oncology</h5>
            <p className="desc-part">
              Complex tumors requiring surgical intervention are treated in modular operation theatres equipped with ICU support. The department performs a wide range of advanced surgical procedures for cancer.
            </p>
            <h5 className="subtitle">Cancers Requiring Surgery:</h5>
            <ul className="chevron-right-icon">
              <li>Head & Neck Cancers</li>
              <li>Ovarian Cancer</li>
              <li>Gynaecological Cancers</li>
              <li>Kidney Cancer</li>
              <li>Neuroendocrine Cancers</li>
              <li>Pancreatic Cancers</li>
              <li>Biliary Cancers</li>
              <li>Lung Cancer</li>
              <li>GI Cancer (Esophagus, Stomach, Colon, Rectum)</li>
              <li>Genitourinary Cancers</li>
              <li>Liver Cancer</li>
            </ul>
          </>
        );

      case "doctors":
        return (
          <>
            <h3 className="title">Our Oncology Specialist</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img src="https://drbimalhospital.in/assets/images/doctor/2022-12-27/1d8334a764a10186a8826ffcebcfa725.jpg" alt="Dr. Brajesh Kumar Choudhary" />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Brajesh Kumar Choudhary</a></h3>
                      <span className="team-title">Oncology</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/23">View Profile</a>
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
        title="Oncology"
        subtitle="Advanced Cancer Care & Surgical Expertise"
        backgroundImage="https://images.pexels.com/photos/8460432/pexels-photo-8460432.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Oncology;
