
import React from "react";
import name from "../../Assets/name.svg"
const Tier3PartnerPortal = () => {

    const GradientCard = ({ children }) => {
        return (
            <div
                className={`backdrop-blur-md rounded-3xl mb-4 p-12 mx-auto shadow-2xl border border-[#00AEEF]/40 `}
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
                        <h1 className="text-3xl md:text-4xl font-bold mb-8">Welcome Back! 👋</h1>

                        <p className="font-semibold">Your Gold-level partnership is active with full access to all premium resources, training, and dedicated support.</p>
                        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">

                            <button className="bg-[#00B6FF] text-white font-semibold px-6 py-4 rounded">
                                BUILD NEW QUOTE
                            </button>

                            <div className="inline-block cursor-pointer font-semibold px-6 py-4 rounded-md  border-1 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90 text-center select-none uppercase">
                                View Analytics
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className=" mt-10">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
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

                            <h1 className="text-3xl md:text-4xl font-bold mb-8">🔔 Partner Updates</h1>
                            <div>
                                <ul>
                                    <li className="mb-4 text-xl  font-thin md:font-semibold lg:font-bold">✅ Q1 Threat Report available</li>
                                    <li className="mb-4 text-xl  font-thin md:font-semibold lg:font-bold">🆕 New Microsoft 365 integration</li>
                                    <li className="mb-4 text-xl  font-thin md:font-semibold lg:font-bold">📅 Paartner webinar tomorrow 2PM EST</li>
                                    <li className="mb-4 text-xl  font-thin md:font-semibold lg:font-bold">🎯 New upsell playbook released</li>
                                </ul>
                            </div>
                        </div>
                    </GradientCard>
                </div>

                <div className="col-span-1">
                    <GradientCard>
                        <h1 className="font-bold mb-2">🔧 Select Your ThreatRemediate Modules</h1>
                        <p className=" font-thin md:font-semibold lg:font-bold">ThreatRemediate Essentials: Starting at $5/endpoint - Pick and choose what you want to monitor</p>
                        <div className="bg-[#557284] border rounded-2xl border-[#00AEEF] my-8 p-3 md:p-8  ">

                            <div className="  mx-auto">
                                <h1 className="text-2xl font-bold text-white mb-6">🛡️ Core TRX Modules</h1>

                                <div className="py-4">
                                    <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row  w-full shadow-lg">

                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">TRX Endpoint <br /> (EDR/XDR)</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                CrowdStrike Falcon with containment & network isolation
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$5.00/endpoint</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                   <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row w-full shadow-lg">
                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">TRX Identity (ITDR)</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                Conditional access, bi-directional Entra ID integration
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$3.00/user</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row w-full shadow-lg">
                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">TRX Visibility (Exposure)</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                Falcon Discover + Spotlight for asset visibility
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$4.00/asset</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="bg-[#557284] border rounded-2xl border-[#00AEEF] my-8 p-3 md:p-8 p">

                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-2xl font-bold text-white mb-6">🏢 Infrastructure Modules</h1>

                                <div className="py-4">
                               <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row w-full shadow-lg">
                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">Critical Servers</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                Domain Controllers, File Servers - Security Event Monitoring
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$30.00/server</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                               <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row w-full shadow-lg">
                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">Member Servers</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                Print servers, web hosting, general purpose servers - Monitored through Falcon EDR/XDR
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$8.00/server</h2>
                                            <div className="mt-2 px-6 py-1 bg-white border border-gray-300 rounded-lg inline-block">
                                                <span className="text-sm font-medium text-gray-700">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                               <div className="bg-[#8499A6]  justify-between items-center gap-5 border-2 border-blue-400 rounded-2xl p-2 md:p-6 flex flex-col md:flex-row w-full shadow-lg">
                                        <div>
                                            <div className="border border-white w-5 h-5">
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className="text-lg font-semibold !text-black mb-2">Security Appliances</h3>
                                            <p className="text-sm !text-black font-bold leading-relaxed">
                                                Firewalls, Network Security with IP blocking
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-center">
                                            <h2 className="block font-bold !text-[#37D962]">$99.00/appliance</h2>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">

                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">Website Copy Snippets</h3>
                                <p className="text-sm mb-4">Complete presentation with ROI calculations</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center px-6 md:px-0 lg:px-0">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">Competitive Battlecards</h3>
                                <p className="text-sm mb-4">Objection handling vs competitors</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center px-6 md:px-0 lg:px-0">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">ROI Calculator</h3>
                                <p className="text-sm mb-4">Client-facing ROI assessment tool</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">Legal Templates</h3>
                                <p className="text-sm mb-4">CompletMSA, SOW, and contract templates</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center px-6 md:px-0 lg:px-0">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">Upsell Playbook</h3>
                                <p className="text-sm mb-4">Strategies for expanding accounts</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                        <GradientCard>
                            <div className="flex flex-col justify-center items-center text-center px-4 md:px-0 lg:px-0">

                                <h4 className="font-semibold mb-2">add icon</h4>
                                <h3 className="font-semibold mb-2">Technical Guides</h3>
                                <p className="text-sm mb-4">Implementation and onboarding docs</p>
                                <div
                                    className="p-[1.5px] rounded-[16px] w-fit"
                                    style={{
                                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                    }}
                                >
                                    <div className="bg-[#103149] rounded-[14px] p-3 text-sm inline-flex items-center space-x-3 text-white uppercase">
                                        Download
                                    </div>
                                </div>

                            </div>
                        </GradientCard>
                    </div>
                </div>
            </div>
        </section>

        <section className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

                <div className="relative border-2 border-[#37D962] rounded-xl p-8 mx-auto mt-12 bg-white min-h-[800px] w-auto lg:w-[380px] shadow-lg">
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#37D962] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                        Essentials
                    </div>
                    <div className="mt-20">
                        {/* Pricing */}
                        <div className="mb-12 text-center ">
                            <h1 className="!text-[#37D962] font-bold text-3xl md:text-5xl mb-2">$0.00<span className="text-4xl font-semibold !text-[#37D962]">/month</span></h1>
                        </div>

                        {/* Module counter */}
                        <div className="bg-[#37D962] text-white text-xl font-bold text-center px-6 py-8 mb-8 rounded-xl shadow-inner">
                            0 modules selected
                        </div>

                        {/* CTA */}
                        <div className="bg-white border-2 border-black  text-gray-700 rounded-lg text-center px-6 py-8  transition-colors duration-200 cursor-pointer">
                            <p className="font-medium !text-black">Select modules to see pricing breakdown</p>
                        </div>
                    </div>
                </div>
                <div className="relative border-2 border-[#F2981F] rounded-xl p-8 mx-auto mt-12 bg-white min-h-[800px] w-auto lg:w-[380px] shadow-lg">
                    {/* Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F2981F] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                        trx complete
                    </div>
                    <div className="mt-20">
                        {/* Pricing */}
                        <div className="mb-12 text-center">
                            <h1 className="!text-[#F2981F] font-bold text-3xl md:text-5xl mb-2">15% Bundle Discount</h1>
                            <h1 className="t!ext-[#F2981F] font-bold text-3xl md:text-5xl mb-2">$0.00<span className="text-xl font-semibold">/month</span></h1>
                        </div>

                        {/* Module counter */}
                        <div className="bg-[#F2981F] text-white text-xl font-bold text-center px-6 py-8 mb-8 rounded-xl shadow-inner">
                            0 modules selected
                        </div>

                        {/* CTA */}
                        <div className="bg-white border-2 border-black text-gray-700 rounded-xl text-center px-6 py-8  transition-colors duration-200 cursor-pointer">
                            <p className="font-medium !text-black">Requires 3+ modules for discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="max-w-4xl mx-auto py-10 px-6">

            <div className="bg-white border border-[#37D962] rounded-xl p-3 md:p-6 shadow-md space-y-4 text-center">
                <div className="mb-14">
                    <h1 className="font-bold !text-[#00AEEF] text-4xl mb-8" >Payment Options</h1>
                    <p className="text-xl !text-black">
                        Choose your preferred billing method to see updated pricing above
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    {/* Monthly Billing */}
                    <div className="bg-[#F3F4F6] border rounded-lg flex items-center gap-3 px-4 py-3 hover:shadow-sm cursor-pointer transition">
                        <div className="w-3 h-3 rounded-full bg-[#00AEEF]"></div>
                        <p className="text-sm font-medium !text-gray-700">Monthly Billing</p>
                    </div>

                    {/* Annual Prepay */}
                    <div className="bg-[#F3F4F6] border border-gray-300 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 hover:shadow-sm cursor-pointer transition">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-[#00AEEF]"></div>
                            <p className="text-sm font-medium !text-gray-700">Annual Prepay</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-[#37D962] text-white text-xs px-3 py-1 rounded-full font-semibold">
                                Save 15%
                            </span>
                            <span className="!text-[#37D962] text-sm font-medium whitespace-nowrap">
                                $0 saved annually
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="max-w-6xl mx-auto py-10">
            <GradientCard>
            <div className="px-3 md:mx-10 lg:px-20 py-10">
  <div className="text-center">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">🤝 Your Dedicated Support Team</h1>
    <p className="text-xl font-thin md:font-semibold lg:font-bold">
      As a validated partner, you have direct access to our partner success specialists.
    </p>
  </div>

  {[1, 2, 3].map((_, i) => (
    <div
      key={i}
      className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
        <img
          src={name}
          alt="Sarah Mitchell"
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 mr-0 md:mr-5"
        />
        <div className="text-white">
          <h1 className="text-xl font-semibold">Sarah Mitchell</h1>
          <p className="font-medium">Partner Success Manager</p>
          <p className="text-sm mt-1">Onboarding, training, and account growth</p>
        </div>
      </div>

      <div>
        <button className="bg-[#00AEEF] text-white px-6 rounded text-sm uppercase py-3 transition-colors">
          contact sarah
        </button>
      </div>
    </div>
  ))}
</div>


            </GradientCard>
        </section>
    </>
}

export default Tier3PartnerPortal;