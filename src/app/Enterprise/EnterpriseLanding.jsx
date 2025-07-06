// Responsive complete

import Heading_Btn from "@components/Heading_Btn";
import React from "react";
import security from "../../Assets/security.svg";
import soc from "../../Assets/soc.svg";
import actionable from "../../Assets/actionable.svg";
import data from "../../Assets/data.svg";
import fullstack from "../../Assets/full-stack.svg";
import riskRed from "../../Assets/risk-reduation.svg";
import SecurityCard from "@components/SecurityCard";
import InfoSection from "@components/InfoSection";
import NavyBlueBackground from "@components/NavyBlueBackground";

const EnterpriseLanding = ({ }) => {

    const strategicCardData = [
        {
            icon: security,
            title: "Unify Your Security Stack",
            description: `We ingest and correlate data from your disparate tools, eliminating blind spots and providing true cross-domain visibility without costly rip-and-replace projects.`,
            height: "390px",
        },
        {
            icon: soc,
            title: "Extend Your SOC's Reach",
            description: `Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of alert triage so your experts can focus on strategic initiatives.`,
            height: "300px",
        },
        {
            icon: actionable,
            title: "Receive Actionable Incidents",
            description: `Leveraging AI and expert analysis, we deliver only high-fidelity, actionable incidents that require your attention, freeing your team from the noise of false positives.`,
            height: "434px",
        },
        {
            icon: data,
            title: "Optimize Your Data Costs",
            description: `Demonstrate clear ROI with our data optimization services powered by Cribl. We can significantly reduce your SIEM and data storage costs while enriching your security data.`,
            height: "335px",
            marginTop: "40px",
        },
        {
            icon: fullstack,
            title: "Achieve Full-Stack Visibility & Unified Defense",
            description: `CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply advanced correlation across endpoints, network, cloud, identity, and SaaS environments, enabling your team to see real threats—not isolated alerts—for better, faster decision-making.`,
            height: "405px",
            marginTop: "130px",
        },
        {
            icon: riskRed,
            title: "Proactive Risk Reduction & Strategic Enablement",
            description: `CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build cost-effective frameworks that evolve with your risk posture. That's strategic partnership.`,
            height: "420px",
        },
    ];
    return <>

        <div className="max-w-[90%] mx-auto">
            <section className="px-6 py-16">
                <div className='text-center'>
                    <Heading_Btn h1="Stop Chasing Alerts. Start Neutralizing Threats."
                        desc="Vijilan's managed XDR and SIEM services augment your security team, unifying visibility across your complex environment and delivering expert-led, active remediation 24/7."
                        btn1={"request a custom demo"}
                        btn2={"download the ciso handbook"}
                    />
                </div>
            </section>
            <section className="px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white">
                            From Detection to Guided Resolution
                        </h2>
                        <p className="mt-4 text-[18px] text-white">
                            Our comprehensive security process helps keep your organization secure from end to end.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {strategicCardData.map((item, index) => (
                            <SecurityCard key={index} data={item} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-6 py-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                        Comprehensive Solutions for Your Entire Attack Surface
                    </h2>
                </div>
                <InfoSection
                    design2={true}
                    width={"495px"}
                    height={"495px"}
                    heading={"ThreatRemediate™ Ultimate"}
                    desc={"Our flagship managed XDR service provides full-lifecycle, hands-on remediation. We don't just alert—we contain and neutralize threats across your endpoints, cloud, identity, and network."}
                    subtitle={"Fully Managed Detection, Response & Remediation"}
                    btnText={"view threatremediate details"}
                    position="left"
                />

            </section>
            <section className="px-6 py-16">
                <InfoSection
                    design2={true}
                    width={"495px"}
                    height={"495px"}
                    heading={"Managed SIEM & Data Optimization"}
                    desc={"Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our unique Cribl integration. Gain unparalleled visibility and control over your data while reducing costs."}
                    subtitle={"Modernize Your SOC with LogScale & Cribl"}
                    btnText={"explore siem services"}
                />

            </section>
            <section className="px-6 py-16">
                <InfoSection
                    design2={true}
                    width={"495px"}
                    height={"495px"}
                    heading={"Professional Services"}
                    desc={"Augment your team with our certified experts for seamless implementation and ongoing management of leading technologies, including Cribl, Corelight, and the full CrowdStrike Falcon platform."}
                    subtitle={"Expert Implementation & Management"}
                    btnText={"view professional services"}
                    position="left"
                />

            </section>
            <section className="px-6 py-16 max-w-8xl mx-auto">
                <NavyBlueBackground>
                    <div class="flex flex-col items-center justify-center gap-8 text-center  py-12">
                        <div class="flex items-center justify-center  px-2 md:px-8    py-6 bg-transparent border-2 border-[#00AEEF] rounded-full shadow-sm font-sans hover:bg-[#00AEEF]/10 transition-colors duration-200">
                            <span class="text-white font-bold text-xl tracking-wide">SOC 2 Type II Certified</span>
                        </div>

                        <div class="space-y-6 max-w-4xl ">
                            <h1 class="font-bold text-xl md:text-3xl lg:text-5xl text-white">
                                Achieve and Maintain Compliance with Confidence
                            </h1>
                            <p class="text-sm  md:text-lg text-white/80 leading-relaxed">
                                Our services are designed to help you meet rigorous regulatory standards.
                                We provide detailed, audit-ready reporting and long-term log retention to support your
                                compliance needs for HIPAA, GDPR, PCI DSS, CMMC, and more.
                            </p>
                        </div>

                        <div class="flex flex-wrap items-center justify-center gap-3 mt-8 max-w-4xl">
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">HIPAA</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">GDPR</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">PCI DSS</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">CMMC</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">SOX</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">NIST</span>
                            </div>
                            <div class="flex items-center justify-center px-6 h-[36px] bg-transparent border border-white rounded-full hover:bg-white/10 transition-colors duration-200">
                                <span class="text-white font-bold text-sm tracking-wide">ISO 27001</span>
                            </div>
                        </div>

                        <div class="mt-10">
                            <div class="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
text-center select-none uppercase">
                                request a compliance consultation
                            </div>
                        </div>
                    </div>
                </NavyBlueBackground>

            </section>
            <section>
                <Heading_Btn
                    h1={"Ready to Build a More Resilient Security Posture?"}
                    desc={"See exactly how Vijilan can integrate with your environment and augment your team. Schedule a technical, no-obligation demo with one of our security architects."}
                    btn1={"schedule a security architect demo"}
                />
            </section>
        </div>
    </>
}

export default EnterpriseLanding;