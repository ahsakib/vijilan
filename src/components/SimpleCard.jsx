import React from 'react';

const SimpleCard = ({ icon, title, desc }) => {
    return (
        <div className='bg-gradient-to-l to-[#A5EDCD] from-[#B563F8] my-5 rounded-lg'>
            <div className='bg-[#413F46] p-8  text-left rounded-lg m-[2px] min-h-52'>
                <div className='flex justify-start items-center gap-3 my-2'>
                    <img src={icon} alt="icon" />
                    <p className='text-blue-500'> {title}</p>
                </div>
                <p className='text-white'>{desc}</p>
            </div>
        </div>
    );
};

export default SimpleCard;