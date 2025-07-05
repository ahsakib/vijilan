import React from 'react';
import happyMan from "../../Assets/happyMan.png";
import cp1 from "../../Assets/cp1.png";
import cp2 from "../../Assets/cp2.png";
import cp3 from "../../Assets/cp3.png";
import cp4 from "../../Assets/cp4.png";
import JoinMissionSection from '@components/JoinMissionSection';
import aws from "../../Assets/aws.png";
import corelight from "../../Assets/corelight.png";
import microsoft from "../../Assets/microsoft.png";
import crible from "../../Assets/crible.png";
import rowstrike from "../../Assets/rowstrike.png";
import fortinet from "../../Assets/fortinet.png";
import badge from "../../Assets/badge.png";
import soc2 from "../../Assets/soc2.png";


const modules = [
    {
        id: 1,
        icon: cp1,
        title: "Unmatched Expertise & Enduring Trust",
        description:
            "Our US-Based, SOC 2 Type 2 certified Security Operations Center is the heart of our service. It's staffed 24/7 by a team of elite threat hunters and remediation specialists who act as a direct extension of your team.",

    },
    {
        id: 2,
        icon: cp2,
        title: "Powered by the Cribl Data Engine",
        description:
            "Our deep alliance with Cribl allows us to solve 'data chaos.' We optimize your data flows, reduce SIEM costs, and enrich raw data into actionable intelligence *before* it enters your security stack.",

    },
    {
        id: 3,
        icon: cp3,
        title: "A Proactive, Remediation-First Approach",
        description:
            "Unlike services that just send alerts, our ThreatRemediate™ service includes active, hands-on remediation. Our SOC contains and neutralizes threats directly, reducing the burden on your team and stopping breaches faster.",

    },
    {
        id: 4,
        icon: cp4,
        title: "Committed to Partner Success",
        description:
            "We are a channel-first company. We empower our MSP partners with a turnkey platform, no minimums, a 30-day opt-out trial, full white-labeling options, and a comprehensive sales enablement kit to ensure your success.",

    }
]

const WhyVijilanPage = () => {
    return (
        <div className='container mx-auto px-6'>
            {/*  */}
            <section className="">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-12">
                                <span className="text-[#00AEEF]">The Vijilan Difference:</span>
                                <br />
                                <span className="text-white">
                                    Expertise, Technology,
                                    <br />
                                    and a True Partnership
                                </span>
                            </h1>

                            <p className="text-white text-lg leading-relaxed max-w-xl">
                                We are not just another security vendor. We are an integrated security partner, combining an expert-led
                                24/7 SOC with an AI-driven platform to deliver unparalleled protection and value for your business and
                                your clients.
                            </p>
                        </div>

                        {/* Right Content - Profile */}
                        <div className="flex flex-col items-center lg:items-end space-y-4">
                            <div className="relative">
                                <img
                                    src={happyMan}
                                    alt="Kevin Nejad"
                                    className="w-[342px] h-[342px] rounded-full object-cover"
                                />
                            </div>

                            <div className="">
                                <div className='relative flex gap-10 justify-between items-center rounded-[8px] px-[16px] py-[14px]' style={{
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`
                                }}>
                                    <div
                                        className={`absolute inset-0 rounded-[8px] p-[1px] z-0 $`}
                                        style={{
                                            background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <h3 className="text-white text-[20px] font-medium">Kevin Nejad</h3>
                                    <p className="text-[#00AEEF] text-[14px]">Founder & CEO</p>
                                </div>
                                <p className=" text-sm text-center mt-2">Leading Vijilan's Mission</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/*  */}
            <section className=" relative overflow-hidden py-16">
                <div className="relative z-10 container mx-auto px-6 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-[40px] font-bold text-white">What Truly Sets Us Apart</h1>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className={`relative rounded-[24px] p-8 border bg-[#00AEEF3D] backdrop-blur-sm ${module.middle ? "md:col-span-2 flex flex-col justify-center w-[534px] mx-auto" : ""}`}>
                                <div
                                    className={`absolute inset-0 rounded-[24px] p-[1px] z-0 $`}
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Icon and Header */}
                                <div className="">
                                    <img src={cp1} alt="" className='w-[64px] h-[64px]' />
                                </div>
                                <div className="mb-4 mt-4">
                                    <h3 className="text-[24px] whitespace-pre-line font-medium text-white mb-2">{module.title}</h3>
                                </div>
                                {/* Description */}
                                <p className="text-white text-[18px] leading-relaxed">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            {/*  */}
            <section className='pb-16'>
                {/* Header Section */}
                <div className="text-center py-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] text-center font-bold text-white ">
                        Built on an Elite <span className="text-[#00AEEF]">Technology <br /> Foundation</span>
                        <br />

                    </h2>

                    {/* Company Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        {[
                            { src: rowstrike, },
                            { src: fortinet, },
                            { src: corelight },
                            { src: crible },
                            { src: microsoft },
                            { src: aws },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#00AEEF] w-fit h-[40px] flex items-center justify-center rounded-[8px] px-[16px] py-[10px]"
                            >
                                <img src={item.src} alt="" className={item.height || "h-[24px]"} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certification Badge */}
                <div className="relative rounded-2xl py-[48px] px-[32px] max-w-2xl mx-auto text-center mt-8" style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
                    linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`}}>
                    <div
                        className={`absolute inset-0 rounded-[16px] p-[1px] z-0 $`}
                        style={{
                            background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                    {/* SOC 2 Badge */}
                    <div className="relative mb-8">
                        <div className="w-[192px] h-[192px] bg-cyan-400 rounded-full mx-auto flex items-center justify-center">
                            <img src={soc2} alt="" />
                        </div>
                        <div className="-mt-[130px] bg-[#082235] text-white px-[40px]  py-[18px] rounded-[8px] inline-block font-medium text-[24px]">
                            Certified
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-[#00AEEF] text-[23px] font-medium mb-6 leading-tight">
                        Independently Audited & Certified for Your Peace of Mind
                    </h2>

                    {/* Description */}
                    <p className="text-[16px] leading-relaxed max-w-xl mx-auto">
                        Our commitment to security and operational excellence is validated by our SOC 2 Type 2 certification. We
                        provide audit-ready documentation and support for major compliance frameworks, including HIPAA, PCI DSS, GDPR,
                        and CMMC.
                    </p>
                </div>
            </section >


            <JoinMissionSection
                title="Experience the Vijilan Difference Firsthand"
                highlightedText="Security"
                subtitle="Ready to see how our unique approach can transform your security posture or your MSP business? Schedule a call with one of our security strategists today"
                buttonText="SCHEDULE A STRATEGIC CALL"
            />
        </div >
    );
};

export default WhyVijilanPage;