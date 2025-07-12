import React, { useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";
import "./Gastroenterology.css"; // Reuse existing styles

const Neurology = () => {
  const breadcrumbItems = [
    { label: "Departments" },
    { label: "Neurology" },
  ];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Neurology</h3>
            <p className="desc-part">
              At Dr. Bimal Hospital, we have world-class Neurology Services available for both In and Out patients. The state-of-the-art centre provides care for a variety of Neurological conditions related to the Brain, Spinal Cord and the Nervous system.
            </p>
            <p className="desc-part">
              Our experienced team of Neurologists provides excellent clinical care for Neurological disorders and carries out its own clinical research and trials. The Neurology department has facilities like: Latest 256 SLICE CT Scan, Neck and Head Ultrasound, and 3TESLA MRI. Our team also conducts Neurophysiologic studies such as EEG and EMG to ensure the best possible care.
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/rad1.jpg" alt="Neurology 1" />
              </div>
              <div className="col-lg-6">
                <img src="https://drbimalhospital.in/assetss/images/rad2.jpg" alt="Neurology 2" />
              </div>
            </div>

            <p className="desc-part">
              The medical history of the patient is taken by our Neurologists in the beginning of the treatment, followed by a physical examination. The examination helps evaluate the condition of the patient’s Nervous System based on cognitive function, cranial nerves, motor and sensory reflexes, and coordination.
            </p>
            <p className="desc-part">
              Treatment plans differ from patient to patient depending on the type of Neurological disorder. Patients may be referred to a physiotherapist, speech therapist, or psychotherapist, prescribed medications, advised lifestyle changes, or referred to a Neurosurgeon if surgery is required.
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <p>The facilities of Physiotherapy and Neurosurgery are also available.</p>
            <h4 className="title">Common Neurological Conditions Treated:</h4>
            <ul className="bullet-list">
              <li>Strokes (CVA) with TPA Therapy/FCH</li>
              <li>Dementia</li>
              <li>Meningitis</li>
              <li>Cephalitis</li>
              <li>Attention Deficit (Hyperactivity Disorder)</li>
              <li>Parkinson’s Disease</li>
              <li>Neuropathy / Myopathy</li>
              <li>Sleep Disorders</li>
              <li>Neuromuscular Disease</li>
              <li>Multiple Sclerosis</li>
              <li>Botox Therapy / Movement Disorder</li>
              <li>Hand Therapy System</li>
              <li>State-of-the-Art Neuroelectrophysiology Department</li>
            </ul>

            <h4 className="title">The Centre Includes Specialists Such As:</h4>
            <ul className="bullet-list">
              <li>Neurologists</li>
              <li>Neurosurgeons</li>
              <li>Neurophysiologists</li>
              <li>Paediatric Neurologists</li>
              <li>Interventional Neuroradiologists</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Our Neurologist</h3>

            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2022-06-15/27faf134e0c85d4fc2f40a6ce9c622d1.jpg"
                alt="Dr. S Prasad"
              />
              <h4>Dr. S Prasad</h4>
              <span>Neurology</span>
              <div className="doc-links">
                <a href="https://drbimalhospital.in/viewprofile/15" className="btn-view">View Profile</a>
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
        title="Neurology"
        subtitle="Expert Care for Brain and Nerve Disorders"
        backgroundImage="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

export default Neurology;
