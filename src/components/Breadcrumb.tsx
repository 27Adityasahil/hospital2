// import React from 'react';
// import { ChevronRight, Home } from 'lucide-react';


// interface BreadcrumbItem {
//   label: string;
//   href?: string;
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[];
//   onNavigate?: (page: string) => void;
// }

// const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
//   return (
//     <nav className="bg-blue-900 py-4">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex items-center space-x-2 text-white">
//           <Home className="w-4 h-4" />
//           <span
//             className="hover:text-green-200 cursor-pointer"
//             onClick={() => onNavigate?.('home')}
//           >
//             Home
//           </span>

//           {items.map((item, index) => (
//             <React.Fragment key={index}>
//               <ChevronRight className="w-4 h-4 text-green-300" />
//               {item.href ? (
//                 <a
//                   href={item.href}
//                   className="hover:text-green-200 transition-colors duration-200"
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <span className="text-green-200">{item.label}</span>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Breadcrumb;


import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string; // if href exists, breadcrumb item is a link
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center space-x-2 text-white">
          {/* Home Link */}
          <Home className="w-4 h-4" />
          <Link to="/" className="hover:text-green-200 cursor-pointer">
            Home
          </Link>

          {/* Breadcrumb Items */}
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-green-300" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:text-green-200 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-green-200">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
