import CardBorder from "@components/CardBorder";
import Heading_Btn from "@components/Heading_Btn";
import NavyBlueBackground from "@components/NavyBlueBackground";
import React from "react";
import { ArrowRight, icons } from "lucide-react";
import dataSource from "../../Assets/data-source.svg"
import steaming from "../../Assets/streaming.svg"
import log from "../../Assets/logscale.svg"
import vish from "../../Assets/vish.svg"
import setting from "../../Assets/setting.svg"
import increase from "../../Assets/Increase.svg"
import management from "../../Assets/Management.svg"
import InfoSection from "@components/InfoSection";
import SuccessCard from "@components/SuccessCard";

const PlatformTechnology = ({ }) => {
    const cards = [
        {
            title: "Data Sources",
            subtitle: "Endpoints, Cloud, Network",
            icon: dataSource
        },
        {
            title: "Cribl Stream",
            subtitle: "Optimization Engine",
            icon: steaming
        },
        {
            title: "LogScale",
            subtitle: "Analysis Platform",
            icon: log
        },
        {
            title: "VISH Portal",
            subtitle: "Unified Dashboard",
            icon: vish
        }
    ];
    const cards2 = [
        {
            icons: setting,
            title: "CrowdStrike",
            subtitle: "Falcon LogScale",
            sectionTitle: "THE ENGINE",
            description: "Our platform is built on LogScale, a leading index-free solution for high-performance log management. This provides the speed and scalability necessary to handle massive data volumes from any modern IT environment.",
            bgColor: "bg-gradient-to-br from-blue-900 to-blue-700"
        },
        {
            icons: increase,
            title: "Cribl Data Engine",
            subtitle: "",
            sectionTitle: "THE PIPELINE",
            description: "We leverage Cribl Stream for advanced data ingestion, filtering, and routing before ingestion. This dramatically reduces SIEM costs, improves data quality, and enhances observability.",
            bgColor: "bg-gradient-to-br from-purple-900 to-purple-700"
        },
        {
            icons: management,
            title: "ViSH Platform",
            subtitle: "",
            sectionTitle: "THE HUB",
            description: "Our proprietary Vijilan Information Security Hub (ViSH), built on AWS, adds a powerful layer of analytics, detection logic, and provides you with a single, unified portal for all alerts, reports, and incident response.",
            bgColor: "bg-gradient-to-br from-green-900 to-green-700"
        }
    ];
    const cards3 = [
        {
            title: "Superior Detection Accuracy",

            description: "By combining LogScale's speed with ViSH's analytics, we identify complex threats and reduce false positives, so your team only focuses on what matters.",
        },
        {
            title: "Demonstrable Cost Savings",

            description: "Cribl integration and optimized data handling can significantly reduce your infrastructure and SIEM licensing costs by up to 40%.",
        },
        {
            title: "Unmatched Flexibility",

            description: "Our vendor-agnostic data collectors and Cribl pipeline mean we can ingest data from hundreds of sources for a single, unified view of risk.",
        },
        {
            title: "Future-Proof Scalability",

            description: "Built on modern, cloud-native architecture, our platform scales effortlessly to meet your growing data volumes and evolving security needs.",
        },

    ];


    return <>
        <div className="max-w-[90%] mx-auto">
            <section className="px-6 py-16">
                <Heading_Btn
                    h1={`The Engine Behind Your Defense: The Vijilan Security Platform`}
                    desc={`Our platform is not a single product, but a unified technology stack that enables \n every Vijilan service. Discover how we combine the power of CrowdStrike, the \n intelligence of Cribl, and our proprietary ViSH platform to deliver security outcomes \n that are faster, smarter, and more efficient.`}
                    btn1={"request a technical deep dive"}
                />

            </section>

            <section className="px-6 py-16">
                <NavyBlueBackground>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Unified Technology Stack</h1>
                    </div>
                    <div className="flex items-center justify-center p-8">
                        <div className="flex items-center overflow-x-auto pb-4">
                            {cards.map((card, index) => (
                                <React.Fragment key={index}>
                                    <CardBorder>
                                        <div className="z-10 text-center w-full space-y-3">
                                            <div className="flex justify-center">
                                                <img src={card?.icon} alt="" className="h-12 w-12 object-contain" />
                                            </div>
                                            <h1 className="text-white text-lg font-semibold">{card?.title}</h1>
                                            <p className="text-white text-sm">{card?.subtitle}</p>
                                        </div>

                                    </CardBorder>

                                    {index < cards.length - 1 && (
                                        <div className="mx-2 mt-12 text-[#F36E21]">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </NavyBlueBackground>
            </section>
            <section className="px-6 py-16">
                <div className="text-center">
                    <h1 className="font-bold mb-8 text-5xl">An Architecture Built for Speed, Scale, and Security</h1>
                    <p className="font-bold text-xl">Three integrated technology layers work in perfect harmony to deliver superior security outcomes <br /> while reducing complexity and cost.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto pb-4">
                        {cards2.map((card, index) => (
                            <CardBorder key={index} width="291px" height="442px">
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-[291px] h-[442px] rounded-xl overflow-hidden shadow-lg text-center"
                                >
                                    <div className="relative z-10 w-full h-full space-y-6 p-6 text-center flex flex-col items-center">
                                        {/* Icon at the top center */}
                                        {card.icons && (
                                            <div className="flex justify-center mb-4">
                                                <img src={card.icons} alt="" className="h-[57px] w-[57px] object-contain" />
                                            </div>
                                        )}

                                        {/* Title Section */}
                                        <div>
                                            <h1 className="text-2xl font-bold text-white">{card.title}</h1>
                                            {card.subtitle && (
                                                <h2 className="text-xl font-semibold text-white mt-1">{card.subtitle}</h2>
                                            )}
                                        </div>

                                        {/* Content Section */}
                                        <div className="space-y-4 flex-grow flex flex-col">
                                            <p className="text-lg font-medium text-[#F1511B]">{card.sectionTitle}</p>
                                            <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardBorder>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 py-16">
                <div className="text-center">
                    <h1 className="font-bold mb-8 text-5xl">How Our Platform Delivers Tangible Benefits</h1>
                    <p className="font-bold text-xl">Advanced technology translates directly into superior security outcomes and business value.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 p-2 max-w-[1200px] mx-auto">
                    {cards3.map((card, index) => (
                        <div key={index} className=""> {/* Added padding to reduce gap between cards */}
                            <CardBorder width="564.5px" height="195px">
                                <div className="w-full h-full rounded-xl overflow-hidden text-left">
                                    <div className="w-full h-full space-y-4 p-6 flex flex-col items-start text-left"> {/* Reduced space-y and padding */}
                                        {/* Title Section */}
                                        <h1 className="text-2xl font-bold text-white">{card.title}</h1>
                                        {/* Content Section */}
                                        <p className="text-gray-300 leading-relaxed font-bold">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </CardBorder>
                        </div>
                    ))}
                </div>
            </section>
            <section className="px-6 py-16">
                <div className="text-center">
                    <h1 className="font-bold mb-8 text-5xl">Find Success Stories Like Yours</h1>
                    <p className="font-bold text-xl">Select your business profile to see relevant case studies and success metrics.</p>
                </div>

                <InfoSection design1={true} width={"495px"} height={"349px"}/>
            </section>
            <section className="px-6 py-16">
                    <NavyBlueBackground w={"1160px"}>
                        <div className="px-50 pt-10 pb-20 text-center">

                        <h1 className="pb-10 font-bold text-4xl">Expert Technical Guidance</h1>
                    <SuccessCard
                        showIcon
                        iconText="JN"
                        subheading="JEN AI"
                        description={`"Want a live walkthrough of the platform \n architecture? I can connect you with a security \n architect to discuss how our unified platform can \n integrate with your specific environment."
`}
                        buttonText="connect with security architect"
                        bgColor="transparent"
                    />
                        </div>
                    </NavyBlueBackground>
            </section>
            <section>
                <Heading_Btn
                    h1={"Ready for a Deeper Dive?"}
                    desc={"Schedule a live, technical demo with one of our security architects to see how the Vijilan platform can integrate with your specific environment."}
                    btn1={"schedule a platform demo"}
                />
            </section>
        </div>
    </>
}

export default PlatformTechnology;