import React, { useState } from "react";
import "./Gastroenterology.css";
import CommonBanner from "../../components/CommonBanner";
import Breadcrumb from "../../components/Breadcrumb";

const Gastroenterology = () => {

    const breadcrumbItems = [
  { label: 'Departments' },
  { label: 'Gastroenterology' }
];

  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3 className="title">Gastroenterology</h3>
            <p className="desc-part">
              Dr. Bimal Hospital of Gastroenterology and GI Surgery is the
              destination of choice for those with Gastrointestinal, Liver or
              other diseases. Gastroenterologists and Hepatologists here offer
              expert medical treatment for patients with disorders of the
              Esophagus, Liver, and Gallbladder, CBD stomach, Pancreas, Small
              intestine and Colon. GI specialists work with a team of surgeons,
              nutritionists, nurses and other support staff to ensure
              comprehensive treatment and care to patients, using cutting edge
              technologies and tools at every stage of the process, from
              diagnosis to treatment and recovery. Paras Institute of
              Gastroenterology and GI Surgery also specializes in treating
              cancers of the gastro-intestinal tract.
              {/* Truncated for brevity – Use full text here from your original post */}
            </p>

            <div className="row img-part">
              <div className="col-lg-6">
                <img
                  src="https://drbimalhospital.in/assetss/images/gas1.jpg"
                  alt="gas1"
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="https://drbimalhospital.in/assetss/images/gas2.jpg"
                  alt="gas2"
                />
              </div>
            </div>

            <h3 className="title">Milestones</h3>
            <p className="desc-part">
              Dr. Bimal Hospital, Patna provides a well developed management
              program for patients with Gastrointestinal, Biliary liver, and
              pancreatic disorders. Dr. Bimal Hospital, Patna also has well
              defined protocols to manage patients with Jaundice, Ulcer, GI
              Bleeding, Gastro esophageal reflux disease (acidity, heartburn,
              vomiting), irritable bowel syndrome and others.
            </p>

            <h3 className="title">Treatment and Procedures</h3>
            <p className="desc-part">
              Dr. Bimal Hospital of Gastroenterology and GI Surgery has a
              state-of-the-art Endoscopy Center, fully equipped to offer
              comprehensive diagnostic and therapeutic endoscopy service.
            </p>

            <h3 className="title">Medical Gastroenterology</h3>
            <ul className="bullet-list">
              <li>Upper GI Endoscopy (UGIE)</li>
              <li>Colonoscopy</li>
            </ul>

            <h4 className="title">Interventional Endoscopic Procedures</h4>
            <ul className="bullet-list">
              <li>Percutaneous endoscopic gastrostomy (PEG)</li>
              <li>Endoscopic retrograde cholangio-pancreatography (ERCP)</li>
              <li>UGI Endoscopy.</li>
              <li>UGI Endoscopy with Biopsy.</li>
              <li>Variceal Banding Esophageal (EVL).</li>
              <li>APC/Sclerotherapy.</li>
              <li>
                Stenting (Esophageal, Pylonic, Bilary, Pancreatic and Colonic).
              </li>
              <li>Achalasion, dilation, Structure dilation.</li>
            </ul>

            <h3 className="title">
              Jaundice – Obstructive Jaundice, Viral Hepatitis and Biliary Stone
              Disease
            </h3>
            <p className="desc-part">
              It is not an illness but a medical condition which can occur in
              babies, children and adults. Jaundice most often occurs as a
              result of an underlying disorder that either causes tissues to
              become over-saturated with bilirubin or prevents the liver from
              disposing of bilirubin. In newborn babies, though, jaundice is
              common because they have extra red blood cells that begin to break
              down soon after they are born. In otherwise healthy newborns,
              jaundice usually peaks at about three to five days of life and
              then begins to go away on its own. In breastfed babies, this can
              take as long as two to three weeks. Jaundice during the first 24
              hours of life is not considered normal and will prompt to do some
              tests to look for the cause. In adults, the symptoms of jaundice
              may indicate damage to the liver or Bilary obstruction. If the
              cause is not treated, it can lead to liver failure and other
              complications.
            </p>

            <h3 className="title">Ulcers</h3>
            <p className="desc-part">
              Ulcers: Peptic ulcers are open sores that develop on the inside
              lining of your esophagus, stomach and the upper portion of your
              small intestine or colon. The most common symptom of a peptic
              ulcer is abdominal pain. <br /> <br /> Peptic ulcers include:{" "}
              <br />
              Gastric ulcers- that occur on the inside of the stomach Esophageal
              ulcers- that occur inside the hollow tube (esophagus) that carries
              food from your throat to your stomach. <br /> Duodenal ulcers-
              that occur on the inside of the upper portion of your small
              intestine (duodenum) Chronic liver disease (Hepatitis B, Hepatitis
              C), cirrhosis, portal hypertension, variceal bleeding, ascites.{" "}
              <br /> These are diseases that are caused due to continued
              degeneration and progressive destruction of the liver. Such
              aspects can develop into Cirrhosis.
            </p>

            <h3 className="title">
              GI Bleeding (Haematemesis / Melena / Fresh Blood Per Rectum)-
            </h3>
            <p className="desc-part">
              Gastrointestinal bleeding or hemorrhage is caused due to
              hemorrhage in the gastrointestinal tract or rectum. If left
              untreated the same can manifest into serious secondary medical
              conditions. The degrees of bleeding can range from minimal to
              acute and chronic.
            </p>

            <h3 className="title">Abdominal Pain</h3>
            <p className="desc-part">
              Abdominal pain can be because of a number of reasons and the same
              has to be diagnosed specifically by specialists. The same can be
              alcohol induced, due to swelling or abnormality in the
              gastrointestinal tract, liver, pancreas, etc.
            </p>

            <h3 className="title">Other Diagnoses</h3>
            <ul className="bullet-list">
              <li>
                Dyspepsia (gas, bloating of abdomen, distension of abdomen).
              </li>
              <li>
                Gastro esophageal reflux disease (acidity, heartburn, vomiting).
              </li>
              <li>Loss of appetite/weight loss.</li>
              <li>
                Irritable bowel syndrome (chronic diarrhea, mucus in stools,
                loose bowel movements/constipation).
              </li>
              <li>
                Inflammatory bowel disease e.g. ulcerative colitis/Chrohn’s
                disease.
              </li>
              <li>Difficulty in swallowing.</li>
              <li>Pancreatitis (Acute/Chronic).</li>
              <li>Malabsorption syndrome.</li>
              <li>Celiac disease.</li>
            </ul>

            <h3 className="title">Surgical Gastroenterology</h3>
            <h4>Esophagus</h4>
            <ul className="bullet-list">
              <li>Cancers of the esophagus</li>
              <li>Corrosive injuries/ strictures of esophagus.</li>
              <li>Esophageal perforations.</li>
              <li>Peristaltic Disorders of esophagus (Achalasia cardia).</li>
            </ul>

            <h4>Stomach</h4>
            <ul className="bullet-list">
              <li>Carcinoma of the stomach.</li>
              <li>Gastrointestinal Stromal Tumors of stomach.</li>
              <li>Complicated duodenal ulcer disease.</li>
            </ul>

            <h4>Hepatobiliary & Pancreas</h4>
            <ul className="bullet-list">
              <li>Liver tumors (Primary/ Secondary)</li>
              <li>
                Hydatid cysts, liver / spleen / any other organ
                (intra-abdominal)
              </li>
              <li>Carcinoma of gall bladder</li>
              <li>
                Complicated Gallstone disease (Cholecysto / Choledochal duodenal
                Fistula)
              </li>
              <li>Choledochal cysts</li>
              <li>Biliary stricture / biliary fistulae</li>
              <li>Post cholecystectomy Biliary injuries</li>
              <li>Carcinoma of the head of Pancreas</li>
              <li>Surgery in Acute Pancreatitis (Necrotizing pancreatitis)</li>
              <li>Chronic pancreatitis</li>
              <li>Cystic tumours of pancreas</li>
              <li>Surgery for Portal Hypertension</li>
              <li>Surgical obstructive Jaundice</li>
            </ul>

            <h4>Small Intestine</h4>
            <ul className="bullet-list">
              <li>Small bowel tumors.</li>
              <li>Crohn’s disease.</li>
            </ul>
            <h4>Colon, Rectum & Anal Canal</h4>
            <ul className="bullet-list">
              <li>Colonic cancers</li>
              <li>Ulcerative colitis</li>
              <li>Rectal carcinoma.</li>
              <li>Anal canal cancers.</li>
              <li>Colonic polyposis.</li>
            </ul>

            <h3 className="title">Cost of Treatment</h3>
            <p className="desc-part">
              To know about the cost of treatment and the estimate for gastro
              diseases, GERD, jaundice, irritable bowel syndrome, constipation,
              liver disease, cirrhosis, chronic liver failure, please share your
              request and reports at email:{" "}
              <a href="mailto:info@drbimalhospital.in">
                info@drbimalhospital.in
              </a>
            </p>
          </div>
        );

      case "facilities":
        return (
          <div className="tab-content">
            <h3 className="title">Gastroenterology Services</h3>
            <p className="desc-part">
              The Gastroenterology Service provides a full array of consultative
              evaluations for patients with digestive and liver diseases.{" "}
            </p>{" "}
            <p>
              Our diagnostic and therapeutic services are supported by
              "state-of-the-art" endoscopic, computer and motility equipment.
              The Gastroenterology Service is capable of supporting most types
              of tertiary care of patients with digestive and liver diseases.
            </p>
            <ul className="bullet-list">
              <li>Alcoholic Liver Disease</li>
              <li>Hepatocellular Carcinoma (Liver Cancer)</li>
              <li>Portal Hypertension</li>
              <li>Viral Hepatitis A & E</li>
              <li>Viral Hepatitis B</li>
              <li>Cholestasis</li>
              <li>Cirrhosis</li>
              <li>Fatty Liver Disease</li>
              <li>Gallstones</li>
              <li>Hemochromatosis</li>
              <li>Polycystic Liver Disease</li>
              <li>SMALL AND LARGE INTESTINE</li>
              <li>APC1307K</li>
              <li>Collagenous And Lymphocytic Colitis</li>
              <li>Colon Polyps</li>
              <li>Colorectal Cancer</li>
              <li>Crohn’s Disease</li>
              <li>Familial Adenomatous Polyposis</li>
              <li>Hereditary Colorectal Cancer</li>
              <li>Hereditary Nonpolyposis Colorectal Cancer</li>
              <li>Irritable Bowel Syndrome (IBS)</li>
              <li>Kids Familial Adenomatous Polyposis</li>
              <li>Sporadic (Nonhereditary) Colorectal Cancer</li>
              <li>Ulcerative Colitis</li>
            </ul>
          </div>
        );

      case "doctors":
        return (
          <div className="tab-content doctor-card">
            <h3 className="title">Meet Our Gastroenterologist</h3>
            <div className="doctor-profile">
              <img
                src="https://drbimalhospital.in/assets/images/doctor/2022-06-11/886da778e46f9b0063c253c4cafdfa10.jpg"
                alt="Dr. Bimal Kumar"
              />
              <h4>Dr. BIMAL KUMAR</h4>
              <span>Gastroenterology</span>
              <div className="doc-links">
                <a
                  href="https://drbimalhospital.in/viewprofile/2"
                  className="btn-view"
                >
                  View Profile
                </a>
                <a href="#" className="btn-appoint">
                  Book Appointment
                </a>
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
        title="Gastroenterology"
        subtitle="Advanced Digestive & Liver Care"
        backgroundImage="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="gastro-page">
        <div className="tabs">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={activeTab === "facilities" ? "active" : ""}
            onClick={() => setActiveTab("facilities")}
          >
            Facilities / Services
          </button>
          <button
            className={activeTab === "doctors" ? "active" : ""}
            onClick={() => setActiveTab("doctors")}
          >
            Doctors
          </button>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default Gastroenterology;
