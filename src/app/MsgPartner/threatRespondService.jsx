import { Play, Search, Shield, Users, MessageSquare, CheckCircle, ArrowRight, Menu } from "lucide-react"

export default function Component() {

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#191624" }}>

            {/* Hero Section */}
            <section className="px-6 py-24 relative z-10 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-7xl font-bold tracking-tight text-white sm:text-6xl">
                        Expert Detection. Actionable Guidance.
                    </h1>
                    <p className="mt-6 text-2xl leading-8 text-gray-300 max-w-5xl font-bold mx-auto">
                        Vijilan ThreatRespond™ service provides 24/7 monitoring and threat detection from our expert SOC, delivering
                        clear, step-by-step instructions for your internal team to remediate threats quickly and effectively.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                            WATCH THE SERVICE OVERVIEW
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 16 16 12 12 8"></polyline>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </button>
                        <button class="border border-gray-600 hover:bg-gray-800/20 text-white px-8 py-3 text-lg rounded-md transition-colors duration-200 flex items-center justify-center gap-2 bg-transparent">
                            GET AN INSTANT QUOTE
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 16 16 12 12 8"></polyline>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="px-4 py-16 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-4xl">
                        Understand ThreatRespond in 90 Seconds
                    </h2>
                    <p className="mt-4 text-xl text-gray-300 font-bold">
                        See how our expert guidance empowers your internal team to handle threats efficiently.
                    </p>
                    <div className="mt-12 relative">
                        <div className="aspect-video bg-gradient-to-br from-teal-900 to-blue-900 rounded-lg flex items-center justify-center">
                            <button className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-300 transition-colors">
                                <Play className="w-8 h-8 text-white ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Comparison */}
            <section className="px-6 py-20 lg:px-8 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 border border-purple-500/20 rounded-full"></div>
                    <div className="absolute bottom-20 left-10 w-64 h-64 border border-purple-500/20 rounded-full"></div>
                    <svg
                        className="absolute top-40 right-1/4 w-32 h-32 text-purple-500/10"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                    >
                        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            The Right Service for Your In-House Team
                        </h2>
                        <p className="text-xl text-gray-300">
                            Choose the solution that matches your organization's capabilities and needs
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Card */}
                        <div className="bg-gradient-to-br from-teal-900/80 to-teal-800/80 p-8 rounded-2xl border border-teal-700/50 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-8">ThreatRespond is a perfect fit if you...</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...have an internal IT team capable of performing remediation.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...want to offload the burden of 24/7 alert monitoring.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...need expert investigation to eliminate false positives.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...want clear, step-by-step guidance to resolve incidents.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Card */}
                        <div className="bg-gradient-to-br from-teal-900/80 to-teal-800/80 p-8 rounded-2xl border border-teal-700/50 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-8">Looking for hands-on, active remediation?</h3>
                            <p className="text-white text-lg leading-relaxed mb-8">
                                If you need a fully managed service where our SOC takes direct action to contain and remediate threats,
                                explore our flagship ThreatRemediate™ service.
                            </p>
                            <p className="text-cyan-400 text-lg leading-relaxed mb-10">
                                ThreatRemediate goes beyond guidance—our SOC actively isolates endpoints, disables compromised accounts,
                                and neutralizes threats in real-time while you sleep.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                LEARN ABOUT THREAT REMEDIATE
                                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            From Detection to Guided Resolution
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Our comprehensive security process helps keep your organization secure from end to end.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <Search className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Detect</h3>
                            <p className="text-gray-300 text-sm">
                                Our high-performance security tools continuously monitor your environment for threats, suspicious
                                activity, and anomalies to maximize your Security Operating Center.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Investigate & Validate</h3>
                            <p className="text-gray-300 text-sm">
                                Get an immediate SOC 1, Tier 2 certified Security Operations Center analyst assigned to investigate and
                                validate all threats or incidents at your sites.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Fully Managed Cloud SIEM</h3>
                            <p className="text-gray-300 text-sm">
                                Deploy and manage your technology with our innovative approach, sales alerts, and progressive services
                                we can deliver to your team.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Always-On SOC Support</h3>
                            <p className="text-gray-300 text-sm">
                                Access to our talented live security operations center demonstrations, full white-labeling, and a 24-day
                                trial to see our trial.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Deliver Actionable Guidance</h3>
                            <p className="text-gray-300 text-sm">
                                Effectively resolve your security incidents with GDPR, PCI DSS, and CJIS compliance standards that help
                                your workload and monitoring regulatory compliance.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-6 rounded-lg border border-teal-800">
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Confirm & Close</h3>
                            <p className="text-gray-300 text-sm">
                                We confirm with your team that the threat has been successfully resolved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            Questions About Guided Response?
                        </h2>
                        <p className="text-xl text-gray-300">Ask Jen AI, our 24/7 AI-powered Cyber Security Sales Agent.</p>
                    </div>

                    <div className="rounded-3xl p-8 border border-cyan-500/30" style={{ backgroundColor: "rgba(8, 34, 53, 1)" }}>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Chat Interface */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-teal-800/60 to-blue-800/60 p-6 rounded-2xl border border-cyan-500/30">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">JN</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">JEN AI</h3>
                                            <p className="text-cyan-400 text-sm">Cyber security Sales Agent</p>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-teal-700/40 to-blue-700/40 p-6 rounded-xl border border-cyan-500/20">
                                        <p className="text-white text-center leading-relaxed">
                                            Jen AI chatbot interface would be
                                            <br />
                                            embedded here
                                            <br />
                                            Interactive AI agent for real-time
                                            <br />
                                            Q&A
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Suggested Questions */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white">Try asking Jen AI:</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left bg-gradient-to-r from-teal-800/50 to-blue-800/50 hover:from-teal-700/60 hover:to-blue-700/60 p-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200"
                                        >
                                            <p className="text-gray-300 text-lg">"What kind of guidance do you provide?"</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Empower Your Team?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-8 rounded-lg border border-teal-800 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Become a Partner</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Start the application process to become a Vijilan partner and add our services to your portfolio.
                            </p>
                            <a
                                href="#"
                                className="inline-block rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-400"
                            >
                                APPLY NOW
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-8 rounded-lg border border-teal-800 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Get a ThreatRespond Quote</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                Already a partner? Log into our portal to access expert pricing templates.
                            </p>
                            <a
                                href="#"
                                className="inline-block rounded-md border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-white"
                            >
                                ACCESS PRICING SIMULATOR
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-8 rounded-lg border border-teal-800 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Call Our AI Agent</h3>
                            <p className="text-gray-300 text-sm mb-6">
                                For instant voice assistance, call our AI agent available 24/7.
                            </p>
                            <a
                                href="#"
                                className="inline-block rounded-md border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-white"
                            >
                                CALL NOW
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
