import React from 'react';

const NumberShow = ({ number, link }) => {
    return (
        <div className='flex flex-col items-center justify-center  '>
            <h2 className='text-4xl font-bold mb-2'>{number}</h2>
            <p className='text-blue-500 font-semibold cursor-pointer'>{link}</p>
        </div>
    );
};

export default NumberShow;