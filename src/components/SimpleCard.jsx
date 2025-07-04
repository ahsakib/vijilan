import React from 'react';

const SimpleCard = ({ icon, title, desc, h, w,designedTitle }) => {
    return (
        <div
            className="bg-gradient-to-l to-[#A5EDCD] from-[#B563F8] my-5 rounded-lg"
            style={{ minWidth: w }}
        >
            <div
                className={`bg-[#413F46] p-8 text-left rounded-lg m-[2px] ${h ? `` : 'min-h-52'}`}
                style={{ height: h}}
            >
                <div className={`flex items-center gap-3 my-2 ${designedTitle ? `justify-center` :`justify-start`}`}>
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        className="max-h-full max-w-full object-contain"
                    />
                )}
                    {title && <p className='text-blue-500'>{title}</p>}
                    {designedTitle && <h1 className='text-white-500 text-center font-bold text-4xl'>{designedTitle}</h1>}
                </div>
                {desc && <p className='text-white'>{desc}</p>}
            </div>
        </div>
    );
};

export default SimpleCard;
