import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrandLogosBar = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://backend.framedigital.solutions/Brand');
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="bg-black py-8 w-full relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-7xl md:text-6xl sm:text-5xl font-bold uppercase opacity-10 tracking-widest">
          Trusted By
        </h1>
      </div>

      {/* Scrolling container */}
      <div className="max-w-8xl mx-auto px-4 relative z-10">
        <div className="overflow-hidden w-full">
          <div className="flex gap-16 whitespace-nowrap animate-scroll">
            {brands.concat(brands).map((brand, index) => (
              <div className="opacity-80 flex-shrink-0" key={index}>
                <img
                  src={brand.logoUrl}
                  alt={`Brand Logo ${index + 1}`}
                  className="h-14 md:h-12 sm:h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BrandLogosBar;
