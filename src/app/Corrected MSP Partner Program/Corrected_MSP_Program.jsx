import { partnerFeedback, partnerShip, partnerShipDesign, PartnershipSteps } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import SimpleCard from '@components/SimpleCard';
import React from 'react';

const Corrected_MSP_Program = () => {
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
                <div className="collapse collapse-plus bg-[#413F46] border border-[#4CAED9] my-3">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-plus bg-[#413F46] border border-[#4CAED9] my-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-plus bg-[#413F46] border border-[#4CAED9] my-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>



        </div>
    );
};

export default Corrected_MSP_Program;