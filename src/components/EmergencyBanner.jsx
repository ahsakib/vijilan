import React from 'react';
import { Link } from 'react-router-dom';


const EmergencyBanner = () => {
  

  return (
    <div className="w-11/12 lg:max-w-[1160px] mx-auto mt-4">
      <div
        className="flex justify-center items-center backdrop-blur-3xl h-[64px] rounded-[12px] px-6 gap-4"
        style={{
          background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
        }}>
        <span className="text-white text-[18px]">Under Attack or Suspect a Breach?</span>
        <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <button className="bg-white text-[10px] sm:text-[13px] !text-[#082235] hover:bg-gray-100 rounded-[8px] font-medium py-[12px] sm:py-[12px] px-[8px] sm:px-[14px]">
            GET HELP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmergencyBanner;