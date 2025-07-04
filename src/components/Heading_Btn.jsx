import React from 'react';
import CardBorder from './CardBorder';

const Heading_Btn = ({ h1, desc, btn1, btn2, btn3,btn4, isSmallHeading, rating, state,btn2Icon = true }) => {
    const colCount = Math.min(state?.length || 1, 6);
    const gridColsClass = `grid-cols-${colCount}`;

    return (
        <div>
            <section className="px-6 py-16 relative z-10 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl text-center space-y-8">
                    {h1 && <h1 className={`${isSmallHeading ? "text-[40px]" : "text-5xl"} font-bold tracking-tight text-white`}>
                        {h1}
                    </h1>}
                    {
                        desc && <p className="whitespace-pre-line text-[18px] leading-8 max-w-5xl text-[#FFFFFF] mx-auto"> {desc} </p>
                    }
                    {rating &&
                        <p className='text-yellow-400 capitalize'> {rating}
                        </p>}

                    {state && state.length > 0 && (
                        <div className={`grid ${gridColsClass} max-w-xl mx-auto gap-4`}>
                            {state.map((item, index) => (
                                <CardBorder key={index} width="166px" height="171px">
                                    <div>
                                        <div className="text-white text-[32px] font-bold mb-2">{item.percentage}</div>
                                        <div className="text-slate-300 text-sm font-medium whitespace-pre-line">
                                            {item.description}
                                        </div>
                                    </div>
                                </CardBorder>
                            ))}
                        </div>
                    )}

                    <div class="flex flex-col sm:flex-row gap-10 justify-center">
                        {
                            btn1 && <button
                                className="p-[20px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                                style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                }}>

                                <span className='uppercase'>{btn1}</span>
                                <div className="w-6 h-6  flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </div>
                            </button>
                        }
                        {btn2 &&
                            <div className="  rounded-lg  ">
                                <button
                                    className="p-[18px] text-lg font-medium  text-white inline-flex items-center space-x-3 bg-transparent rounded-lg"
                                    style={{
                                        border: '1px solid',
                                        borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                        borderImageSlice: 1,
                                        borderRadius: '8px',
                                    }}
                                >
                                    <span className="uppercase">{btn2}</span>
                                    {btn2Icon && (
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 16 16 12 12 8"></polyline>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </div>
                                    )}
                                </button>
                            </div>
                        }


                        {btn3 && <div className="bg-[#0784c3]  rounded-lg  ">
                            <button className="p-[18px] capitalize bg-[#064462] m-[2px] text-lg rounded-[8px] text-white border-2 border-white  ">
                                {btn3}
                            </button>
                        </div>}
                        {btn4 && <div className="bg-[#0784c3]  rounded-lg  ">
                            <button className="p-[18px] uppercase   m-[2px] text-lg rounded-[8px] text-white border-2 border-white  ">
                                {btn4}
                            </button>
                        </div>}
                         



                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heading_Btn;