import CardBorder from "@components/CardBorder";
import Heading_Btn from "@components/Heading_Btn";
import NavyBlueBackground from "@components/NavyBlueBackground";
import ServiceCard from "@components/ServiceCard";
import React from "react";
import { Link } from "react-router-dom";

const MspLaunchpad = ({ }) => {

    const services = [
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },
        {
            title: "Financial Services",
            designedDesc: `Banks, credit unions, investment firms,
                    and financial advisors`,
            designFeature: [
                "📧 Email campaign templates",
                `📄 Guarding the Vault lead magnet"`,
                `🧱 Landing page copy`,
                `📱 Social media content`,
            ],
            designBtn: "learn about logscale"
        },

    ]
    return <>
        <div className="max-w-[90%] mx-auto">
            <Heading_Btn
                // h1={"🚀 Welcome to MSP Launchpad!"}
                    h1={<><span>Welcome to  </span><span className="bg-yellow-300 text-black px-2 rounded" style={{ color: 'black' }}>MSP Launchpad!</span></>}

                desc={"Your complete toolkit for selling cybersecurity services across multiple industries. Download everything you need to start generating leads and closing deals."}
            />

            <section className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className=" col-span-1 md:col-span-2">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    index={index}
                                    service={service}
                                    onAddIcon={() => alert(`Add icon clicked for ${service.title}`)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="space-y-8"> {/* Added container with spacing between cards */}
                            {/* First Card */}
                            <div className="">
                                <div
                                    className={`backdrop-blur-md rounded-3xl p-3 md:p-12 mx-auto shadow-2xl border border-[#00AEEF]/40`}
                                    style={{
                                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                                    }}
                                >
                                    <div className="text-white space-y-6 px-6 pt-10 pb-10"> {/* Changed pb-30 to pb-10 */}
                                        <h1 className="text-2xl font-bold mb-6">🔥 What's New</h1>

                                        <div>
                                            <h2 className="text-xl font-semibold">Q1 Threat Intelligence Report</h2>
                                            <p className="text-xl opacity-80 mt-1"> {/* Changed text-xl to text-sm */}
                                                Latest attack trends and security insights. Available after validation for pricing access.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">New Healthcare Kit Content</h3>
                                            <p className="text-xl opacity-80 mt-1"> {/* Changed text-xl to text-sm */}
                                                Added HITECH compliance materials and updated templates for 2025 regulations.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold">Webinar Training Series</h3>
                                            <p className="text-xl opacity-80 mt-1"> {/* Changed text-xl to text-sm */}
                                                Monthly sales training sessions for validated partners. Registration opens next week.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Card */}
                            <div className={``}>
                                <div
                                    className={`backdrop-blur-md rounded-3xl p-3 md:p-12 mx-auto shadow-2xl border border-[#00AEEF]/40`}
                                    style={{
                                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                                    }}
                                >
                                    <div className="text-white space-y-6">
                                        <h1 className="text-2xl font-bold">🌟 Unlock with Validation</h1>

                                        <p className="text-lg">Get access to premium partner resources:</p>

                                        <ul className="space-y-3 list-disc pl-5">
                                            <li>Interactive pricing simulator</li>
                                            <li>Profit margin calculators</li>
                                            <li>Technical onboarding guides</li>
                                            <li>Legal templates (MSA, SOW)</li>
                                            <li>Upsell strategy documents</li>
                                            <li>Direct partner support</li>
                                        </ul>

                                        <div className="mt-10 flex justify-center"> {/* Added flex justify-center */}
                                            <div className="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
            border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
            transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
            text-center select-none uppercase">
                                                request validation
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third Card */}
                            <div className={``}>
                                <div
                                    className={`backdrop-blur-md rounded-3xl p-3 md:p-12 mx-auto shadow-2xl border border-[#00AEEF]/40`}
                                    style={{
                                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                                    }}
                                >
                                    <div className="text-white space-y-6">
                                        <h1 className="text-2xl font-bold">🌟 💬 Need Help?</h1>

                                        <p className="text-lg">Questions about the sales kits or want to discuss the validation process? Our team is here to help.</p>

                                        <div className="mt-10 flex justify-center"> {/* Added flex justify-center */}
                                            <div className="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
            border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
            transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
            text-center select-none uppercase">
                                                chat wih our team
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto">
                <div class="min-h-screen flex items-center justify-center bg-transparent p-4">
                    <div class="w-full max-w-[993px] h-auto lg:h-[411px] md:h-auto md:min-h-[411px] space-y-6 border-2 border-[#F0E51A] rounded-lg p-8 flex flex-col justify-center">
                        <div class="text-center">
                            <h1 class="text-2xl md:text-5xl font-bold !text-[#F0E51A] mb-10">Pricing Simulator</h1>
                            <p class="mt-2 text-xl sm:text-base text-white">Build accurate quotes and see your profit margins with our interactive pricing calculator. Access requires validation.</p>
                        </div>

                        <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="flex justify-center">
                            <button class="w-full max-w-xs flex justify-center  py-3 md:py-6 font-bold px-4 border border-transparent rounded-md shadow-sm !text-black bg-[#F0E51A] hover:bg-[#d8cc17] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F0E51A] text-sm md:text-lg">
                                REQUEST PRICING ACCESS
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default MspLaunchpad;