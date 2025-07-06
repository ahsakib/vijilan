import { ClientServices, Empower, PartnershipSteps, Recommend } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';

const Vars_consultants_page = () => {


    return (
        <div className='max-w-[90%] mx-auto'>

            {/* hero section */}
            <Heading_Btn
                h1="Empower Your Clients. Elevate Your Practice."
                desc="  Partner with Vijilan to recommend and deliver elite, fully managed cybersecurity solutions. We provide the technology, expertise, and support you need to become an indispensable security advisor for your clients."
                btn1="Join our partner network"
                btn2="download consultant guide"
            />

            {/* Recommendation */}

            <div>
                <h1 className='text-2xl md:text-5xl font-bold  text-white text-center m-12'>Recommend with Confidence, Deliver with Ease</h1>
                <div className='mt-20  '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                        {Recommend.map(((card, index) => <CardContent
                            Index={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}

                        />))}
                    </div>
                </div>
            </div>

            {/* A Simple Path to Partnership */}

            <div>
                <h1 className='text-2xl md:text-5xl font-bold  text-white text-center m-12'>
                    A Simple Path to Partnership
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {PartnershipSteps.map(((card, index) => <CardContent

                        icon={card.icon}
                        title={card.stepTitle}
                        description={card.description}

                    />))}
                </div>
            </div>

            {/* Key Offerings for Your Clientele */}

            <div>
                <h1 className='text-2xl md:text-5xl font-bold  text-white text-center m-12'>
                    Key Offerings for Your Clientele
                </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-8'>
                    {ClientServices.map(((card, index) =>
                        <div className=' bg-[#082235] px-10 py-12 rounded-lg   '>

                            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                {card.title}
                            </h1>
                            <p className='  cursor-pointer text-blue-400 my-3'>{card.link}</p>
                            <p className='text-white'>{card.description}</p>


                        </div>
                    ))}
                </div>
            </div>

            {/* Ready To Empower Your Team? */}

            <div>
                <h1 className='text-2xl md:text-5xl  font-bold  text-white text-center m-12'>
                    Ready To Empower Your Team?
                </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                    {Empower.map(((card, index) =>
                        <CardContent
                            iconed={card.icon}
                            title={card.title}
                            grdBtn={card.button}
                        />
                    ))}
                </div>
            </div>

            {/* apply */}

            <div>
                <Blog_Subscribe_Component_Btn

                    H1=" Ready to Become a Trusted Security Advisor?"
                    Desc="Join Vijilan's network of elite partners and start delivering superior security value to your clients."
                    Btn="apply to our partner network" />
            </div>
        </div>
    );
};

export default Vars_consultants_page;