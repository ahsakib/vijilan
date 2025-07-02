
import Header from "@components/Header"
import networkBg from "../../images/image.png"
import tealBg from '../../images/Rectangle 4.png';
import missionIcon from "../../images/about_01.png";
import valuesIcon from "../../images/about_02.png";
import visionIcon from "../../images/about_03.png";
import CardContentData from "@components/CardContent"
import LeaderCard from "@components/LeaderCard";
import leaderImage from "../../images/man.png"
import JourneySection from "@components/JourneySection";
import JoinMissionSection from "@components/JoinMissionSection";

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



export default function About() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: "#191624" }}>

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

            <JoinMissionSection
                title="Join Our"
                highlightedText="Mission"
                subtitle="We're always looking for passionate, talented individuals to join our team. If you're driven to solve complex challenges and want to make a real impact in the cybersecurity industry, we want to hear from you."
                buttonText="VIEW OPEN POSITIONS"
            />

            {/* <Footer /> */}
        </div>
    )
}
