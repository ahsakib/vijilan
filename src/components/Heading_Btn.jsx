import React from 'react';

const Heading_Btn = ({h1,desc,btn1,btn2}) => {
    return (
        <div>
            <section className="px-6 py-16 relative z-10 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl text-center space-y-8">
                    <h1 className="text-5xl font-bold tracking-tight text-white">
                        {h1}
                    </h1>
                    <p className=" text-[18px] leading-8 max-w-5xl text-[#FFFFFF] mx-auto"> {desc} </p>
                    <div class="flex flex-col sm:flex-row gap-10 justify-center">
                        <button
                            className="p-[20px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                            style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                            }}>

                            <span>{btn1}</span>
                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </button>
                        <button
                            className="p-[18px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3 bg-transparent"
                            style={{
                                border: '1px solid',
                                borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                borderImageSlice: 1,
                                borderRadius: '8px',
                            }}
                        >
                            <span className="uppercase">{btn2}</span>
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
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heading_Btn;