import React from 'react';

const CommonTextCard = ({ array, heading }) => {
  return (
    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>
      <h1 className='text-center mt-8 font-semibold'>{heading}</h1>

      <div className='mt-4'>
        {array.map((list, index) => (
          <div key={index} className='mt-3'>
            <p className='font-extrabold mb-1'>{list.label}</p>
            <p>{list.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonTextCard;
