import React from 'react';

type Props = {
  department: string;
};

const overviewContent: Record<string, React.ReactNode> = {
  Gastroenterology: (
    <>
      <h2 className="text-2xl font-bold mb-2">Welcome to Gastroenterology</h2>
      <p>
        Our department specializes in <strong>digestive system diseases</strong>, including liver disorders and gastrointestinal cancers.
      </p>
      <img
        src="/images/gastroenterology.jpg"
        alt="Gastroenterology department"
        className="my-4 rounded shadow-md"
      />
      <p>
        We use the latest technology for endoscopic and minimally invasive procedures to provide comprehensive care.
      </p>
    </>
  ),

  Neurology: (
    <>
      <h2>Neurology Department Overview</h2>
      <p>
        Comprehensive care for neurological disorders like stroke, epilepsy, and Parkinson’s disease.
      </p>
      <img src="/images/neurology.jpg" alt="Neurology department" />
    </>
  ),

  // Add other departments similarly...
};

const OverviewTab: React.FC<Props> = ({ department }) => {
  const content = overviewContent[department] || <p>Overview content coming soon for this department.</p>;

  return <div className="text-gray-700 leading-relaxed">{content}</div>;
};

export default OverviewTab;
