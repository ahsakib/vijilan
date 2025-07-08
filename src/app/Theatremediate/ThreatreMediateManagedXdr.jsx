import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import { ArrowBigRight, ArrowRight, Search } from 'lucide-react';
import React from 'react';
import investigate from "../../Assets/Investigate.png";
import tech from "../../Assets/tech.png";
import eyes from "../../Assets/eyes.png";
import book from "../../Assets/book.png";
import shield from "../../Assets/sheildIcon.png";
import detect from "../../Assets/detect.png";
import like from "../../Assets/like.png";
import mana from "../../Assets/mana.png";
import sett from "../../Assets/sett.png";
import incres from "../../Assets/incres.png";
import CardBorder from '@components/CardBorder';
import Heading_Btn from '@components/Heading_Btn';
import CardContent from '@components/CardContent';
import { FaArrowRight } from 'react-icons/fa';

const steps = [
    {
        icon: investigate,
        title: "Too Many Alerts",
        description: "Overwhelming volume of\nsecurity notifications",
        iconBg: "bg-orange-400/20",
    },
    {
        icon: investigate,
        title: "Team Overwhelmed",
        description: "Internal resources stretched thin",
        iconBg: "bg-blue-400/20",
    },
    {
        icon: investigate,
        title: "False Positives",
        description: "Time wasted on non-threats",
        iconBg: "bg-purple-400/20",
    },
    {
        icon: investigate,
        title: "Real Threats Missed",
        description: "Critical incidents slip through",
        iconBg: "bg-red-400/20",
    },
]

const platformData = [
    {
        id: 1,
        title: "CrowdStrike Falcon",
        icon: sett,
        description:
            "The foundation of our service, providing best-in-class EDR, Cloud Security, and Identity Protection with AI-native threat detection.",
        badge: "K",
    },
    {
        id: 2,
        title: "Corelight NDR",
        icon: incres,
        description:
            "We integrate deep network visibility from Corelight to see threats that others miss, providing comprehensive network analysis and threat hunting capabilities.",
        badge: "K",
    },
    {
        id: 3,
        title: "CriblData Engine",
        icon: mana,
        description:
            "Our unique Cribl integration allows us to connect with hundreds of your existing tools, ensuring complete visibility across your entire security stack.",
        badge: "K",
    },
]

const features = [
    {
        id: 1,
        icon: shield,
        title: "Prepare & Prevent",
        description:
            "We build your playbooks, train teams, and implement preventive controls to stop incidents before they start.",
        height: "h-[390px]",
    },
    {
        id: 2,
        icon: detect,
        title: "Detect",
        description:
            "Our platform uses AI-powered detection across all vectors—endpoints, cloud, identity, and network—to identify threats in real-time.",
        height: "h-[300px]",
    },
    {
        id: 3,
        icon: tech,
        title: "Investigate",
        description:
            "Our 24/7 SOC analysts instantly investigate and confirm every potential threat, eliminating false positives so your team isn't disturbed.",
        height: "h-[434px]",
    },
    {
        id: 4,
        icon: like,
        title: "We Take Action",
        description:
            "Our SOC takes direct, hands-on action: isolating endpoints, disabling compromised accounts, blocking malicious processes, and actively neutralizing the threat.",
        height: "h-[335px]",
        mt: "-mt-[40px]",
    },
    {
        id: 5,
        icon: book,
        title: "Report & Harden",
        description:
            "We provide a full incident report detailing the attack, the actions taken, and expert recommendations to harden your defenses against future attacks.",
        height: "h-[405px]",
        mt: "-mt-[130px]",
    },
    {
        id: 6,
        icon: eyes,
        title: "Review & Refine",
        description:
            "Post-incident, we analyze outcomes and continuously improve your detection, response, and prevention capabilities for ever-increasing resilience.",
        height: "h-[420px]",
    },
];


const ThreatreMediateManagedXdr = () => {
    return (
        <div className='container mx-auto md:px-6 '>

            {/*  */}
            <section className=''>
                <Heading_Btn

                    h1="Beyond Detection: We Stop Breaches"
                    desc={"Vijilan's ThreatRemediate™ is a fully managed XDR service that doesn't just send\nalerts—our 24/7 expert SOC actively contains and remediates threats across your\nendpoints, cloud, and identity, powered by CrowdStrike."}
                    btn1="SEE THREATREMEDIATE IN ACTION (REQUEST DEMO)"
                    btn2="DOWNLOAD THE THREATREMEDIATE DATESHEET"
                />
            </section>

            {/*  */}
            <div className="py-16" >
                <div className="py-[95px] px-8 md:px-[65px] rounded-[24px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold text-white mb-3 leading-tight">
                            Stop Drowning in Alerts. Start Seeing <br /> Results.
                        </h1>
                        <p className="text-lg text-center leading-relaxed">
                            Traditional security services place the burden of remediation on your already strained internal <br /> IT team,
                            leading to slower responses and increased risk.
                        </p>
                    </div>

                    {/* Flow Diagram */}
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                {/* Card */}
                                <div className="w-[180px] h-[150px] relative backdrop-blur-sm rounded-lg px-[10px] py-[16px] flex flex-col items-center justify-center text-center">
                                    <div
                                        className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                        style={{
                                            background: `linear-gradient(0deg, #8C0909, #8C0909), linear-gradient(0deg, #ED1C24, #ED1C24)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <img src={step.icon} alt="" className="w-[50px] h-[50px] mb-2" />
                                    <h3 className="text-white font-medium text-[12px] mb-2">{step.title}</h3>
                                    <p className="whitespace-pre-line text-[12px] leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow - show only between cards */}
                                {index < steps.length - 1 && (
                                    <div className="flex items-center justify-center">
                                        {/* Vertical for mobile, horizontal for lg */}
                                        <div className="flex items-center justify-center">
                                            <FaArrowRight
                                                className="text-red-500 w-6 h-6 transform rotate-90 lg:rotate-0"
                                            />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>


            {/* Vijilan Advantage Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[40px] font-bold text-white">
                        Our Solution: The Full Security Lifecycle
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <div className="relative h-[390px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={shield} alt="" />
                        </div>
                        <h3 className="text-[24px] font-medium text-white mb-3">Prepare & Prevent</h3>
                        <p className="text-white text-[18px] text-center">
                            We build your playbooks, train teams, <br /> and implement preventive controls to <br /> stop incidents before they start
                        </p>
                    </div>

                    <div className="relative h-[300px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[90px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={detect} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Detect</h3>
                        <p className="text-white text-[18px] text-center">
                            Our platform uses AI-powered <br /> detection across all vectors— <br /> endpoints, cloud, identity, and network <br />—to identify threats in real-time.
                        </p>
                    </div>

                    <div className="relative h-[434px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[130px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={tech} alt="" />
                        </div>
                        <h3 className="text-[23px] font-bold text-white mb-3 text-center">Investigate</h3>
                        <p className="text-white text-[18px] text-center">
                            Our 24/7 SOC analysts instantly <br /> investigate and confirm every potential <br /> threat, eliminating false positives so <br /> your team isn't disturbed.
                        </p>
                    </div>

                    <div className="relative -mt-[40px] h-[335px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[156px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={like} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">We Take Action</h3>
                        <p className="text-white text-[18px] text-center">
                            Our SOC takes direct, hands-on action: <br /> isolating endpoints, disabling <br />compromised accounts, blocking <br /> malicious processes, and actively <br /> neutralizing the threat.
                        </p>
                    </div>

                    <div className="relative -mt-[130px] h-[405px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={book} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Report & Harden</h3>
                        <p className="text-white text-[18px] text-center">
                            We provide a full incident report <br /> detailing the attack, the actions taken, <br /> and expert recommendations to <br /> harden your defenses against future <br /> attacks.
                        </p>
                    </div>

                    <div className="relative h-[420px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[197px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={eyes} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Review & Refine</h3>
                        <p className="text-white text-center text-[14px]">
                            Post-incident, we analyze outcomes <br /> and continuously improve your <br />detection, response, and prevention <br /> capabilities for ever-increasing <br /> resilience.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold text-white mb-4">
                            Powered by an Elite, Integrated Platform
                        </h1>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platformData.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="relative bg-[#00AEEF3D] rounded-2xl p-8 ">
                                    <div
                                        className={`absolute inset-0 rounded-[16px] p-[2px] z-0 $`}
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    {/* Icon and Badge */}
                                    <div className="flex items-center justify-center mb-6 relative">
                                        <img src={item.icon} alt="" className='w-[57px] h-[57px]' />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl  font-medium text-white text-center mb-6">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-[16px] text-center leading-relaxed">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/*  */}
            <section className='container mx-auto px-6 py-16'>
                <div className='mb-10'>
                    <h1 className='text-3xl lg:text-[40px] font-bold text-center mb-6'>A Package for Every Need</h1>
                    <p className='text-[18px] text-center'>Choose the ThreatRemediate tier that matches your security requirements</p>
                </div>

                {/* card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center mx-auto'>
                    <div className='relative bg-[#00AEEF3D] rounded-[16px] p-10'>
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0`}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h1 className='text-[24px] font-medium text-center'>Core</h1>
                        <p className='text-[16px] text-center'>Essential EDR/XDR for <br /> comprehensive endpoint <br /> protection with 24/7 <br /> monitoring and active <br /> remediation.</p>
                    </div>
                    <div className='relative bg-[#00AEEF3D] rounded-[16px] p-10'>
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0`}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h1 className='text-[24px] font-medium text-center'>Complete</h1>
                        <p className='text-[16px] text-center'>Expands Core to include <br /> cloud workload security and <br /> foundational identity threat <br /> detection for hybrid <br /> environments.</p>
                    </div>
                    <div className='relative bg-[#00AEEF3D] rounded-[16px] p-10'>
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0`}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h1 className='text-[24px] font-medium text-center'>Unlimited</h1>
                        <p className='text-[16px] text-center'>Our most comprehensive <br /> offering, adding advanced <br /> Identity Protection and <br /> Managed Exposure <br /> Management.</p>
                    </div>

                </div>
                <div className='flex items-center justify-center mx-auto mt-10'>
                    <GradientButton children={"COMPARE TIERS AND RUN PRICING SCENERIOS"} />
                </div>

            </section>


            {/*  */}
            <div className="py-16" >

                {/* Main content */}
                <div className="p-5 md:p-10 rounded-[16px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <h1 className="text-white text-3xl  md:text-[40px] font-bold text-center mb-10">
                        Real-World Remediation in Action
                    </h1>
                    <div className="max-w-4xl w-full mx-auto">
                        {/* Card */}
                        <div className="bg-[#082235] border-t border-r border-b border-l-0 border-solid border-[#6BC063] backdrop-blur-sm rounded-[10px] py-[26px] ">

                            {/* Success story header with icon */}
                            <div className="text-center mb-6">
                                <h2 className=" text-[20px] text-bold" style={{color: "#6BC063"}}>
                                    Success Story: Ransomware Attack Stopped in Minutes
                                </h2>
                            </div>
                            {/* Quote content */}
                            <div className="">
                                <blockquote className="border-l-4 border-[#6BC063] text-white text-[20px] leading-relaxed mb-4 px-2 md:px-10">
                                    "The most dangerous attacks today don't look like attacks at all. <br /> They blend seamlessly into normal
                                    business operations, which is <br /> exactly what makes them so effective—and so challenging to <br /> defend
                                    against."
                                </blockquote>

                                {/* Attribution */}
                                <cite className=" text-[16px] px-2 md:px-10" style={{color: "#00AEEF"}}>
                                    — CTO, Mid-Market Logistics Company
                                </cite>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}
            <section className='container mx-auto px-6 pb-16'>

                <Heading_Btn
                    h1="Stop Reacting. Start Remediating."
                    desc={"See how our expert SOC team can become your hands-on defense against cyber\nthreats. Schedule a live, personalized demo of ThreatRemediate today."}
                    btn1="request a live  demo"
                />

            </section>
        </div>
    );
};

export default ThreatreMediateManagedXdr;