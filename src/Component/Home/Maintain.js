import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div className="mb-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 250" 
            className="mx-auto max-w-full h-auto"
          >
            {/* Computer */}
            <rect x="150" y="100" width="200" height="120" fill="#f0f0f0" stroke="#000" strokeWidth="2"/>
            <rect x="200" y="220" width="100" height="10" fill="#d0d0d0" stroke="#000" strokeWidth="2"/>
            
            {/* Crane */}
            <path d="M400 50 L380 150 L420 150 Z" fill="#4a90e2"/>
            <rect x="370" y="150" width="60" height="10" fill="#333"/>
            
            {/* Gears */}
            <circle cx="50" cy="50" r="20" fill="none" stroke="#4a90e2" strokeWidth="3"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="#4a90e2" strokeWidth="3"/>
            
            {/* Screen Elements */}
            <rect x="170" y="120" width="160" height="80" fill="#ffffff" stroke="#000" strokeWidth="2"/>
            <rect x="190" y="140" width="120" height="40" fill="#e0e0e0"/>
            <rect x="210" y="150" width="20" height="20" fill="#4a90e2"/>
            
            {/* Ladder */}
            <path d="M250 220 L240 180 M260 220 L270 180" stroke="#000" strokeWidth="2"/>
            
            {/* Small Objects */}
            <circle cx="50" cy="200" r="10" fill="#4a90e2"/>
            <rect x="400" y="200" width="20" height="20" fill="#4a90e2"/>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">We Are Under Maintenance</h1>
        
        <p className="text-gray-600 mb-6">
          This website is currently undergoing essential maintenance to enhance your experience. We truly appreciate your patience during this time and assure you that we will be back online shortly with improved features and performance!
        </p>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="mailto:support@yourcompany.com" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Support
          </a>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;