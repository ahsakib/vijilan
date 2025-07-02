import React from "react";

const ExperienceSection = () => {
  return (
    <div className="mt-24 px-4 flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#0F2B47] to-[#0A3148] rounded-xl p-10 w-full max-w-4xl text-center shadow-lg relative overflow-hidden">
        {/* Optional grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/squares.png')] pointer-events-none"></div>

        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Experience the Vijilan Difference Firsthand
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
          Ready to see how our unique approach can transform your security posture or your MSP business? Schedule a call with one of our security strategists today.
        </p>
        <button className="bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
          SCHEDULE A STRATEGIC CALL <span className="ml-2">⟶</span>
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
