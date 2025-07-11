import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import OverviewTab from '../components/OverviewTab';
import FacilitiesTab from '../components/FacilitiesTab';
import DoctorsTab from '../components/DoctorsTab';

const tabs = ['Overview', 'Facilities', 'Doctors'] as const;
type Tab = typeof tabs[number];

const DepartmentPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  const formattedName =
    name?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) || '';

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{formattedName}</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-lg ${
              activeTab === tab ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'Overview' && <OverviewTab department={formattedName} />}
        {activeTab === 'Facilities' && <FacilitiesTab department={formattedName} />}
        {activeTab === 'Doctors' && <DoctorsTab department={formattedName} />}
      </div>
    </div>
  );
};

export default DepartmentPage;


// // src/pages/DepartmentPage.tsx
// import { useParams } from "react-router-dom";
// import { departments } from "../data/departments";
// import DepartmentTabs from "../components/DepartmentTabs";
// import SearchBar from "../components/department/";

// const DepartmentPage = () => {
//   const { name } = useParams();

//   // Convert URL param to proper case (e.g., "neurology" → "Neurology")
//   const formattedName = decodeURIComponent(name || "").replace(/-/g, " ");
//   const department = departments.find(
//     (d) => d.name.toLowerCase() === formattedName.toLowerCase()
//   );

//   if (!department) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-500">
//         Department "{formattedName}" not found.
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen p-6 bg-white">
//       <SearchBar setSelectedDept={() => {}} /> {/* optional */}
//       <h1 className="text-3xl font-bold mb-4 text-center">{department.name}</h1>
//       <DepartmentTabs department={department} />
//     </div>
//   );
// };

// export default DepartmentPage;
