import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-white text-2xl font-bold">
              vijilan
            </a>
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <a href="#" className="text-white hover:text-cyan-400 flex items-center space-x-1">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-white hover:text-cyan-400 flex items-center space-x-1">
                  <span>Platform</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-white hover:text-cyan-400 flex items-center space-x-1">
                  <span>Customers</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-white hover:text-cyan-400 flex items-center space-x-1">
                  <span>Insights</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <a href="#" className="text-white hover:text-cyan-400">
                About
              </a>
              <a href="#" className="text-white hover:text-cyan-400">
                Contact
              </a>
            </nav>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 font-semibold rounded">
            BOOK A CALL
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;