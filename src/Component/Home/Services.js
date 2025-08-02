import React, { useState } from 'react';

const ServiceCard = ({ title, description, icon, isActive, onClick }) => {
  return (
    <div
      className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 overflow-hidden ${isActive
        ? 'bg-gradient-to-r from-blue-600 to-white  border border-gray-800'
        : 'bg-gray-900 hover:bg-gray-800 border border-gray-800'
        }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-blue-600' : 'bg-gray-800'
          }`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className={`text-sm ${isActive ? 'text-black' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
      </div>

      {isActive && (
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
      )}
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Creating intuitive, engaging user experiences through research-driven design that prioritizes user needs and business goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Building fast, scalable, and responsive websites and applications using cutting-edge technologies and modern development practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },

    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Enhancing your online visibility through technical SEO, content optimization, and strategic keyword targeting to drive qualified traffic.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'App Development',
      description: 'Creating native and cross-platform mobile applications that deliver exceptional user experiences and seamless functionality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Implementing data-driven marketing strategies that increase visibility, engagement, and conversions across digital channels.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Brand Identity',
      description: "Developing distinctive visual identities that communicate your brand's values, personality, and promise to create lasting impressions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  const serviceDetail = services.find(service => service.id === activeService);

  return (
    <div className="bg-black min-h-screen text-white py-24 px-4 relative overflow-hidden">
      {/* 3D Element decorations */}
      {/* <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transform rotate-12 opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform -rotate-12 opacity-60"></div> */}
      <img src='/cube.svg' alt='cube' className='absolute top-10 right-10 w-16 h-16 opacity-70' />
      <img src='/cube1.svg' alt='cube' className='absolute bottom-20 left-10 w-12 h-12 opacity-60' />'

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your specific needs.
            Our user-focused, value-based, data-driven approach ensures exceptional results.
          </p>
        </div>

        {/* Services Grid and Detail View */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Services Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                isActive={service.id === activeService}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Service Detail */}
          <div className="lg:w-1/3">
            <div className="bg-gray-900 p-6 rounded-lg h-full relative overflow-hidden border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{serviceDetail.title}</h3>

              <div className="space-y-4">
                <p className="text-gray-300">
                  Our {serviceDetail.title.toLowerCase()} service helps businesses achieve their goals through
                  innovative solutions that prioritize user experience and measurable results.
                </p>

                <h4 className="text-lg font-semibold mt-6">What We Offer:</h4>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-400">
                        {getRandomServiceFeature(serviceDetail.title, item)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition text-sm">
                    Learn more
                  </button>
                </div> */}
              </div>

              {/* Background decorative element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center p-8 rounded-lg bg-gradient-to-r from-blue-600 to-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Transform Your Digital Presence?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-gray-800">
              Let's collaborate to bring your vision to life with our expertise in design, development, and digital marketing.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition">
              Schedule a Consultation
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="fixed -bottom-40 -right-40 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 z-0"></div>
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-5 z-0"></div>
    </div>
  );
};

// Helper function to generate random service features based on service type
function getRandomServiceFeature(serviceType, index) {
  const features = {
    'UI/UX Design': [
      'User research and persona development',
      'Wireframing and prototyping',
      'Interactive interface design',
      'Usability testing and iteration'
    ],
    'Web Development': [
      'Responsive website development',
      'Custom web application development',
      'E-commerce solutions',
      'Content management systems'
    ],
    'Brand Identity': [
      'Logo design and visual identity',
      'Brand strategy and positioning',
      'Brand guidelines and assets',
      'Rebranding and brand refreshes'
    ],
    'Digital Marketing': [
      'Social media marketing campaigns',
      'Email marketing automation',
      'Content marketing strategy',
      'PPC and display advertising'
    ],
    'SEO Optimization': [
      'Technical SEO audits and implementation',
      'Keyword research and content optimization',
      'Local SEO for businesses',
      'SEO performance tracking and reporting'
    ],
    'App Development': [
      'Native iOS and Android development',
      'Cross-platform app solutions',
      'UI/UX design for mobile',
      'App maintenance and updates'
    ]
  };

  return features[serviceType][index % features[serviceType].length];
}

export default Services;
