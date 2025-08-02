// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const ServicesCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const services = [
//     {
//       id: 1,
//       title: "Development",
//       image:
//         "https://imgs.search.brave.com/NWkeYR6YCirBL05SbiD8MQAXCO5sN6_Jfm5tIs54ETk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZS11cC1pbWFn/ZS1wcm9ncmFtZXIt/d29ya2luZy1oaXMt/ZGVzay1vZmZpY2Vf/MTA5OC0xODcwNy5q/cGc_c2VtdD1haXNf/aHlicmlk",
//       number: "01",
//     },
//     {
//       id: 2,
//       title: "UI/UX Design",
//       image:
//         "https://imgs.search.brave.com/pRsEU1vQSBEhceEtnYz-OhC41NlPlSJ0yP9niXeaEWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0b2Ntcy1hc3Nl/dHMuY29tLzE0OTQ2/LzE3MTk0MTU4MzQt/ZGFuaWVsLWtvcnBh/aS1teHBpbWl6N2tj/by11bnNwbGFzaC5q/cGc_YXV0bz1mb3Jt/YXQmZml0PW1heCZ3/PTg2NA",
//       number: "02",
//     },
//     {
//       id: 3,
//       title: "Logo Design",
//       image:
//         "https://imgs.search.brave.com/_hGgkqhRzRq58-fyvfG1_1YmRy0ICm-L1fMP-w1mq9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tL2Nkbi1j/Z2kvaW1hZ2UvZj1h/dXRvLHE9NzAvMzcw/Njc3YjMtNmQ2ZC00/NGQ1LWJkM2ItNTE5/OGFiZTY3ZjY0L0Jy/YW5kaW5neW91cmJ1/c2luZXNzLmpwZw",
//       number: "03",
//     },
//     {
//       id: 4,
//       title: "Marketing",
//       image:
//         "https://imgs.search.brave.com/r9izM9aKuKIAL5pjqpLQ62LYShRFp4PVcBiJ7I5pFgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81My5m/czEuaHVic3BvdHVz/ZXJjb250ZW50LW5h/MS5uZXQvaHViZnMv/NTMvV2hhdCUyMElz/JTIwTWFya2V0aW5n/LmpwZw",
//       number: "04",
//     },
//     {
//       id: 5,
//       title: "SEO",
//       image:
//         "https://imgs.search.brave.com/AR1EVI50VbMFhOeP1fC7LLdBJSQp5YmB6v6wso8g4VE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY1/ODE3MTUzL3Bob3Rv/L3Nlby1kaWFncmFt/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13ekw2ZkZZbkxw/QkZyV3ZSZDhOeWZi/OXFaSk1EYTFKQzNB/MTN3QWw2YU5jPQ",
//       number: "05",
//     },
//   ];

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === services.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? services.length - 1 : prevIndex - 1
//     );
//   };

//   // Compute visible services. This version always returns 4 items by wrapping around when needed.
//   const getVisibleServices = () => {
//     const visibleCount = 4;
//     let visibleServices = [];
//     for (let i = 0; i < visibleCount; i++) {
//       visibleServices.push(services[(activeIndex + i) % services.length]);
//     }
//     return visibleServices;
//   };

//   return (
//     <section id="services">
//     <div className="bg-white py-12 px-4 md:px-8 w-full overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         {/* Vertical text on left side */}
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-24 flex md:flex-col justify-start md:justify-center mb-6 md:mb-0">
//             <div className="transform md:-rotate-90 origin-center text-sm text-gray-500 uppercase tracking-widest whitespace-nowrap">
//               Our Services
//             </div>
//           </div>

//           <div className="flex-1">
//             {/* Headline text */}
//             <div className="mb-12 max-w-2xl">
//               <h2 className="text-2xl md:text-3xl text-gray-800 leading-tight mb-8">
//                 As A Tight-Knit Team Of Experts, We Create Memorable And
//                 Emotional Websites, Digital Experiences, And Native Apps.
//               </h2>

//               {/* Navigation arrows */}
//               <div className="flex justify-end space-x-2">
//                 <button
//                   onClick={prevSlide}
//                   className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
//                   aria-label="Previous slide"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
//                   aria-label="Next slide"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Services carousel */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 md:px-8">
//   {getVisibleServices().map((service, index) => (
//     <div
//       key={`${service.id}-${index}`}
//       className="relative group w-full"
//     >
//       <div className="overflow-hidden rounded-xl shadow-lg">
//         <img
//           src={service.image}
//           alt={service.title}
//           className="w-full h-60 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
//         />
//       </div>
//       <div className="mt-4 flex justify-between items-start">
//         <h3 className="text-lg font-semibold text-blue-500">
//           {service.title}
//         </h3>
//         <div className="text-sm text-gray-400">
//           {service.number}
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default ServicesCarousel;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const ServicesCarousel = () => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Fetch services from API on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://backend.framedigital.solutions/services/");
        // Extract only title and image
        const serviceData = response.data.map((item, index) => ({
          id: item._id || index,
          title: item.title,
          image: item.image,
          number: (index + 1).toString().padStart(2, "0"),
        }));
        setServices(serviceData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const getVisibleServices = () => {
    const visibleCount = 4;
    let visibleServices = [];
    for (let i = 0; i < visibleCount; i++) {
      if (services.length > 0) {
        visibleServices.push(services[(activeIndex + i) % services.length]);
      }
    }
    return visibleServices;
  };

  return (
    <section id="services">
      <div className="bg-white py-12 px-4 md:px-8 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Vertical text on left side */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-24 flex md:flex-col justify-start md:justify-center mb-6 md:mb-0">
              <div className="transform md:-rotate-90 origin-center text-sm text-gray-500 uppercase tracking-widest whitespace-nowrap">
                Our Services
              </div>
            </div>

            <div className="flex-1">
              {/* Headline text */}
              <div className="mb-12 max-w-2xl">
                <h2 className="text-2xl md:text-3xl text-gray-800 leading-tight mb-8">
                  As A Tight-Knit Team Of Experts, We Create Memorable And
                  Emotional Websites, Digital Experiences, And Native Apps.
                </h2>

                {/* Navigation arrows */}
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Services carousel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 md:px-8">
                {getVisibleServices().map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className="relative group w-full"
                  >
                    <div className="overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-60 sm:h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-blue-500">
                        {service.title}
                      </h3>
                      <div className="text-sm text-gray-400">
                        {service.number}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fallback message */}
              {services.length === 0 && (
                <p className="text-center text-gray-500 mt-4">Loading services...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
