import React from 'react';

const About = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden p-4">
            {/* Main content container */}
            <div className="max-w-6xl w-full relative z-10">
                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight mb-16">
                    USER FOCUSED VALUE BASED DATA DRIVEN
                </h1>

                {/* Two-column layout for content */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Left column - About us section */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="uppercase tracking-wider mb-6 text-lg font-medium transform -rotate-90 origin-left absolute -left-6">About Us</h2>

                        <div className="space-y-8 max-w-lg">
                            <p className="text-sm md:text-base">
                                Welcome To Frame Digital! We're A Dedicated Team Offering
                                Top-Notch Digital Solutions Including Logo Design, UI/UX Design,
                                Development, Marketing, And SEO.
                            </p>

                            <p className="text-sm md:text-base">
                                With Our Collective Expertise, We Turn Ideas Into Reality. Whether
                                You're A Startup Or An Established Brand, We're Here To Elevate Your
                                Online Presence And Help You Achieve Your Goals.
                            </p>

                            <p className="text-sm md:text-base">
                                At Frame Digital, We Prioritize Quality, Innovation, And Client
                                Satisfaction. Let's Work Together To Bring Your Vision To Life.
                            </p>

                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition">
                                Get in touch
                            </button>
                        </div>
                    </div>

                    {/* Right column - 3D elements */}
                    <div className="md:w-1/2 relative">
                        {/* 3D elements container */}
                        <img src='/about.svg' alt='about' className='w-full h-full' />
                    </div>
                </div>
            </div>

            {/* Background glow effects */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-5"></div>
        </div>
    );
};

export default About;