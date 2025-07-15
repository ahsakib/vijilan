import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import EmergencyBanner from './EmergencyBanner';
import logo from "../Assets/logo.png";
import logoSub from "../Assets/logoSub.png";
import SolutionDropdown from '@app/Dropdown/SolutionDropdown';
import PartnersDropdown from '@app/Dropdown/PartnersDropdown';
import ServeDropdown from '@app/Dropdown/ServeDropdown';
import VijilanDropdown from '@app/Dropdown/VijilanDropdown';
import ResourceDropdown from '@app/Dropdown/ResourceDropdown';
import AboutDropdown from '@app/Dropdown/AboutDropdown';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [openDropdown,setOpenDropdown] = useState(false)

  // Outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // navlink
  const menuItems = [
    {
      key: "solutions",
      name: 'Solutions',
      hasDropdown: true,
      dropdownComponent: <SolutionDropdown />,
      isFullWidth: true
    },
    {
      key: "serve",
      name: 'Who we serve',
      hasDropdown: true,
      dropdownComponent: <ServeDropdown />,
      isFullWidth: false
    },
    {
      key: 'vijilan',
      name: 'Why Vijilan',
      hasDropdown: true,
      dropdownComponent: <VijilanDropdown />,
      isFullWidth: false
    },
    {
      key: 'partners',
      name: 'Partners',
      hasDropdown: true,
      dropdownComponent: <PartnersDropdown />,
      isFullWidth: true
    },
    {
      key: 'resources',
      name: 'Resources',
      hasDropdown: true,
      dropdownComponent: <ResourceDropdown />,
      isFullWidth: false
    },
    {
      key: 'about',
      name: 'About us',
      hasDropdown: true,
      dropdownComponent: <AboutDropdown />,
      isFullWidth: false
    },
  ];

  const showEmergencyBannerRoutes = ['/', '/serve','/resources','/complain-solution'];


  return (
    <div className='w-full fixed z-50 top-0'>
      {showEmergencyBannerRoutes.includes(location.pathname) && <EmergencyBanner />}


      <header className={`mx-auto h-[96px] flex items-center transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-opacity-50 bg-white' : 'bg-transparent'} 
        px-4 md:px-6 lg:px-0 w-11/12 lg:max-w-[1160px] rounded-[24px] mt-4 backdrop-blur-sm border-b border-slate-700`}
        style={{
          background: scrolled
            ? "linear-gradient(0deg, rgba(8, 34, 53, 0.8) 53.83%, rgba(0, 174, 239, 0.8) 328.5%)"
            : "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)",
        }}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex flex-col items-center">
            <img src={logo} alt="logo" className="w-[100px] h-[34px]" />
            <img src={logoSub} alt="sub" className="w-[56px] h-[5px] ml-[33px] -mt-[6px]" />
          </Link>
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
                  
                  /* 🔽 Custom range: 1024px to 1240px */
                  @media (min-width: 1024px) and (max-width: 1240px) {
                    .fontSize {
                      font-size: 14px !important;
                    }
                  }
              `}
            </style>

            {/* Desktop Menu */}
            <div className="desktop-menu items-center gap-4">
              <nav className="relative flex lg:space-x-3 xl:space-x-6 ">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onClick={() =>
                    {
                      item.hasDropdown &&
                      setActiveDropdown(prev => prev === item.name ? null : item.name)
                    }
                    }
                  >
                    <a
                      href="#"
                      className={`fontSize text-[16px]  flex items-center space-x-1 transition-all duration-200 ${activeDropdown === item.name ? "text-active" : ""}`}>
                      <span className={`${activeDropdown === item.name ? "text-active" : ""}`}>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180 scale-125 -translate-y-[2px] chevron-colored" : ""
                          }`} />
                    </a>

                    {activeDropdown === item.name && (
                      <div
                        ref={dropdownRef}
                        className={`z-50 mt-[43px] ${item.isFullWidth
                          ? "fixed left-0 w-full overflow-y-auto max-h-[80vh]"
                          : "absolute top-full left-1/2 w-max min-w-[200px] max-w-[calc(100vw-20px)] overflow-auto -translate-x-1/2"
                          }`}
                      >
                        {item.dropdownComponent}
                      </div>
                    )}

                  </div>
                ))}

                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white text-[16px]">
                  Contact
                </Link>
              </nav>
              <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <button className="text-white text-[16px] px-[24px] py-[12px] font-semibold rounded-lg" style={{
                  background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                }}>
                  BOOK A CALL
                </button>
              </Link>
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
          <div className={`w-full mx-auto left-0 right-0 rounded-[24px] fixed top-[96px] bg-[#082235] px-6 py-8 z-40  transition-all duration-300 ease-in-out
    ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 '}`}>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} href="#" className="relative group text-white text-[16px] flex items-center justify-between"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }>
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180 scale-125 -translate-y-[2px]" : ""
                      }`} />

                  {/* Dropdown Container */}
                  {activeDropdown && (
                    <div
                      ref={dropdownRef}
                      onMouseEnter={() => setActiveDropdown(activeDropdown)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="fixed top-[102px] left-0 w-fit z-50 max-h-[80vh] overflow-y-auto"
                    >
                      {
                        menuItems.find((item) => item.name === activeDropdown)
                          ?.dropdownComponent
                      }
                    </div>
                  )}
                </div>
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









