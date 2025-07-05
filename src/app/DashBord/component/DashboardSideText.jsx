import React from 'react';

const DashboardSideText = ({ desc, author }) => {
    return (
        <div className='  bg-gradient-to-t to-[#063853] from-[#082235]  p-16 mt-10'>
            <div className='w-3/4 mx-auto'>
                <p className=' leading-8 font-semibold'>{desc}</p>

                <p className='text-blue-400 my-4'>
                    --{author}
                </p>
            </div>

        </div>
    );
};

export default DashboardSideText;