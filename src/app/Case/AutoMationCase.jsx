import CardBorder from "@components/CardBorder"
import Heading_Btn from "@components/Heading_Btn"
import TestimonialCard from "@components/TestimonialCard"
import { Calculator, Users, Building, Shield, Zap, Globe, Settings, Award, Play } from "lucide-react"
import enterprise from "../../Assets/enterprise.png";
import government from "../../Assets/governmet.png";
import growth from "../../Assets/growth.png";
import financial from "../../Assets/financial.png";
import technology from "../../Assets/tecnology.png";
import smb from "../../Assets/smb.png";
import menu from "../../Assets/manu.png";
import heathCare from "../../Assets/heathcare.png";
import InputSection from "@components/InputSection";
import SuccessCard from "@components/SuccessCard";


const categories = [
    { title: "MSP/VAR", desc: "Managed service provider seeking growth", icon: growth },
    { title: "Enterprise", desc: "Large organization needing security", icon: government },
    { title: "Manufacturing", desc: "Industrial/operational technology", icon: menu },
    { title: "Healthcare", desc: "Compliance-focused organization", icon: heathCare },
    { title: "Financial Services", desc: "Banks, credit unions, fintech", icon: financial },
    { title: "Government", desc: "Federal, state, local agencies", icon: enterprise },
    { title: "Technology", desc: "Software, SaaS, tech companies", icon: technology },
    { title: "SMB", desc: "Small to medium business", icon: smb },
];

const businessFields = [
    {
        label: "Business Type",
        placeholder: "Select Business Type",
        options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
    },
    {
        label: "Current Annual Revenue/MRR",
        placeholder: "Current Annual Revenue",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Number Of Clients/Endpoints",
        placeholder: "Number Of Clients",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Current Security Budget",
        placeholder: "Current Security Budget",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
];

const businessFields2 = [
    {
        label: "Primary Objective",
        placeholder: "Select Your main goal",
        options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
    },
    {
        label: "Target Timeframe",
        placeholder: "Select Timeframe",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Industry",
        placeholder: "Select Your Industry",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
];

export default function Component() {
    return (
        <div className="bg-transparent max-w-[90%] mx-auto">

            {/* Hero Section */}
            <section className="px-6 py-16 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-end h-full">
                        <div className="text-left h-full flex flex-col justify-end">
                            <h1 className="text-5xl font-bold mb-6">
                                Real-World Results,
                                <br />
                                Proven Success
                            </h1>
                            <p className="text-[22px] mb-8 font-bold">
                                Discover how MSPs grow their business and enterprises achieve resilient security posture. Calculate your potential success with our interactive tools.
                            </p>
                            <div className="flex space-x-4">
                                <button
                                    className="p-[16px] text-[11px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                                    style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                    }}>

                                    <span className='uppercase'>calculate your success</span>
                                    <div className="w-6 h-6  flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 16 16 12 12 8"></polyline>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </div>
                                </button>
                                <button
                                    className="p-[16px] text-[11px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3 bg-transparent"
                                    style={{
                                        border: '1px solid',
                                        borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                        borderImageSlice: 1,
                                        borderRadius: '8px',
                                    }}>
                                    <span className="uppercase">browse success stories</span>
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 16 16 12 12 8"></polyline>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* <Heading_Btn
                            h1="Real-World Results
                                Proven Success"
                            desc={`Discover how MSPs grow their business and enterprises achieve resilient security posture. Calculate your potential success with our interactive tools.`}
                            btn1={"Get Started Today"}
                            btn2={"Watch Success Stories"}
                        /> */}

                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and
                                    deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]}

                        >
                        </TestimonialCard>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-[40px] font-bold mb-3">Calculate Your Potential Success</h2>
                    <p className="text-white text-center text-[18px] mb-12">
                        Use our interactive calculator to estimate your potential results based on companies similar to <br /> yours.
                    </p>
                    <div className=" backdrop-blur-sm rounded-[24px] p-8" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                        <h3 className="text-[40px] font-bold text-center">Business Success Calculator</h3>
                        <p className="text-white text-center text-[18px] mb-10">Enter your details to see potential results based on similar client outcomes</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <InputSection title="Your Business Profile" fields={businessFields} />
                            <InputSection title="Your Goals" fields={businessFields2} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Organization Type Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-[40px] font-bold mb-3">Find Success Stories Like Yours</h2>
                    <p className="text-[18px] mb-12">
                        Discover how organizations similar to yours have achieved remarkable results
                    </p>

                    <div className="flex items-center justify-center" >
                        <div className="max-w-6xl w-full rounded-2xl p-10 text-white" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                            {/* Title */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-[40px] font-bold mb-3">What Best Describes Your Organization?</h2>
                                <p className="text-[18px]">
                                    Select your industry to see relevant success stories and outcomes
                                </p>
                            </div>

                            {/* Categories */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
                                {categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative bg-[#00AEEF3D] rounded-[10px] px-4 py-6 flex flex-col justify-center items-center space-y-1">
                                        <div
                                            className="absolute inset-0 rounded-[10px] p-[1px] z-0 h-full"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        <img src={item.icon} alt="" className="w-[40px] h-[40px]" />
                                        <h3 className="font-medium text-[15px]">{item.title}</h3>
                                        <p className="text-[11px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Highlight box */}
                            <div className="text-left mb-10">
                                <button className="bg-[#F36E21] text-white text-[10px] font-semibold px-[10px] py-[8px] rounded-[15px] mb-6">
                                    SMB SUCCESS
                                </button>
                                <h3 className="text-xl md:text-[30px] font-bold">Small Business Survives Ransomware Attack</h3>
                                <p className="text-[16px] mt-1">Quick response prevents data loss and downtime</p>
                            </div>

                            {/* Stats */}
                            <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row px-12 gap-10 mb-12">
                                <div>
                                    <h2 className="text-[37px] font-bold">0%</h2>
                                    <p className="text-[12px] text-white/70">DATA LOSS</p>
                                </div>
                                <div>
                                    <h2 className="text-[37px] font-bold">4 Hrs</h2>
                                    <p className="text-[12px] text-white/70">RECOVERY TIME</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="w-full max-w-2xl mx-auto border border-[#FFFFFF] text-center">
                                <button className=" text-white p-[16px] rounded-[6px] ">
                                    READ THE FULL STORY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-3">All Success Stories</h2>
                    <p className="text-[18px] text-center text-white mb-12">Browse our complete collection of client success stories and measurable business results.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />
                        <TestimonialCard
                            badgeText={"MS PARTNER SUCCESS"}
                            heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                            description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                            stats={[
                                { value: "99.9%", label: "Uptime Maintained" },
                                { value: "30%", label: "MRR Growth" },
                            ]} />

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="">
                    <div
                        className="backdrop-blur-sm px-16 py-16"
                        style={{
                            borderRadius: '22.184px',
                            background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                        }}>
                        <blockquote className="text-white text-center text-[20px] leading-relaxed mb-6">
                            "Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with <br /> Cribl and provide active remediation has freed up my internal resources to focus on bigger picture <br /> risks. It's a true force multiplier."
                        </blockquote>
                        <div className="text-center bg-[linear-gradient(90deg,_#F89B29_0%,_#FF0F7B_186.51%)] bg-clip-text text-transparent text-[20px]">
                            — CISO, Manufacturing Firm
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Scale Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    <SuccessCard
                        showIcon
                        iconText="JN"
                        subheading="JEN AI"
                        description={`"I can help you find case studies similar to your \nbusiness, calculate potential ROI, and connect \nyou with relevant success stories. What would \nyou like to explore?"`}
                        buttonText="Find my success story"
                        bgColor="#00AEEF3D"
                    />
                    <SuccessCard
                        heading={`Ready to Write Your Own \nSuccess Story?`}
                        description={`Let's discuss how Vijilan's services can help you \nachieve the security outcomes and business \ngrowth you're looking for.`}
                        buttonText="Schedule a consultation"
                        isOutlineButton
                        outlineButtonText="Download success kit"
                        bgColor="transparent"
                    />
                </div>
            </section>
        </div >
    )
}
