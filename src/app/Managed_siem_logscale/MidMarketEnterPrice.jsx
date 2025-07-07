import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import React from 'react';
import flag from "../../Assets/flag.png";
import sun from "../../Assets/sun.png";
import build from "../../Assets/build.png";
import hand from "../../Assets/hand.png";
import eye from "../../Assets/eye.png";
import circle from "../../Assets/circle.png";
import Heading_Btn from '@components/Heading_Btn';
import CardContent from '@components/CardContent';
import { CISOCard } from '@app/Constant/Constant';
import card from 'daisyui/components/card';

const MidMarketEnterPrice = () => {
    return (
        <div className='container mx-auto px-6 py-16'>
            {/* Hero Section */}
            <section className="">
                <Heading_Btn
                    h1="From Data Chaos to Strategic Clarity:  Secure Your Enterprise."
                    desc="Vijilan provides comprehensive, 24/7 managed detection, response, and remediation,  designed to augment your security team, unify your disparate tools, and  demonstrably reduce risk across your entire attack surface."
                    btn1="REQUEST A CUSTOM DEMO"
                    btn2="DOWNLOAD THE CISO HANDBOOK"

                />


            </section>


            <section className="container mx-auto  px-2 md:px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-[40px] font-bold text-white mb-4">
                        <span className="text-[#00AEEF]"> The Vijilan Advantage</span>:<br />
                        Secure. Compliant. Partner-Focused.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        CISOCard.map((card, index) =>
                            <CardContent
                                icon={card.icon}
                                head={card.title}
                                description={card.description}
                                Index={index}

                            />
                        )
                    }




                </div>
            </section>


            <section className=" py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main container with border */}
                    <div className="">
                        {/* Header */}
                        <h1 className="text-white text-2xl md:text-[40px] font-bold text-center mb-12">
                            A Security Partnership, Not Just a Product
                        </h1>


                        {/* Main content grid */}
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>

                            {/* Right side - Product information */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-3xl md:text-5xl font-bold">ThreatRemediate™ Ultimate</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Fully Managed Detection, Response & Remediation
                                </h3>

                                <p className="text-white text-xl md:text-[22px] font-thin md:font-semibold leading-relaxed">
                                    Our flagship managed XDR service provides full-lifecycle, hands-on remediation. We don't just alert—we
                                    contain and neutralize threats across your endpoints, cloud, identity, and network.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium">
                                        VIEW THREATREMEDIATE DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[60px] grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-3xl md:text-5xl font-bold">Managed SIEM & Data Optimization</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Modernize Your SOC with LogScale & Cribl
                                </h3>

                                <p className="text-white  text-xl md:text-[22px] font-thin md:font-semibold leading-relaxed">
                                    Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our unique Cribl integration. Gain unparalleled visibility and control over your data while reducing costs.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium uppercase">
                                        explore siem services
                                    </button>
                                </div>
                            </div>

                            {/* Right side - Product information */}

                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>
                        </div>
                        <div className="mt-[60px] grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>

                            {/* Right side - Product information */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-3xl md:text-5xl font-bold">Professional Services</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Expert Implementation & Management
                                </h3>

                                <p className="text-white  text-xl md:text-[22px] font-thin md:font-semibold leading-relaxed">
                                    Augment your team with our certified experts for seamless implementation and ongoing management of leading technologies, including Cribl, Corelight, and the full CrowdStrike Falcon platform.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium uppercase">
                                        view professional services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" flex items-center justify-center py-16 rounded-[24px]" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-xl md:text-5xl text-center font-bold text-white mb-12 leading-tight">
                        Achieve and Maintain Compliance with <br /> Confidence
                    </h1>

                    {/* Compliance Badges */}
                    <div className="flex flex-wrap justify-center gap-6 p-2 mb-12">
                        <div className="bg-[#298524D1] rounded-full w-[120px] h-[120px] flex flex-col items-center justify-center text-white">
                            <div className="text-[15px] md:text-[18px] font-bold">SOC 2</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Type 2</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Certified</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[15px] md:text-[18px] font-bold">HIPAA</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Ready</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[15px] md:text-[18px] font-bold">PCI DSS</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Support</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[15px] md:text-[18px] font-bold">GDPR</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Compliant</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[15px] md:text-[18px] font-bold">CMMC</div>
                            <div className="text-[15px] md:text-[18px] font-bold">Ready</div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-white p-2 text-lg text-center mx-auto mb-12 leading-relaxed">
                        Our services are designed to help you meet rigorous regulatory standards. We <br /> provide detailed, audit-ready
                        reporting and long-term log retention to support your <br /> compliance needs for HIPAA, GDPR, PCI DSS, CMMC, and
                        more.
                    </p>

                    {/* CTA Button */}
                    <div className='border border-[#00AEEF] rounded-[8px] w-fit flex items-center justify-center mx-auto'>
                        <button className=" text-[#00AEEF] px-8 py-4 font-medium text-lg  uppercase ">
                            Request a Compliance Consultation
                        </button>
                    </div>
                </div>
            </section>




            <section className='py-20 space-y-[40px] flex flex-col items-center justify-center'>
                <h1 className='text-3xl md:text-[48px] font-bold text-center'>Ready to Build a More Resilient Security br
                    Posture?</h1>
                <p className='text-[18px]'> See exactly how Vijilan can integrate with your environment and augment your team. <br /> Schedule a technical, no-obligation demo with one of our security architects.</p>
                <GradientButton children={"SCHEDULE A SECURITY ARCHITECT DEMO"} />
            </section>
        </div>
    );
};

export default MidMarketEnterPrice;