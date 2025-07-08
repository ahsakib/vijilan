import React, { useState } from 'react';
import { ChevronDown, Search } from "lucide-react"
import investigate from "../../Assets/Investigate.png";

const PricingTool = () => {
    const tools = [
        {
            icon: investigate,
            title: "ThreatRemediate™ Sales Deck",
            description: "Complete presentation with sales value props and ROI calculations",
        },
        {
            icon: investigate,
            title: "Co-Brandable One-Pager",
            description: "Customizable single-page overview for quick client presentations",
        },
        {
            icon: investigate,
            title: "Proposal Template",
            description: "Professional proposal template with your branding",
        },
        {
            icon: investigate,
            title: "Competitive Battlecards",
            description: "Talking points and objection handling vs competitors",
        },
        {
            icon: investigate,
            title: "Buyer Persona Guides",
            description: "Detailed profiles with pain points and buying triggers",
        },
        {
            icon: investigate,
            title: "Email & Call Templates Kit",
            description: "Ready-to-use outreach templates for every buying stage",
        },
    ]

    const [totals, setTotals] = useState({
        subtotal: 0,
        totalMonthlyCost: 0,
    })
    return (
        <div className=''>

            <section className='py-16'>
                <div className="w-full h-auto md:h-[227px] p-2 flex justify-center items-center " style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" >
                        {/* Left content */}
                        <div className="flex-1 max-w-2xl">
                            <h1 className="text-white text-4xl md:text-[40px] font-bold mb-6 leading-tight">
                                Welcome to the Partner Portal!
                            </h1>
                            <p className="text-white text-16px leading-relaxed">
                                Build custom quotes, explore pricing scenarios, and access exclusive partner <br /><br /> resources.
                            </p>
                        </div>

                        {/* Right button */}
                        <div className="border border-[#00AEEF] rounded-[8px]">
                            <button className="font-medium text-[16px] p-[16px]">
                                NEW QUOTE
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container mx-auto px-6 ">
                <div className="h-auto md:h-[304px] rounded-3xl p-12 w-full text-center" style={{
                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                }}>

                    <h2 className="text-white text-4xl md:text-[40px] font-bold mb-6">Ready to Make It Official?</h2>

                    <p className="text-white text-[12px] md:text-[16px] mb-8 font-medium leading-relaxed">
                        You've seen the pricing and the resources. The next step is to join our network of <br /> successful partners.
                    </p>

                    <button className="bg-white !text-[#F1511B] font-bold text-[16px] px-3 md:px-8 py-4 rounded-[8px] ">
                        Become an Official Partner Now
                    </button>
                </div>
            </section>


            {/* form section */}
            <div className="container mx-auto px-6 py-20">
                <div className=" grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Calculator Form */}
                    <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] p-8 ">
                        <div
                            className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className="mb-8">
                            <h1 className="text-[24px] font-medium text-white -mt-12 z-10 mb-4 relative">Vijilan Pricing Calculator</h1>
                            <p className="text-white text-[12px] md:text-[16px]">
                                Enter the number of assets for your client to generate an <br /> estimated monthly cost.
                            </p>
                        </div>

                        {/* ThreatRemediate Modules */}
                        <div className="mb-8">
                            <h2 className="!text-[#00AEEF] text-[16px] font-bold mb-6">ThreatRemediate™ (TRX) Modules...</h2>

                            {/* TRX Endpoint */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px] ">TRX Endpoint (EDR/XDR)</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$5/endpoint</span>
                                </div>
                                <div className="relative w-full">
                                    <select
                                        className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        defaultValue="">
                                        <option value="" disabled className='!text-black'>
                                            Number of Endpoints
                                        </option>
                                        <option value="1" className='!text-black'>1</option>
                                        <option value="2" className='!text-black'>2</option>
                                        <option value="3" className='!text-black'>3</option>
                                    </select>
                                </div>
                            </div>

                            {/* TRX Identity */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px]">TRX Identity</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$3/user</span>
                                </div>
                                <div className="relative">

                                    <select
                                        className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        defaultValue="">
                                        <option value="" disabled className='!text-black'>
                                            Number of users
                                        </option>
                                        <option value="1" className='!text-black'>1</option>
                                        <option value="2" className='!text-black'>2</option>
                                        <option value="3" className='!text-black'>3</option>
                                    </select>
                                </div>
                            </div>

                            {/* TRX Visibility */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px] ">TRX Visibility (Exposure)</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$3/endpoint</span>
                                </div>
                                <select
                                    className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                    defaultValue="">
                                    <option value="" disabled className='!text-black'>
                                        Number of Endpoints
                                    </option>
                                    <option value="1" className='!text-black'>1</option>
                                    <option value="2" className='!text-black'>2</option>
                                    <option value="3" className='!text-black'>3</option>
                                </select>
                            </div>
                        </div>

                        {/* Additional Services */}
                        <div className="mb-8">
                            <h2 className="!text-[#00AEEF] text-[16px] font-bold mb-6">Additional Services</h2>

                            {/* Critical Servers */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px] ">Critical Servers</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$30/server</span>
                                </div>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        defaultValue="">
                                        <option value="" disabled className='!text-black'>
                                            Number of servers
                                        </option>
                                        <option value="1" className='!text-black'>1</option>
                                        <option value="2" className='!text-black'>2</option>
                                        <option value="3" className='!text-black'>3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Firewalls & Security Appliances */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px]">Firewalls & Security Appliances</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$99/appliance</span>
                                </div>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        defaultValue="">
                                        <option value="" disabled className='!text-black'>
                                            Number of Application
                                        </option>
                                        <option value="1" className='!text-black'>1</option>
                                        <option value="2" className='!text-black'>2</option>
                                        <option value="3" className='!text-black'>3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Cloud Sources */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-white text-[12px] md:text-[16px] ">Cloud Sources and Cloud Applications</span>
                                    <span className="!text-[#00AEEF] text-[11px]">$99/appliance</span>
                                </div>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 rounded-[16px] text-[12px] md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        defaultValue="">
                                        <option value="" disabled className='!text-black'>
                                           Number of Cloud Sources and Cloud Applications
                                        </option>
                                        <option value="1" className='!text-black'>1</option>
                                        <option value="2" className='!text-black'>2</option>
                                        <option value="3" className='!text-black'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Discount Button */}
                        <div className='border border-[#00AEEF] rounded-[8px]'>
                            <button className="w-full p-3 md:p-[16px] text-white font-medium text-[17px] transition-colors">
                                APPLY 15% DISCOUNT FOR UPFRONT ANNUAL PAYMENT
                            </button>
                        </div>

                    </div>

                    {/* Right Column - Quote Summary */}
                    <div className="space-y-6">
                        {/* Your Estimated Quote */}
                        <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] p-8 ">
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h2 className="text-[28px] text-center font-bold text-white mb-6">Your Estimated Quote</h2>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-white text-[21px]">SubTotal Monthly:</span>
                                    <span className=" text-[21px] !text-[#00AEEF]">{totals.subtotal}</span>
                                </div>

                                <div className="bg-[#567286] rounded-[11px] p-4 border border-[#00AEEF]">
                                    <div className="flex justify-between items-center">
                                        <span className="!text-[#00AEEF] text-lg font-semibold">Total Monthly Cost:</span>
                                        <span className="!text-[#00AEEF] text-xl font-bold">{totals.totalMonthlyCost}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-white text-[21px]">Quote Actions</h3>

                                <button className="w-full bg-[#567286] border border-[#00AEEF] rounded-[11px] px-6 py-3 !text-[#00AEEF] font-semibold transition-colors">
                                    Save Quote as a PDF
                                </button>

                                <button className="w-full bg-[#567286] border border-[#00AEEF] rounded-[11px] px-6 py-3 text-white ">
                                    Start a New Quote
                                </button>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] p-8 border border-[#FFFFFF20]">
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h2 className="text-[27px] font-bold text-center text-white mb-6">Related Articles</h2>

                            <div className="space-y-8">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="px-6 border-b border-[#FFFFFF42] pb-4 last:border-b-0">
                                        <h3 className="text-white font-medium text-[18px] mb-2">
                                            Our New Integration with <br /> CrowdStrike Falcon Cloud <br /> Security
                                        </h3>
                                        <p className="text-[#F1EAFA] text-[16px] font-light">June 13, 2025</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}
            <section className="container mx-auto px-6 py-16" >
                <div className='rounded-[24px]' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="w-full ">
                        {/* Main container with dotted border */}
                        <div className=" rounded-lg py-[83px] px-3  md:px-[140px] ">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-white mb-2">
                                    <span className="font-bold text-2xl md:text-[40px] ">
                                        Your Go-to-Market Toolkit
                                    </span>
                                </h1>
                            </div>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-[10px] p-6 bg[#00AEEF3D] backdrop-blur-sm  cursor-pointer">
                                        <div
                                            className="absolute inset-0 rounded-[10px] p-[1px] z-0"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        {/* Icon */}
                                        <div className="flex justify-center mb-4">
                                            <div className="relative">
                                                <img src={tool.icon} alt="" className='w-[64px] h-[64px]' />

                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center">
                                            <h3 className="text-[15px] font-mediium text-white mb-3 ">
                                                {tool.title}
                                            </h3>
                                            <p className="text-white text-[11px] leading-relaxed">{tool.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PricingTool;