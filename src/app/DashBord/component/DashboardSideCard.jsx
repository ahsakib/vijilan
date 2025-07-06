import React from 'react';

const DashboardSideCard = ({ head, text, desc }) => {
    return (
        <div className='bg-[#567082] w-3/4 mx-auto px-3 md:px-5 py-5 rounded-lg text-center font-semibold'>

            <h1 className='!text-blue-400'>{head}</h1>
            <p className='my-4'>{text}</p>
            <p className='pb-3'>{desc}</p>
        </div>
    );
};

export default DashboardSideCard;