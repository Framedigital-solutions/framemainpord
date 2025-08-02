import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://backend.framedigital.solutions/testimonial/Testimonial');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!currentTestimonial) return <div>Loading testimonials...</div>;

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-4">What Our Clients Say</h3>
            <p className="text-sm text-gray-400 mb-6">
              We Supply Clients Across The Entire Globe With Improved Network Connections.
            </p>

            <div className="mt-8">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center p-3">
                <img 
                  src="imag.png" 
                  alt="Company logo" 
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 relative">
            <div className="relative">
              <span className="text-5xl text-gray-700 absolute -left-2 top-0">"</span>

              <div className="pl-8 pt-4">
                <p className="text-xl font-medium mb-6">
                  {currentTestimonial.message}
                </p>

                <div className="border-t border-gray-700 pt-6 mt-8">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={currentTestimonial.photo}
                        alt={currentTestimonial.name}
                        className="rounded-full w-12 h-12"
                      />
                    </div>

                    <div>
                      <p className="font-medium">{currentTestimonial.name}</p>
                      <p className="text-xs text-gray-400">
                        {currentTestimonial.position}, {currentTestimonial.organization}
                      </p>
                    </div>

                    <div className="ml-auto flex space-x-2">
                      <button 
                        onClick={goToPrevious}
                        className="bg-transparent border border-gray-700 rounded-full p-1 hover:bg-gray-800"
                      >
                        &larr;
                      </button>
                      <button 
                        onClick={goToNext}
                        className="bg-transparent border border-gray-700 rounded-full p-1 hover:bg-gray-800"
                      >
                        &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;