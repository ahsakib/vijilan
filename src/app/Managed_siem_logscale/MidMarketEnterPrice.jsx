import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import React from 'react';
import flag from "../../Assets/flag.png";
import sun from "../../Assets/sun.png";
import build from "../../Assets/build.png";
import hand from "../../Assets/hand.png";
import eye from "../../Assets/eye.png";
import circle from "../../Assets/circle.png";

const MidMarketEnterPrice = () => {
    return (
        <div className='container mx-auto px-6 py-16'>
            {/* Hero Section */}
            <section className="">
                <div className=" text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">From Data Chaos to Strategic Clarity: <br /> Secure Your Enterprise.</h1>
                    <p className="text-[18px] text-white max-w-3xl mx-auto mb-14">
                        Vijilan provides comprehensive, 24/7 managed detection, response, and remediation, <br /> designed to augment your security team, unify your disparate tools, and <br /> demonstrably reduce risk across your entire attack surface.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
                        <GradientButton children={"REQUEST A CUSTOM DEMO"} />
                        <OutlineGradientButton children={"DOWNLOAD THE CISO HANDBOOK"} />
                    </div>

                </div>

            </section>


            <section className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-white mb-4">
                        <span className="text-[#00AEEF]"> The Vijilan Advantage</span>:<br />
                        Secure. Compliant. Partner-Focused.
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 1st */}
                    <div className="relative h-[390px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={circle} alt="" />
                        </div>
                        <h3 className="text-[24px] font-medium text-white mb-3">Unify Your Security Stack</h3>
                        <p className="text-white text-[18px] text-center">
                            We ingest and correlate data from  <br /> your disparate tools, eliminating blind <br /> spots  and providing true <br /> cross-domain  visibility without costly rip-and  -replace projects.
                        </p>
                    </div>

                    <div className="relative h-[300px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[90px] h-[130px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={sun} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Extend Your SOC's Reach</h3>
                        <p className="text-white text-[18px] text-center">
                            Our 24/7 US-Based SOC acts as a <br /> direct  extension of your team,<br /> handling  the  noise of alert triage so <br /> your   experts can focus on strategic initiatives.
                        </p>
                    </div>

                    <div className="relative h-[434px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[130px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={flag} alt="" />
                        </div>
                        <h3 className="text-[23px] font-bold text-white mb-3 text-center">Receive Actionable Incidents</h3>
                        <p className="text-white text-[18px] text-center">
                            Leveraging AI and expert analysis, we <br /> deliver only high-fidelity, actionable <br /> incidents that require your attention, <br /> freeing your team from the noise  of  <br /> false positives.
                        </p>
                    </div>

                    <div className="relative -mt-[40px] h-[390px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[156px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={hand} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Optimize Your Data Costs</h3>
                        <p className="text-white text-[18px] text-center">
                            Demonstrate clear ROI with our data <br /> optimization services powered by <br />Cribl. We can significantly reduce your<br />  SIEM  and data storage costs while <br />  enriching your security data.
                        </p>
                    </div>
                    {/* 5th */}
                    <div className="relative -mt-[130px] h-[450px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={eye} alt="" />
                        </div>
                        <h3 className="text-[23px] font-bold text-white mb-3 text-center">Achieve Full-Stack Visibility <br />  & Unified Defense</h3>
                        <p className="text-white text-[18px] text-center">
                            CISOs want one pane of glass—not 17 <br /> dashboards. We consolidate telemetry <br /> and apply advanced correlation across <br /> endpoints, network, cloud, identity, <br /> and SaaS environments, enabling your <br /> team to see real threats—not isolated <br /> alerts—for better, faster decision <br />-making.
                        </p>
                    </div>

                    <div className="relative h-[480px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <div className="w-[197px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                            <img src={build} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold text-white mb-3">Proactive Risk Reduction & Strategic Enablement</h3>
                        <p className="text-white text-center text-[18px]">
                            CISOs expect MDR to go beyond <br /> monitoring. Our SOC doesn't just <br /> monitor—we treat alerts as <br /> opportunities for improvement, <br /> develop playbooks, optimize SLAs, <br /> and  build cost-effective frameworks <br />that  evolve with your risk posture. <br /> That's strategic partnership.
                        </p>
                    </div>
                </div>
            </section>


            <section className=" py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Main container with border */}
                    <div className="">
                        {/* Header */}
                        <h1 className="text-white text-3xl md:text-[40px] font-bold text-center mb-12">
                            A Security Partnership, Not Just a Product
                        </h1>


                        {/* Main content grid */}
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>

                            {/* Right side - Product information */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-4xl md:text-5xl font-bold">ThreatRemediate™ Ultimate</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Fully Managed Detection, Response & Remediation
                                </h3>

                                <p className="text-white text-[22px] font-bold leading-relaxed">
                                    Our flagship managed XDR service provides full-lifecycle, hands-on remediation. We don't just alert—we
                                    contain and neutralize threats across your endpoints, cloud, identity, and network.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium">
                                        VIEW THREATREMEDIATE DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[60px] grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-4xl md:text-5xl font-bold">Managed SIEM & Data Optimization</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Modernize Your SOC with LogScale & Cribl
                                </h3>

                                <p className="text-white text-[22px] font-bold leading-relaxed">
                                    Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our unique Cribl integration. Gain unparalleled visibility and control over your data while reducing costs.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium uppercase">
                                        explore siem services
                                    </button>
                                </div>
                            </div>

                            {/* Right side - Product information */}

                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>
                        </div>
                        <div className="mt-[60px] grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Placeholder content area */}
                            <div className="relative rounded-[24px] h-[495px] bg-[#00AEEF3D]">
                                <div
                                    className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* This would contain your actual content/image */}
                            </div>

                            {/* Right side - Product information */}
                            <div className="space-y-6">
                                <h2 className="text-[#00AEEF] text-4xl md:text-5xl font-bold">Professional Services</h2>

                                <h3 className="text-white text-xl md:text-2xl font-medium">
                                    Expert Implementation & Management
                                </h3>

                                <p className="text-white text-[22px] font-bold leading-relaxed">
                                    Augment your team with our certified experts for seamless implementation and ongoing management of leading technologies, including Cribl, Corelight, and the full CrowdStrike Falcon platform.
                                </p>

                                <div className="border-2 w-fit p-[16px] border-[#00AEEF] rounded-[8px]">
                                    <button className=" w-fit   text-[18px] font-medium uppercase">
                                        view professional services
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" flex items-center justify-center py-16 rounded-[24px]" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl text-center font-bold text-white mb-12 leading-tight">
                        Achieve and Maintain Compliance with <br /> Confidence
                    </h1>

                    {/* Compliance Badges */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[18px] font-bold">SOC 2</div>
                            <div className="text-[18px] font-bold">Type 2</div>
                            <div className="text-[18px] font-bold">Certified</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[18px] font-bold">HIPAA</div>
                            <div className="text-[18px] font-bold">Ready</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[18px] font-bold">PCI DSS</div>
                            <div className="text-[18px] font-bold">Support</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[18px] font-bold">GDPR</div>
                            <div className="text-[18px] font-bold">Compliant</div>
                        </div>

                        <div className="bg-[#298524D1] rounded-full w-[130px] h-[130px] flex flex-col items-center justify-center text-white">
                            <div className="text-[18px] font-bold">CMMC</div>
                            <div className="text-[18px] font-bold">Ready</div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-white text-lg text-center mx-auto mb-12 leading-relaxed">
                        Our services are designed to help you meet rigorous regulatory standards. We <br /> provide detailed, audit-ready
                        reporting and long-term log retention to support your <br /> compliance needs for HIPAA, GDPR, PCI DSS, CMMC, and
                        more.
                    </p>

                    {/* CTA Button */}
                    <div className='border border-[#00AEEF] rounded-[8px] w-fit flex items-center justify-center mx-auto'>
                        <button className=" text-[#00AEEF] px-8 py-4 font-medium text-lg  uppercase ">
                            Request a Compliance Consultation
                        </button>
                    </div>
                </div>
            </section>




            <section className='py-20 space-y-[40px] flex flex-col items-center justify-center'>
                <h1 className='text-[48px] font-bold text-center'>Ready to Build a More Resilient Security br
                     Posture?</h1>
                <p className='text-[18px]'> See exactly how Vijilan can integrate with your environment and augment your team. <br /> Schedule a technical, no-obligation demo with one of our security architects.</p>
                <GradientButton children={"SCHEDULE A SECURITY ARCHITECT DEMO"} />
            </section>
        </div>
    );
};

export default MidMarketEnterPrice;