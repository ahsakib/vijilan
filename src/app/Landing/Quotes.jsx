import React from 'react';
import content from '../../images/background.png';

export default function Quotes() {
    return (
        <div className="container mx-auto h-[223px] py-12 text-white flex justify-center items-center relative overflow-hidden"
            style={{
                backgroundColor: '#092438', // Left side solid color
                borderRadius: "24px",
            }}
        >
            {/* Background image positioned on right side */}
            <div className="absolute right-0 top-0 h-full w-1/2"
                style={{
                    backgroundImage: `url(${content})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopRightRadius: '20px',
                }}
            />
            
            {/* Gradient overlay for smooth transition */}
            <div className="absolute left-1/2 top-0 h-full w-32"
                style={{
                    background: 'linear-gradient(to right, #092438, transparent)',
                    transform: 'translateX(-50%)',
                }}
            />

            {/* Content */}
            <div className="container mx-auto p-3 sm:p-0 font-normal text-center relative z-10">
                <p className="italic text-[16px] leading-relaxed">
                    The sign-up process was incredibly simple. We had access to the portal and were <br />
                    building quotes for our clients the same day. It's the easiest and most transparent<br />
                    partner program we've ever joined.
                </p>
                <p className="mt-3 text-[#00AEEF] font-medium text-sm md:text-base">
                    — Mark T., New Bronze Tier MSP Partner
                </p>
            </div>
        </div>
    );
}
