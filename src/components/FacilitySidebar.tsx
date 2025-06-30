import React from 'react';
import { ChevronRight } from 'lucide-react';

interface FacilitySidebarProps {
  currentFacility: string;
  onFacilityChange: (facility: string) => void;
}

const FacilitySidebar: React.FC<FacilitySidebarProps> = ({ currentFacility, onFacilityChange }) => {
  const facilities = [
    'Ambulance Services',
    'Cafeteria',
    'Day Care',
    'Guest House',
    'In Patient Department',
    'Outpatient Department Complex',
    'Pharmacy'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Facilities</h3>
      <div className="space-y-2">
        {facilities.map((facility) => (
          <button
            key={facility}
            onClick={() => onFacilityChange(facility)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 text-sm md:text-base ${
              currentFacility === facility
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
            }`}
          >
            <span className="font-medium">{facility}</span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
              currentFacility === facility ? 'rotate-90' : ''
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FacilitySidebar;