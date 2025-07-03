import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeBg from "../images/home-bg.png";
import EmergencyBanner from './EmergencyBanner';
import logo from "../Assets/logo.png";
import logoSub from "../Assets/logoSub.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Set the scroll event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full fixed z-50 top-4'>
      <EmergencyBanner />

      <header className={`w-[1160px] mx-auto rounded-[24px] h-[96px] flex items-center backdrop-blur-sm border-b border-slate-700 mt-4 transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-opacity-50 bg-white' : 'bg-transparent'}`}
        style={{
          background: scrolled ? "linear-gradient(0deg, rgba(8, 34, 53, 0.8) 53.83%, rgba(0, 174, 239, 0.8) 328.5%)" : "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">

            <div>
              <img src={logo} alt="company logo" className='w-[100px] h-[34px]' />
              <img src={logoSub} alt="logo text" className='w-[56px] h-[5px] ml-[38px] -mt-[6px]' />
            </div>

            <div className='flex items-center gap-6'>
              <nav className="hidden md:flex space-x-6">
                <div className="relative group">
                  <a href="#" className="text-white text-[16px] flex items-center space-x-1">
                    <span>Solutions</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-white text-[16px] flex items-center space-x-1">
                    <span>Platform</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-white text-[16px] flex items-center space-x-1">
                    <span>Customers</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative group">
                  <a href="#" className="text-white text-[16px] flex items-center space-x-1">
                    <span>Insights</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>
                <Link to={'about'} className="text-white text-[16px]">
                  About
                </Link>
                <a href="#" className="text-white text-[16px]">
                  Contact
                </a>
              </nav>
              <button className="text-white text-[16px] px-[24px] py-[12px] font-semibold rounded-lg" style={{
                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
              }}>
                BOOK A CALL
              </button>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
