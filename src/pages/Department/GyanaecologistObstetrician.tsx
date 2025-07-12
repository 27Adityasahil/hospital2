import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse Gastro style or copy CSS if needed

const GyanaecologistObstetrician = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Gynaecology" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Gynaecologist & Obstetrician</h3>
            <p className="desc-part">
              Dr. Bimal Hospital of Gynecology constitutes of experienced and reputed gynaecologists that have expertise in providing advanced services for reproductive health. The Institute is well developed to address the gynaecological needs of women and offers comprehensive medical, diagnostic & surgical expertise.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/gyn1.jpg" alt="Gynecology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/gyn2.jpg" alt="Gynecology 2" />
              </div>
            </div>

            <h3 className="title">Milestones</h3>
            <ul className="bullet-list">
              <li>Program for Cervical Cancer – diagnosis, prevention & vaccination.</li>
              <li>Handling of high-risk pregnancy cases by reputed doctors.</li>
              <li>Post-menopausal issue management programs.</li>
              <li>Comprehensive infertility treatment and sexual health support.</li>
            </ul>

            <h3 className="title">Treatment and Procedures</h3>
            <ul className="bullet-list">
              <li>Teenage hormonal/menstrual issues</li>
              <li>Fibroid, prolapsed uterus, ovarian cysts</li>
              <li>Infertility & tubal block</li>
              <li>Hysterectomy, PCOD treatment, cervical cancer detection</li>
              <li>Uro-Gynecology (urinary incontinence)</li>
            </ul>

            <h3 className="title">Laparoscopic Procedures</h3>
            <ul className="bullet-list">
              <li>Total laparoscopic Hysterectomy</li>
              <li>Ovarian Cystectomy, Endometriotic Cystectomy</li>
              <li>Adhesiolysis, Ectopic Pregnancy, Ovarian Diathermy</li>
            </ul>

            <h3 className="title">Cost of Treatment</h3>
            <p className="desc-part">
              For cost estimates regarding hysterectomy, cervical/ovarian cancer, and other gyne treatments, email us at{" "}
              <a href="mailto:info@drbimalhospital.in">info@drbimalhospital.in</a>.
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h3 className="title">Wide Range Of Facilities And Medical Services</h3>
            <p className="desc-part">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don’t look even slightly believable.
            </p>
            <p className="desc-part">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.
            </p>

            <h3 className="title">Neurology Place Medical Hospital Center</h3>
            <p className="desc-part">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <ul className="bullet-list">
              <li>It is a long established fact that a reader will be distracted.</li>
              <li>It is a long established fact that a reader will be distracted by .</li>
              <li>It is a long established fact that a reader will be distracted by .</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Meet Our Gynaecologists</h3>
            <div className="doctor-profile">
              <img src="https://drbimalhospital.in/assets/images/doctor/2022-06-11/56ccdb8c0574d69aac1dceb7bff35a44.jpg" alt="Dr. Sangita" />
              <h4>Dr. Sangita Choudhary</h4>
              <span>Gynaecologist & Obstetrician</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/3" className="btn-view">View Profile</a>
                <a href="#" className="btn-appoint">Book Appointment</a>
              </div>
            </div>
            {/* Add more doctor cards as needed */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="dept-page">
      <CommonBanner
        title="Gynaecology"
        subtitle="Women’s Wellness & Surgical Expertise"
        backgroundImage="https://images.pexels.com/photos/6758841/pexels-photo-6758841.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default GyanaecologistObstetrician;
