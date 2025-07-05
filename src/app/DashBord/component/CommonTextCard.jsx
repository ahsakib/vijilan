import { ExucativeSummary } from '@app/Constant/Constant';
import React from 'react';
import DashBoardCard from './DashBoardCard';

const CommonTextCard = ({ array, heading, heading1, heading2, listHead, p1, p2, card, list, list_p, list_key, chart }) => {
  return (
    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>
      <h1 className='text-center mt-8 font-semibold'>{heading}</h1>
      <h1 className='  mb-4 text-left mt-8 font-semibold'>{heading1}</h1>
      <p className=' my-3'>{p1}</p>
      <p className=' my-3'>{p2}</p>
      <h3 className='my-5 text-xl text-center font-semibold'>{heading2}</h3>

      {card &&

        <div className='grid grid-cols-2 gap-5 mt-8'>
          {card.map(card => <DashBoardCard
            icon={card.icon}
            head={card.label}
            desc={card.text}
          />)}
        </div>
      }

      {
        array && <div className='mt-4'>
          {array.map((list, index) => (
            <div key={index} className='mt-3'>
              <p className='font-extrabold mb-1'>{list.label}</p>
              <p>{list.text}</p>
            </div>
          ))}
        </div>
      }
      {
        chart && <img src={chart} alt="" className='w-auto border-2' />
      }

      <p className='text-lg mt-8 font-semibold '>{listHead}</p>
      <p className=' my-3'>{list_p}</p>

      {
        list &&
        <ul className='mt-4 list-item'>
          <p className='font-semibold'>{list_key}</p>
          {list.map((li, index) => (
            <li key={index} className='list-disc mt-3 ml-4'>
              {li}
            </li>
          ))}
        </ul>}


    </div >
  );
};

export default CommonTextCard;
