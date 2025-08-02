import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      title: "Define objectives, target audience, and content strategy.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring1.png"
    },
    {
      title: "Conducting market and competitor research to identify the best approach.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring2.png"
    },
    {
      title: "Defining project scope, timelines, and technology stack. Creating a roadmap for seamless execution.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring3.png"
    },
    {
      title: "Building intuitive, user-friendly, and scalable solutions. Iterative testing to ensure high performance and security.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring4.png"
    },
    {
      title: "Building intuitive, user-friendly, and scalable solutions. Iterative testing to ensure high performance and security.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring5.png"
    },
    {
      title: "Launching solutions with minimal disruption.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring6.png"
    },
    {
      title: "Providing continuous monitoring, updates, and technical support.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring7.png"
    },
    {
      title: "Understanding business objectives, challenges, and opportunities.",
      color: "from-indigo-200 to-blue-400",
      icon: "/process/ring8.png"
    },
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-white text-center mb-16">Our Process</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative w-full h-72 transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${step.color} rounded-lg shadow-lg p-6 flex flex-col justify-between`}>
                <div className="text-md font-medium text-[#5E5E5E] font-sans leading-tight">
                  {step.title}
                </div>

                <div className="self-center mt-4 text-5xl opacity-50">
                  <img src={step.icon} alt={`${step.title} icon`} className="w-28 h-20 mb-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
