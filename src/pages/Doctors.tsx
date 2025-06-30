import React from "react";
import "./Dcotors.css";
import CommonBanner from "../components/CommonBanner";
import doctorsTeam from '../assets/header15.png'
import Breadcrumb from "../components/Breadcrumb";
function Doctors() {
    const breadcrumbItems = [
    // { label: "Home", path: "/" },
    { label: "Doctors", path: "/doctors" },
  ];
  return (
    <>
      <CommonBanner
        title="Doctor's Team"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage={doctorsTeam}
      />
      <Breadcrumb items={breadcrumbItems} />

      <section className="doctors min-h-screen bg-gray-50 flex justify-center">
        <div className="doctor-container">
          <div className="doctors-dept">
            <h3 className="dept-name">GASTEROENTEROLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Bimal Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">GYANAECOLOGIST & OBSTETRICIAN</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Sangita Choudhary</li>
                <li>Dr. Rupam Sinha</li>
                <li>Dr. Vinita Singh</li>
                <li>Dr. Puja Kumari</li>
                <li>Dr. Bhoomika Shrivastava</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">LAPAROSCOPIC & GENERAL</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Alakh Narayan</li>
                <li>Dr. Manoj Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">RADIOLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Vinod Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">NEUROLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. S Prasad</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">PHYSIOTHERAPY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Sudhir Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">ANESTHESIOLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Navin Kumar</li>
                <li>Dr. Ravi Ranjan Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">UROLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>-----</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">GENERAL MEDICINE</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Binod Kumar</li>
                <li>Dr. Surendra Kumar</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">ENT</h3>
            <div className="doctors-name">
              <ul>
                <li>-----</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">PAEDIATRICS</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Manmohan</li>
                <li>Dr. Jay Kishor Prasad</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">ONCOLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>DR.BRAJESH KUMAR CHOUDHARY</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">CARDIOLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Sujit</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">NEPHROLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Dr. Mani Bhushan</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">PATHOLOGY</h3>
            <div className="doctors-name">
              <ul>
                <li>Ashish Gupta</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">DENTAL</h3>
            <div className="doctors-name">
              <ul>
                <li>-------</li>
              </ul>
            </div>
          </div>
          <div className="doctors-dept">
            <h3 className="dept-name">ORTHOPEDIC</h3>
            <div className="doctors-name">
              <ul>
                <li>-------</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
