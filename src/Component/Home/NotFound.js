import React from 'react';

const Error404Page = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-400 tracking-wider opacity-80">
          ERROR 404
        </h1>
        <p className="text-gray-500 text-md md:text-lg mt-4">
          Page Not Found
        </p>
        <div className="mt-8">
          <a 
            href="/" 
            className="px-6 py-3 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;