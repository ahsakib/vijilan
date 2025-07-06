import React from 'react';

const ListComponent = ({ heading,LeftHeading, p1, p2, array, bg }) => {
    return (
        <div className={`${bg ? "  bg-gradient-to-t to-[#063853] from-[#082235]  py-5 px-12" : "bg-transparent  py-5 px-6"} mt-12`}>
            <h1 className='text-center mt-8 font-semibold'> {heading}</h1>
            <h1 className='text-left mt-8 font-semibold'> {LeftHeading}</h1>
            <p className='text-left my-8'>
                {p1}
            </p>

            {
                array && <ul className='mt-4 list-item'>
                    {array.map((li, index) => (
                        <li key={index} className='list-disc mt-3 ml-4'>
                            {li}
                        </li>
                    ))}
                </ul>
            }

            <p className='mt-2 text-left'>{p2}</p>
        </div>
    );
};

export default ListComponent;