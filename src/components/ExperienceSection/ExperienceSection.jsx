



import React from "react";

const ExperienceSection = () => {
    return (
        <div className="mt-24  flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl w-full max-w-5xl px-6 py-12 text-center bg-gradient-to-r from-[#0F2B47] to-[#0A3148] shadow-xl">
                {/* SVG Grid Lines */}

                <svg
                    className="absolute inset-0 w-full h-full z-0 opacity-10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="80"
                            height="80"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 80 0 L 0 0 0 80"
                                fill="none"
                                stroke="white"
                                strokeWidth="0.6"
                            />
                        </pattern>
                    </defs>
                    {/* Shift left: x = -80, show more on right side */}
                    <rect x="0" y="0" width="150%" height="100%" fill="url(#grid)" />
                </svg>


                {/* Foreground Content */}
                <div className="relative z-10">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Experience the Vijilan Difference Firsthand
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
                        Ready to see how our unique approach can transform your security posture or your MSP business?
                        Schedule a call with one of our security strategists today.
                    </p>
                    <button className="bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                        SCHEDULE A STRATEGIC CALL <span className="ml-2">⟶</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
