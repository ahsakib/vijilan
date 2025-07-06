import { StrategicData, weServe } from '@app/Constant/Constant'; 
import CardContent from '@components/CardContent';
import React from 'react';
import play from "../../Assets/play.png";
import backgroundPattern from "../../Assets/Background pattern.png";

const Serve = () => {
    return (
        <section className='text-white'>
            <div className='container mx-auto px-6 py-12  '>
                <div className='py-8 space-y-3'>
                    <h1 className='text-3xl md:text-5xl font-bold text-center '>  Tailored Cybersecurity for Every <br /> Organization</h1>
                    <p className='text-[22px] font-bold text-center my-5'> Whether you're an MSP looking to grow your security practice or an enterprise defending <br /> against advanced threats, Vijilan has a solution built for your specific needs.
                        this is Serve system </p>
                </div>



                {/* video section */}
                <div className='my-8'>
                    <h1 className='capitalize text-center text-[40px] font-bold mb-10'>A message from our ceo</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        <div className='relative col-span-1 rounded-[26px] bg-[#00AEEF3D] h-[500px] '>
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className='w-full h-full flex justify-center items-center'>
                                <img src={play} alt="" className='w-[150px] h-[150px]' />
                            </div>
                        </div>

                        <div className='col-span-1 flex flex-col justify-center items-center'>
                            <p className='text-[19px] mb-3'>
                                We founded Vijilan on a simple principle: to provide clarity and control in a complex digital world. We are deeply committed to the success of our partners and the security of our clients. This page is dedicated to showing you exactly how we tailor our expertise to meet your unique challenges.
                            </p>
                            <p className='text-[#00AEEF] text-[14px] font-medium self-start'>-Kevin Najed, Founder and CEO</p>
                        </div>
                    </div>
                </div>

                {/* card section */}

                <div className='grid grid-cols-1  lg:grid-cols-2 gap-10 py-16'>
                    {
                        weServe.map((Serve, index) => <CardContent
                            index={index + 2}
                            icon={Serve.icon}
                            title={Serve.audience}
                            description={Serve.description}
                            cardFooter={Serve.action}
                        />)
                    }
                </div>


                {/* Strategic Resources for your Role */}
                <div className=''>
                    <h1 className='font-bold text-center text-[40px] mb-10'>
                        Strategic Resources for your Role
                    </h1>
                    <div className='grid grid-cols-1   lg:grid-cols-3 gap-8'>
                        {
                            StrategicData.map((data, index) => <CardContent
                                head={data.title}
                                sub={data.description}
                                grdBtn={data.action}
                            />)
                        }
                    </div>
                </div>

                {/* where to start */}

                {/* <div className=' mt-5 md:mt-16'>
                    <Blog_Subscribe_Component_Btn
                        H1='Not Sure Where to Start?'
                        Desc="Let's discuss your unique cybersecurity challenges and how Vijilan can provide the protection and peace of mind you need to focus on growing your business."
                        Btn='Get Your Free Security Consultation'
                    />
                </div> */}

                <section className="relative z-10 py-16">
                    <div className="container mx-auto ">
                        <div
                            className="h-[304px] rounded-[24px] flex justify-center items-center relative overflow-hidden"
                            style={{
                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)",
                            }}
                        >

                            {/* Left side solid background */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
                                }}
                            />

                            {/* Right side pattern with smooth blend */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${backgroundPattern})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: 0.8,
                                    maskImage:
                                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                                }}
                            />

                            {/* Overlay for color consistency */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
                                }}
                            />

                            <div className="relative z-10 text-center space-y-5">
                                <h2 className="text-2xl md:text-[40px] font-bold text-white ">
                                    Not Sure Where to Start?
                                </h2>
                                <p className="text-[16px] font-medium text-white  leading-relaxed max-w-2xl mx-auto">
                                    Let's discuss your unique cybersecurity challenges and how Vijilan can provide the protection and peace of mind you need to focus on growing your business.
                                </p>
                                <button
                                    className="p-[20px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3 transition hover:scale-105"
                                    style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                        boxShadow: "0 8px 32px rgba(255, 107, 53, 0.3)",
                                    }}
                                >

                                    <span>Get Your Free Security Consultation</span>
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 16 16 12 12 8"></polyline>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section >
    );
};

export default Serve;