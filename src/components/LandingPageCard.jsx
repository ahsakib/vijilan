import React from 'react';
import { FaCalendar, FaLink, FaUser } from "react-icons/fa";


const LandingPageCard = ({ banner, author, title, heading, details, sales, date }) => {
    return (
        <div className="max-w-md mx-auto overflow-hidden">
            {/* Hero Image Section */}
            <div className="order-2">
                <img
                    src={banner}
                    alt="photo"
                    fill
                    className="w-full h-[227px] rounded-[24px] "
                /> 
             

                {/* MSP Growth Badge */}
                <div className=" top-4 left-4">
                    <span className="inline-flex items-center px-3 py-2 mt-2 mb-2 rounded-[15px] opacity-80 text-[#00AEEF] text-[10px] font-semibold bg-[#00AEEF3B]  ">
                        MSP GROWTH
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className=" space-y-2 z-10">
                <h2 className="text-[24px] font-medium text-white leading-tight">{title}</h2>

                <p className="text-[#FFFFFF] text-[16px] leading-relaxed">
                    {details}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-[#00AEEF] text-[16px]  space-x-4">
                    <div className="flex items-center space-x-1">
                        {/* <FaUser className="w-4 h-4" /> */}
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center text-[#00AEEF] text-[16px] space-x-1">
                        {/* <FaCalendar className="w-4 h-4" /> */}
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[#00AEEF] text-[16px] cursor-pointer transition-colors">
                        <span>Read More...</span>
                        {/* <FaLink className="w-3 h-3" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPageCard;