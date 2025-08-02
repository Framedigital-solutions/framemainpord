import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="border-2 border-blue-500 p-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-300 tracking-wide">
            ERROR 404
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;