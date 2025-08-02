import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        axios.get('https://backend.framedigital.solutions/about/getAbout')  
            .then(response => {
                setAboutData(response.data[0]);  
            })
            .catch(error => {
                console.error('Error fetching About Us data:', error);
            });
    }, []);

    return (
        <section id="aboutus" className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
            
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white p-6">
                <div className="max-w-6xl w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-12 uppercase tracking-wider">
                        User Focused. Value Based. Data Driven.
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full">
                    {/* Left Column */}
                    <div className="md:w-1/2 relative p-8">
                        <h2 className="text-blue-400 text-xl font-semibold uppercase mb-4 border-l-4 border-blue-500 pl-4">
                            About Us
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {aboutData?.description}
                        </p>
                        
                        <h3 className="text-2xl font-semibold mt-6 text-white">Who We Are?</h3>
                        <p className="text-gray-300 mt-4">
                            FrameDigital Solution Pvt. Ltd. is a next-generation technology company specializing in cutting-edge digital solutions that empower businesses to adapt, grow, and lead in today’s fast-evolving digital landscape.
                        </p>
                        <p className="text-gray-300 mt-4">
                            We focus on user-friendly, efficient, and future-proof IT solutions across industries, including e-commerce, healthcare, finance, education, real estate, and manufacturing.
                        </p>
                        <p className="text-gray-300 mt-4">
                            Our commitment to innovation sets us apart. We don’t just build software—we craft solutions that solve real-world problems, automate workflows, secure data, and enhance customer experiences.
                        </p>

                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
                            Get in Touch
                        </button>
                    </div>
                    
                    {/* Right Column - Image */}
                    <div className="md:w-1/2 flex justify-center items-center p-4">
                        <img 
                            src={aboutData?.image || 'about.svg'} 
                            alt="about" 
                            className='w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg' 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;