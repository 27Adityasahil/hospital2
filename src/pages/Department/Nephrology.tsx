import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse existing styling

const Nephrology = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Nephrology" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h3 className="title">Nephrology</h3>
            <p className="desc-part">
              Dr. Bimal Hospital of Renal Sciences is a leader in diagnosing, treating, and managing a wide range of kidney disorders. These include primary or secondary kidney diseases, electrolyte imbalances, hypertension, and chronic kidney disease (CKD 2–5). We also provide kidney replacement therapies like dialysis and transplantation.
            </p>
            <p className="desc-part">
              The department uses advanced protocols for treating conditions such as sexual dysfunction, infertility, hypogonadism, micropenis, and erectile dysfunction. Laser-based minimally invasive procedures are also available for managing enlarged prostates.
            </p>

            <div className="row img-part mb-25">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/nep1.jpg" alt="Nephrology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/nep2.jpg" alt="Nephrology 2" />
              </div>
            </div>

            <h3 className="title">Highlights of Dialysis at Dr. Bimal Hospital:</h3>
            <ul className="chevron-right-icon">
              <li>Comfortable and patient-friendly dialysis suites.</li>
              <li>Expert nephrologists and dialysis care technicians ensuring international protocols are followed.</li>
              <li>State-of-the-art dialysis machines with automated vital tracking and record storage.</li>
              <li>Double membrane RO system ensures the highest water quality for dialysis.</li>
              <li>Flexible dialysis scheduling including nighttime sessions.</li>
            </ul>

            <h3 className="title">NEPHROLOGY SERVICES</h3>
            <ul className="chevron-right-icon">
              <li>Vascular access management including permacath, central venous cannulation, and AV fistula.</li>
              <li>Renal biopsies (native and transplant kidneys).</li>
              <li>Intermittent and continuous peritoneal dialysis (IPD & CAPD).</li>
              <li>Ultramodern hemodialysis.</li>
              <li>Renal failure and urinary tract infection management.</li>
              <li>Renal dietician counselling and paediatric nephrology.</li>
              <li>Preventive nephrology care.</li>
            </ul>

            <h3 className="title">Treatment is Available For:</h3>
            <ul className="chevron-right-icon">
              <li>Resistant hypertension</li>
              <li>Nephrotic syndrome</li>
              <li>Renal calculus disease</li>
              <li>Complicated UTIs</li>
              <li>Chronic and acute renal failure</li>
              <li>Maintenance and intermittent haemodialysis</li>
              <li>Renal transplant patients</li>
            </ul>
          </>
        );

      case "facilities":
        return (
          <>
            <h4 className="title">Clinical Services We Provide</h4>
            <ul className="chevron-right-icon">
              <li>Inpatient and outpatient hemodialysis</li>
              <li>Critical care nephrology</li>
              <li>Continuous renal replacement therapies</li>
              <li>Peritoneal dialysis</li>
              <li>Kidney transplant evaluation</li>
              <li>Kidney biopsy and imaging</li>
              <li>Advanced hypertension care</li>
              <li>Interventional nephrology</li>
            </ul>

            <h4 className="title">Interventional Nephrology</h4>
            <p className="desc-part">
              Interventional nephrology involves specialized procedures to manage kidney disorders and dialysis access. Our trained nephrologists and interventional radiologists perform:
            </p>
            <ul className="chevron-right-icon">
              <li>Angioplasty of AV fistulae/grafts and central veins</li>
              <li>Placement and maintenance of dialysis catheters</li>
              <li>Thrombectomy and coiling of AV fistulae</li>
              <li>PICC lines, ports, trans-jugular and percutaneous renal biopsies</li>
              <li>Placement of peritoneal dialysis catheters</li>
            </ul>
          </>
        );

      case "doctors":
        return (
          <>
            <h3 className="title">Our Nephrology Specialist</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img
                        src="https://drbimalhospital.in/assets/images/doctor/2022-12-28/7cc86f713829b72d8f44302f6d817a6c.jpeg"
                        alt="Dr. Mani Bhushan"
                      />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Mani Bhushan</a></h3>
                      <span className="team-title">Nephrology</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/25">View Profile</a>
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
        title="Nephrology"
        subtitle="Comprehensive Kidney Care & Dialysis Support"
        backgroundImage="https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Nephrology;
