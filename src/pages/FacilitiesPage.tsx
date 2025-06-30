// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import FacilityBanner from '../components/FacilityBanner';
// import Breadcrumb from '../components/Breadcrumb';
// import FacilitySidebar from '../components/FacilitySidebar';
// import FacilityContent from '../components/FacilityContent';
// import Pagination from '../components/Pagination';

// const FacilitiesPage = () => {
//   const [currentFacility, setCurrentFacility] = useState('Ambulance Services');
//   const [currentPage, setCurrentPage] = useState(1);
  
//   const facilities = [
//     'Ambulance Services',
//     'Cafeteria',
//     'Day Care',
//     'Guest House',
//     'In Patient Department',
//     'Outpatient Department Complex',
//     'Pharmacy'
//   ];

//   const totalPages = facilities.length;

//   const handleFacilityChange = (facility: string) => {
//     setCurrentFacility(facility);
//     const facilityIndex = facilities.indexOf(facility);
//     setCurrentPage(facilityIndex + 1);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     setCurrentFacility(facilities[page - 1]);
//     // Scroll to top when page changes
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const breadcrumbItems = [
//     { label: 'Facilities', href: '#facilities' },
//     { label: currentFacility }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Banner */}
//       <FacilityBanner 
//         title="OUR FACILITIES"
//         subtitle="World-class healthcare facilities designed for your comfort and care"
//       />

//       {/* Breadcrumb */}
//       <Breadcrumb items={breadcrumbItems} />

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1 order-2 lg:order-1">
//             <FacilitySidebar 
//               currentFacility={currentFacility}
//               onFacilityChange={handleFacilityChange}
//             />
//           </div>

//           {/* Content Area */}
//           <div className="lg:col-span-3 order-1 lg:order-2">
//             <FacilityContent facility={currentFacility} />
            
//             {/* Pagination */}
//             <div className="mt-8">
//               <Pagination 
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacilitiesPage;

import React, { useState, useEffect } from 'react';
import FacilityBanner from '../components/FacilityBanner';
import Breadcrumb from '../components/Breadcrumb';
import FacilitySidebar from '../components/FacilitySidebar';
import FacilityContent from '../components/FacilityContent';
import Pagination from '../components/Pagination';
import { useParams, useNavigate } from 'react-router-dom';

const FacilitiesPage = () => {
  const { facilityName } = useParams<{ facilityName?: string }>();
  const navigate = useNavigate();

  const facilities = [
    'Ambulance Services',
    'Cafeteria',
    'Day Care',
    'Guest House',
    'In Patient Department',
    'Outpatient Department Complex',
    'Pharmacy',
  ];

  // Helper to get valid facility from URL param or fallback to first facility
  const getValidFacility = (name?: string) => {
    if (!name) return facilities[0];
    const decodedName = decodeURIComponent(name);
    return facilities.includes(decodedName) ? decodedName : facilities[0];
  };

  // Initialize state based on URL param
  const [currentFacility, setCurrentFacility] = useState(getValidFacility(facilityName));
  const [currentPage, setCurrentPage] = useState(facilities.indexOf(currentFacility) + 1);

  // Sync state when URL param changes (e.g. user navigates directly)
  useEffect(() => {
    const validFacility = getValidFacility(facilityName);
    setCurrentFacility(validFacility);
    setCurrentPage(facilities.indexOf(validFacility) + 1);
  }, [facilityName]);

  // When user changes facility (via sidebar or pagination), update state and URL
  const handleFacilityChange = (facility: string) => {
    setCurrentFacility(facility);
    setCurrentPage(facilities.indexOf(facility) + 1);
    navigate(`/facilities/${encodeURIComponent(facility)}`);
  };

  const handlePageChange = (page: number) => {
    const facility = facilities[page - 1];
    setCurrentPage(page);
    setCurrentFacility(facility);
    navigate(`/facilities/${encodeURIComponent(facility)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbItems = [
    { label: 'Facilities', href: '/facilities' },
    { label: currentFacility },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <FacilityBanner 
        title="OUR FACILITIES"
        subtitle="World-class healthcare facilities designed for your comfort and care"
      />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <FacilitySidebar 
              currentFacility={currentFacility}
              onFacilityChange={handleFacilityChange}
            />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <FacilityContent facility={currentFacility} />
            
            {/* Pagination */}
            <div className="mt-8">
              <Pagination 
                currentPage={currentPage}
                totalPages={facilities.length}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
