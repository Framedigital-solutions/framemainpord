import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    linkedin: '',
    twitter: ''
  });

  useEffect(() => {
    fetch("https://backend.framedigital.solutions/about/getAbout")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const aboutInfo = data[0];
          
          setSocialLinks({
            facebook: aboutInfo.facebook || '',
            linkedin: aboutInfo.linkedin || '',
            twitter: aboutInfo.twitter || ''
          });
        }
      })
      .catch((error) => console.error("Error fetching social media links:", error));
  }, []);

  // Social media icon mapping
  const socialIcons = {
    facebook: Facebook,
    linkedin: Linkedin,
    twitter: Twitter
  };

  return (
    <footer className="bg-[#464BF9] text-white p-8">
      <div className="container mx-auto">
        {/* Top section with logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="text-4xl font-bold mb-4">
              <img
                src="logo3.png"
                alt="logo"
                className="h-16 w-16"
              />
            </div>
            <p className="text-sm md:text-base">
              With Our Collective Expertise, We Turn Ideas Into Reality. 
              Whether You're A Startup Or An Established Brand, 
              We're Here To Elevate Your Online Presence And Help 
              You Achieve Your Goals.
            </p>
          </div>

          {/* Links sections */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-medium mb-4">How We Can Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="hover:underline text-1xl">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline text-1xl">Terms and Conditions</a></li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">About Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#aboutus" className="hover:underline text-1xl">Who We Are</a></li>
                <li><a href="#contactus" className="hover:underline text-1xl">Contact Us</a></li>
              </ul>
            </div>

            {/* Social media section */}
            <div>
              <h3 className="text-lg font-medium mb-4">Follow us on socials</h3>
              <div className="flex space-x-2">
                {Object.entries(socialLinks).map(([platform, link]) => {
                  const Icon = socialIcons[platform];
                  return link && Icon ? (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-white rounded hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-6 border-t border-blue-500 flex flex-col md:flex-row justify-between text-sm">
          <div>Copyright 2024 © Frame Digital</div>
          <div><a href="/privacy-policy" className="hover:underline">Privacy & Policy</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;