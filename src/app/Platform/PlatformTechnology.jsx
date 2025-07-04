import CardBorder from "@components/CardBorder";
import Heading_Btn from "@components/Heading_Btn";
import NavyBlueBackground from "@components/NavyBlueBackground";
import React from "react";
import { ArrowRight } from "lucide-react";
import dataSource from "../../Assets/data-source.svg"

const PlatformTechnology = ({ }) => {
    const cards = [
        {
          title: "Data Sources",
          subtitle: "Endpoints, Cloud, Network"
        },
        {
          title: "Cribl Stream",
          subtitle: "Optimization Engine"
        },
        {
          title: "LogScale",
          subtitle: "Analysis Platform"
        },
        {
          title: "VISH Portal",
          subtitle: "Unified Dashboard"
        }
      ];
    return <>
        <div className="max-w-[90%] mx-auto">
            <section>
                <Heading_Btn
                    h1={`The Engine Behind Your Defense: The Vijilan Security Platform`}
                    desc={`Our platform is not a single product, but a unified technology stack that enables \n every Vijilan service. Discover how we combine the power of CrowdStrike, the \n intelligence of Cribl, and our proprietary ViSH platform to deliver security outcomes \n that are faster, smarter, and more efficient.`}
                    btn1={"request a technical deep dive"}
                />

            </section>

            <section>
                <NavyBlueBackground>
                    <div>
                        <h1>Unified Technology Stack</h1>
                    </div>
                    <div className="flex items-center justify-center p-8">
                    <div className="flex items-center overflow-x-auto pb-4">
                        {cards.map((card, index) => (
                        <React.Fragment key={index}>
                            <CardBorder>
                            <div className="text-center space-y-3">
                                <h1 className="text-white text-lg font-semibold">{card.title}</h1>
                                <p className="text-[#00AEEF] text-sm">{card.subtitle}</p>
                            </div>
                            </CardBorder>
                            
                            {index < cards.length - 1 && (
                            <div className="mx-2 text-[#00AEEF]">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            )}
                        </React.Fragment>
                        ))}
                    </div>
                    </div>
                </NavyBlueBackground>
            </section>
        </div>
    </>
}

export default PlatformTechnology;