import React, { useState } from 'react';
import pc from "../../Assets/pc.png";
import investi from "../../Assets/Investigate.png";
import manCall from "../../Assets/callMane.png";
import writing from "../../Assets/writing.png";
import { Plus } from 'lucide-react';




const pricingPlans = [
    {
        title: "ThreatRespond",
        description: "Managed Detection & Response with expert-guided incident handling",
        price: "$12",
        billingUnit: "per asset/month",
        features: [
            "24/7 SOC monitoring and detection",
            "Expert-guided incident response",
            "Threat hunting and analysis",
            "Basic remediation guidance",
            "Monthly security reporting",
            "Email and phone support",
            "Basic compliance documentation",
        ],
        buttonText: "START FREE TRIAL",
    },
    {
        title: "ThreatRemediate™",
        description: "Full Managed XDR with automated threat remediation",
        price: "$18",
        billingUnit: "per asset/month",
        features: [
            "Everything in ThreatRespond",
            "Automated threat remediation",
            "Advanced threat intelligence",
            "Identity threat detection (ITDR)",
            "Cloud security monitoring",
            "White-label portal options",
            "Comprehensive compliance reporting",
        ],
        buttonText: "START FREE TRIAL",
    },
    {
        title: "Professional Services",
        description: "Expert implementation and management of third-party security tools",
        price: "$8",
        billingUnit: "per asset/month",
        features: [
            "CrowdStrike Falcon management",
            "Corelight network detection",
            "Cribl data optimization",
            "LogScale SIEM management",
            "Custom integration support",
            "Performance optimization",
            "Dedicated technical account manager",
        ],
        buttonText: "LEARN MORE",
    },
]

const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};


const pricingData = [
    {
        service: "managed itdr",
        monthly: "$5/ASSET",
        annual: "$4.25/ASSET",
        description: "identity threat detection and response",
    },
    {
        service: "managed exposure management",
        monthly: "$6/ASSET",
        annual: "$5.10/ASSET",
        description: "continuous exposure assessment and remediation",
    },
    {
        service: "managed exposure management",
        monthly: "$6/ASSET",
        annual: "$2.55/GB",
        description: "high-speed log ingestion and management",
    },
    {
        service: "additional users",
        monthly: "$25/USER",
        annual: "$21.25/USER",
        description: "extra portal access beyond included users",
    },
]


const PricingPage = () => {

    const CardContentData = ({ children, className = "", ...props }) => {
        return (
            <div className={` ${className}`} {...props}>
                {children}
            </div>
        );
    };


    const [isAnnually, setIsAnnually] = useState(false)

    const pricingPlans = [
        {
            title: "ThreatRespond",
            description: "Managed Detection & Response with expert-guided incident handling",
            price: isAnnually ? "$10" : "$12", // Example: adjust price for annual
            billing: "Billed monthly",
            features: [
                "24/7 SOC monitoring and detection",
                "Expert-guided incident response",
                "Threat hunting and analysis",
                "Basic remediation guidance",
                "Monthly security reporting",
                "Email and phone support",
                "Basic compliance documentation",
            ],
            buttonText: "START FREE TRIAL",
        },
        {
            title: "ThreatRemediate™",
            description: "Full Managed XDR with automated threat remediation",
            price: isAnnually ? "$15" : "$18", // Example: adjust price for annual
            billing: "Billed monthly",
            features: [
                "Everything in ThreatRespond",
                "Automated threat remediation",
                "Advanced threat intelligence",
                "Identity threat detection (ITDR)",
                "Cloud security monitoring",
                "White-label portal options",
                "Comprehensive compliance reporting",
            ],
            buttonText: "START FREE TRIAL",
        },
        {
            title: "Professional Services",
            description: "Expert implementation and management of third-party security tools",
            price: isAnnually ? "$7" : "$8", // Example: adjust price for annual
            billing: "Add-on service, billed monthly",
            features: [
                "CrowdStrike Falcon management",
                "Corelight network detection",
                "Cribl data optimization",
                "LogScale SIEM management",
                "Custom integration support",
                "Performance optimization",
                "Dedicated technical account manager",
            ],
            buttonText: "LEARN MORE",
        },
    ]

    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className=' py-16'>
                <div className=''>
                    {/* content */}
                    <div className='mb-10'>
                        <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Transparent, Predictable Pricing</h1>
                        <p className='text-[18px] text-center mt-10'>No hidden fees, no surprise charges. Simple pay-per-asset pricing that scales with <br /> your business. Get enterprise-grade cybersecurity without the enterprise complexity.</p>
                    </div>
                    {/* card */}
                    <div className=' flex justify-center flex-wrap gap-10'>
                        <p className='text-[18px] font-medium' style={{ color: "#37D962B2" }}>✓30-Day Risk-Free Trial</p>
                        <p className='text-[18px] font-medium' style={{ color: "#37D962B2" }}>✓No Setup Fees</p>
                        <p className='text-[18px] font-medium' style={{ color: "#37D962B2" }}>✓ CANCEL ANYIME</p>
                        <p className='text-[18px] font-medium' style={{ color: "#37D962B2" }}>✓24/7 US-Based SOC</p>
                    </div>
                </div>

            </section>


            {/*  */}
            <section className='pb-16'>
                <div className="flex items-center justify-center space-x-3 mb-12">
                    <label htmlFor="billing-toggle" className="text-[16px] text-white">
                        Monthly
                    </label>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            id="billing-toggle"
                            className="sr-only peer"
                            checked={isAnnually}
                            onChange={() => setIsAnnually(!isAnnually)}
                        />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-white relative">
                            <div className="absolute left-1 top-1 bg-gray-400 h-4 w-4 rounded-full transition-all peer-checked:translate-x-5"></div>
                        </div>
                    </label>

                    <label htmlFor="billing-toggle" className="text-[16px] text-white">
                        Annually
                    </label>

                    <span className="inline-flex items-center rounded-[10px] bg-[#32A24C1A] text-[16px] px-[8px]" style={{ color: "#34A853" }}>
                        save 15%
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative bg-[#00AEEF3D] rounded-[16px] flex flex-col py-8" >
                            <div
                                className={`absolute inset-0 rounded-[16px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-medium text-white mb-2 text-center">{plan.title}</h1>
                                <p className=" text-[16px] mb-4 text-center">{plan.description}</p>
                                <div className=" mb-4 text-center">
                                    <span className=" text-[30px] md:text-[40px] font-bold " style={{ color: "#00AEEF" }}>{plan.price}</span>
                                    <span className=" ml-2 text-[16px]" style={{ color: "#00AEEF" }}>per asset/month</span>
                                </div>
                                <p className="text-[24px] font-medium text-white text-center">{plan.billing}</p>
                            </div>
                            <div className="p-6 pt-0 flex-grow">
                                <ul className="space-y-2 list-disc list-inside">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className=" text-[18px]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center justify-center mx-auto border border-[#00AEEF] px-[18px] py-[15px] rounded-[8px]">
                                <button
                                    className="w-fit text-center text-[17px] font-medium uppercase">
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/*  */}
            <section className='py-16'>
                <div className=" overflow-hidden">
                    <table className="w-full " style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>
                        <thead className=''>
                            <tr className='text-center'>
                                <th
                                    scope="col"
                                    className="py-4 px-4 uppercase text-[17px] font-medium text-white">
                                    Add On Services
                                </th>
                                <th
                                    scope="col"
                                    className="py-4 px-4 uppercase text-[17px] font-medium text-white">
                                    Monthly Prices
                                </th>
                                <th
                                    scope="col"
                                    className="py-4 px-4 uppercase text-[17px] font-medium text-white">
                                    Annual Prices
                                </th>
                                <th
                                    scope="col"
                                    className="py-4 px-4 uppercase text-[17px] font-medium text-white">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((row, index) => (
                                <tr key={index} className="text-white border">
                                    <td className="py-4 px-4 text-[17px]  font-medium ">
                                        {row.service}
                                    </td>
                                    <td className="py-4 px-4 text-[17px] font-medium ">
                                        {row.monthly}
                                    </td>
                                    <td className="py-4 px-4 text-[17px] font-medium ">
                                        {row.annual}
                                    </td>
                                    <td className="py-4 px-4 text-[17px] font-medium ">
                                        {row.description}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>



            {/* 4 card */}
            <section className="py-16">
                <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="max-w-4xl text-center mb-12">
                        <h1 className="text-[30px] md:text-4xl lg:text-5xl font-bold mb-4">Enterprise & Custom Solutions</h1>
                        <p className="text-[18px]">
                            For organizations with 1,000+ assets or unique requirements, we offer customized <br /> enterprise packages with dedicated resources and tailored pricing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
                        {/* Card 1: Threat Landscape Overview */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[280px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0`}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={pc} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Dedicated SOC Team</h2
                                >
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Your own team of security analysts <br /> exclusively focused on your <br /> environment
                            </h1>
                        </div>

                        {/* Card 2: Security Framework Selection */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[220px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={investi} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Custom Integrations</h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Bespoke integrations with your <br /> existing security stack and business <br /> tools
                            </h1>
                        </div>


                        {/* Card 4: Detection and Monitoring */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[241px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={manCall} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Executive Reporting </h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Custom dashboards and reports <br /> tailored to your business objectives
                            </h1>
                        </div>

                        {/* Card 4: Incident Response Planning */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[233px] lg:-mt-[60px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={writing} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">SLA Guarantees</h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Custom SLAs with financial penalties <br /> for missed response times
                            </h1>
                        </div>

                    </div>

                    <div className='flex items-center justify-center mx-auto border border-[#00AEEF] rounded-[8px] py-[14px] px-[18px] mt-10'>
                        <button className='text-[16px] font-medium   '>CONTACT SALES</button>
                    </div>
                </div>
            </section>


            {/* 4 card */}
            <section className="py-16">
                <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="max-w-4xl text-center mb-12">
                        <h1 className="text-[30px] md:text-4xl lg:text-5xl font-bold mb-4">Channel Partner Program</h1>
                        <p className="text-[18px]">
                            Special pricing and program benefits for MSPs, MSSPs, VARs, and technology <br /> partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
                        {/* Card 1: Threat Landscape Overview */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[280px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0`}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={pc} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Volume Discounts</h2
                                >
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Up to 40% off standard pricing based <br /> on commitment levels
                            </h1>
                        </div>

                        {/* Card 2: Security Framework Selection */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[220px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={investi} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">White-Label Options</h2
                                >
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Complete co-branding of portals, <br /> reports, and communications
                            </h1>
                        </div>


                        {/* Card 4: Detection and Monitoring */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[241px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={manCall} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">PSA Integration </h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Seamless integration with <br /> ConnectWise, Autotask, and other PSA <br /> tools
                            </h1>
                        </div>

                        {/* Card 4: Incident Response Planning */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[233px] lg:-mt-[60px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={writing} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Sales Enablement</h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Marketing materials, training, and <br /> dedicated partner support
                            </h1>
                        </div>

                    </div>

                    <div className='flex items-center justify-center mx-auto border border-[#00AEEF] rounded-[8px] py-[14px] px-[18px] mt-10'>
                        <button className='text-[16px] font-medium   '>PARTNER PROGRAM DETAILS</button>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            < section className="relative z-10 py-16" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-[40px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            'What counts as a "monitored asset"?',
                            'What counts as a "monitored asset"?',
                            'What counts as a "monitored asset"?',
                            'What counts as a "monitored asset"?',
                            'What counts as a "monitored asset"?',
                        ].map((question, index) => (
                            <Card key={index} className="relative rounded-[8px]" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}>
                                <div
                                    className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                    style={{
                                        background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",

                                    }}
                                />
                                <CardContentData className="p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white text-[16px]">{question}</span>
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    </div>
                                </CardContentData>
                            </Card>
                        ))}
                    </div>
                </div>
            </section >


            {/*  */}
            <section className='py-16' >
                <div className='space-y-8 py-12 rounded-[24px]' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <h1 className='text-[24px] font-medium text-center' style={{ color: "#00AEEF" }}>Ready to Get Started?</h1>
                    <p className='text-[24px] font-medium text-center'>Join over 5,000 organizations that trust Vijilan to protect their digital assets. Start your 30-day <br /> risk-free trial today.</p>

                    <div className='flex flex-col md:flex-row items-center justify-center mx-auto gap-10'>
                        <button
                            className={`p-[18px] rounded-[8px] text-white inline-flex items-center space-x-4`}
                            style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                            }}>

                            <span className='uppercase text-[18px] font-medium'>start free trial</span>
                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </button>

                        <div className="p-[18px] capitalize rounded-lg text-white border-1 border-[#00AEEF] inline-flex items-center space-x-4">
                            <span className='uppercase text-[18px] font-medium'>TALK TO SALES</span>

                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default PricingPage;