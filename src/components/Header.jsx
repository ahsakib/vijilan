import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import EmergencyBanner from './EmergencyBanner';
import logo from "../Assets/logo.png";
import logoSub from "../Assets/logoSub.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full fixed z-50 top-0'>
      {location.pathname === '/' && <EmergencyBanner />}

      <header className={`mx-auto h-[96px] flex items-center transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-opacity-50 bg-white' : 'bg-transparent'} 
        px-4 md:px-6 lg:px-0 lg:max-w-[1160px] rounded-[24px] mt-4 backdrop-blur-sm border-b border-slate-700`}
        style={{
          background: scrolled
            ? "linear-gradient(0deg, rgba(8, 34, 53, 0.8) 53.83%, rgba(0, 174, 239, 0.8) 328.5%)"
            : "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)",
        }}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="w-[100px] h-[34px]" />
            <img src={logoSub} alt="sub" className="w-[56px] h-[5px] ml-[33px] -mt-[6px]" />
          </div>


          <>
            {/* desktop menu style */}
            <style>
              {`
          .desktop-menu {
            display: none;
          }

          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
          }
        `}
            </style>


            {/* Desktop Menu */}
            <div className="desktop-menu items-center gap-6">
              <nav className="flex space-x-6">
                {['Solutions', 'Platform', 'Customers', 'Insights'].map((item) => (
                  <div key={item} className="relative group">
                    <a href="#" className="text-white text-[16px] flex items-center space-x-1">
                      <span>{item}</span>
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </div>
                ))}
                <Link to="about" className="text-white text-[16px]">About</Link>
                <a href="#" className="text-white text-[16px]">Contact</a>
              </nav>
              <button className="text-white text-[16px] px-[24px] py-[12px] font-semibold rounded-lg" style={{
                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
              }}>
                BOOK A CALL
              </button>
            </div>

          </>
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={` fixed top-[96px] left-0 right-0 mx-4 bg-[#082235] px-6 py-8 z-40 rounded-b-[24px] transition-all duration-300 ease-in-out
    ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 '}`}>
            <nav className="flex flex-col space-y-4">
              {['Solutions', 'Platform', 'Customers', 'Insights'].map((item) => (
                <a key={item} href="#" className="text-white text-[16px] flex items-center justify-between">
                  {item}
                  <ChevronDown className="w-4 h-4" />
                </a>
              ))}
              <Link to="about" className="text-white text-[16px]">About</Link>
              <a href="#" className="text-white text-[16px]">Contact</a>
              <button className="w-full text-white text-[16px] px-4 py-3 font-semibold rounded-lg mt-2" style={{
                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
              }}>
                BOOK A CALL
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;









