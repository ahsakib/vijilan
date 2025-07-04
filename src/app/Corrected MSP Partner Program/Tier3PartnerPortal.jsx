import NavyBlueBackground from "@components/NavyBlueBackground";
import React from "react";

const Tier3PartnerPortal = () => {

    const GradientCard = ({ children }) => {
        return (
            <div
                className={`backdrop-blur-md rounded-3xl p-12 mx-auto my-8 shadow-2xl border border-[#00AEEF]/40`}
                style={{
                    background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                }}
            >
                {children}
            </div>
        );
    };

    return <>
        <div className="w-full">
            <div>
                <div
                    className={"backdrop-blur-md p-12 mx-auto shadow-2xl"}
                    style={{
                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                    }}
                >
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-4xl font-bold mb-8">Welcome Back! 👋</h1>

                        <p className="font-semibold">Your Gold-level partnership is active with full access to all premium resources, training, and dedicated support.</p>
                        <div className="flex items-center gap-4 mt-4">

                            <button className="bg-[#00B6FF] text-white font-semibold px-6 py-4 rounded">
                                BUILD NEW QUOTE
                            </button>

                            <div className="inline-block cursor-pointer font-semibold px-6 py-4 rounded-md 
border-1 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
text-center select-none uppercase">
                                View Analytics
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="max-w-[96%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                    <GradientCard>
                        <div className="bg-transparent rounded-lg shadow-md p-6 w-full">
                            <div className="flex justify-center">

                                <h2 className="text-3xl mb-8 font-semibold text-white">🚀 Quick Actions</h2>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center rounded-xl border border-[#00AEEF] p-6 bg-[#4E6E7C]">
                                    <span className="text-white text-xl font-bold">Generate Client Quote</span>
                                </div>
                                <div className="flex items-center rounded-xl border border-[#00AEEF] p-6 bg-[#4E6E7C]">
                                    <span className="text-white text-xl font-bold">Download Sales Deck</span>
                                </div>
                                <div className="flex items-center rounded-xl border border-[#00AEEF] p-6 bg-[#4E6E7C]">
                                    <span className="text-white text-xl font-bold">Access Training         </span>
                                </div>
                                <div className="flex items-center rounded-xl border border-[#00AEEF] p-6 bg-[#4E6E7C]">
                                    <span className="text-white text-xl font-bold">View Client Reports          </span>
                                </div>
                                <div className="flex items-center rounded-xl border border-[#00AEEF] p-6 bg-[#4E6E7C]">
                                    <span className="text-white text-xl font-bold">Contact Support</span>
                                </div>

                            </div>
                        </div>
                    </GradientCard>

                    <GradientCard>
                        <div className="bg-transparent text-white mx-auto p-6 rounded-lg text-center space-y-4">
                            <div className="flex items-center justify-center space-x-2 mb-10">
                                <h2 className="text-4xl font-bold">📊 Your Metrics</h2>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xl py-3 border-b border-white/30 pb-1">
                                    <span className="font-medium">Active Clients</span>
                                    <span>12</span>
                                </div>
                                <div className="flex justify-between text-xl py-3 border-b border-white/30 pb-1">
                                    <span className="font-medium">Monthly Recurring</span>
                                    <span>$4,280</span>
                                </div>
                                <div className="flex justify-between text-xl py-3 border-b border-white/30 pb-1">
                                    <span className="font-medium">Endpoints Protected</span>
                                    <span>347</span>
                                </div>
                                <div className="flex justify-between text-xl py-3 border-b border-white/30 pb-1">
                                    <span className="font-medium">This Month Revenue</span>
                                    <span>$5,124</span>
                                </div>
                                <div className="flex justify-between text-xl py-3 border-b border-white/30 pb-1">
                                    <span className="font-medium">Partner Level</span>
                                    <span>Gold</span>
                                </div>
                            </div>
                        </div>
                    </GradientCard>
                    <GradientCard>
                        <div className="text-center">

                            <h1 className="text-4xl font-bold mb-8">🔔 Partner Updates</h1>
                            <div>
                                <ul>
                                    <li className="mb-4 text-xl font-bold">✅ Q1 Threat Report available</li>
                                    <li className="mb-4 text-xl font-bold">🆕 New Microsoft 365 integration</li>
                                    <li className="mb-4 text-xl font-bold">📅 Paartner webinar tomorrow 2PM EST</li>
                                    <li className="mb-4 text-xl font-bold">🎯 New upsell playbook released</li>
                                </ul>
                            </div>
                        </div>
                    </GradientCard>
                </div>
                <div className="col-span-1">
                    <GradientCard>
                        <h1>🔧 Select Your ThreatRemediate Modules</h1>
                        <p>ThreatRemediate Essentials: Starting at $5/endpoint - Pick and choose what you want to monitor</p>
                        <div className="bg-[#557284] border rounded-2xl border-[#00AEEF] p-8">

                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-2xl font-bold text-white mb-6">🛡️ Core TRX Modules</h1>

                                <div className="py-4">
                                    <div className="bg-[#8499A6] flex justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-6 w-full shadow-lg">

                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-black mb-2">TRX Endpoint <br /> (EDR/XDR)</h3>
                                            <p className="text-sm text-black font-bold leading-relaxed">
                                                CrowdStrike Falcon with containment & network isolation
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold text-[#37D962]">$5.00/endpoint</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="bg-[#8499A6] flex justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-6 w-full shadow-lg">

                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-black mb-2">TRX Identity (ITDR)</h3>
                                            <p className="text-sm text-black font-bold leading-relaxed">
                                            Conditional access, bi-directional Entra ID integration
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold text-[#37D962]">$3.00/user</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="bg-[#8499A6] flex justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-6 w-full shadow-lg">

                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-black mb-2">TRX Visibility (Exposure)</h3>
                                            <p className="text-sm text-black font-bold leading-relaxed">
                                            Falcon Discover + Spotlight for asset visibility
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold text-[#37D962]">$4.00/asset</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </GradientCard>
                </div>
                <div className="col-span-1">
                    <NavyBlueBackground>

                    </NavyBlueBackground>
                </div>
            </div>
        </section>
    </>
}

export default Tier3PartnerPortal;