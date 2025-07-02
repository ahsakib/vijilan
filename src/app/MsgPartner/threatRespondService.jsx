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
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Understand ThreatRespond in 90 Seconds
          </h2>
          <p className="mt-4 text-lg text-gray-300">
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
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Right Service for Your In-House Team
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Choose the detection service that best supports your organization's capabilities and needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">ThreatRespond is a perfect fit if you...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">have an internal IT team capable of implementing remediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">want to offload the burden of 24/7 alert monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">need expert threat identification to eliminate false positives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">want clear, step-by-step guidance to resolve incidents</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Looking for hands-on, active remediation?</h3>
              <p className="text-gray-300">
                If you need a fully managed service where our SOC takes direct action to contain and remediate threats,
                explore our flagship ThreatRespond™ service.
              </p>
              <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 p-6 rounded-lg border border-teal-800">
                <p className="text-gray-300 mb-4">
                  ThreatRespond provides expert guidance, and our SOC analysts work directly within your environment to
                  contain and remediate threats.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold"
                >
                  LEARN ABOUT THREAT RESPONSE →
                </a>
              </div>
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
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Questions About Guided Response?
            </h2>
            <p className="mt-4 text-lg text-gray-300">Ask Jen AI, our 24/7 AI-powered Cyber Security Sales Agent.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-900/30 to-blue-900/30 p-8 rounded-lg border border-teal-800">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">JEN AI</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4">Try asking Jen AI:</h3>
                <div className="space-y-3">
                  <div className="bg-teal-900/50 p-3 rounded-lg border border-teal-700">
                    <p className="text-gray-300 text-sm">"What kind of guidance do you provide?"</p>
                  </div>
                  <div className="bg-teal-900/50 p-3 rounded-lg border border-teal-700">
                    <p className="text-gray-300 text-sm">"What kind of guidance do you provide?"</p>
                  </div>
                  <div className="bg-teal-900/50 p-3 rounded-lg border border-teal-700">
                    <p className="text-gray-300 text-sm">"What kind of guidance do you provide?"</p>
                  </div>
                  <div className="bg-teal-900/50 p-3 rounded-lg border border-teal-700">
                    <p className="text-gray-300 text-sm">"What kind of guidance do you provide?"</p>
                  </div>
                  <div className="bg-teal-900/50 p-3 rounded-lg border border-teal-700">
                    <p className="text-gray-300 text-sm">"What kind of guidance do you provide?"</p>
                  </div>
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
