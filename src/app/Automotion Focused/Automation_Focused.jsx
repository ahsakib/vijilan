

import { Automation } from '@app/Constant/Constant';
import CardBorder from '@components/CardBorder';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';

const cardData = [
    {
        title: "30%",
        desc: " Average MRR Growth"

    },
    {
        title: "3 days",
        desc: " Time to First Sale"
    },
    {
        title: "500+",
        desc: " Active MSP Partners"
    },
]
const Automation_Focused = () => {
    return (
        <div className='max-w-[90%] mx-auto  '>

            <div className='text-center'>
                <Heading_Btn h1="Build Your Security Practice with Automated Tools"
                    desc={`Skip the static brochures. Use our interactive calculators, quote builders, and\nautomated sales tools to close deals faster and grow your MRR.`}
                />

                {/* Stats - Improved Grid */}
                <div className='-mt-[80px]'>
                    <div className="flex flex-wrap justify-center gap-4 mb-4 max-w-4xl mx-auto">

                        {
                            cardData.map(card => <CardBorder height="171px" width="166px">
                                <div className='px-6 py-10'>
                                    <div className="text-white text-[32px] font-bold mb-2">{card.title}</div>
                                    <div className="text-slate-300 text-sm font-medium px-10">
                                        {card.desc}
                                    </div>
                                </div>
                            </CardBorder>
                            )
                        }

                    </div>

                    <Heading_Btn
                        btn1="Explore Success Stories"
                        btn2="Calculate Your Roi"/>

                </div>
            </div>

            {/* Business Automation */}

            <div className='container md:px-6 mx-auto pb-16'>

                <Heading_Btn
                    h1="Business Automation Tools That Drive Results"
                    desc={`Stop wasting time on manual processes. These interactive tools help you quote faster, sell smarter,\nand grow profitably.`}
                />

                <div className='  '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
                        {Automation.map((card, index) => <CardContent
                            iconed={card.icon}
                            Index={index + 2}
                            title={card.title}
                            description={card.description}
                            grdBtn={card.buttonText}
                        />)}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Automation_Focused;