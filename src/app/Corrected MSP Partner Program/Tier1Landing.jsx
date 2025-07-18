import Heading_Btn from "@components/Heading_Btn";
import NavyBlueBackground from "@components/NavyBlueBackground";
import ServiceCard from "@components/ServiceCard";
import desktop from "../../Assets/desktop.svg";
import industry from "../../Assets/indtrustry.svg";
import meg from "../../Assets/meg.svg";
import avatar from "../../Assets/avatarCall.svg";
import note from "../../Assets/note.svg";
import boxTick from "../../Assets/Tick Box.svg";
import React from "react";
import SecurityCard from "@components/SecurityCard";

const Tier1Landing = () => {

    const services = [
        {
            title: "Sample Identity Protection Email",
            description: `Ready-to-send email campaign to introduce identity protection services to your clients`,
            designBtn: "download email template",
            btnIcon: false
        },
        {
            title: "Sample Landing Page Copy",
            description: `Copy-and-paste website content to promote identity protection services`,
            designBtn: "download page copy",
            btnIcon: false
        },
        {
            title: `"Guarding the Vault" Guide`,
            description: `Client-facing lead magnet specifically designed for financial services`,
            designBtn: "download pdf guide",
            btnIcon: false
        },
        {
            title: "Website Copy Snippets",
            description: `Professional service descriptions and value propositions for your website`,
            designBtn: "download copy kit",
            btnIcon: false
        },
        {
            title: "Sample Landing Page Copy",
            description: `Copy-and-paste website content to promote identity protection services`,
            designBtn: "download page copy",
            btnIcon: false
        },
        {
            title: `"Guarding the Vault" Guide`,
            description: `Client-facing lead magnet specifically designed for financial services`,
            designBtn: "download pdf guide",
            btnIcon: false
        },
    ]

    const strategicCardData = [
        {
            icon: desktop,
            title: "Ready to Use",
            description: `No need to create content from scratch. Our materials are designed by marketing experts and tested with real MSPs.`,
            height: "390px",
        },
        {
            icon: industry,
            title: "Industry-Specific",
            description: `Tailored messaging for different verticals ensures your outreach resonates with each target market.`,
            height: "300px",
        },
        {
            icon: meg,
            title: "Proven Results",
            description: `These materials have helped MSPs close deals faster and increase their cybersecurity revenue.`,
            height: "434px",
        },
        {
            icon: avatar,
            title: "Always Updated",
            description: `Content is regularly refreshed to reflect the latest threats, compliance requirements, and market trends.`,
            height: "335px",
            marginTop: "-45px",
        },
        {
            icon: note,
            title: "Scalable for Every MSP",
            description: `From solo operators to large-scale service providers, our kits flex to fit your growth strategy.`,
            height: "405px",
            marginTop: "-120px",
        },
        {
            icon: boxTick,
            title: "White-Labeled & Customizable",
            description: `Easily rebrand all content with your logo, colors, and contact info—ready to share with clients.`,
            height: "420px",
        },
    ];
    return <>
        <div className="max-w-[90%] mx-auto">
            <section>

                <div>
                    <Heading_Btn
                        h1={"Sales & Marketing Enablement for MSPs"}
                        desc={"Help your clients. Grow your business. Access ready-to-use cybersecurity marketing \n kits."}
                    />
                </div>
                <div>
                    <Heading_Btn
                        h1={"🚀 Start Using These Resources Right Now"}
                        desc={"No email required. Download and start growing your business today."}
                    />
                </div>
            </section>

            <section className="container mx-auto md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            service={service}
                            onAddIcon={() => alert(`Add icon clicked for ${service.title}`)}
                        />
                    ))}
                </div>
            </section>

            <section className="container mx-auto md:px-3 pt-16">
                <NavyBlueBackground borderCancel={true}>
                    <div className=" px-0 md:px-12 lg:px-30  pt-10 pb-20">

                        <h1 className="text-xl  md:text-4xl text-center font-semibold lg:font-bold mb-8">📧 Email Template Preview</h1>

                        <div>
                            <div class="bg-transparent p-3 md:p-5 lg:p-10 border rounded-2xl border-[#00AEEF] relative">
                                <div class="absolute left-0 top-[5%] h-[90%] w-1 bg-[#30A1F6]"></div>

                                <h2 class="text-lg font-thin md:font-semibold lg:font-bold text-white mb-2"> Subject: Is Your Business Protected from Identity Theft?</h2>
                                <p class="text-white mb-1">
                                    <span class="text-xl mb-2 font-bold">Hi [Client Name],</span>
                                </p>
                                <p class="text-white-400 text-[16px] font-medium mb-4">
                                    Identity-based attacks have increased 87% this year, with cybercriminals specifically targeting businesses like yours. Many of our clients were shocked to learn how vulnerable their employees' credentials actually were...
                                </p>
                                <p className="font-bold text-xl">📥 Download the complete email template above</p>
                            </div>
                        </div>
                    </div>
                </NavyBlueBackground>
            </section>

            <section className="container mx-auto md:px-1">
                <NavyBlueBackground>
                    <div class="bg-transparent text-white p-10 rounded-lg mx-auto font-sans">
                        <h1 class="text-2xl md:text-5xl font-bold text-center mb-10">Targeting Other Industries?</h1>
                        <h2 class="text-xl text-center  font-thin md:font-semibold lg:font-bold mb-6 opacity-90">Manufacturing • Legal • Education • Government • Healthcare</h2>

                        <p class="text-center mb-8  font-thin md:font-semibold lg:font-bold text-xl mx-auto opacity-80">
                            Access even more ready-to-use sales kits by entering your work email below. Get the complete MSP toolkit with industry-specific content.
                        </p>

                        <div class="flex flex-col md:flex-row justify-center gap-3 mb-8 overflow-x-auto py-2">
                            <div class="flex-shrink-0 px-6 text-sm py-2 border border-white rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                                Healthcare compliance kit
                            </div>
                            <div class="flex-shrink-0 px-6  text-sm py-2 border border-white rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                                Legal sector Templates
                            </div>
                            <div class="flex-shrink-0 px-6  text-sm py-2 border border-white rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                                Manufacturing Security
                            </div>
                            <div class="flex-shrink-0 px-6  text-sm py-2 border border-white rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                                Education Safety Materials
                            </div>
                        </div>

                        <div class="max-w-xs mx-auto mb-10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-full px-6 py-4 rounded-md text-gray-800"
                            />
                        </div>

                        <div class="text-center mb-10">
                            <div class="inline-block cursor-pointer font-semibold px-0 md:px-6 py-3 rounded-md border-2 border-solid border-[#00AEEF] bg-transparent transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
                            text-center select-none uppercase" style={{ color: "#00AEEF" }}>
                                unlock Msp Launch pad
                            </div>
                        </div>

                        <p class="text-center text-sm opacity-70 mt-4">
                            Instant access to expanded sales kits • No spam, ever.
                        </p>
                    </div>
                </NavyBlueBackground>
            </section>

            <section className="px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white">
                            Why MSPs Choose Vijilan's Enablement <br /> Resources
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`relative bg-[#00AEEF3D] lg:h-[389px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={desktop} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Ready to Use</h3>
                            <p className="text-white text-center">No need to create content from scratch. Our materials are designed by marketing experts and tested with real MSPs.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[297px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />

                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={industry} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Industry-Specific</h3>
                            <p className="text-white text-center">Tailored messaging for different verticals ensures your outreach resonates with each target market.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[434px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={meg} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Proven Results</h3>
                            <p className="text-white text-center">These materials have helped MSPs close deals faster and increase their cybersecurity revenue.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[335px] lg:-mt-[43px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={avatar} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Always Updated</h3>
                            <p className="text-white text-center">Content is regularly refreshed to reflect the latest threats, compliance requirements, and market trends.</p>
                        </div>


                        <div className={`relative bg-[#00AEEF3D] lg:h-[405px] lg:-mt-[135px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] rounded-lg flex items-center justify-center my-4">
                                <img src={note} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Scalable for Every MSP</h3>
                            <p className="text-white text-center">From solo operators to large-scale service providers, our kits flex to fit your growth strategy.</p>
                        </div>

                        <div className={`relative bg-[#00AEEF3D] lg:h-[419px] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] rounded-lg flex items-center justify-center my-4">
                                <img src={boxTick} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">White-Labeled & Customizable</h3>
                            <p className="text-white text-center">Easily rebrand all content with your logo, colors, and contact info—ready to share with clients.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Tier1Landing;