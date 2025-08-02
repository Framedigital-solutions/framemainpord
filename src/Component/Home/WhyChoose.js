import React from 'react';
import { Check, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-16 relative overflow-hidden">
      {/* Main content */}
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="about1.png"
              alt="Why Choose Us"
              className="w-[90%] max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Affordable Price */}
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mb-4 mx-auto relative flex items-center justify-center">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 rounded"></div> */}
                <img src="/money-stack.svg" alt="" className='w-full h-full' />
                <div className="relative z-10 w-10 h-10 bg-white rounded transform rotate-12"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Affordable Price</h3>
              <p className="text-sm text-gray-400">
                We Provide Websites To All Startups<br />
                At Very Affordable Prices.
              </p>
            </div>

            {/* Card 2 - Personal Connection */}
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mb-4 mx-auto relative flex items-center justify-center">
                <img src="/wallet.svg" alt="" className='w-full h-full' />
                <div className="relative z-10 w-10 h-10 bg-white rounded"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Personal Connection</h3>
              <p className="text-sm text-gray-400">
                We Build A Personal Connection<br />
                With All Company Owners.
              </p>
            </div>

            {/* Card 3 - Industry Standard */}
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
                <img src="/e17.svg" alt="" className='w-full h-full' />
              </div>
              <h3 className="text-lg font-medium mb-2">Industry Standard</h3>
              <p className="text-sm text-gray-400">
                We Ensure Our Work Meets<br />
                Industry Standards.
              </p>
            </div>

            {/* Card 4 - 100% Trust */}
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
                <img src="/thumbs-up.svg" alt="" className='w-full h-full' />
              </div>
              <h3 className="text-lg font-medium mb-2">100% Trust</h3>
              <p className="text-sm text-gray-400">
                We Give 100% Trust To Our Clients<br />
                And Their Startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
