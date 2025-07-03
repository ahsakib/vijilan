import CardBorder from "@components/CardBorder"
import Heading_Btn from "@components/Heading_Btn"
import TestimonialCard from "@components/TestimonialCard"
import { Calculator, Users, Building, Shield, Zap, Globe, Settings, Award, Play } from "lucide-react"
import CalculatorInput from "@components/CalculatorInput"
import NavyBlueBackground from "@components/NavyBlueBackground"
import Msp from "../../Assets/msp.svg"
import Enterprise from "../../Assets/enterprise.svg";
import Manufacturing from "../../Assets/manufacturing.svg";
import HealthCare from "../../Assets/healthcare.svg";
import dollar from "../../Assets/dollar-circle.svg";
import bank from "../../Assets/bank.svg";
import cpu from "../../Assets/cup.svg";
import smb from "../../Assets/cup.svg";
import JnAi from "../../Assets/jnai.svg";
import CardContent from "@components/CardContent"

// Custom Button Component
function Button({ children, className = "", variant = "default", ...props }) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2"

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    }

    const variantStyles = variants[variant] || variants.default

    return (
        <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            {children}
        </button>
    )
}

// Custom Card Components
function Card({ children, className = "", ...props }) {
    return (
        <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
            {children}
        </div>
    )
}

function CardcontentData({ children, className = "", ...props }) {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

const industries = [
    {
        icon: Msp,
        title: "MSP/VAR",
        description: "Managed service provider seeking growth",
    },
    {
        icon: Enterprise,
        title: "Enterprise",
        description: "Large organization needing security",
    },
    {
        icon: Manufacturing,
        title: "Manufacturing",
        description: "Industrial/operational technology",
    },
    {
        icon: HealthCare,
        title: "Healthcare",
        description: "Compliance-focused organization",
    },
    {
        icon: dollar,
        title: "Financial Services",
        description: "Banks, credit unions, fintech",
    },
    {
        icon: bank,
        title: "Government",
        description: "Federal, state, local agencies",
    },
    {
        icon: cpu,
        title: "Technology",
        description: "Software, SaaS, tech companies",
    },
    {
        icon: smb,
        title: "SMB",
        description: "Small to medium business",
    },
];


export default function Component() {
    return (
        <div className="bg-transparent">

            {/* Hero Section */}
            <section className="px-6 py-16 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Heading_Btn
                            h1="Real-World Results
                                Proven Success"
                            desc={`See how our clients achieved remarkable growth and transformed their businesses with our proven
                                solutions. Calculate your potential success and join our community of thriving organizations.`}
                            btn1={"Get Started Today"}
                            btn2={"Watch Success Stories"}
                        />

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


            <NavyBlueBackground>
                <div>
                    <div className="text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Success</h2>
                        <p className="text-blue-200 mb-12">
                            Enter your details to see estimated results based on similar client outcomes
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                        <CardBorder width="452px" height="424px">
                            <div className="space-y-4 p-8 text-white text-left">
                                <h1>Your Business Profile</h1>
                                <CalculatorInput
                                    id="businessType"
                                    label="Business Type"
                                    placeholder="Select Your Business Type"
                                />

                                <CalculatorInput
                                    id="annualRevenue"
                                    label="Current Annual Revenue/MRR"
                                    placeholder="1000000"
                                />

                                <CalculatorInput
                                    id="clients"
                                    label="Number of Clients/Endpoints"
                                    placeholder="50"
                                />

                                <CalculatorInput
                                    id="securityBudget"
                                    label="Current Security Budget"
                                    placeholder="5000000"
                                />
                            </div>

                        </CardBorder>
                        <CardBorder width="452px" height="424px">
                            <div className="space-y-4 p-8 text-white text-left">
                                <h1>Your Goals</h1>
                                <CalculatorInput
                                    id="businessType"
                                    label="Primary Objective"
                                    placeholder="Select Your main goal"
                                />

                                <CalculatorInput
                                    id="annualRevenue"
                                    label="Target Timeframe"
                                    placeholder="Select Timeframe"
                                />

                                <CalculatorInput
                                    id="clients"
                                    label="Industry"
                                    placeholder="Select Your industry"
                                />
                            </div>

                        </CardBorder>
                    </div>
                </div>
            </NavyBlueBackground>

            <NavyBlueBackground>
                <div>
                    <div className="text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Success</h2>
                        <p className="text-blue-200 mb-12">
                            Enter your details to see estimated results based on similar client outcomes
                        </p>

                        <div className="grid grid-cols-4 gap-x-10 gap-y-[27px]">
                            {industries.map((item, index) => (
                                <CardBorder key={index} width="235.846px">
                                    <div className="flex flex-col justify-center items-center">
                                        <img src={item.icon} alt={item.title} className="w-12 mb-2" />
                                        <h2 className="font-bold mb-2">{item.title}</h2>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </CardBorder>
                            ))}
                        </div>
                        <div className="text-left p-6">
                            <div className="max-w-4xl w-full">
                                {/* SMB Success Badge */}
                                <div className="mb-8">
                                    <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium">SMB SUCCESS</span>
                                </div>

                                {/* Main Headline */}
                                <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Small Business Survives Ransomware Attack
                                </h1>

                                {/* Subtitle */}
                                <p className="text-white text-lg md:text-xl mb-16 opacity-90">Quick response prevents data loss and downtime</p>

                                {/* Statistics */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                                    <div className="text-center">
                                        <div className="text-white text-6xl md:text-7xl font-bold mb-2">0%</div>
                                        <div className="text-gray-400 text-sm uppercase tracking-wider">DATA LOSS</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white text-6xl md:text-7xl font-bold mb-2">4 Hrs</div>
                                        <div className="text-gray-400 text-sm uppercase tracking-wider">RECOVERY TIME</div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="text-center">
                                    <button className="border border-red-400 text-white px-8 py-3 rounded-md hover:bg-white hover:text-slate-900 transition-colors duration-200 text-sm font-medium uppercase tracking-wider">
                                        READ THE FULL STORY
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavyBlueBackground>


            {/* Success Stories Grid */}
            <section className="py-16 px-4 bg-transparent relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            All Success Stories
                        </h2>
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            Browse our complete collection of client success stories and measurable business results.
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

            {/* CTA Section */}
            <section className="py-16 px-4 bg-transparent relative overflow-hidden max-w-7xl mx-auto">
                <div
                    className="backdrop-blur-sm p-8 shadow-2xl h-70"
                    style={{
                        borderRadius: '22.184px',
                        background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                    }}
                >
                    <blockquote className="text-white text-lg leading-relaxed mb-6">
                        ""Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with Cribl and provide active remediation has freed up my internal resources to focus on bigger picture risks. It's a true force multiplier.""
                    </blockquote>
                    <div className="text-orange-400 font-semibold">
                        — "CISO", "Manufacturing Firm"
                    </div>
                </div>
            </section>

            {/* Ready to Scale Section */}

            <section className="py-16 px-4 bg-transparent relative overflow-hidden max-w-7xl mx-auto">
                <section className="grid grid-cols-2 gap-6">

                    <CardContent
                        icon={JnAi}
                        title={"JEN AI"}
                        description={`"I can help you find case studies similar to your business, calculate potential ROI, and connect you with relevant success stories. What would you like to explore?"`}
                    />
                </section>
            </section>
        </div>
    )
}
