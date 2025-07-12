import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse for consistent styling

const Paediatrics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Paediatrics" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <h3 className="title">Paediatrics</h3>
            <p className="desc-part">
              The Department of Paediatrics at Dr. Bimal Hospital caters to comprehensive health needs of children up to adolescence. With dedicated consultants, paediatric intensivists, and specially trained nurses available 24/7, the department provides high-quality and evidence-based care using a multidisciplinary approach.
            </p>
            <p className="desc-part">
              Child-friendly ambience is central to the pediatric OPDs at Dr. Bimal Hospital.
            </p>

            <div className="row img-part mb-25">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/pae1.jpg" alt="Paediatrics 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/pae2.jpg" alt="Paediatrics 2" />
              </div>
            </div>

            <p className="desc-part">
              The Pediatric Surgery unit treats children from newborns to 18 years old. All surgical needs are handled under one roof by an experienced team, with open and endoscopic procedures available. The department is supported by a tertiary care NICU and a fully equipped Pediatric ICU for critical neonatal and pediatric care.
            </p>
          </>
        );

      case "facilities":
        return (
          <>
            <h4 className="title">Services Offered</h4>
            <p className="desc-part">
              Our state-of-the-art lab and radiology departments operate 24/7 to offer diagnostic support for even the most complex pediatric conditions.
            </p>
            <ul className="chevron-right-icon">
              <li>
                Child-friendly care environment delivering modern pediatric care through advanced technology and expert clinicians.
              </li>
              <li>
                Easy access to specialized pediatric programs and consultation for both children and caregivers.
              </li>
              <li>
                Promoting better health outcomes for children through appropriate health services and preventive care.
              </li>
            </ul>
          </>
        );

      case "doctors":
        return (
          <>
            <h3 className="title">Our Paediatricians</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="item">
                  <div className="team-inner">
                    <div className="img-part">
                      <img src="https://drbimalhospital.in/assets/images/doctor/2022-06-15/0dd4fe114adaef52d4991589d0ceba05.jpg" alt="Dr. Manmohan" />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Manmohan</a></h3>
                      <span className="team-title">Paediatrics</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/22">View Profile</a>
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
                      <img src="https://drbimalhospital.in/assets/images/doctor/2025-03-14/f52aa446795061964b2736bf6b104260.jpg" alt="Dr. Jay Kishor Prasad" />
                      <div className="social-icon">
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3 className="team-name"><a href="#">Dr. Jay Kishor Prasad</a></h3>
                      <span className="team-title">Paediatrics</span>
                      <a className="readon3" href="https://drbimalhospital.in/viewprofile/34">View Profile</a>
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
        title="Paediatrics"
        subtitle="Compassionate Childcare from Newborn to Adolescence"
        backgroundImage="https://images.pexels.com/photos/8618374/pexels-photo-8618374.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Paediatrics;
