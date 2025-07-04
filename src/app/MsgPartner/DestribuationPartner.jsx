
import SimpleCard from "@components/SimpleCard";
import React from "react";
import synnex from "../../Assets/td-synx.svg";
import cdw from "../../Assets/cdw.svg";
import shi from "../../Assets/shi.svg";
import sherweb from "../../Assets/sherweb.svg";
import pax8 from "../../Assets/pax8.svg";
import gud from "../../Assets/gud.svg";
import Branding from "../../Assets/Branding.svg";
import gear from "../../Assets/gear.svg";
import electric from "../../Assets/electric.svg";
import hand from "../../Assets/hand.svg";
import CardBorder from "@components/CardBorder";
import NavyBlueBackground from "@components/NavyBlueBackground";
import Heading_Btn from "@components/Heading_Btn";
import GradientButton from "@components/GradientButton";

const DestribuationPartner = ({ }) => {


    const distributors = [synnex, cdw, shi, sherweb, pax8, gud];
    const titles = ['TD SYNNEX', 'CDW', "SHI", "Sherweb", "Pax8", "GuidePoint"];
    const cardData = [
        {
            icon: Branding,
            title: "Simplified Quoting & Ordering",
            desc: "Leverage your existing relationships and procurement processes with our distribution partners to easily quote and order Vijilan's full suite of services.",
        },
        {
            icon: gear,
            title: "Consolidated Billing",
            desc: "Integrate your Vijilan services into your existing billing structure with your preferred distributor, simplifying invoicing and financial management.",
        },
        {
            icon: electric,
            title: "Trusted Supply Chain",
            desc: "Procure with confidence through a secure and established supply chain, ensuring authenticity and seamless license provisioning for your clients.",
        },
        {
            icon: hand,
            title: "Access to Broader Solutions",
            desc: "Combine Vijilan's expert security services with other hardware and software from our distributors' extensive catalogs to build comprehensive client solutions.",
        },
    ];


    return <>
        <div className="max-w-[90%] mx-auto py-16">
            <section className="bg-transparent max-w-7xl mx-auto">
                <div className="text-center text-white font-bold mb-12">
                    <h1 className="text-3xl md:text-5xl mb-4">
                        Procure Vijilan Through Your Preferred Distributor
                    </h1>
                    <p className="text-lg md:text-xl font-normal max-w-3xl mx-auto text-slate-200">
                        We partner with the industry's leading technology distributors to make quoting, purchasing, and deploying our managed security solutions seamless and efficient for our enterprise clients and channel partners.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {distributors.map((icon, index) => (
                        <SimpleCard
                            key={index}
                            icon={icon}
                            h="148px"
                            w="362px"
                        />
                    ))}
                </div>
            </section>
            <section className="bg-transparent max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-5xl mb-4">
                    Streamlined Procurement, Simplified Billing
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
                    {cardData.map((card, index) => (
                        <CardBorder key={index} height="180px" width="512px">
                            <div className="flex items-start gap-4 text-left text-white px-6 py-4">
                                <div className="bg-[#00AEEF] rounded-[8px] p-2">
                                    <img src={card.icon} alt="icon" className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold mb-1">{card.title}</h2>
                                    <p className="text-sm text-white/80 leading-snug">{card.desc}</p>
                                </div>
                            </div>
                        </CardBorder>
                    ))}
                </div>
            </section>
            <section className="bg-transparent max-w-7xl mx-auto">
                <div className="text-center text-white font-bold mb-12">
                    <h1 className="text-3xl md:text-5xl mb-4">
                        Our Esteemed Distribution Partners
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {titles.map((title, index) => (
                        <SimpleCard
                            key={index}
                            designedTitle={title}
                            h="148px"
                            w="362px"
                        />
                    ))}
                </div>
            </section>
            <section className="bg-transparent max-w-7xl mx-auto">
                <div className="text-center text-white font-bold mb-12">
                    <h1 className="text-3xl md:text-5xl mb-4">
                        Getting Started is Easy
                    </h1>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
                    <CardBorder width="567px" height="279px">
                        <div className="text-white p-4">
                            <h1 className="font-bold text-2xl mb-4">Contact Your Distributor</h1>
                            <p className="text-left font-bold">Reach out to your account manager at any of our listed distribution partners and ask for Vijilan's managed security services and solutions.</p>
                        </div>
                    </CardBorder>
                    <CardBorder width="567px" height="279px">
                        <div className="text-white p-4">
                            <h1 className="font-bold text-2xl mb-4">Connect with Us</h1>
                            <p className="text-left font-bold">Your distributor's representative will work directly with our channel team to scope your specific needs and generate a quote through their system.</p>
                        </div>
                    </CardBorder>
                </div>
            </section>
            <section className="bg-transparent max-w-7xl mx-auto">

                <NavyBlueBackground>
                    <div>
                        <div className="grid grid-cols-2">
                            <div className=' p-5 flex flex-col items-center justify-center border-[3px] rounded-2xl border-[#035882]'>
                                <div className='-mb-10 flex flex-col items-center justify-center  gap-3'>
                                    <div className='bg-gradient-to-t h-24 w-24  rounded-full flex justify-center items-center text-white text-lg font-bold from-[#07ADE9] to-[#EB9C33]'>
                                        JN </div>
                                    <h3 className='font-bold text-xl text-white'>JEN AI</h3>
                                </div>

                                <Heading_Btn
                                    desc='""Have a question about a specific distributor or how to add Vijilan to your next order? I can help guide you.""'
                                    btn4="start a chat"
                                />
                            </div>
                            <div class="max-w-2xl mx-auto p-8  rounded-lg shadow-sm text-center">
                                <h1 class="text-2xl font-bold text-white mb-5">Don't See Your Distributor?</h1>
                                <p class="text-white mb-6 leading-relaxed">
                                    We're always expanding our distribution network.
                                        Contact our channel team to discuss adding your preferred distributor or to learn more about our procurement options.
                                </p>
                                <GradientButton children={"Schedule a compliance strategy call"}/>
                            </div>
                        </div>
                    </div>
                </NavyBlueBackground>
            </section>
        </div>
    </>
}

export default DestribuationPartner;