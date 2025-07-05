import React from 'react';

const DashBoardCard = ({ icon,title,bg, heading,desc, btn,head,text,linkUp, txtIcon }) => {
    return (
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
            {
                icon && <div className={`w-12 h-12 ${bg?"bg-cyan-400":"bg-transparent"}  rounded-lg flex items-center justify-center mb-4`}>
                    <img src={icon} alt={title} />

                </div>
            }
            <p className='text-white text-sm'>{txtIcon}</p>
            <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3">{heading}</h3>
            <h3 className="text-xl text-center font-bold   mb-3">{head}</h3>
           {
            btn && <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>{btn}</p>
           }
            <p className='text-white text-sm'>{text}</p>
            <p className='text-white text-sm text-center'>{desc}</p>
            <p className='text-[#00AEEF]  mt-2 text-sm'>{linkUp}</p>
        </div>
    );
};

export default DashBoardCard;