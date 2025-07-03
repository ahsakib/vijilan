import React from 'react';


const EmergencyBanner = () => {
  return (
    <div className="w-[1160px] mx-auto">
      <div
        className="flex justify-center items-center backdrop-blur-3xl h-[64px] rounded-[12px] px-6 gap-4"
        style={{
          backgroundImage: "linear-gradient(to right, #F89B29, #FF0F7B)",
        }}>
        <span className="text-white text-[18px]">Under Attack or Suspect a Breach?</span>
        <button className="bg-white text-[13px] text-[#082235] hover:bg-gray-100 rounded-[8px] font-medium py-[12px] px-[14px]">
          GET HELP NOW
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;