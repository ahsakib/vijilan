import React from 'react';

const EmergencyBanner = () => {
  return (
    <div className="rounded-t-2xl mx-4">
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 px-6 py-3">
        <div className="container mx-auto flex items-center justify-center space-x-4">
          <span className="text-white font-medium">Under Attack or Suspect a Breach?</span>
          <button className="bg-white text-slate-900 hover:bg-gray-100 px-4 py-1 text-sm font-semibold rounded">
            GET HELP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;