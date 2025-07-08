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
                h1={"Empower Your Clients. Elevate Your\nPractice."}
                desc={"Partner with Vijilan to recommend and deliver elite, fully managed cybersecurity\nsolutions. We provide the technology, expertise, and support you need to become an\nindispensable security advisor for your clients."}
                btn1="Join our partner network"
                btn2="download consultant guide"
            />

            {/* Recommendation */}

            <div className='container mx-auto py-16'>
                <h1 className='text-2xl md:text-[40px] font-bold  text-white text-center m-12'>Recommend with Confidence, Deliver with Ease</h1>
                <div className='  '>
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

            <div className='container mx-auto py-16'>
                <h1 className='text-2xl md:text-[40px] font-bold  text-white text-center mb-4'>
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

            <div className='container mx-auto px-6 py-16'>
                <h1 className='text-2xl md:text-[40px] font-bold  text-white text-center mb-12'>
                    Key Offerings for Your Clientele
                </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-8'>
                    {ClientServices.map(((card, index) =>
                        <div className=' bg-[#082235] px-5 md:px-10 py-12 rounded-lg   '>

                            <h1 className="text-[24px] font-medium " style={{
                                backgroundImage: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                {card.title}
                            </h1>
                            <p className='text-[20px]  cursor-pointer my-3' style={{ color: "#00AEEF" }}>{card.link}</p>
                            <p className='text-white text-[20px]'>{card.description}</p>


                        </div>
                    ))}
                </div>
            </div>

            {/* Ready To Empower Your Team? */}

            <div className='container mx-auto px-6 py-16'>
                <h1 className='text-2xl md:text-[40px] w-full mx-auto  font-bold  text-white text-center mb-12'>
                    Ready To Empower Your Team?
                </h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                    {Empower.map((card, index) => (
                        <div key={index} className="bg-[#00AEEF3D] py-6 px-3 md:p-6 rounded-2xl text-white text-center flex flex-col min-h-[320px]">
                            <p className="text-[18px] text-white mb-4">{card.des}</p>
                            <h2 className="text-[20px] md:text-[24px] font-medium whitespace-pre-line mb-4">
                                {card.title}
                            </h2>
                            <button className="w-auto grdBtn mt-16 text-white  px-[24px] py-[16px] rounded-[8px] flex justify-center items-center mx-auto" style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>{card.button}</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* apply */}

            <div className='py-16'>
                <div className='space-y-5'>
                    <h1 className='text-[30px] md:text-[40px] font-bold text-center'>Ready to Become a Trusted Security Advisor? </h1>
                    <p className='text-[18px] text-center'>Join Vijilan's network of elite partners and start delivering superior security value to your clients.</p>
                    <div className='flex justify-center pt-5'>
                        <button className=" mx-auto py-2 md:py-[20px] p-2 md:px-[24px] mt-1 rounded-[8px] text-[18px] font-medium  text-white transition-opacity hover:opacity-90" style={{ background: " linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)" }}>
                            apply to our partner network
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vars_consultants_page;