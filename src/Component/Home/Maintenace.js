import React from 'react';
import { Wrench, Clock, Server } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 text-center px-4 py-8">
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <img 
          src="https://imgs.search.brave.com/kw1o8fqb0E1BJeFc610Hc9vuR5iH_EvuBmzoCruX2E8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHViZnMvV29yZFBy/ZXNzJTIwUEhQJTIw/TWVtb3J5JTIwTGlt/aXQuanBn" 
          alt="Maintenance" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full space-y-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
            <Wrench className="w-4 h-4" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800">We Are Under Maintenance</h1>
        <p className="text-gray-600 text-md">
          This website is currently undergoing essential maintenance to enhance your experience. 
          We truly appreciate your patience during this time and assure you that we will be back 
          online shortly with improved features and performance!
        </p>

        <div className="flex justify-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Estimated Time: Soon</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Server className="w-5 h-5" />
            <span className="text-sm">Status: Upgrading</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
