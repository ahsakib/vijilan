import GradientButton from "@components/GradientButton"
import Heading_Btn from "@components/Heading_Btn"
import OutlineGradientButton from "@components/OutlineGradientButton"
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";

// Custom Badge Component
const Badge = ({ children, className = "", ...props }) => {
    return (
        <div
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

const TestimonialCard = ({
    badgeText,
    heading,
    description,
    stats = [],
    buttonText = "READ THE FULL STORY",
    onButtonClick,
    badgeBg,
    url,
}) => {
    const Badge = ({ children, className = "", ...props }) => {
        return (
            <div
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
                {...props}
            >
                {children}
            </div>
        )
    }
    return (
        <div
            className="p-8 rounded-[22px] backdrop-blur-sm"
            style={{

                background: "linear-gradient(0deg, #191624 16.11%, #00AEEF 328.5%)",

            }}
        >
            <Badge className={`text-[10px] font-semibold text-white  px-[7px] py-[8px]`}   style={{ backgroundColor: badgeBg }}
            >
                {badgeText}
            </Badge>

            <div className="px-4">
                <h3 className="text-xl md:text-[30px] font-bold text-white mb-6 mt-4 leading-tight">
                    {heading}
                </h3>

                <p className="text-white text-[15px] text-base leading-relaxed">{description}</p>

                <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-5 justify-center  mb-10">
                    {stats.map((stat, index) => (
                        <CardBorder key={index} height="130px" width="100%">
                            <div className="text-center mx-auto">
                                <div className="text-white text-[36px] font-medium mb-2">{stat.value}</div>
                                <div className="text-[#E6F7FD] text-[10px] font-medium">{stat.label}</div>
                            </div>
                        </CardBorder>
                    ))}
                </div>
            </div>
            <Link to={url} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="border border-white hover:bg-white/10 bg-transparent w-fit text-center mx-auto rounded-[6px] transition-all duration-300">
                <button
                    onClick={onButtonClick}
                    className=" p-[16px] text-[14px] font-medium  flex items-center gap-2 text-white"
                >
                    {buttonText}
                    <div className="w-3 h-3 border rounded-full flex items-center justify-center">
                        <ArrowRight className="h-2 w-2 text-white" />
                    </div>
                </button>
            </div>
            </Link>
        </div>
    );
};



const CardBorder = ({
    height = "171px",
    width = "166px",
    children,
    borderSize,
    radiusSize,
    topBottomBorderOnly = false  // New prop to enable top/bottom-only borders
}) => {
    return (
        <div className={`mt-12 relative ${topBottomBorderOnly ? 'w-full' : ''}`}>
            {/* Main container - background remains #00AEEF3D */}
            <div
                className={`relative bg-[#00AEEF3D] ${topBottomBorderOnly ? 'rounded-none' : 'rounded-[26px]'} w-full flex items-center justify-center ${borderSize ? "rounded-[16px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
                style={{
                    height,
                    maxWidth: width,
                    position: 'relative',
                    overflow: 'hidden' // Ensures pseudo-elements are contained
                }}
            >
                {/* Top border gradient (matches original color) */}
                {topBottomBorderOnly && (
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,174,239,0) 0%, #00AEEF 50%, rgba(0,174,239,0) 100%)'
                        }}
                    />
                )}

                {/* Bottom border gradient (matches original color) */}
                {topBottomBorderOnly && (
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,174,239,0) 0%, #00AEEF 50%, rgba(0,174,239,0) 100%)'
                        }}
                    />
                )}

                {/* Original full border (for non-special cases) */}
                {!topBottomBorderOnly && (
                    <div
                        className={`absolute inset-0 rounded-[26px] p-[2px] z-0 ${borderSize ? "rounded-[16px] p-[1px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
                        style={{
                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                )}

                {/* Content container */}
                <div className="z-10 w-full px-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

const testimonialData = [
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#BCBEC0",
        heading: "VAR Achieves 2x Attach Rate & 40% Margin Growth",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/var-success-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F4CE41",
        heading: "Manufacturing Firm Secures OT Assets and Ensures 99.9%",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/resilience-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "Federal Contractor Achieves CMMC 2.0 Readiness in 6 Weeks",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/federal-cmmc-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F4CE41",  
        heading: "Regional Bank Achieves Zero Audit Findings",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/financial-complianc-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "MSSP Achieves 40% SIEM Cost Reduction and 3x Faster",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/msp-ogscale-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "MSP Achieves 30% MRR Growth with ThreatRemediate",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/msp-growth-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "SMB Ransomware Recovery: From Active Attack",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/smb-runsomware-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#00EF14",
        heading: "Healthcare System Achieves HIPAA Success and 3x Faster",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/health-compliance"
    },
];


export default function CaseStudiesPage() {
    const [selectedIndustry, setSelectedIndustry] = useState("");

    return (
        <>
            {/* Hero Section */}
            <section className="py-12 md:py-14">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Real-World Results, Proven Success
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover how our clients have achieved remarkable growth and transformed their businesses with our proven
                        strategies and innovative solutions.
                    </p>

                    {/* Stats - Improved Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-3 mb-12 max-w-4xl mx-auto">
                        <CardBorder height="171px" width="100%">
                            <div>
                                <div className="text-white text-3xl md:text-4xl font-bold mb-2">30%</div>
                                <div className="text-slate-300 text-xs md:text-sm font-medium">
                                    Average MRR Growth
                                    <br />
                                    for MSP Partners
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="100%">
                            <div>
                                <div className="text-white text-3xl md:text-4xl font-bold mb-2">40%</div>
                                <div className="text-slate-300 text-xs md:text-sm font-medium">
                                    Reduction in
                                    <br />
                                    SIEM Costs
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="100%">
                            <div>
                                <div className="text-white text-3xl md:text-4xl font-bold mb-2">60%</div>
                                <div className="text-slate-300 text-xs md:text-sm font-medium">
                                    Faster Threat
                                    <br />
                                    Detection
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="100%">
                            <div>
                                <div className="text-white text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                                <div className="text-slate-300 text-xs md:text-sm font-medium">
                                    Uptime
                                    <br />
                                    Maintained
                                </div>
                            </div>
                        </CardBorder>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <GradientButton className="">EXPLORE SUCCESS STORIES</GradientButton>
                        <OutlineGradientButton icon={false}>CALCULATE YOUR ROI</OutlineGradientButton>
                    </div>

                    {/* Lead Form */}
                    <div className="max-w-full">
                        
                        <CardBorder height="auto" width="100%" topBottomBorderOnly={true}>
                            <div className="md:ml-35">

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-6 py-4 md:py-6 md:h-[150px] justify-center items-center mx-auto">
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <label htmlFor="industries" className="text-white text-sm md:text-[14px] font-medium text-left">
                                            Filter by Industries
                                        </label>
                                        <select
                                            id="industries"
                                            className="p-2 md:p-5 rounded-lg md:rounded-[16px] text-sm md:text-[14px] bg-white border-none focus:outline-none focus:ring-1 focus:ring-blue-500 " style={{color: "black"}}>
                                            <option value="" className="text-black">
                                                All Industries
                                            </option>
                                            <option value="1" className="!text-black">Technology</option>
                                            <option value="2" className="!text-black">Healthcare</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="services" className="text-white text-sm md:text-[14px] font-medium text-left">
                                            Filter by Service
                                        </label>
                                        <select
                                            id="services"
                                            className="p-2 md:p-5 rounded-lg md:rounded-[16px] text-sm md:text-[14px] bg-white border-none focus:outline-none focus:ring-1 focus:ring-blue-500" style={{color: "black"}}
                                            defaultValue="">
                                            <option value="" disabled className="text-gray-500">
                                                All Services
                                            </option>
                                            <option value="1" className="!text-black">Threat Detection</option>
                                            <option value="2" className="!text-black">Incident Response</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="results" className="text-white text-sm md:text-[14px] font-medium text-left">
                                            Filter by Result Type
                                        </label>
                                        <select
                                            id="results"
                                            className="p-2 md:p-5 rounded-lg md:rounded-[16px] text-sm md:text-[14px] bg-white border-none focus:outline-none focus:ring-1 focus:ring-blue-500" style={{color: "black"}}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-gray-500">
                                                All Results
                                            </option>
                                            <option value="1" className="!text-black">Cost Savings</option>
                                            <option value="2" className="!text-black">Revenue Growth</option>
                                        </select>
                                    </div>
                                    <div className="flex items-end md:mt-5">
                                        <OutlineGradientButton className="w-full">CLEAR ALL FILTERS</OutlineGradientButton>
                                    </div>
                                </div>
                            </div>
                        </CardBorder>
                    </div>
                </div>
            </section>

            <div className="max-w-[90%] lg:max-w-[85%] xl:max-w-[1200px] mx-auto  sm:px-6">
                {/* Featured Case Study */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto">
                        <div
                            className="backdrop-blur-md rounded-2xl md:rounded-[24px] py-8 md:py-16 px-2 md:px-16 max-w-6xl mx-auto shadow-xl border border-[#00AEEF]/40"
                            style={{
                                background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                            }}
                        >
                            <div className="text-left ml-7">
                                <Badge className="bg-[#F36E21] border-none text-xs md:text-[12px] text-center font-semibold text-white px-4 py-2 md:px-[9px] md:py-[8px]">
                                    MS PARTNER SUCCESS
                                </Badge>
                            </div>

                            <div className="mt-8 md:mt-10 mx-5 md:mx-7 relative">
                                <div className="relative bg-[#00AEEF3D] rounded-2xl md:rounded-[24px] overflow-hidden p-1 md:p-2 flex items-center justify-center">
                                    {/* Gradient Border Overlay */}
                                    <div
                                        className="absolute inset-0 rounded-2xl md:rounded-[26px] p-[2px] z-0"
                                        style={{
                                            background:
                                                "linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)",
                                            WebkitMask:
                                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />

                                    {/* Main Content */}
                                    <div className="z-10 text-left px-2 md:px-10 py-6 md:py-12 w-full">
                                        <h3 className="text-xl md:text-2xl lg:text-[22px] font-bold text-white mb-4 md:mb-6 leading-tight">
                                            How a Gold Tier MSP Increased MRR by 30% with ThreatRemediate
                                        </h3>
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mx-auto">
                                            Discover how a Gold Tier MSP partner leveraged Vijilan's flagship
                                            ThreatRemediate service to expand their security offerings,
                                            increase monthly recurring revenue, and deliver hands-off
                                            cybersecurity to their clients while reducing operational
                                            overhead.
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-8 md:my-10">
                                            {[
                                                { value: "30%", label: "Increase in Security MRR" },
                                                { value: "50%", label: "Reduction in Alert Fatigue" },
                                                { value: "95%", label: "Client Retention Rate" },
                                                { value: "6 wks", label: "Implementation Time" },
                                            ].map((stat, index) => (
                                                <CardBorder key={index} height="150px" width="100%">
                                                    <div className="text-center">
                                                        <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                                                            {stat.value}
                                                        </div>
                                                        <div className="text-[#E6F7FD] text-xs leading-tight">
                                                            {stat.label}
                                                        </div>
                                                    </div>
                                                </CardBorder>
                                            ))}
                                        </div>

                                        <div className="">
                                            <OutlineGradientButton children={"READ THE FULL CASE STUDY"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories Grid */}
                <section className="py-12 md:py-16 bg-transparent relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="text-center mb-8 md:mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                                Success Stories Across Industries
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                                Browse our comprehensive collection of client success stories and measurable business results across
                                diverse industries and use cases.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                        {testimonialData.map((item, index) => (
                                <TestimonialCard
                                    key={index}
                                    badgeText={item.badgeText}
                                    heading={item.heading}
                                    description={item.description}
                                    stats={item.stats}
                                    url={item.url}
                                    badgeBg={item.badgeBg}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Client Testimonials */}
                <section className="py-12 md:py-16 bg-transparent">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                                What Our Clients Say
                            </h2>
                            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                                Real feedback from security leaders who've transformed their operations with Vijilan
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    quote: "Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with Cribl and provide active remediation has freed up my internal resources to focus on bigger picture risks. It's a true force multiplier.",
                                    author: "Sarah Johnson",
                                    title: "CISO, Manufacturing Firm",
                                },
                                {
                                    quote: "When we were hit by ransomware at 2 AM, Vijilan's ThreatRemediate team was on it immediately. Their swift action isolated the threat, prevented it from spreading to our critical systems, and saved us countless hours of downtime.",
                                    author: "Michael Chen",
                                    title: "IT Director, Regional Healthcare System",
                                },
                                {
                                    quote: "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                    author: "Emily Rodriguez",
                                    title: "CTO, Mid-Market Logistics Company",
                                },
                                {
                                    quote: "The transition to Vijilan's platform was seamless, and their team provided exceptional support throughout the onboarding process. We saw immediate improvements in our threat detection capabilities.",
                                    author: "David Kim",
                                    title: "Security Manager, Financial Services",
                                },
                                {
                                    quote: "As an MSP, Vijilan has allowed us to offer enterprise-grade security services to our clients without the need for additional headcount. Their platform is a game-changer for our business model.",
                                    author: "Lisa Thompson",
                                    title: "CEO, Managed Services Provider",
                                },
                                {
                                    quote: "The cost savings from switching to Vijilan were substantial, but what really impressed us was the improvement in our security posture. We're detecting and responding to threats faster than ever before.",
                                    author: "James Wilson",
                                    title: "Director of IT, Education Sector",
                                },
                                {
                                    quote: "The cost savings from switching to Vijilan were substantial, but what really impressed us was the improvement in our security posture. We're detecting and responding to threats faster than ever before.",
                                    author: "James Wilson",
                                    title: "Director of IT, Education Sector",
                                },
                                {
                                    quote: "The cost savings from switching to Vijilan were substantial, but what really impressed us was the improvement in our security posture. We're detecting and responding to threats faster than ever before.",
                                    author: "James Wilson",
                                    title: "Director of IT, Education Sector",
                                },
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-sm p-12 text-center rounded-xl md:rounded-2xl h-[380px]"
                                    style={{
                                        background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                                    }}
                                >
                                    <blockquote className="text-white text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div
                                        className="text-center text-xl font-bold"
                                        style={{
                                            background: 'linear-gradient(to right, #F89B29, #FF0F7B)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            MozBackgroundClip: 'text',
                                            MozTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        — {testimonial.author}, {testimonial.title}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI Calculator */}
                <section className="py-12 md:py-16">
                    <div className="relative container mx-auto bg-[#00AEEF3D] rounded-xl md:rounded-2xl overflow-hidden">
                        <div
                            className="absolute inset-0 p-[2px] z-0 rounded-xl md:rounded-2xl"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div>
                            <div className="py-20 px-20 md:py-12 md:px-12">
                                <div className="text-center mb-8 md:mb-10">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                                        Calculate Your Potential ROI
                                    </h2>
                                    <p className="text-white font-medium text-base md:text-lg">
                                        See how much you could save and grow with Vijilan's cybersecurity solutions
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <label htmlFor="businessType" className="text-white text-sm md:text-[14px] text-left">
                                            Business Type
                                        </label>
                                        <select
                                            id="businessType"
                                            className="p-2 md:p-3 rounded-lg text-sm md:text-[14px] bg-white border  focus:outline-none focus:border-[#6246EA]" style={{color: "black"}}
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="" style={{color: "black"}}>
                                                Select Business Type
                                            </option>
                                            <option value="msp" className="text-black" style={{color: "black"}}>Managed Service Provider</option>
                                            <option value="enterprise" className="text-black" style={{color: "black"}}>Enterprise</option>
                                        </select>
                                    </div>
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <label className="text-white text-sm md:text-[14px] text-left">Current Annual Revenue</label>
                                        <input
                                            placeholder="100000"
                                            className="p-2 md:p-3 rounded-lg text-sm md:text-[14px] bg-white border focus:outline-none focus:border-[#6246EA]"
                                            type="number"  style={{color: "black"}}
                                        />
                                    </div>
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <label className="text-white text-sm md:text-[14px] text-left">Annual Security Budget</label>
                                        <input
                                            placeholder="100000"
                                            className="p-2 md:p-3 rounded-lg text-sm md:text-[14px] bg-white border  focus:outline-none focus:border-[#6246EA]"
                                            type="number"  style={{color: "black"}}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="relative z-10 flex flex-col gap-1">
                                        <label className="text-white text-sm md:text-[14px] text-left">Number Of Employees</label>
                                        <input
                                            placeholder="100"
                                            className="p-2 md:p-3 rounded-lg text-sm md:text-[14px] bg-white border  focus:outline-none focus:border-[#6246EA]"
                                            type="number" style={{color: "black"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-12 md:py-16">
                    <Heading_Btn
                        h1={"Ready to Write Your Own Success Story?"}
                        desc={`Join hundreds of organizations that have transformed their security posture and achieved\nmeasurable business results with Vijilan's comprehensive cybersecurity solutions.`}
                        btn1={"Get Started Today"}
                        btn2={"Get a Free Consultation"}
                        isSmallHeading={true}
                    />
                </section>
            </div>
        </>

    )
}