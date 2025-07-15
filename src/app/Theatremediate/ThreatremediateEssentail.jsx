import CardBorder from '@components/CardBorder';
import React from 'react';
import cp1 from "../../Assets/cp1.png";
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';

const modules = [
    {
        id: 1,
        icon: cp1,
        title: "Complex & Costly",
        price: "$5",
        unit: "per endpoint",
        description:
            "Endpoint-based detection and response for workstations, laptops, and standard computing devices. Powered by CrowdStrike Falcon for industry-leading endpoint protection.",

    },
    {
        id: 2,
        icon: cp1,
        title: "TRX Identity",
        price: "$3",
        unit: "per user",
        description:
            "User-based identity threat detection and response. Monitors authentication events, privilege escalations, and identity-based attacks across your organization.",

    },
    {
        id: 3,
        icon: cp1,
        title: "TRX Exposure (Visibility)",
        price: "$4",
        unit: "per endpoint",
        description:
            "Includes CrowdStrike Falcon Discover & Spotlight for comprehensive asset visibility and vulnerability management. Provides complete attack surface visibility.",

    },
    {
        id: 4,
        icon: cp1,
        title: "Critical Servers",
        price: "$30",
        unit: "per server",
        description:
            "Enhanced monitoring for Domain Controllers and other critical infrastructure. Includes TRX Endpoint and TRX Exposure bundled at $8 per server for security event monitoring, plus advanced critical server protection.",

    },
    {
        id: 5,
        icon: cp1,
        title: "Firewalls and Security Appliances",
        price: "$99",
        unit: "per appliance",
        description:
            "Comprehensive monitoring for network security devices including Cisco, Fortigate, SonicWALL, Meraki, and other enterprise security appliances.",

    },
    {
        id: 6,
        icon: cp1,
        title: "Other Cloud Sources",
        price: "$2",
        unit: "per user",
        description:
            "Monitoring and security event collection from cloud applications including Microsoft 365, Google Workspace, AWS, Azure, and GCP environments.",

    },
]

const features = [
    {
        title: "Powered by CrowdStrike",
        description: "Leverage industry-leading technology with CrowdStrike Falcon platform integration.",
    },
    {
        title: "Managed by Vijilan's SOC",
        description: "24/7 expert oversight and remediation from our SOC 2 Type 2 certified security operations center.",
    },
    {
        title: "Cribl-Optimized",
        description: "Efficient data management and cost control through our strategic Cribl partnership.",
    },
    {
        title: "Partner Enablement",
        description: "Access to comprehensive sales and marketing resources, training, and support materials.",
    },
    {
        title: "Flexible Terms",
        description: "No minimums, 30-day opt-out trial, and transparent pricing that scales with your business.",
    },
    {
        title: "Compliance Ready",
        description: "Built-in support for HIPAA, GDPR, PCI DSS, CMMC, and other regulatory requirements.",
    },
]


const ThreatremediateEssentail = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <section className='container mx-auto px-6 py-16 '>
                <Heading_Btn
                    h1="ThreatRemediate Essentials: Flexible, Modular   Security for Your Clients"
                    desc="Build the perfect cybersecurity solution by selecting the exact modules your clients  need, backed by Vijilan's expert SOC"
                />

                <div className='flex flex-wrap justify-center items-center gap-5'>
                    <CardBorder height="122px" width="106px" borderSize={true}>
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2">Add icon</div>

                        </div>
                    </CardBorder>
                    <CardBorder height="122px" width="106px">
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2">Add icon</div>

                        </div>
                    </CardBorder>
                    <CardBorder height="122px" width="106px">
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2">Add icon</div>

                        </div>
                    </CardBorder>
                    <CardBorder height="122px" width="106px">
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2">Add icon</div>

                        </div>
                    </CardBorder>
                    <CardBorder height="122px" width="106px">
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2">Add icon</div>

                        </div>
                    </CardBorder>
                    <CardBorder height="122px" width="106px">
                        <div className='min-h-24 min-w-24 flex justify-center items-center'>
                            <div className="text-white text-[16px] font-medium mb-2 ">Add icon</div>

                        </div>
                    </CardBorder>
                </div>
                <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className='flex items-center justify-center mt-[60px]'>
                        <button className='uppercase font-medium text-[18px] p-[16px] rounded-[8px]' style={{
                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                        }}>access partner portal for pricing and custom builder</button>
                    </div>
                </Link>
            </section>


            <section className="container mx-auto p-2 md:px-6 py-20" >
                <div className="py-[75px] px-10 lg:px-[78px] rounded-[24px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    {/* Main Container */}
                    <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] p-4 lg:p-10">
                        <div
                            className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        {/* Header Section */}
                        <div className="">
                            <h2 className="text-[22px] font-bold text-white mb-6">Why Choose a Modular Approach?</h2>
                            <p className="text-white text-lg leading-relaxed max-w-4xl">
                                Not all clients need the same level of security, and a modular approach allows partners to tailor
                                solutions, optimize  costs, and meet specific client requirements. Emphasize flexibility and scalability.
                            </p>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-3  m-2 lg:ml-8">

                            <CardBorder height="171px" width="180px" className="p-2" radiusSize={true}>
                                <div className='p-5'>
                                    <div className="text-white text-[13px] font-medium mb-2">Add icon</div>
                                    <div className="text-white text-[13px] font-medium mb-2">Tailored protection</div>
                                    <div className="text-white text-[10px] font-medium">Simplified Management</div>
                                </div>
                            </CardBorder>
                            <CardBorder height="171px" width="180px" className="p-2" radiusSize={true}>
                                <div className='p-5'>
                                    <div className="text-white text-[13px] font-medium mb-2">Add icon</div>
                                    <div className="text-white text-[13px] font-medium mb-2">Cost Optimization</div>
                                    <div className="text-white text-[10px] font-medium">Easily add modules as client needs evolve</div>
                                </div>
                            </CardBorder>
                            <CardBorder height="171px" width="180px" className="p-2" radiusSize={true}>
                                <div className='p-5'>
                                    <div className="text-white text-[13px] font-medium mb-2">Add icon</div>
                                    <div className="text-white text-[13px] font-medium mb-2">Scalable Growth</div>
                                    <div className="text-white text-[10px] font-medium">Clients only pay for the protection they require</div>
                                </div>
                            </CardBorder>
                            <CardBorder height="171px" width="180px" className="p-2" radiusSize={true}>
                                <div className='p-5'>
                                    <div className="text-white text-[13px] font-medium mb-2">Add icon</div>
                                    <div className="text-white text-[13px] font-medium mb-2">Simplified Management</div>
                                    <div className="text-white text-[10px] font-medium">Deliver precise security for unique client needs</div>
                                </div>
                            </CardBorder>



                        </div>
                    </div>
                </div>
            </section>



            <section className=" relative overflow-hidden">
                <div className="relative z-10 container mx-auto px-6 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-[40px] font-bold text-white mb-4">ThreatRemediate Essentials: Core Modules</h1>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className={`relative rounded-[24px] p-5 md:p-8 border bg-[#00AEEF3D] backdrop-blur-sm `}>
                                <div
                                    className={`absolute inset-0 rounded-[24px] p-[1px] z-0 $`}
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Icon and Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="">
                                        <img src={cp1} alt="" className='w-[64px] h-[64px]' />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[24px] font-medium text-white mb-2">{module.title}</h3>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-[24px] font-medium text-[#00AEEF]">{module.price}</span>
                                            <span className=" text-sm">{module.unit}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white text-[18px] leading-relaxed">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </section>


            <section className="container mx-auto px-3 md:px-6 py-16" >
                <div className="rounded-[24px] py-[60px] px10 md:px-[87px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-[40px] font-bold text-white mb-3">Build Your Custom Solution</h1>
                        <p className=" text-lg px-2">
                            Select modules and quantities to see real-time pricing with automatic discounts
                        </p>
                    </div>

                    {/* Module Selection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* TRX Identity - Endpoint */}
                        <div className=" p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-[13px]">TRX Identity</span>
                                <span className="text-[#00AEEF] text-[13px]">$5/endpoint</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>

                        {/* TRX Identity - User */}
                        <div className=" p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-[13px]">TRX Identity</span>
                                <span className="text-[#00AEEF] text-[13px]">$3/user</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>

                        {/* TRX Exposure */}
                        <div className=" p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-[13px]">TRX Exposure</span>
                                <span className="text-[#00AEEF] text-[13px]">$4/endpoint</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>

                        {/* Critical Servers */}
                        <div className=" p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-[13px]">Critical Servers</span>
                                <span className="text-[#00AEEF] text-[13px]">$30/server</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>

                        {/* Firewalls & Appliances */}
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white text-[13px]">Firewalls & Appliances</span>
                                <span className="text-[#00AEEF] text-[13px]">$99/appliance</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>

                        {/* Cloud Sources */}
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-[13px]">Cloud Sources</span>
                                <span className="text-[#00AEEF] text-[13px]">$2/user</span>
                            </div>
                            <select className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] appearance-none">
                                <option value="0" className='text-black'>0</option>
                                <option value="1" className='text-black'>1</option>
                                <option value="5" className='text-black'>5</option>
                                <option value="10" className='text-black'>10</option>
                                <option value="25" className='text-black'>25</option>
                                <option value="50" className='text-black'>50</option>
                            </select>
                        </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className="bg-[#97D0FA3D] backdrop-blur-sm rounded-[13px] p-8 text-center">
                        <h2 className="text-white text-lg font-bold mb-4">Monthly Total</h2>
                        <div className="text-[40px] font-bold text-[#00AEEF] mb-6">0$</div>

                        <div className="text-gray-300 text-[18px] mb-2">Select 3 or more modules for 15% discount</div>
                        <div className="text-gray-300 text-[18px] mb-6">Choose annual payment for additional 15% discount</div>

                        <div className="text-white text-[18px] mb-8">Annual Payment (Additional 15% Discount)</div>
                        <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <button className=" text-white font-medium p-3 md:p-[16px] rounded-lg text-[18px] " style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>
                                GET OFFICIAL PRICING AND START TRIAL
                            </button>
                        </Link>
                    </div>
                </div>
            </section>



            <section className='container mx-auto px-6 py-16'>
                <div className='mb-12'>
                    <h1 className='text-2xl md:text-[40px] font-bold text-center mb-5'>Unlock Additional Savings</h1>
                    <p className='text-[18px] text-center'>Maximize your value with our transparent discount structure</p>
                </div>

                <div className=' flex flex-col md:flex-row gap-12'>

                    <div className='relative py-[45px] px-[51px] bg-[#00AEEF3D] rounded-[24px]'>
                        <div
                            className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className='text-center'>
                            <div className=" text-[24px] font-medium text-[#00AEEF] uppercase mb-1">Add icon</div>
                            <p className='text-[24px] font-medium text-[#00A991] mb-1'>15%</p>
                            <div className=" text-[24px] font-medium mb-4">Bundle Discount</div>
                            <p className='text-[18px]'>Receive a 15% discount when you choose three or more <br /> modules for your client's security solution..</p>
                        </div>
                    </div>


                    <div className='relative py-[45px] px-2 md:px-[51px] bg-[#00AEEF3D] rounded-[24px]'>
                        <div
                            className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className='text-center'>
                            <div className="text-[24px] font-medium text-[#00AEEF] uppercase mb-1">Add icon</div>
                            <p className='text-[24px] font-medium text-[#00A991] mb-1'>15%</p>
                            <div className="text-[24px] font-medium mb-4" >Annual Payment Discount</div>
                            <p className="text-[18px]">Get an additional 15% discount when you opt for annual <br /> upfront payment. Combines with bundle discount for <br /> maximum savings.</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className="container mx-auto px-3 md:px-6 py-16">
                <div className="">
                    <div className=" rounded-3xl py-[50px] px-3 md:px-12 lg:px-[113px]" style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>
                        <h1 className="text-white text-[27px] font-bold text-center mb-12">
                            The Vijilan Advantage: Expert-Backed, Partner-Focused
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center text-white">
                                    <p className="text-[20px] font-medium mb-2">Add Icon</p>
                                    <h3 className="text-[20px] font-medium mb-2">{feature.title}</h3>

                                    <p className=" text-[16px] leading-relaxed text-center">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <section className='container mx-auto px-6 py-16'>
                

                <Heading_Btn
                    h1="Build Your Custom Solution & Get Pricing"
                    desc="Ready to deliver enterprise-grade security with modular flexibility? Connect with our partner team to access official pricing, <br /> start your 30-day trial, and begin growing your security practice."
                    btn1="BUILD YOUR CUSTOM SOLUTION AND GET PRICING"
                    btn2="DOWNLOAD THREATREMEDIATE ESSENTIALS SOLUTION BRIEF"
                    url={"/pricing-tool"}
                />
            </section>
        </div>
    );
};

export default ThreatremediateEssentail;