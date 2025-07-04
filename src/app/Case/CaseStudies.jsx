import CardBorder from "@components/CardBorder"
import GradientButton from "@components/GradientButton"
import Heading_Btn from "@components/Heading_Btn"
import OutlineGradientButton from "@components/OutlineGradientButton"
import SmallCard from "@components/SmallCard"
import TestimonialCard from "@components/TestimonialCard"
import { Star, ArrowRight, Menu, Play } from "lucide-react"

// Custom Button Component
const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    }

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

// Custom Input Component
const Input = ({ className = "", ...props }) => {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
    )
}

// Custom Card Components
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
            {children}
        </div>
    )
}

const CardContent = ({ children, className = "", ...props }) => {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

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

export default function CaseStudiesPage() {
    return (
        <div className="">

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className=" text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Real-World Results, Proven Success</h1>
                    <p className="text-[18px] text-white max-w-3xl mx-auto">
                        Discover how our clients have achieved remarkable growth and transformed their businesses with our proven
                        strategies and innovative solutions.
                    </p>

                    {/* Stats - Improved Grid */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">

                        <CardBorder height="171px" width="166px">
                            <div>
                                <div className="text-white text-[32px] font-bold mb-2">30%</div>
                                <div className="text-slate-300 text-sm font-medium"> Average MRR
                                    <br />
                                    Growth for MSP
                                    <br />
                                    Partners</div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div>
                                <div className="text-white text-[32px] font-bold mb-2">40%</div>
                                <div className="text-slate-300 text-sm font-medium">
                                    Reduction in
                                    <br />
                                    SIEM Costs
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div>
                                <div className="text-white text-[32px] font-bold mb-2">60%</div>
                                <div className="text-slate-300 text-sm font-medium">
                                    Faster Threat
                                    <br />
                                    Detection
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div>
                                <div className="text-white text-[32px] font-bold mb-2">99.9%</div>
                                <div className="text-slate-300 text-sm font-medium">Uptime Maintained</div>
                            </div>
                        </CardBorder>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <GradientButton children={"EXPLORE SUCCESS STORIES"} />
                        <OutlineGradientButton children={"CALCULATE YOUR ROI"} />
                    </div>

                    {/* Lead Form */}
                    <CardBorder height={"130px"} width="1440px">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="endpoints" className="text-white text-[14px] font-medium text-left">
                                    Filter by Industries
                                </label>
                                <select
                                    id="endpoints"
                                    className="p-3 rounded-[16px] text-[14px] bg-[#FFFFFE] border border-none focus:outline-none focus:ring-1 " defaultValue="">
                                    <option value="" disabled className="text-black">
                                        All Industries
                                    </option>
                                    <option value="1" className="text-black">1</option>
                                    <option value="1" className="text-black">1</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="endpoints" className="text-white text-[14px] font-medium text-left">
                                    Filter by Service
                                </label>
                                <select
                                    id="endpoints"
                                    className="p-3 rounded-[16px] text-[14px] bg-[#FFFFFE] border border-none focus:outline-none focus:ring-1 " defaultValue="">
                                    <option value="" disabled className="text-black">
                                        All Services
                                    </option>
                                    <option value="1" className="text-black">1</option>
                                    <option value="1" className="text-black">1</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="endpoints" className="text-white text-[14px] font-medium text-left">
                                    Filter by Result Type
                                </label>
                                <select
                                    id="endpoints"
                                    className="p-3 rounded-[16px] text-[14px] bg-[#FFFFFE] border border-none focus:outline-none focus:ring-1 " defaultValue="">
                                    <option value="" disabled className="text-black">
                                        All Results
                                    </option>
                                    <option value="1" className="text-black">1</option>
                                    <option value="1" className="text-black">1</option>
                                </select>
                            </div>
                            <OutlineGradientButton children={"CLEAR ALL FILTERS"} />
                        </div>
                    </CardBorder>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div
                        className="backdrop-blur-md rounded-[24px] py-12 px-16 max-w-5xl mx-auto shadow-2xl border border-[#00AEEF]/40"
                        style={{
                            background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                        }}
                    >
                        <Badge className="bg-[#F36E21] text-[10px] font-semibold text-white  px-[7px] py-[8px]">
                            MS PARTNER SUCCESS
                        </Badge>

                        <div className="mt-10 relative">
                            <div className="relative bg-[#00AEEF3D] rounded-[24px] overflow-hidden flex items-center justify-center">
                                {/* Gradient Border Overlay */}
                                <div
                                    className="absolute inset-0 rounded-[26px] p-[2px] z-0"
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
                                <div className="z-10 text-left px-10 py-12 w-full">
                                    <h3 className="text-x[22px] font-bold text-white mb-6 leading-tight">
                                        How a Gold Tier MSP Increased MRR by 30% with ThreatRemediate
                                    </h3>
                                    <p className="text-white  text-[18px] leading-relaxed max-w-4xl mx-auto">
                                        Discover how a Gold Tier MSP partner leveraged Vijilan's flagship
                                        ThreatRemediate service to expand their security offerings,
                                        increase monthly recurring revenue, and deliver hands-off
                                        cybersecurity to their clients while reducing operational
                                        overhead.
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 px-6">
                                        {[
                                            { value: "30%", label: "Increase in Security MRR" },
                                            { value: "50%", label: "Reduction in Alert Fatigue" },
                                            { value: "95%", label: "Client Retention Rate" },
                                            { value: "6 wks", label: "Implementation Time" },
                                        ].map((stat, index) => (
                                            <CardBorder>
                                                <div className="text-[36px] font-medium text-white mb-2">
                                                    {stat.value}
                                                </div>
                                                <div className="text-[#E6F7FD] text-[10px] leading-tight">
                                                    {stat.label}
                                                </div>
                                            </CardBorder>
                                        ))}
                                    </div>

                                    <OutlineGradientButton>READ THE FULL CASE STUDY</OutlineGradientButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="py-16 px-4 bg-transparent relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-[40px] font-bold text-white mb-4">
                            Success Stories Across Industries
                        </h2>
                        <p className="text-[18px] text-white max-w-4xl mx-auto leading-relaxed">
                            Browse our comprehensive collection of client success stories and measurable business results <br /> across
                            diverse industries and use cases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {Array.from({ length: 8 }).map((_, index) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-16 px-4 bg-transparent">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-[40px] font-bold text-white mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-[18px] text-white max-w-3xl mx-auto">
                            Real feedback from security leaders who've transformed their operations with Vijilan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote:
                                    "Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with Cribl and provide active remediation has freed up my internal resources to focus on bigger picture risks. It's a true force multiplier.",
                                author: "Sarah Johnson",
                                title: "— CISO, Manufacturing Firm",
                            },
                            {
                                quote:
                                    "When we were hit by ransomware at 2 AM, Vijilan's ThreatRemediate team was on it immediately. Their swift action isolated the threat, prevented it from spreading to our critical systems, and saved us countless hours of downtime.",
                                author: "Michael Chen",
                                title: "— Maria Rodriguez, IT Director, Regional Healthcare System",
                            },
                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "Emily Rodriguez",
                                title: "— CTO, Mid-Market Logistics Company",
                            },
                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "David Kim",
                                title: "— CTO, Mid-Market Logistics Company",
                            },
                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "Lisa Thompson",
                                title: "— CTO, Mid-Market Logistics Company",
                            },

                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "Lisa Thompson",
                                title: "— CTO, Mid-Market Logistics Company",
                            },
                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "Lisa Thompson",
                                title: "— CTO, Mid-Market Logistics Company",
                            },
                            {
                                quote:
                                    "We had a ransomware incident on a Friday night. Before our internal team could even assemble, Vijilan's SOC had already contained the threat, isolated the affected machines, and disabled the compromised user account. They solved it.",
                                author: "James Wilson",
                                title: "— CTO, Mid-Market Logistics Company",
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-sm px-12 py-16"
                                style={{
                                    borderRadius: '22.184px',
                                    background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                                }}>
                                <blockquote className="text-white text-center text-[20px] leading-relaxed mb-6">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="text-center bg-[linear-gradient(90deg,_#F89B29_0%,_#FF0F7B_186.51%)] bg-clip-text text-transparent text-[20px]">
                                    — {testimonial.author}, {testimonial.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ROI Calculator */}
            <section className="py-16 px-4">
                <div className="relative container mx-auto bg-[#00AEEF3D]">
                    <div
                        className="absolute inset-0 p-[2px] z-0"
                        style={{
                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                    <div>
                        <div className="py-[74px] px-[58px] ">
                            <div className="text-center mb-10">
                                <h2 className="text-[40px] font-bold text-white mb-3">Calculate Your Potential ROI</h2>
                                <p className="text-white text-[18px]">See how much you could save and grow with Vijilan's cybersecurity solutions</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="endpoints" className="text-white text-[14px] text-left">
                                        Business Type
                                    </label>
                                    <select
                                        id="endpoints"
                                        className="p-3 rounded-[12px] text-[14px] bg-[#FFFFFE] border border-[#6246EA] focus:outline-none focus:ring-0 " defaultValue="">
                                        <option value="" disabled className="text-black">
                                            Select Business Type
                                        </option>
                                        <option value="1" className="text-black">1</option>
                                        <option value="1" className="text-black">1</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-white text-[14px] text-left">Current Annual Revenue</label>
                                    <input placeholder="100000" className="p-3 rounded-[12px] text-[14px] bg-[#FFFFFE] border border-[#6246EA] focus:outline-none focus:ring-0" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-white text-[14px] text-left">Annual Security Budget</label>
                                    <input placeholder="100000" className="p-3 rounded-[12px] text-[14px] bg-[#FFFFFE] border border-[#6246EA] focus:outline-none focus:ring-0" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                                <div className="flex flex-col gap-1">
                                    <label className="text-white text-[14px] text-left">Number Of Employees</label>
                                    <input placeholder="100" className="p-3 rounded-[12px] text-[14px] bg-[#FFFFFE] border border-[#6246EA] focus:outline-none focus:ring-0" />
                                </div>
                                {/* <Button className="bg-teal-500 hover:bg-teal-600 text-white md:mt-6">Calculate ROI</Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}

            <Heading_Btn
                h1={"Ready to Write Your Own Success Story?"}
                desc={`Join hundreds of organizations that have transformed their security posture and achieved\nmeasurable business results with Vijilan's comprehensive cybersecurity solutions.`}
                btn1={"Get Started Today"}
                btn2={"Get a Free Consultation"}
                isSmallHeading={true}
            />

        </div>
    )
}
