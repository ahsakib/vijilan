
import Header from "@components/Header"
import { ChevronDown, Target, Eye, BarChart3 } from "lucide-react"
import networkBg from "../../images/image.png"
import tealBg from '../../images/Rectangle 4.png';
import missionIcon from "../../images/about_01.png";
import valuesIcon from "../../images/about_02.png";
import visionIcon from "../../images/about_03.png";
import CardContentData from "@components/CardContent"
import LeaderCard from "@components/LeaderCard";
import leaderImage from "../../images/man.png"
import JourneySection from "@components/JourneySection";


// Custom Button Component
const Button = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-4 py-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

// Custom Card Component
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
            {children}
        </div>
    )
}

const teamData = [
    {
      name: "Kevin Nejad",
      title: "Founder & CEO",
      description:
        '"With over 20 years of experience in cybersecurity and data management, Kevin founded Vijilan to address the growing gap between complex threats and the resources available to combat them. He leads the company with a passion for innovation and a channel-first philosophy."',
      image: leaderImage,
    },
    {
      name: "Luciana Furtado",
      title: "Chief Technology Officer",
      description:
        '"Leading our technical vision and platform development, our CTO brings deep expertise in AI-driven security technologies and scalable cloud architectures to deliver cutting-edge solutions for our clients."',
        image: leaderImage,
    },
    {
      name: "Head of Channel Sales",
      title: "VP of Channel Sales",
      description:
        '"Driving our channel-first strategy, our Head of Channel Sales is dedicated to empowering MSP partners with the tools, training, and support needed to succeed in the competitive cybersecurity market."',
        image: leaderImage,
    },
  ];
  

// Custom CardContent Component
const CardContent = ({ children, className = "", ...props }) => {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    )
}

export default function About() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#191624" }}>

            {/* Header */}
            <Header />

            {/* Hero Section */}

            <section className="relative z-10 w-full py-16 text-center">
                <div className="w-full px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">The People Behind Your Protection</h1>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                We are a team of passionate cybersecurity experts, problem solvers, and client advocates dedicated to one
                                mission: keeping you and your customers safe and thriving.
                            </p>
                        </div>

                        {/* Video/Image Placeholder - now full width within the container */}
                        <div className="bg-gray-400 rounded-lg aspect-video w-full max-w-7xl mx-auto mb-16">
                            {/* Placeholder for video content */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story Section */}

            <JourneySection
                tealBg={tealBg}
                networkBg={networkBg}
                heading={"From Log Analysis to Market Leader"}
                description={`Founded in 2014 with a mission to bring clarity to complex security data, Vijilan has evolved from
                    a specialized log analysis firm into a leading managed cybersecurity provider. Our journey has
                    been driven by a relentless focus on innovation, a deep commitment to our partners, and the core
                    belief that every business deserves enterprise-grade security.`}
            />

            {/* Mission, Vision, Values */}

            <section className="relative z-10 px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Our <span className="text-cyan-400">Mission</span>, Vision, and Values
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <CardContentData 
                            icon={missionIcon}
                            title="Our Mission"
                            description="To empower organizations with unparalleled control and clarity over their security data, delivering
                                advanced, AI-driven managed detection, response, and remediation services that proactively combat cyber
                                threats and simplify compliance."
                        />

                        {/* Vision Card */}


                        <CardContentData 
                            icon={valuesIcon}
                            title="Our Vision"
                            description="To be the trusted, go-to partner for businesses seeking to modernize their SOC operations, optimize data
                                management, and achieve a robust cybersecurity posture through flexible, scalable, and expert-led
                                solutions"
                        />

                        <CardContentData 
                            icon={visionIcon}
                            title="Our Core Values"
                            designDescription={true}
                        />

                    </div>
                </div>
            </section>

            {/* Leadership Section */}

            <section className="relative z-10 px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">Meet Our Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {teamData.map((leader, index) => (
                        <LeaderCard
                        key={index}
                        name={leader.name}
                        title={leader.title}
                        description={leader.description}
                        image={leader.image}
                        />
                    ))}
                    </div>
                </div>
                </section>


            {/* SOC Section */}

            <JourneySection
                tealBg={tealBg}
                networkBg={networkBg}
                headingWithDesign={true}
                smHeading={`Our SOC's Tier 2 certified Security Operations Center is the operational center for your defense.
                                        Staffed around the clock by our expert security analysts and powered by advanced AI for incident
                                        response, our team leverages our advanced platform to protect your business with unparalleled
                                        vigilance.`}
                videoPart={true}
                
            />

            {/* CTA Section */}
            <section className="relative z-10 px-6 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join Our <span className="text-teal-400">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        We're always looking for passionate, talented individuals to join our team. If you're driven to make a
                        difference in the cybersecurity industry, we want to hear from you.
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                        VIEW OPEN POSITIONS
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-6 py-16 border-t border-gray-700">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="text-white text-2xl font-bold mb-6">vijilan</div>
                            <div className="space-y-2 text-gray-400">
                                <p>All Company</p>
                                <p>Careers</p>
                                <p>Events</p>
                                <p>Podcast</p>
                                <p>Videos</p>
                                <p>Press releases and news</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Platform</h4>
                            <div className="space-y-2 text-gray-400">
                                <p>About Us</p>
                                <p>Request a Demo</p>
                                <p>Pricing</p>
                                <p>Request a Demo</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Others</h4>
                            <div className="space-y-2 text-gray-400">
                                <p>FAQ</p>
                                <p>Enterprise Security</p>
                                <p>Privacy Policy</p>
                                <p>Terms and Conditions</p>
                                <p>Cookie Policy</p>
                            </div>
                        </div>
                        <div>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">CONTACT US</Button>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                        <p>
                            Copyright © 2024 All Rights Reserved - Vijilan Partners LLC - 24/7 Cybersecurity Threat Remediation SOCs
                            and SOC
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
