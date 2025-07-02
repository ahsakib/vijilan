import React from 'react';
import { FaCalendar, FaLink, FaUser } from "react-icons/fa";


const LandingPageCard = ({ banner, author, title, heading, details, sales, date }) => {
    return (
        <div className="max-w-md mx-auto   rounded-lg overflow-hidden shadow-2xl">
            {/* Hero Image Section */}
            <div className="   rounded-md order-2">
                <img
                    src={banner}
                    alt="photo"
                    fill
                    className="w-full h-72  rounded-lg"
                /> 
             

                {/* MSP Growth Badge */}
                <div className=" top-4 left-4">
                    <span className="inline-flex items-center px-4 py-3 mt-3 rounded-full opacity-80 text-[#00AEEE] text-sm font-medium bg-[#133953]  ">
                        MSP GROWTH
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className=" mt-5 z-10">
                <h2 className="text-xl font-bold text-white mb-4 leading-tight">{title}</h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {details}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-[#00AEEE] text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                        <FaUser className="w-4 h-4" />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaCalendar className="w-4 h-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-cyan-300 cursor-pointer transition-colors">
                        <span>Read More...</span>
                        <FaLink className="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageCard;