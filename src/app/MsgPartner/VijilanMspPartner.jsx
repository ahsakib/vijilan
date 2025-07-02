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
import Clipboard  from "@images/Clipboard Approve.png"
import RocketIcon  from "@images/Rocket.png"
import GraphReport  from "@images/Graph Report.png"

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
    )
}

// Custom CardContent Component
const CardContent = ({ children, className = "", ...props }) => {
    return (
        <div className={`p-6 ${className}`} {...props}>
            {children}
        </div>
    )
}

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
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                    <img src={Clipboard} alt="" />
                                    <span className="text-blue-400 font-semibold">1. Apply Online</span>
                                </div>
                                <p className="text-gray-300">
                                    Our simple, no-obligation application takes less than 5 minutes to complete.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800/50 border-gray-700 p-6">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                <img src={RocketIcon} alt="" />

                                    <span className="text-blue-400 font-semibold">2. Fast Onboarding</span>
                                </div>
                                <p className="text-gray-300">
                                    Get access to our partner portal, training, and sales materials within 24 hours.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-800/50 border-gray-700 p-6">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-4">
                                <img src={GraphReport} alt="" />

                                    <span className="text-blue-400 font-semibold">3. Start Selling</span>
                                </div>
                                <p className="text-gray-300">
                                    Use our comprehensive sales enablement kit to close your first deal this week.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partnership Features */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">A Partnership Designed for Your Growth</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="bg-teal-900/30 border-teal-700 p-6">
                            <CardContent className="p-0">
                                <Shield className="w-12 h-12 text-teal-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Unlock New MRR</h3>
                                <p className="text-gray-300 text-sm">
                                    Add high-margin security services to your existing client base and grow your Monthly Recurring Revenue
                                    and profitability.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-blue-900/30 border-blue-700 p-6">
                            <CardContent className="p-0">
                                <Search className="w-12 h-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Your Instant 24/7 SOC</h3>
                                <p className="text-gray-300 text-sm">
                                    Get access to our US-based, certified security Operations Center without the overhead. Our experts
                                    become an extension of your team.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-purple-900/30 border-purple-700 p-6">
                            <CardContent className="p-0">
                                <Rocket className="w-12 h-12 text-purple-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Go-to-Market Enablement</h3>
                                <p className="text-gray-300 text-sm">
                                    Access our comprehensive "ThreatRemediator™" sales content kit with battle-tested materials, sales
                                    training, and more deals.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-green-900/30 border-green-700 p-6">
                            <CardContent className="p-0">
                                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Radical Flexibility & No Risk</h3>
                                <p className="text-gray-300 text-sm">
                                    Benefit from our channel-first approach. No long-term contracts, commitments, full white-labeling, and
                                    a 30-day risk-free opt-out trial.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-cyan-900/30 border-cyan-700 p-6">
                            <CardContent className="p-0">
                                <BarChart3 className="w-12 h-12 text-cyan-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Simplified Compliance</h3>
                                <p className="text-gray-300 text-sm">
                                    Effortlessly support your clients' compliance requirements, including HIPAA, PCI, SOX, and more.
                                    Vijilan provides detailed reporting, audit-ready documentation, and compliance expertise to your
                                    workload and minimizing regulatory risks.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-indigo-900/30 border-indigo-700 p-6">
                            <CardContent className="p-0">
                                <Settings className="w-12 h-12 text-indigo-400 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-white">Vendor-Agnostic Integration</h3>
                                <p className="text-gray-300 text-sm">
                                    Seamlessly integrate with your existing security tools and infrastructure. Vijilan supports hundreds
                                    of security platforms, cloud platforms, and identity solutions, giving you unmatched flexibility
                                    without vendor lock-in.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Partnership Tiers */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        A Partnership Tier for Every Stage of
                        <br />
                        Your Growth
                    </h2>
                    <p className="text-gray-300 mb-12">
                        Our program is designed to meet you where you are and help you scale your security offerings profitably.
                    </p>
                    <Card className="bg-teal-900/20 border-teal-700 p-8">
                        <CardContent className="p-0">
                            <p className="text-gray-300">
                                A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented here, outlining
                                services, support, and benefits for each level as outlined in the development plan.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">What Our Partners Say</h3>
                            <blockquote className="text-gray-300 italic">
                                "Our security MSP increased by 30% within six months of partnering with Vijilan. Their SOC is
                                world-class, and the active remediation in ThreatRemediator is a game-changer for our clients."
                            </blockquote>
                            <p className="text-blue-400 mt-4">- Partners, Chief of New Vendor Partner</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">A Message to Our Future Partners</h3>
                            <blockquote className="text-gray-300 italic">
                                "We built our partner program on a foundation of trust and mutual success. We succeed when you succeed.
                                That's why we provide the best technology, an expert SOC, and the GTM support you need to win."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                        ].map((question, index) => (
                            <Card key={index} className="bg-gray-800/50 border-gray-700">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white">{question}</span>
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-6 py-16 border-t border-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold text-white mb-4">vijilan</div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Our Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Papers</li>
                                <li>Podcast</li>
                                <li>Videos</li>
                                <li>Press releases and news</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Platform</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>About Us</li>
                                <li>Become a partner</li>
                                <li>Contact Us</li>
                                <li>Pricing</li>
                                <li>Request a Demo</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-white">Vijilan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Information Security</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Cookie Policy</li>
                            </ul>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">CONTACT US</Button>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                        Copyright © 2024 All Rights Reserved – Vijilan Security, LLC – 24/7 Cybersecurity Threat Monitoring, SOCs,
                        and SOC
                    </div>
                </div>
            </footer>
        </div>
    )
}
