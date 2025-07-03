import CardBorder from "@components/CardBorder"
import GradientButton from "@components/GradientButton"
import Heading_Btn from "@components/Heading_Btn"
import OutlineGradientButton from "@components/OutlineGradientButton"
import SmallCard from "@components/SmallCard"
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
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Real-World Results, Proven Success</h1>
                    <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
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
                            <Input
                                placeholder="Full Name"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                            />
                            <Input
                                placeholder="Email"
                                type="email"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                            />
                            <Input
                                placeholder="Phone"
                                type="tel"
                                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                            />
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white">Start My Project</Button>
                        </div>
                    </CardBorder>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div
                        className="backdrop-blur-md rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl border border-[#00AEEF]/40"
                        style={{
                            background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                        }}
                    >
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white  px-4 py-2 text-sm font-semibold">
                            MS PARTNER SUCCESS
                        </Badge>

                        <div className="mt-10 relative">
                            <div className="relative bg-[#00AEEF]/20 rounded-[26px] overflow-hidden flex items-center justify-center">
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
                                    <h3 className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        How a Gold Tier MSP Increased MRR by 30% with ThreatRemediate
                                    </h3>
                                    <p className="text-slate-200 mb-10 text-lg leading-relaxed max-w-4xl mx-auto">
                                        Discover how a Gold Tier MSP partner leveraged Vijilan's flagship
                                        ThreatRemediate service to expand their security offerings,
                                        increase monthly recurring revenue, and deliver hands-off
                                        cybersecurity to their clients while reducing operational
                                        overhead.
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                        {[
                                            { value: "30%", label: "Increase in Security MRR" },
                                            { value: "50%", label: "Reduction in Alert Fatigue" },
                                            { value: "95%", label: "Client Retention Rate" },
                                            { value: "6 wks", label: "Implementation Time" },
                                        ].map((stat, index) => (
                                            <CardBorder>
                                                <div className="text-4xl font-bold text-white mb-2">
                                                    {stat.value}
                                                </div>
                                                <div className="text-slate-300 text-sm font-medium leading-tight">
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
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Success Stories Across Industries
                        </h2>
                        <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            Browse our comprehensive collection of client success stories and measurable business results across
                            diverse industries and use cases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="p-8 shadow-2xl border backdrop-blur-sm"
                                style={{
                                    borderRadius: "22.184px",
                                    background: "linear-gradient(0deg, #191624 16.11%, #00AEEF 328.5%)",
                                    borderColor: "rgba(0, 174, 239, 0.3)",
                                    borderWidth: "1px",
                                }}
                            >
                                <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-6 px-4 py-2 text-sm font-semibold">
                                    MS PARTNER SUCCESS
                                </Badge>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                                    MSP Achieves 30% MRR Growth with ThreatRemediate
                                </h3>

                                <p className="text-slate-200 mb-4 text-base leading-relaxed">
                                    See how this partner leveraged our flagship XDR service to build a profitable security practice and
                                    deliver hands-off cybersecurity to their clients while reducing operational overhead.
                                </p>

                                <div className="grid grid-cols-2 gap-0 mb-8">

                                    <CardBorder height="171px" width="166px">
                                        <div>
                                            <div className="text-white text-[32px] font-bold mb-2">99.9%</div>
                                            <div className="text-slate-300 text-sm font-medium">Uptime Maintained</div>
                                        </div>
                                    </CardBorder>
                                    <CardBorder height="171px" width="166px">
                                        <div>
                                            <div className="text-white text-[32px] font-bold mb-2">99.9%</div>
                                            <div className="text-slate-300 text-sm font-medium">Uptime Maintained</div>
                                        </div>
                                    </CardBorder>
                                </div>

                                <button
                                    className="border-2 border-white text-slate-300 hover:bg-white/10 bg-transparent px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                                >
                                    READ THE FULL STORY
                                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                                        <ArrowRight className="h-3 w-3 text-white" />
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-16 px-4 bg-transparent">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Real feedback from security leaders who've transformed their operations with Vijilan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote:
                                    "Vision helped us increase our monthly recurring revenue by 40% in just 6 months. Their strategic approach and platform capabilities are unmatched.",
                                author: "Sarah Johnson",
                                title: "CEO, TechFlow Solutions",
                            },
                            {
                                quote:
                                    "The ROI we've seen from implementing Vision's solutions has been incredible. Our operational efficiency improved by 60% while reducing costs.",
                                author: "Michael Chen",
                                title: "CTO, DataStream Inc",
                            },
                            {
                                quote:
                                    "Working with Vision transformed our entire business model. We've achieved sustainable growth and our clients are happier than ever.",
                                author: "Emily Rodriguez",
                                title: "Founder, CloudFirst MSP",
                            },
                            {
                                quote:
                                    "The support and guidance from Vision's team has been exceptional. They truly understand the challenges MSPs face.",
                                author: "David Kim",
                                title: "Operations Director, SecureNet",
                            },
                            {
                                quote:
                                    "Vision's platform gave us the tools we needed to scale efficiently. Our team productivity increased by 45% in the first quarter.",
                                author: "Lisa Thompson",
                                title: "VP Operations, ConnectPro",
                            },
                            {
                                quote:
                                    "The results speak for themselves - 35% growth in MRR and significantly improved client satisfaction scores.",
                                author: "James Wilson",
                                title: "Managing Director, TechAdvantage",
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="backdrop-blur-sm p-8 shadow-2xl h-70"
                                style={{
                                    borderRadius: '22.184px',
                                    background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                                }}
                            >
                                <blockquote className="text-white text-lg leading-relaxed mb-6">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="text-orange-400 font-semibold">
                                    — {testimonial.author}, {testimonial.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ROI Calculator */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
   
                    <CardBorder width="1215px" height="492px">
                        <div className="p-8">
                        <div className="text-center mb-8">
                                <h2 className="text-5xl font-bold text-white mb-4">Calculate Your Potential ROI</h2>
                                <p className="text-slate-300 font-bold">See how much you could save and earn with our solutions</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div>
                                    <label className="block text-slate-300 text-sm mb-2">Current Monthly Revenue</label>
                                    <Input placeholder="$10,000" className="bg-slate-700/50 border-slate-600 text-white" />
                                </div>
                                <div>
                                    <label className="block text-slate-300 text-sm mb-2">Number of Clients</label>
                                    <Input placeholder="50" className="bg-slate-700/50 border-slate-600 text-white" />
                                </div>
                                <div>
                                    <label className="block text-slate-300 text-sm mb-2">Team Size</label>
                                    <Input placeholder="5" className="bg-slate-700/50 border-slate-600 text-white" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-slate-300 text-sm mb-2">Industry</label>
                                    <Input placeholder="Managed Services" className="bg-slate-700/50 border-slate-600 text-white" />
                                </div>
                                {/* <Button className="bg-teal-500 hover:bg-teal-600 text-white md:mt-6">Calculate ROI</Button> */}
                            </div>
                        </div>
                    </CardBorder>
                </div>
            </section>

            {/* Final CTA */}

            <Heading_Btn    
                h1={"Ready to Write Your Own Success Story?"}
                desc={`Join hundreds of successful businesses that have transformed their operations and achieved remarkable growth
                        with our proven solutions.`}
                btn1={"Get Started Today"}
                btn2={"Get a Free Consultation"}
            />

        </div>
    )
}
