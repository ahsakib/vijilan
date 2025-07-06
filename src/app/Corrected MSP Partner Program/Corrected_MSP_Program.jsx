import { partnerFeedback, partnerShip, partnerShipDesign, PartnershipSteps } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import SimpleCard from '@components/SimpleCard';
import React from 'react';
import {
    Car,
    Plus,

} from "lucide-react"

// Custom Card Component
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};
const Corrected_MSP_Program = () => {
    const CardContentData = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};

    return (
        <div className='max-w-[90%] mx-auto '>
            {/* Corrected MSP Partner Program */}

            {/* hero section */}

            <div>
                <Heading_Btn
                    h1="Build Your Profitable Security Practice on Our Platform"
                    desc="Leverage our 24/7 US-Based SOC, AI-driven technology, and channel-first model to deliver enterprise-grade cybersecurity. No minimums, no complexity, no high startup costs."
                    rating="★★★★★ | Trusted by over 500 MSPs worldwide"
                    btn1="Apply to become a partner"
                    btn2="download partner kit"
                />
            </div>

            <div>
                <Heading_Btn
                    h1="Your Path to Market Leadership"
                    desc="Our proven go-to-market strategy helps partners achieve sustained growth and market differentiation."
                />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 rounded-lg'>
                    {partnerShip.map((card, index) =>
                        <SimpleCard
                            title={card.title}
                            icon={card.icon}
                            desc={card.description}
                        />
                    )}
                </div>
            </div>

            {/* Partner Ship design */}

            <div>
                <Heading_Btn
                    h1="A partnerShip designed for your growth"
                    desc="everything you need to build,scale and differentiate your practice"
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        partnerShipDesign.map((card, index) =>


                            <div className='text-white text-center my-2 p-5'>
                                {/* <{card.icon}/> */}
                                <h3 className='text-2xl font-semibold my-2'>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        )
                    }
                </div>




            </div>
            {/* A Partnership Tier for Every Stage of Your Growth */}
            <div>
                <Heading_Btn
                    h1="A Partnership Tier for Every Stage of Your Growth"
                    desc="Our program is designed to meet you where you are and help you scale your security offerings profitably."
                />

                <div className='grid grid-cols-1 md:grid-cols-2  gap-5 justify-between'>
                    <CardContent
                        head="Partner Tier Comparison"
                        description="A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented here, outlining services, support, and benefits for each level as defined in the development plan."
                    />
                    <div className=' p-5 flex flex-col items-center justify-center border-[3px] rounded-2xl border-[#035882]'>
                        <div className='-mb-10 flex flex-col items-center justify-center  gap-3'>
                            <div className='bg-gradient-to-t h-24 w-24  rounded-full flex justify-center items-center text-white text-lg font-bold from-[#07ADE9] to-[#EB9C33]'>
                                JN </div>
                            <h3 className='font-bold text-xl text-white'>JEN AI</h3>
                        </div>

                        <Heading_Btn
                            desc='"Ask me which Vijilan services are best suited for meeting HIPAA compliance requirements, or how we can help you achieve CMMC Level 2 certification."'
                            btn1="start a chat"
                        />
                    </div>

                </div>
            </div>

            {/* feedback */}

            <div className='grid grid-cols-1 md:grid-cols-2  gap-5 justify-between'>
                {
                    partnerFeedback.map((card, index) =>
                        <CardContent
                            head={card.sectionTitle}
                            description={card.testimonial}
                            cardFooter={`- ${card.author}`}
                        />)
                }
            </div>

            {/* Question and answer */}


            <div className=' mt-16 pt-8  '>

                <h1 className='text-5xl font-bold text-center my-4 py-5'>Frequently Asked Questions</h1>

                {/* FAQ Section */}
                < section className="relative z-10 px-6 py-16" >
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-[40px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                            ].map((question, index) => (
                                <Card key={index} className="relative rounded-[8px]" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}>
                                    <div
                                        className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                        style={{
                                            background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",

                                        }}
                                    />
                                    <CardContentData className="p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white text-[16px]">{question}</span>
                                            <Plus className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </CardContentData>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section >
            </div>



        </div>
    );
};

export default Corrected_MSP_Program;