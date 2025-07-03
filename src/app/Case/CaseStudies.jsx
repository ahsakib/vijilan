import { Star, ArrowRight, Menu } from "lucide-react"

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

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  <div className="uptime-card">
    <div className="text-center w-full">
      <div className="text-white text-[32px] font-bold mb-2">99.9%</div>
      <div className="text-slate-300 text-sm font-medium">Uptime Maintained</div>
    </div>
  </div>
</div>


                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                            View Case Studies
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        >
                            Watch Our Story
                        </Button>
                    </div>

                    {/* Lead Form */}
                    <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    </div>
                </div>
            </section>

            {/* Featured Case Study */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Card className="bg-gradient-to-r from-teal-900/50 to-slate-800/50 border-teal-500/30 max-w-4xl mx-auto">
                        <CardContent className="p-8">
                            <Badge className="bg-orange-500 text-white mb-4">Featured</Badge>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                How TechFlow MSP Increased MRR by 55% with ThreeAmendment
                            </h3>
                            <p className="text-slate-300 mb-6">
                                Discover how TechFlow transformed their managed service operations and achieved unprecedented growth
                                through our comprehensive platform and strategic guidance.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                                <div>
                                    <div className="text-3xl font-bold text-teal-400">30%</div>
                                    <div className="text-slate-400 text-sm">MRR Growth</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-teal-400">50%</div>
                                    <div className="text-slate-400 text-sm">Efficiency</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-teal-400">55%</div>
                                    <div className="text-slate-400 text-sm">Revenue</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-teal-400">6.91x</div>
                                    <div className="text-slate-400 text-sm">ROI</div>
                                </div>
                            </div>
                            <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 bg-transparent">
                                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Success Stories Across Industries</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Browse our comprehensive collection of client success stories and discover how businesses like yours have
                            achieved remarkable growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <Card
                                key={index}
                                className="bg-slate-800/50 border-slate-700/50 hover:border-teal-500/50 transition-colors"
                            >
                                <CardContent className="p-6">
                                    <Badge className="bg-orange-500 text-white mb-4">Success Story</Badge>
                                    <h3 className="text-xl font-bold text-white mb-3">MSP Achieves 30% MRR Growth with ThreeAmendment</h3>
                                    <p className="text-slate-300 mb-6 text-sm">
                                        Learn how this managed service provider transformed their operations and achieved sustainable growth
                                        through our comprehensive platform.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <div className="text-2xl font-bold text-teal-400">30%</div>
                                            <div className="text-slate-400 text-xs">Growth</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-teal-400">50%</div>
                                            <div className="text-slate-400 text-xs">Efficiency</div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                                    >
                                        Read Case Study <ArrowRight className="ml-2 h-3 w-3" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                        <p className="text-slate-300">
                            Real feedback from real clients who have experienced transformational growth with our solutions.
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
                            <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-slate-300 mb-4 italic">"{testimonial.quote}"</blockquote>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.author}</div>
                                        <div className="text-slate-400 text-sm">{testimonial.title}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Card className="bg-slate-800/50 border-slate-700/50 max-w-4xl mx-auto">
                        <CardContent className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Calculate Your Potential ROI</h2>
                                <p className="text-slate-300">See how much you could save and earn with our solutions</p>
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
                                <Button className="bg-teal-500 hover:bg-teal-600 text-white md:mt-6">Calculate ROI</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Own Success Story?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join hundreds of successful businesses that have transformed their operations and achieved remarkable growth
                        with our proven solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                            Get Started Today
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        >
                            Get a Free Consultation
                        </Button>
                    </div>
                </div>
            </section>


        </div>
    )
}
