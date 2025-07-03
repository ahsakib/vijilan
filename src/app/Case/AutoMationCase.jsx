import { Calculator, Users, Building, Shield, Zap, Globe, Settings, Award, Play } from "lucide-react"

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

// Custom Input Component
function Input({ className = "", ...props }) {
    return (
        <input
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        />
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

function CardContent({ children, className = "", ...props }) {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

export default function Component() {
    return (
        <div className="bg-transparent">

            {/* Hero Section */}
            <section className="px-6 py-16 text-center text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h1 className="text-5xl font-bold mb-6">
                                Real-World Results,
                                <br />
                                Proven Success
                            </h1>
                            <p className="text-lg mb-8 text-blue-200">
                                See how our clients achieved remarkable growth and transformed their businesses with our proven
                                solutions. Calculate your potential success and join our community of thriving organizations.
                            </p>
                            <div className="flex space-x-4">
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Get Started Today</Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
                                >
                                    Watch Success Stories
                                </Button>
                            </div>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
                            <h3 className="text-xl font-semibold mb-6">MSP Achieves 35% MRR Growth with ThreatLocker</h3>
                            <p className="text-sm text-blue-200 mb-6">
                                See how this MSP transformed their security offering and achieved remarkable growth through our
                                comprehensive solution.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-400">30%</div>
                                    <div className="text-sm text-blue-200">Revenue Growth</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-400">50%</div>
                                    <div className="text-sm text-blue-200">Client Retention</div>
                                </div>
                            </div>
                            <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Read Full Case Study</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Calculate Your Potential Success</h2>
                    <p className="text-blue-200 mb-12">
                        Enter your details to see estimated results based on similar client outcomes
                    </p>

                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
                        <h3 className="text-xl font-semibold mb-8 text-center">Business Success Calculator</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <Input
                                    placeholder="Current Monthly Revenue"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Input
                                    placeholder="Number of Clients"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Input
                                    placeholder="Average Client Value"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Input
                                    placeholder="Current Growth Rate %"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                            </div>
                            <div className="space-y-4">
                                <Input
                                    placeholder="Target Revenue Goal"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Input
                                    placeholder="Industry Type"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Input
                                    placeholder="Team Size"
                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Calculate My Potential</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organization Type Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Find Success Stories Like Yours</h2>
                    <p className="text-blue-200 mb-12">
                        Discover how organizations similar to yours have achieved remarkable results
                    </p>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-8">What Best Describes Your Organisation?</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: Building, label: "Enterprise" },
                                { icon: Users, label: "SMB" },
                                { icon: Shield, label: "Security" },
                                { icon: Globe, label: "Global" },
                                { icon: Zap, label: "Startup" },
                                { icon: Settings, label: "Technology" },
                                { icon: Award, label: "Consulting" },
                                { icon: Calculator, label: "Finance" },
                            ].map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <Card
                                        key={index}
                                        className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 cursor-pointer transition-colors"
                                    >
                                        <CardContent className="p-6 pt-6 text-center">
                                            <IconComponent className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                                            <div className="text-white font-medium">{item.label}</div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>

                    {/* Benchmarking Section */}
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 mb-12">
                        <h3 className="text-xl font-semibold mb-6">Small Business Services Benchmarking Attack</h3>
                        <p className="text-blue-200 mb-8">Compare your performance against industry standards</p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-400">0%</div>
                                <div className="text-sm text-blue-200 mt-2">Security Incidents</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-400">4 Hrs</div>
                                <div className="text-sm text-blue-200 mt-2">Average Response Time</div>
                            </div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2 mt-6">
                            <div className="bg-orange-500 h-2 rounded-full w-3/4"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">All Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Card key={index} className="bg-slate-800/50 border-slate-700">
                                <CardContent className="p-6 pt-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            FEATURED
                                        </span>
                                        <Play className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">
                                        MSP Achieves 30% MRR Growth with ThreatLocker
                                    </h3>
                                    <p className="text-blue-200 text-sm mb-6">
                                        Discover how this managed service provider transformed their security offering and achieved
                                        remarkable growth through our comprehensive solution platform.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-orange-400">30%</div>
                                            <div className="text-xs text-blue-200">Revenue Growth</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-orange-400">50%</div>
                                            <div className="text-xs text-blue-200">Client Satisfaction</div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Read Full Case Study</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-center text-white">
                        <h2 className="text-2xl font-bold mb-4">
                            Vylon's team functions as a seamless extension of our team. Their ability to strategically plan and
                            execute complex projects while maintaining the highest standards of quality has been instrumental in our
                            success.
                        </h2>
                        <p className="mb-6">- CEO, TechnoServe Pro</p>
                        <Button className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3">Start Your Success Story</Button>
                    </div>
                </div>
            </section>

            {/* Ready to Scale Section */}
            <section className="px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Ready to Scale Your Business?</h3>
                            <p className="text-blue-200 mb-6">
                                Join thousands of successful businesses that have transformed their operations with our proven
                                solutions.
                            </p>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Get Started Today</Button>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">Ready to Write Your Own Success Story?</h3>
                            <p className="text-blue-200 mb-6">
                                Get personalized recommendations and see how our solutions can transform your business operations and
                                drive growth.
                            </p>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                                Schedule a Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
