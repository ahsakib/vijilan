import { ChevronDown, Shield, Users, Building, Lightbulb, MapPin, Zap, Star } from "lucide-react"
import homeBg from "../../images/home-bg.png"
import Header from "@components/Header"
import EmergencyBanner from "@components/EmergencyBanner"
import HeroSection from "./HeroSection"
import GroupIcon from '../../images/Group.svg';
import GroupIcon2 from '../../images/Group (1).svg';
import CardContent from "@components/CardContent"

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#191624" }}>
      {/* Background Pattern */}

      <img
        src={homeBg}
        alt="Home Background"
        className="w-full h-auto absolute"
      />


      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Emergency Banner */}
        <div className="rounded-t-2xl mx-4">
          <EmergencyBanner></EmergencyBanner>
          {/* Main Header */}
          {/* <Header></Header> */}
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Tailored Solutions Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="min-h-screen px-4 py-12">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-4">
                  Tailored Cybersecurity Solutions
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">For Your Needs</h2>
              </div>

              {/* Cards Container */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Left Card - MSPs */}

                <CardContent 
                   icon={GroupIcon}
                   title="For MSPs, VARs & MSSPs"
                   description="Elevate Your Cybersecurity Offerings. Partner with Vijilan to deliver enterprise-grade security, enhance your service portfolio, and drive profitable growth."
                   buttonText="EMPOWER YOUR MSP/VAR/MSSP"
                />

                {/* Right Card - SMBs */}
                <CardContent 
                   icon={GroupIcon2}
                   title="For SMBs & Mid-Market Enterprises"
                   description="Affordable, Expert Protection. Secure your business with our comprehensive managed security services,
                    tailored to your size and industry needs."
                   buttonText="SECURE YOUR BUSINESS"
                />
              </div>
            </div>
          </div>
        </section>



        {/* Threat Landscape Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                The Evolving Threat
                <br />
                Landscape Demands
                <br />
                <span className="text-cyan-400">a New Defense</span>
              </h2>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Today's cyber threats are more sophisticated and persistent than ever before. Traditional security
                approaches are no longer sufficient to protect against advanced persistent threats, zero-day exploits,
                and targeted attacks.
              </p>
              <p>
                Organizations need intelligent, adaptive security solutions that can detect, analyze, and respond to
                threats in real-time. Vijilan's platform leverages advanced AI and machine learning to provide proactive
                threat hunting, automated incident response, and comprehensive security orchestration.
              </p>
              <p>
                Our approach combines human expertise with cutting-edge technology to deliver security solutions that
                evolve with the threat landscape, ensuring your organization stays protected against both known and
                unknown threats.
              </p>
            </div>
          </div>
        </section>

        {/* Vijilan Advantage Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              The <span className="text-cyan-400">Vijilan Advantage</span>:<br />
              Secure. Compliant. Partner-Focused.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "24/7 Security Operations Center",
                description:
                  "Our expert security analysts monitor your environment around the clock, providing continuous threat detection, analysis, and response to keep your organization protected.",
              },
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "AI-Powered Compliance Automation",
                description:
                  "Streamline compliance management with automated reporting, continuous monitoring, and intelligent policy enforcement across multiple frameworks and regulations.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
                title: "Powered by Industry Leaders",
                description:
                  "Built on proven technologies from industry leaders, our platform integrates seamlessly with your existing security stack while providing enhanced capabilities.",
              },
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "Proactive Remediation & Response",
                description:
                  "Automated incident response and remediation capabilities ensure threats are contained and neutralized quickly, minimizing business impact and reducing recovery time.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-cyan-400" />,
                title: "Partner-Centric Model",
                description:
                  "Designed specifically for MSPs and partners, our platform provides the tools, training, and support needed to successfully deliver cybersecurity services to your clients.",
              },
              {
                icon: <Zap className="w-8 h-8 text-cyan-400" />,
                title: "SOAR Platform Integration",
                description:
                  "Security Orchestration, Automation, and Response capabilities that integrate with your existing tools to provide comprehensive security management and workflow automation.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
                <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Innovation Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">Trusted by Leaders</span>,<br />
              Powered by Innovation
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {["Microsoft", "CrowdStrike", "Sentinel One", "Palo Alto"].map((partner) => (
              <div
                key={partner}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <div className="text-cyan-400 font-semibold">{partner}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold text-sm">JL</span>
                </div>
                <div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "Vijilan has transformed our security operations. The platform's intelligent automation and
                    comprehensive monitoring have significantly improved our threat detection capabilities while
                    reducing operational overhead."
                  </p>
                  <div className="text-white font-semibold">John Smith</div>
                  <div className="text-gray-400 text-sm">CISO, Enterprise Corp</div>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">SOC 2 Type 2 Certified</h3>
                <p className="text-gray-300 mb-4">
                  Independently verified security, availability, processing integrity, confidentiality, and privacy
                  controls.
                </p>
                <span className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded text-sm">Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">Comprehensive Security</span>
              <br />
              Ecosystem Integrations
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                category: "Security Information & Event Management (SIEM)",
                tools: ["Splunk", "QRadar", "ArcSight", "LogRhythm", "Sentinel"],
              },
              {
                category: "Endpoint Detection & Response (EDR)",
                tools: ["CrowdStrike", "SentinelOne", "Carbon Black", "Cortex XDR"],
              },
              {
                category: "Extended Detection & Response (XDR)",
                tools: ["Microsoft Defender", "Palo Alto Cortex", "Trend Micro Vision One"],
              },
              {
                category: "Security Orchestration, Automation & Response (SOAR)",
                tools: ["Phantom", "Demisto", "Swimlane", "Rapid7"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-3">{section.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-6">
              Don't see your security tools listed? We integrate with hundreds of security solutions.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded">
              View All Integrations
            </button>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Partners' <span className="text-cyan-400">Success Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "MSP Achieves 300% Growth with Vijilan",
                description:
                  "TechSecure MSP transformed their security offerings and achieved remarkable growth by partnering with Vijilan.",
              },
              {
                title: "MSSP Reduces SOC Costs by 40% with Intelligent Automation",
                description:
                  "SecureOps MSSP streamlined operations and reduced costs while improving service quality through automation.",
              },
              {
                title: "Enterprise Achieves Full Security Visibility with Optimization",
                description:
                  "Global Manufacturing Corp enhanced their security posture and achieved comprehensive visibility across their infrastructure.",
              },
            ].map((story, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{story.description}</p>
                <div className="text-cyan-400 text-sm font-semibold cursor-pointer">Read Success Story →</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded">
              View All Success Stories
            </button>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400">Dive Deeper</span> Into Vijilan's
              <br />
              Cybersecurity Ecosystem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "Security Operations Center",
                description:
                  "Learn how our 24/7 SOC provides continuous monitoring, threat hunting, and incident response to keep your organization protected around the clock.",
                buttonText: "Explore SOC Services",
              },
              {
                icon: <Zap className="w-8 h-8 text-cyan-400" />,
                title: "Platform Integrations",
                description:
                  "Discover how Vijilan seamlessly integrates with your existing security tools and infrastructure to provide comprehensive protection without disruption.",
                buttonText: "View Integrations",
              },
              {
                icon: <Shield className="w-8 h-8 text-cyan-400" />,
                title: "Compliance & Reporting",
                description:
                  "Streamline compliance management with automated reporting, continuous monitoring, and comprehensive audit trails across multiple regulatory frameworks.",
                buttonText: "Learn About Compliance",
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
                <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 w-full bg-transparent px-4 py-2 rounded">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your <span className="text-cyan-400">Security</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of MSPs and enterprises who trust Vijilan to protect their most critical assets. Get started
            today and experience the power of intelligent cybersecurity.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg rounded">
            Get Started Today
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-slate-800">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-white text-2xl font-bold mb-4">vijilan</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Intelligent cybersecurity solutions for MSPs and enterprises. Securing the future of digital business.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      For MSPs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      For Enterprises
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      SOC Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Vijilan. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
