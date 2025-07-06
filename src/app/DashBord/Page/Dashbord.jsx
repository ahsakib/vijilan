// Responsive 

import { dashbordTabs } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import DashBoardCard from '../component/DashBoardCard';

export const InputField = ({ heading, desc, Input, number }) => {
    return (
        <div className='mt-5'>
            <h1 className='text-left sm:text-sm md:text-xl font-semibold'>{heading}</h1>
            <div className='flex justify-between mt-2 mb-4 '>
                <p className='text-left font-thin text-gray-400'>{desc}</p>
                <p className='text-blue-600'>${number}</p>
            </div>

            <div className="mb-4 flex gap-5 items-center   justify-between">
                <label className="  text-white   font-semibold  " htmlFor="Input">
                    {Input}
                </label>
                <input
                    className="w-full rounded-xl px-5 bg-[#2A516C]"
                    id="input"
                    type="number"
                    placeholder="0"
                />
            </div>
        </div>
    );
};


const Dashbord = () => {

    const tabs = [
        "All",
        "Tools",
        "Sales",
        "Technical",
        "Legal"
    ]
    return (

        <div className=' max-w-[90%] mx-auto'>

            <div className=''>
                <Heading_Btn
                    h1="Partner Dashboard"
                    desc="Your central hub for sales, metrics, and support."
                    ColorHeading="Build a Quote"
                    description=" Use our advanced simulator to create custom quotes and start a POC."
                    grdBtn="launch quote builder"
                />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between'>
                    <CardContent
                        side_text={true}
                        ColorHeading="Build a Quote"
                        description=" Use our advanced simulator to create custom quotes and start a POC.launch quote builder"
                        grdBtn="Lounch quote builder"
                    />
                    <CardContent
                        side_text={true}
                        ColorHeading="Active Client"
                        Number="12"
                        linkBtn="+2 this month"
                    />
                    <CardContent
                        side_text={true}
                        ColorHeading="Endpoints Protected"
                        Number="347"
                        linkBtn="+Across all clients"
                    />
                    <CardContent
                        side_text={true}
                        ColorHeading="Monthly Recurring"
                        Number="$4,280"
                        linkBtn="Projected revenue"
                    />
                </div>

            </div>


            <div className='bg-gradient-to-t to-[#063853] from-[#082235] p-8 rounded-xl mt-12 '>

                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center'>Quote Builder & POC Launcher
                </h1>
                <p className='text-center'>Build a custom quote, then launch a risk-free Proof of Concept for your client.</p>


                <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-10'>

                    <div className='col-span-1  '>
                        <div className='mt-8 flex flex-col md:flex-row  gap-5'>
                            <button className='text-white bg-[#00AEEF] px-8 py-3 rounded-xl z-10  '>Modular Essentials</button>
                            <button className='text-gray-400 bg-white px-8 py-3 rounded-xl ml-0 md:-ml-5  '>User Based (Remote)</button>
                        </div>


                        <div className='mt-10'>
                            <InputField
                                heading="TRX Endpoint (EDR/XDR)"
                                desc="CrowdStrike Falcon with containment & network isolation"
                                Input="Quantity"
                                number="5"
                            />
                            <InputField
                                heading=" TRX Identity (ITDR)"
                                desc="Conditional access, bi-directional Entra ID integration"
                                Input="Quantity"
                                number="3"
                            />
                            <InputField
                                heading="TRX Visibility (Exposure)"
                                desc="Falcon Discover + Spotlight for asset & hygiene visibility"
                                Input="Quantity"
                                number="3"
                            />
                            <InputField
                                heading="TRX Visibility (Exposure)"
                                desc="Falcon Discover + Spotlight for asset & hygiene visibility"
                                Input="Quantity"
                                number="3"
                            />

                            <InputField
                                heading=" Critical Servers"
                                desc="Monitored through Falcon EDR/XDR for general purpose servers"
                                Input="Quantity"
                                number="30"
                            />

                            <InputField
                                heading="Member Servers"
                                desc="Advanced security event monitoring for Domain Controllers"
                                Input="Quantity"
                                number="30"
                            />

                            <InputField
                                heading="Member Servers"
                                desc="Advanced security event monitoring for Domain Controllers"
                                Input="Quantity"
                                number="30" />



                        </div>

                    </div>

                    <div className='col-span-1 min-h-80 border-2 border-[#064462] p-4 rounded-3xl  sm:mt-2 md:mt-16 flex lg:mt-24 flex-col justify-between'>
                        <p className='font-semibold text-left mt-3'>Quote Summary</p>

                        <div className='mb-6'>
                            <p className='text-center mb-2'>Select Services to Build your quote </p>
                            <hr />
                            <div className='flex text-sm  items-center justify-between my-2'>
                                <p className='uppercase  text-sm font-semibold'>total Monthly cost:</p>
                                <p>$0.00</p>
                            </div>
                            <div className='uppercase w-1/2 mx-auto py-2 border-2 rounded-md border-[#064462] mt-6 justify-center text-center '>Start risk free poc</div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Resource Library */}

            <div>
                <Heading_Btn
                    h1="Resource Library"
                    desc="Your one-stop shop for all sales, marketing, technical, and legal collateral."
                />

                <div className="  flex flex-wrap justify-between gap-3 md:gap-7">
                    {tabs.map((tab, index) => (
                        <p
                            key={index}
                            className={`inline px-8 py-3 cursor-pointer font-bold text-[14px] rounded-2xl border border-[#00AEEF] ${index === 0 ? 'bg-[#00AEEF] text-white' : ''
                                }`}
                        >
                            {tab}
                        </p>
                    ))}
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
                    {
                        dashbordTabs.map(card =>
                            <DashBoardCard
                                txtIcon={card.type}
                                heading={card.title}
                                btn={card.action} />

                        )
                    }
                </div>
            </div>

            {/* Dedicated Partner Support */}





            <div className='mt-12'>
                <Heading_Btn
                    h1="Dedicated Partner Support"
                    desc="Questions? Need help with a co-pitch? We're here for you."
                    btn4="contact your partner success manager"
                />
            </div>

        </div>


    );
};

export default Dashbord;