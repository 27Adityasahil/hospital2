import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Common styling

const Urology = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Urology" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Urology</h3>
            <p className="desc-part">
              Bimal Hospital of Urology is a specialized unit providing comprehensive care for both adult and paediatric patients. Our team of nationally and internationally reputed urologists is equipped with advanced technology for the treatment of Urologic Oncology—covering cancers of the kidney, bladder, prostate, testicles, penis, ureters, and retroperitoneum.
            </p>
            <p className="desc-part">
              We also specialize in paediatric urology, treating conditions like voiding dysfunction, urinary tract reconstruction, and paediatric urologic cancers.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/uro1.jpg" alt="Urology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/uro2.jpg" alt="Urology 2" />
              </div>
            </div>

            <p className="desc-part">
              Our team offers minimally invasive, laparoscopic, and keyhole procedures for kidney and urinary tract stones, supported by advanced imaging and radiology.
            </p>
            <p className="desc-part">
              We also treat neurourological and reconstructive urology conditions, including trauma-related urinary tract injuries. Additionally, we manage men’s health conditions such as sexual dysfunction, prostate hyperplasia, urinary incontinence, and prostate cancer prevention.
            </p>

            <h4 className="subtitle">Treatment & Procedures</h4>
            <ul className="bullet-list">
              <li>Endoscopic stone surgery - PCNL, URS, RIRS</li>
              <li>Extracorporeal Lithotripsy</li>
              <li>Laser surgery for prostate</li>
              <li>Urinary incontinence surgery</li>
              <li>Uro-gynaecological surgery</li>
              <li>Paediatric urology – endoscopic & reconstructive</li>
              <li>Male infertility treatment</li>
              <li>Sexual dysfunction (male & female)</li>
              <li>Non-scalpel vasectomy</li>
              <li>Chronic/complicated UTIs</li>
              <li>Cancer surgery: Prostate, Testicular, Kidney, Bladder</li>
              <li>Urethral stricture surgery</li>
              <li>Reconstructive Urology</li>
            </ul>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h4 className="title">Services Offered</h4>
            <ul className="bullet-list">
              <li>Female Urology (Stress Incontinence & Urofistula)</li>
              <li>Reconstructive Urology</li>
              <li>Andrology Procedures</li>
              <li>Paediatric Urology</li>
              <li>Internal Lithotripsy</li>
              <li>Male Sexual Health Services</li>
              <li>Transurethral Resection of Prostate (TURP)</li>
              <li>Radical Prostatectomy</li>
              <li>Panendoscopy: Ureterocystoscopy & Ureterorenoscopy</li>
              <li>Transurethral Resection of Bladder Tumour (TURBT)</li>
              <li>Percutaneous Nephrolithotomy (PCNL)</li>
              <li>Internal Optical Urethrotomy (IOU)</li>
              <li>Bladder Neck Resection/Incision</li>
              <li>Partial & Complete Nephrectomies</li>
              <li>Pyelolithotomy</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Urologists</h3>
            <p className="desc-part">Doctor information will be added soon.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="dept-page">
      <CommonBanner
        title="Urology"
        subtitle="Advanced Urological Care & Surgery"
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

export default Urology;
