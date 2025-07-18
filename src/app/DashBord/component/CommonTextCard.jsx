import { ExucativeSummary } from '@app/Constant/Constant';
import React from 'react';
import DashBoardCard from './DashBoardCard';

const CommonTextCard = ({ array, bg = true, heading, heading1, heading2, border, borderColor, listHead, listTop, grid_4, p1, p2, card, list, numCard, li, list_p, list_key, chart }) => {


  return (
    <div className={`${bg ? "bg-gradient-to-t to-[#063853] from-[#082235]" : "bg-transparent"} py-5 px-8 md:px-4  `} >
      <h1 className='text-center mt-8 font-semibold  '>{heading}</h1>
      <h1 className='  mb-4 text-left mt-8 font-semibold'>{heading1}</h1>
      <p className=' my-3 sm:p-2 md:px-5'>{p1}</p>
      <p className=' my-3'>{p2}</p>
      {
        listTop &&
        <ul className='mt-4 list-item'>
          <p className='font-semibold'>{list_key}</p>
          {listTop.map((li, index) => (
            <li key={index} className='list-disc mt-3 ml-4'>
              {li}
            </li>
          ))}
        </ul>
      }
      <div className={`${border ? "p-8 border-2   rounded-lg mt-5" : ""}`}
        style={{ borderColor: borderColor }}
      >
        <h3 className='my-5 text-xl text-center font-semibold'>{heading2}</h3>

        {card &&


          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>
            {card.map(card => <DashBoardCard
              Number={card.metric}
              icon={card.icon}
              head={card.label}
              desc={card.text}
            />)}
          </div>
        }
      </div>



      {numCard &&

        // <div className={`grid grid-cols-2 ${grid_4 ? 'grid-cols-4' : ""} gap-5 mt-8`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${grid_4 ? 'lg:grid-cols-4' : "lg:grid-cols-2"} gap-5 mt-8`}>
          {numCard.map(card =>

            <div
              className={`relative bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center `}

            >
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />



              <h3 className="text-3xl text-center font-bold   mb-3">{card.label}</h3>

              {/* <p className='text-[#00AEEF]  mt-2 text-sm'>{card.text}</p> */}
              {/* <p className='text-white text-sm'>{card.desc}</p> */}
              <p className='text-white text-sm text-center'>{card.text}</p>
            </div>
          )

          }
        </div>
      }


      {
        array && <div className='mt-4'>
          {array.map((list, index) => (
            <div key={index} className='mt-3  '>

              {
                li ? <p className={`font-extrabold mb-1`}><li className='list-disc ml-4'>{list.label}</li></p> : <p className={`font-extrabold mb-1 `}>{list.label}</p>
              }
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
        </ul>
      }


    </div >
  );
};

export default CommonTextCard;
