
import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import { Plus } from 'lucide-react';
import React from 'react';
import clipboard from "../../Assets/Clipboard Approve.png";
import rocket from "../../Assets/Rocket.png";
import graph from "../../Assets/Graph Report.png";
import lock from "../../Assets/lock.png";
import task from "../../Assets/task-check.png";
import rocketIcon from "../../Assets/rocketIcon.png";
import sheildIcon from "../../Assets/sheildIcon.png";
import timeIcon from "../../Assets/timeIcon.png";
import chaiIcon from "../../Assets/chain-icons.png";
import man1 from "../../Assets/man1.png";
import man2 from "../../Assets/man2.png";
import man3 from "../../Assets/man3.png";
import backgroundPattern from "../../Assets/Background pattern.png";
import { Check } from "lucide-react"


const CardContentData = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};

const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};

const testimonials = [
    {
        quote:
            "Vijilan transformed our security posture overnight. We went from zero cybersecurity revenue to $45K MRR in just six months. Their SOC team feels like an extension of our own staff.",
        name: "Mike Rodriguez",
        title: "CEO, TechDefend Solutions",
        avatar: man1,
    },
    {
        quote:
            "The white-label approach is perfect. Our clients see our brand throughout the entire experience. Vijilan delivers enterprise-grade security that we could never build in-house.",
        name: "Sarah Johnson",
        title: "Partner, SecureIT Group",
        avatar: man2,
    },
    {
        quote:
            "No minimums, no long-term contracts, no BS. Vijilan keeps it simple while delivering incredible results. Our clients are happier and more secure than ever.",
        name: "David Kim",
        title: "Founder, CyberGuard Pro",
        avatar: man3,
    },
]

const features = [
    "Annual Revenue Requirement",
    "ThreatRemediate™ Access",
    "ThreatRespond™ Access",
    "White-Label Branding",
    "Partner Portal Access",
    "Sales Enablement Kit",
    "Dedicated Account Manager",
    "Custom Proposal Generator",
    "PSA Integration",
    "Marketing Development Funds",
    "Executive Business Reviews",
    "CEO Circle",
]

const tiers = {
    bronze: {
        name: "Bronze",
        revenue: "$0 - $2M",
        features: ["$0 - $2M",true, true, true, true, true, true, true, true, false, false, false],
    },
    silver: {
        name: "Silver",
        revenue: "$2M - $10M",
        features: ["$2M - $10M",true, true, true, true, true, true, true, true, false, false, false],
    },
    gold: {
        name: "Gold",
        revenue: "$10M+",
        features: ["$10M+",true, true, true, true, true, true, true, true, true, true, true],
    },
}


const MspPartnerProgramAi = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative z-10 px-6 py-20 text-center">
                <div className="max-w-7xl mx-auto text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Transform Your MSP with Elite <br /> Cybersecurity
                    </h1>
                    <p className="text-[18px] mb-8 max-w-5xl font-bold mx-auto">
                        No minimums, no complexity, no high startup costs.
                    </p>
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex text-[#FBBC09]">
                            {"★★★★★".split("").map((star, i) => (
                                <span key={i} className="text-[18px]">
                                    {star}
                                </span>
                            ))}
                        </div>
                        <p className="ml-2 text-yellow-400 font-4xl"> ★★★★★ | Trusted by over 500 MSPs worldwide</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <GradientButton children={"APPLY TO BECOME A PARTNER"} />
                        <OutlineGradientButton children={"DOWNLOAD PARTNER KIT"} />

                    </div>
                </div>
            </section >

            {/* Go-to-Market Section */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[40px] font-bold text-center mb-10 text-white">Go-to-Market in Days not Months</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card
                            className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
                             linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}
                        >
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0 relative z-10">
                                <div className="flex items-center gap-5 mb-4">
                                    <img src={clipboard} alt="" className="w-[40px] h-[50px]" />
                                    <span className="text-[#00AEEF] text-[18px]">1. Apply Online</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Our simple, no-obligation application takes less than 5 minutes to complete.
                                </p>
                            </CardContentData>
                        </Card>

                        <Card className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}>
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4 gap-5">
                                    <img src={rocket} alt="" className="w-[34px] h-[40px]" />

                                    <span className="text-[#00AEEF] text-[18px]">2. Fast Onboarding</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Get access to our partner portal, training, and sales materials within 24 hours.
                                </p>
                            </CardContentData>
                        </Card>
                        <Card className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}>
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4 gap-5">
                                    <img src={graph} alt="" className="w-[36px] h-[50px] " />

                                    <span className="text-[#00AEEF] text-[18px]">3. Start Selling</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Use our comprehensive sales enablement kit to close your first deal this week.
                                </p>
                            </CardContentData>
                        </Card>
                    </div>
                </div>
            </section >


            {/* Vijilan Advantage Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-white mb-4">
                        Why MSPs Choose Vijilan
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 1st */}
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
                            <img src={lock} alt="" />
                        </div>
                        <h3 className="text-[24px] font-medium text-white mb-3">Unlock New MRR</h3>
                        <p className="text-white text-[18px] text-center">
                            Add high-margin security services to <br /> your portfolio. Our model is built to <br /> maximize your Monthly Recurring <br /> Revenue and profitability
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
                            <img src={timeIcon} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Your Instant 24/7 SOC</h3>
                        <p className="text-white text-[18px] text-center">
                            Gain an immediate, SOC 2 Type 2 <br /> certified Security Operations Center <br /> without the overhead. Our experts <br /> become an extension of your team
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
                            <img src={rocketIcon} alt="" />
                        </div>
                        <h3 className="text-[23px] font-bold text-white mb-3 text-center">Go-to-Market Enablement</h3>
                        <p className="text-white text-[18px] text-center">
                            Access our comprehensive <br /> ThreatRemediate™ Enablement Kit <br /> with co-brandable materials, sales <br /> decks, and proposal generators to win <br /> more deals.
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
                            <img src={sheildIcon} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Radical Flexibility & No Risk</h3>
                        <p className="text-white text-[18px] text-center">
                            Benefit from our channel-first <br /> approach with no minimum <br /> commitments, full white-labeling, and a <br /> 30-day risk-free opt-out trial.
                        </p>
                    </div>
                    {/* 5th */}
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
                            <img src={task} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Simplified Compliance</h3>
                        <p className="text-white text-[18px] text-center">
                            Effortlessly support your clients' <br /> compliance requirements, including <br />HIPAA, GDPR, PCI DSS, and CMMC. <br /> Vijilan provides detailed reporting, <br /> audit-ready documentation, and <br /> compliance expertise—reducing your <br /> workload and minimizing regulatory <br /> risks.
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
                            <img src={chaiIcon} alt="" />
                        </div>
                        <h3 className="text-[23px] font-bold text-white mb-3">Vendor-Agnostic Integration</h3>
                        <p className="text-white text-center text-[14px]">
                            Seamlessly integrate with your clients' <br /> existing security tools and <br />infrastructure. Vijilan supports <br /> extensive integrations across firewalls, <br /> endpoints, cloud platforms, and <br /> identity solutions, giving you <br /> unmatched flexibility without vendor <br /> lock-in.
                        </p>
                    </div>
                </div>
            </section>



            <div className="relative overflow-hidden">

                <div className=" container mx-auto px-6 py-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-[40px] font-bold text-white mb-3 leading-tight">
                            A Partnership Tier for Every Stage of
                            <br />
                            Your Growth
                        </h1>
                        <p className="text-white text-[20px]">
                            Our program is designed to meet you where you are and help you scale your security offerings <br /> profitably.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Comparison Table */}
                            <div className="overflow-hidden">
                                {/* Table Header */}
                                <div className="grid grid-cols-4 border-b border-[#F5F5F5]">
                                    <div className="py-2 text-white font-medium text-[13px]">Features & Benefits</div>
                                    <div className="py-2 text-white text-center font-medium text-[13px]">
                                        <div className="text-white font-semibold mb-1">Bronze</div>
                                        {/* <div className="text-gray-300 text-sm">$0 - $2M</div> */}
                                    </div>
                                    <div className="py-2 text-white text-center font-medium text-[13px]">
                                        <div className="text-white font-semibold mb-1">Silver</div>
                                        {/* <div className="text-gray-300 text-sm">$2M - $10M</div> */}
                                    </div>
                                    <div className="py-2 text-white text-center font-medium text-[13px]">
                                        <div className="text-white font-semibold mb-1">Gold</div>
                                        {/* <div className="text-gray-300 text-sm">$10M+</div> */}
                                    </div>
                                </div>

                                {/* Table Body */}
                                <div className="divide-y divide-[#F5F5F5]">
                                    {features.map((feature, index) => (
                                        <div key={feature} className="grid grid-cols-4">
                                            <div className="py-3 text-[#F5F5F5] text-[9px]">{feature}</div>
                                            {/* Bronze */}
                                            <div className="py-3 flex justify-center items-center text-[10px] text-white">
                                                {typeof tiers.bronze.features[index] === "string"
                                                    ? tiers.bronze.features[index]
                                                    : tiers.bronze.features[index] && (
                                                        <div className="w-3 h-3 rounded-full bg-cyan-500 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-white" />
                                                        </div>
                                                    )}
                                            </div>

                                            {/* Silver */}
                                            <div className="py-3 flex justify-center items-center text-[10px] text-white">
                                                {typeof tiers.silver.features[index] === "string"
                                                    ? tiers.silver.features[index]
                                                    : tiers.silver.features[index] && (
                                                        <div className="w-3 h-3 rounded-full bg-cyan-500 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-white" />
                                                        </div>
                                                    )}
                                            </div>

                                            {/* Gold */}
                                            <div className="py-3 flex justify-center items-center text-[10px] text-white">
                                                {typeof tiers.gold.features[index] === "string"
                                                    ? tiers.gold.features[index]
                                                    : tiers.gold.features[index] && (
                                                        <div className="w-3 h-3 rounded-full bg-cyan-500 flex items-center justify-center">
                                                            <Check className="w-3 h-3 text-white" />
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Chat Widget */}
                        <div className="lg:w-96">
                            <div className="relative rounded-[24px] p-6 ">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Online Status */}
                                <div className="flex items-center justify-center mb-6">
                                    <div className="flex items-center gap-2 bg-[#6BC06329] text-[#567C53] px-3 py-1 rounded-full text-[11px] font-semibold">
                                        <div className="w-2 h-2 bg-[#6BC06329] text-[#567C53] rounded-full"></div>
                                        Online Now
                                    </div>
                                </div>

                                {/* Avatar */}
                                <div className="flex justify-center mb-2">
                                    <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-white font-bold text-xl" style={{
                                        background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)), linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`
                                    }}>
                                        JN
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-[20px] font-bold text-center mb-4">Ask Your AI Partner Guide</h3>

                                {/* Description */}
                                <p className="text-white text-[16px] text-center mb-6 leading-relaxed">
                                    Hi, I'm Jen AI! Choosing the right partner tier is an important step. I can walk you through the
                                    benefits of Bronze, Silver, and Gold to help you find the perfect fit for your MSP's growth stage.
                                </p>

                                {/* CTA Button */}
                                <button className="w-full text-white font-medium py-[16px] px-[24px] rounded-[8px] text-[18px] " style={{ background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)" }}>
                                    START A CHAT
                                </button>

                                {/* Footer Text */}
                                <p className=" text-[16px] text-center mt-4">Available 24/7 • Instant responses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-[40px] font-bold text-white text-center mb-12">What Our Partners Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative bg-[#00AEEF3D] p-8 rounded-[24px]"
                            >
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                <blockquote className="text-white text-[20px] font-medium leading-relaxed mb-8">"{testimonial.quote}"</blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={60}
                                            height={60}
                                            className="rounded-full border-2 border-white/20"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-[20px]">{testimonial.name}</div>
                                        <div className="text-[#00AEEF] font-bold text-[13px]">{testimonial.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-[40px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "What are the requirements to become a Vijilan partner?",
                            "What are the requirements to become a Vijilan partner?",
                            "What are the requirements to become a Vijilan partner?",
                            "What are the requirements to become a Vijilan partner?",
                            "What are the requirements to become a Vijilan partner?",
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


            {/* end */}
            <section className='container mx-auto px-6 py-16 ' style={{
                backgroundImage: `url(${backgroundPattern})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',

            }}>
                <div className='space-y-12'>
                    <h1 className='text-[40px] font-bold text-center'>Ready to Transform Your MSP?</h1>
                    <p className='text-[18px] font-medium text-center'>Join over 500 MSPs who've already discovered the Vijilan advantage. Apply now and <br /> start growing your security practice today.</p>
                    <div className='flex items-center justify-center gap-5 '>
                        <GradientButton children={"APPLY TO BECOME A PARTNER"} />
                        <OutlineGradientButton children={"DOWNLOAD PARTNER KIT"} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MspPartnerProgramAi;