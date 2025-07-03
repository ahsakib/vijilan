

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
                <Heading_Btn h1="Real-World Results, Proven Success"
                    desc="Discover how our clients have achieved remarkable growth and transformed their businesses with our proven
                    strategies and innovative solutions."
                />

                {/* Stats - Improved Grid */}
                <div>
                    <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">

                        {
                            cardData.map(card => <CardBorder height="171px" width="166px">
                                <div>
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
                        btn2="Calculate Your Roi"
                    />


                </div>



            </div>

            {/* Business Automation */}

            <div>

                <Heading_Btn
                    h1="Business Automation Tools That Drive Results"
                    desc="Stop wasting time on manual processes. These interactive tools help you quote faster, sell smarter, and grow profitably."
                />

                <div className='mt-20  '>
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