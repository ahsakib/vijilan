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
import { Link } from "react-router-dom";

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
            <section className="md:px-6">
                <div className='text-center'>
                    <Heading_Btn h1={`Stop Chasing Alerts. Start Neutralizing\nThreats.`}
                        desc={`Vijilan's managed XDR and SIEM services augment your security team, unifying\nvisibility across your complex environment and delivering expert-led, active\nremediation 24/7.`}
                        btn1={"request a custom demo"}
                        btn2={"download the ciso handbook"}
                        url={"/contact"}
                    />
                </div>
            </section>

            <section className="container mx-auto md:px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white">
                            From Detection to Guided Resolution
                        </h2>
                        <p className="mt-3 text-[18px] text-white">
                            Our comprehensive security process helps keep your organization secure from end to end.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`relative bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={security} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Unify Your Security Stack</h3>
                            <p className="text-white text-center"> We ingest and correlate data from your disparate tools, eliminating blind spots and providing true cross-domain visibility without costly rip-and-replace projects.</p>

                        </div>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[297px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={soc} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Extend Your SOC's Reach</h3>
                            <p className="text-white text-center"> Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of alert triage so your experts can focus on strategic initiatives.</p>

                        </div>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[434px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={actionable} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Receive Actionable Incidents</h3>
                            <p className="text-white text-center"> Leveraging AI and expert analysis, we deliver only high-fidelity, actionable incidents that require your attention, freeing your team from the noise of false positives.</p>

                        </div>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[393px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={data} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Optimize Your Data Costs</h3>
                            <p className="text-white text-center"> Demonstrate clear ROI with our data optimization services powered by Cribl. We can significantly reduce your SIEM and data storage costs while enriching your security data.</p>

                        </div>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[441px] lg:-mt-[135px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={fullstack} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Achieve Full-Stack Visibility & Unified Defense</h3>
                            <p className="text-white text-center"> CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply advanced correlation across endpoints, network, cloud, identity, and SaaS environments, enabling your team to see real threats—not isolated alerts—for better, faster decision-making.</p>

                        </div>
                        <div className={`relative bg-[#00AEEF3D] lg:h-[486px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}/>
                            <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={riskRed} alt="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Proactive Risk Reduction & Strategic Enablement</h3>
                            <p className="text-white text-center"> CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build cost-effective frameworks that evolve with your risk posture. That's strategic partnership.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto md:px-1 pt-16">
                <div className="text-center">
                    <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white">
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
                    url={"/threat-respond-service-2"}
                />

            </section>

            <section className="container mx-auto md:px-5 pt-16 md:pt-0">
                <InfoSection
                    design2={true}
                    width={"495px"}
                    height={"495px"}
                    heading={"Managed SIEM & Data Optimization"}
                    desc={"Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our unique Cribl integration. Gain unparalleled visibility and control over your data while reducing costs."}
                    subtitle={"Modernize Your SOC with LogScale & Cribl"}
                    btnText={"explore siem services"}
                    url={"/managed-siem-soc"}
                />

            </section>

            <section className="container mx-auto md:px-3">
                <InfoSection
                    design2={true}
                    width={"495px"}
                    height={"495px"}
                    heading={"Professional Services"}
                    desc={"Augment your team with our certified experts for seamless implementation and ongoing management of leading technologies, including Cribl, Corelight, and the full CrowdStrike Falcon platform."}
                    subtitle={"Expert Implementation & Management"}
                    btnText={"view professional services"}
                    position="left"
                    url={"/visilan-professional-service"}
                />

            </section>

            <section className="container md:px-2  mx-auto">
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

                        <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="mt-10">
                            <div class="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
text-center select-none uppercase">
                                request a compliance consultation
                            </div>
                        </Link>
                    </div>
                </NavyBlueBackground>

            </section>

            <section className="pb-16">
                <Heading_Btn
                    h1={"Ready to Build a More Resilient Security\nPosture?"}
                    desc={"See exactly how Vijilan can integrate with your environment and augment your team.\nSchedule a technical, no-obligation demo with one of our security architects."}
                    btn5={"schedule a security architect demo"}
                    
                />
                
            </section>
        </div>
    </>
}

export default EnterpriseLanding;