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
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6">
            <Heading_Btn
                h1={"🚀 Welcome to MSP Launchpad!"}
                desc={`Your complete toolkit for selling cybersecurity services across multiple industries.\nDownload everything you need to start generating leads and closing deals.`}
            />

            <section className="-mt-[35px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className=" col-span-1 md:col-span-2">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    index={index}
                                    service={service}
                                    onAddIcon={() => alert(`Add icon clicked for ${service.title}`)}
                                    marginSmall={true}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="space-y-6"> {/* Added container with spacing between cards */}
                            {/* First Card */}
                            <div className="">
                                <div
                                    className={`relative backdrop-blur-md rounded-[16px] bg-[#00AEEF3D] p-3 md:p-8 mx-auto  `}>
                                    <div
                                        className={`absolute inset-0 rounded-[16px] p-[2px] z-0 $`}
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <div className="text-white space-y-6 px-6 pt-10 pb-10"> {/* Changed pb-30 to pb-10 */}
                                        <div className="text-[16px] font-medium mb-6 flex items-center justify-center"><div className="text-[4px] relative rounded-[4px] w-fit p-[2px]">
                                            <div
                                                className={`absolute inset-0 rounded-[4px] p-[1px] z-0`}
                                                style={{
                                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                }}
                                            />
                                            Partner Only</div>🔥 What's New</div>


                                        <div>
                                            <h2 className="text-[18px] font-medium ">Q1 Threat Intelligence Report</h2>
                                            <p className="text-[18px]  mt-1"> {/* Changed text-xl to text-sm */}
                                                Latest attack trends and security insights. Available after validation for pricing access.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-[16px] font-medium">New Healthcare Kit Content</h3>
                                            <p className="text-[18px]  mt-1"> {/* Changed text-xl to text-sm */}
                                                <span className="text-font-medium">Added HITECH compliance materials</span> and updated templates for 2025 regulations.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-[16px] font-medium">Webinar Training Series</h3>
                                            <p className="text-[18px] mt-1"> {/* Changed text-xl to text-sm */}
                                                Monthly sales training sessions for validated partners. Registration opens next week.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Card */}
                            <div className={``}>
                                <div
                                    className={`relative backdrop-blur-md rounded-[16px] bg-[#00AEEF3D] p-8 mx-auto`}>
                                    <div
                                        className={`absolute inset-0 rounded-[16px] p-[2px] z-0 $`}
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <div className="text-white">
                                        <h1 className="text-2xl font-medium mb-3">🌟 Unlock with Validation</h1>

                                        <p className="text-lg">Get access to premium partner <br /> resources:</p>

                                        <ul className="space-y-1 list-disc pl-8 text-lg">
                                            <li>Interactive pricing simulator</li>
                                            <li>Profit margin calculators</li>
                                            <li>Technical onboarding guides</li>
                                            <li>Legal templates (MSA, SOW)</li>
                                            <li>Upsell strategy documents</li>
                                            <li>Direct partner support</li>
                                        </ul>

                                        <div className="mt-5 flex justify-center"> {/* Added flex justify-center */}
                                            <div className="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
            border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
            transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
            text-center select-none uppercase" style={{ color: "#00AEEF" }}>
                                                request validation
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third Card */}
                            <div className={``}>
                                <div
                                    className={`relative backdrop-blur-md rounded-[16px] bg-[#00AEEF3D] p-8 mx-auto`}>
                                    <div
                                        className={`absolute inset-0 rounded-[16px] p-[2px] z-0 $`}
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <div className="text-white">
                                        <h1 className="text-2xl font-medium mb-3">🌟 💬 Need Help?</h1>

                                        <p className="text-lg">Questions about the sales kits or want to discuss the validation process? Our team is here to help.</p>

                                        <div className="mt-5 flex justify-center"> {/* Added flex justify-center */}
                                            <div className="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
            border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
            transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
            text-center select-none uppercase" style={{color: "#00AEEF"}}>
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
                    <div class="w-full max-w-[993px] h-auto lg:h-[411px] md:h-auto md:min-h-[411px] space-y-6 border-1 border-[#F0E51A] rounded-lg p-8 flex flex-col justify-center">
                        <div class="text-center mb-10">
                            <h1 class="text-2xl md:text-5xl font-bold !text-[#F0E51A] mb-10">Pricing Simulator</h1>
                            <p class=" text-xl sm:text-base text-white">Build accurate quotes and see your profit margins with our interactive pricing <br /> calculator. Access requires validation.</p>
                        </div>

                        <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="flex justify-center">
                            <button class="w-full max-w-xs flex justify-center  py-3 md:py-6 font-medium px-4 border border-transparent rounded-md  !text-black bg-[#F0E51A] hover:bg-[#d8cc17] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F0E51A] text-sm md:text-lg">
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