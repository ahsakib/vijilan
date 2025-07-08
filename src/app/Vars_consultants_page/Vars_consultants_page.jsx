import { ClientServices, Empower, PartnershipSteps, Recommend } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import v1 from "../../Assets/v1.png";
import v2 from "../../Assets/v2.png";
import v3 from "../../Assets/v3.png";
import v4 from "../../Assets/v4.png";
import v5 from "../../Assets/v5.png";
import v6 from "../../Assets/v6.png";

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

            <div className='container mx-auto md:px-6 py-16'>
                <h1 className='text-2xl md:text-[40px] font-bold  text-white text-center m-12'>Recommend with Confidence, Deliver with Ease</h1>
                <div className='  '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[389px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v1} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Recommend the Best</h3>
                            <p className="text-white text-center">Confidently recommend our solutions, built on elite technology from CrowdStrike, Cribl, and Corelight, and validated by our SOC 2 Type 2 certification.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[360px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />

                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v2} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Focus on the Sale, Not the SOC</h3>
                            <p className="text-white text-center">For VARs, our flagship ThreatRemediate™ service is a 'hands-off' solution. We handle the 24/7 monitoring and remediation, you maintain the client relationship.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[434px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v3} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Enhance Your Strategic Role</h3>
                            <p className="text-white text-center">For vCISOs and Consultants, our solutions provide the strategic oversight and operational excellence needed to elevate your clients' security posture and simplify compliance.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[335px] lg:-mt-[43px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v4} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">A Partnership That Pays</h3>
                            <p className="text-white text-center">Our channel-first model is designed to be a win-win, rewarding you for bringing industry-leading security and data management solutions to your clients.</p>
                        </div>


                        <div className={`relative bg-[#00AEEF3D] lg:h-[405px] lg:-mt-[70px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v5} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Stay Ahead of Threats</h3>
                            <p className="text-white text-center"> Strengthen your advisory reputation with real-time insights and proactive threat intelligence from Vijilan's dedicated research team. We empower you to stay informed about emerging threats, guide your clients confidently, and proactively manage their cybersecurity posture.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[419px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={v6} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Confirm & Close</h3>
                            <p className="text-white text-center">Vijilan handles the heavy lifting—from streamlined onboarding, automated reporting, and ongoing operational support, to dedicated service delivery. With our expert team managing security operations, you can effortlessly deliver high-value outcomes without complexity, freeing your team to focus fully on strategic advisory and client growth.</p>
                        </div>
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