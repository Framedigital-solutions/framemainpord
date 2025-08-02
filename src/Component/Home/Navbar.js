import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".mobile-menu")
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const handleScrollToSection = () => {
    const aboutSection = document.getElementById("aboutus");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[80vh] bg-gradient-to-b from-blue-100 to-blue-500 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="home.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
          ${isScrolled 
            ? 'bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.08),0_2px_6px_rgba(128,128,128,0.12)]' 
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Company Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1742667889/logodesign_bvyja6-removebg-preview_nw5ybx.png"
                alt="Logo"
                className="h-10 w-auto transition-transform group-hover:rotate-6"
              />
              <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                Frame Digital
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {["About Us", "Portfolio", "Services", "Products", "Career", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out hover:bg-blue-50 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="bg-white bg-opacity-90 p-2 rounded-full shadow-md"
              >
                {menuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 left-0 w-64 h-full bg-white bg-opacity-95 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1742667889/logodesign_bvyja6-removebg-preview_nw5ybx.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
            <span className="text-xl font-bold text-gray-800">Frame Digital</span>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-2">
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {["Home", "About Us", "Portfolio", "Services", "Products", "Career", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className="text-lg font-medium text-gray-800 hover:text-blue-600 border-b border-gray-200 pb-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <h1 className="text-6xl md:text-6xl lg:text-[100px] font-bold font-sans text-black mb-4">
          Supercharge Your <br />
        </h1>
        <p className="text-blue-900 text-6xl py-6 font-bold">Business</p>
        <p className="text-2xl md:text-[15px] lg:text-[32px] font-medium text-black mb-8">
          Fueling Growth Through Tailored Solutions
        </p>
        <button className="bg-[#464BF9] font-inter text-white font-medium py-3 px-6 md:px-8 rounded-full shadow-lg transition duration-300 hover:bg-[#3940C7]">
          Get in touch
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 text-center hidden sm:block cursor-pointer"
        onClick={handleScrollToSection}
      >
        <img
          src="mouse.png"
          alt="Scroll Down"
          className="h-[50px] w-[50px] md:h-[66px] md:w-[66px] mx-auto animate-bounce"
        />
        <p className="text-[12px] md:text-[13px] mb-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;