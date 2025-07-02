import {
    ChevronDown,
    Plus,
    FileText,
    Zap,
    ShoppingCart,
    Shield,
    Search,
    Rocket,
    CheckCircle,
    Settings,
    BarChart3,
    ClipboardCheck,
} from "lucide-react"
import Clipboard from "@images/Clipboard Approve.png"
import GraphReport from "@images/Graph Report.png"
import CardContent from "@components/CardContent"
import lockIcon from "@images/lock.png"
import chainIcon from "@images/chain-icons.png"
import RocketIcon from "@images/rocketIcon.png"
import sheildIcon from "@images/sheildIcon.png"
import TaskCheck from "@images/task-check.png"
import TimeIcon from "@images/timeIcon.png"

// Custom Button Component
const Button = ({ children, className = "", variant = "default", ...props }) => {
    const baseClasses =
        "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variantClasses = {
        default: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-gray-500",
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}

// Custom Card Component
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={`rounded-lg border shadow-sm ${className}`} {...props}>
            {children}
        </div>
    );
};

const CardContentData = ({ children, className = "", ...props }) => {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    );
};


export default function VijilianLanding() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#191624" }}>

            {/* Hero Section */}
            <section className="relative z-10 px-6 py-20 text-center">
                <div className="max-w-7xl mx-auto text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Build Your Profitable Security Practice on
                        <br />
                        Our Platform
                    </h1>
                    <p className="text-2xl mb-8 text-gray-300 max-w-5xl font-bold mx-auto">
                        Leverage our 24/7 US-Based SOC, AI-driven technology, and channel-first model to deliver enterprise-grade
                        cyber security. No minimums, no complexity, no high startup costs.
                    </p>
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex text-yellow-400">
                            {"★★★★★".split("").map((star, i) => (
                                <span key={i} className="text-2xl">
                                    {star}
                                </span>
                            ))}
                        </div>
                        <p className="ml-2 text-yellow-400 font-4xl">Trusted by over 200 MSPs worldwide</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                            APPLY TO BECOME A PARTNER
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 16 16 12 12 8"></polyline>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </button>
                        <button class="border border-gray-600 hover:bg-gray-800/20 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 flex items-center justify-center gap-2 bg-transparent">
                            DOWNLOAD PARTNER KIT
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 16 16 12 12 8"></polyline>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Go-to-Market Section */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 text-white">Go-to-Market in Days not Months</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-gray-800/50 border-gray-700 p-6">
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4">
                                    <img src={Clipboard} alt="" />
                                    <span className="text-blue-400 font-semibold">1. Apply Online</span>
                                </div>
                                <p className="text-gray-300">
                                    Our simple, no-obligation application takes less than 5 minutes to complete.
                                </p>
                            </CardContentData>
                        </Card>
                        <Card className="bg-gray-800/50 border-gray-700 p-6">
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4">
                                    <img src={RocketIcon} alt="" />

                                    <span className="text-blue-400 font-semibold">2. Fast Onboarding</span>
                                </div>
                                <p className="text-gray-300">
                                    Get access to our partner portal, training, and sales materials within 24 hours.
                                </p>
                            </CardContentData>
                        </Card>
                        <Card className="bg-gray-800/50 border-gray-700 p-6">
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4">
                                    <img src={GraphReport} alt="" />

                                    <span className="text-blue-400 font-semibold">3. Start Selling</span>
                                </div>
                                <p className="text-gray-300">
                                    Use our comprehensive sales enablement kit to close your first deal this week.
                                </p>
                            </CardContentData>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partnership Features */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-white">
                        A Partnership Designed for Your Growth
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                        <CardContent
                            title={"Unlock New MRR"}
                            description={`Add high-margin security services to your portfolio. Our model is built to maximize your Monthly
                                    Recurring Revenue and profitability.`}
                            icon={lockIcon}
                        />
                        <CardContent
                            title={"Your Instant 24/7 SOC"}
                            description={`Gain an immediate SOC 2 Type 2 certified Security Operations Center without the overhead. Our experts
                                    become an extension of your team.`}
                            icon={TimeIcon}
                        />
                        <CardContent
                            title={"Go-to-Market Enablement"}
                            description={`Access our comprehensive "ThreatRemediator™" Enablement Kit with co-brandable materials, sales decks,
                                    and proposal generators to win more deals.`}
                            icon={RocketIcon}
                        />
                        <CardContent
                            title={"Radical Flexibility & No Risk"}
                            description={`Benefit from our channel-first approach with no minimum commitments. Full white-labeling, and a 30-day
                                    risk-free opt-out trial.`}
                            icon={sheildIcon}
                        />
                        <CardContent
                            title={"Simplified Compliance"}
                            description={`Effortlessly support your clients' compliance requirements, including HIPAA, GDPR, PCI DSS, and CMMC.
                                    Vijilan provides detailed reporting, audit-ready documentation, and compliance expertise—reducing your
                                    workload and minimizing regulatory risks.`}
                            icon={TaskCheck}
                        />
                        <CardContent
                            title={"Vendor-Agnostic Integration"}
                            description={`Seamlessly integrate with your clients' existing security tools and infrastructure. Vijilan supports
                                    extensive integrations across firewalls, endpoints, cloud platforms, and identity solutions, giving
                                    you unmatched flexibility without vendor lock-in.`}
                            icon={chainIcon}
                        />
                    </div>
                </div>
            </section>

            {/* Partnership Tiers */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">
                    A Partnership Tier for Every Stage of
                    <br />
                    Your Growth
                </h2>
                <p className="text-gray-300 mb-12">
                    Our program is designed to meet you where you are and help you scale your security offerings profitably.
                </p>
                <Card
                    className="p-8 rounded-xl border-2"
                    style={{
                    backgroundColor: "rgba(0, 174, 239, 0.24)",
                    borderColor: "rgba(8, 34, 53, 1)",
                    }}
                >
                    <CardContentData className="p-0">
                    <p className="text-white text-left">
                        A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented here, outlining
                        services, support, and benefits for each level as defined in the development plan.
                    </p>
                    </CardContentData>
                </Card>
                </div>
            </section>


            {/* Testimonials */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card
                    className="p-8 rounded-xl border-2"
                    style={{
                        backgroundColor: "rgba(0, 174, 239, 0.24)",
                        borderColor: "rgba(8, 34, 53, 1)",
                    }}
                    >
                    <CardContentData className="p-0 text-center">
                        <h3 className="text-2xl font-bold mb-6 text-white">What Our Partners say</h3>
                        <blockquote className="text-white mb-6 text-lg leading-relaxed">
                        "Our security MRR increased by 30% within 6 months of partnering with Vijilan. Their SOC is
                        world-class, and the active remediation in ThreatRemediate is a game- changer for our clients."
                        </blockquote>
                        <p className="text-blue-400 font-medium">— Alex Johnson, CEO of a Silver Tier MSP Partner</p>
                    </CardContentData>
                    </Card>

                    <Card
                    className="p-8 rounded-xl border-2"
                    style={{
                        backgroundColor: "rgba(0, 174, 239, 0.24)",
                        borderColor: "rgba(8, 34, 53, 1)",
                    }}
                    >
                    <CardContentData className="p-0 text-center">
                        <h3 className="text-2xl font-bold mb-6 text-white">A Message to Our Future Partners</h3>
                        <blockquote className="text-white text-lg leading-relaxed">
                        "We built our partner program on a foundation of trust and mutual success. We succeed when you
                        succeed. That's why we provide the best technology, an expert SOC, and the GTM support you need to
                        win."
                        </blockquote>
                    </CardContentData>
                    </Card>
                </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                        ].map((question, index) => (
                            <Card key={index} className="bg-gray-800/50 border-gray-700">
                                <CardContentData className="p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white">{question}</span>
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    </div>
                                </CardContentData>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
