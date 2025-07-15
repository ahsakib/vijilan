
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
import { Link } from "react-router-dom";

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
        <div className=" max-w-[90%] mx-auto px-6 py-16">
            <section className="bg-transparent container mx-auto md:px-6 pb-16">
                <div className="text-center text-white font-bold mb-12">
                    <h1 className="text-3xl md:text-[40px] font-bold mb-4">
                        Procure Vijilan Through Your Preferred  <br /> Distributor
                    </h1>
                    <p className="text-lg md:text-[18px]  text-white">
                        We partner with the industry's leading technology distributors to make quoting, purchasing, <br /> and deploying our managed security solutions seamless and efficient for our enterprise clients <br /> and channel partners.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 justify-items-center  ">
                    {distributors.map((icon, index) => (
                        <SimpleCard
                            key={index}
                            icon={icon}
                            h="148px"
                            w="332px"
                            center={true}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-transparent container mx-auto md:px-6 py-16">
                <h1 className="text-3xl md:text-[40px] font-bold text-white text-center mb-4">
                    Streamlined Procurement, Simplified Billing
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-14">
                    {cardData.map((card, index) => (
                        <CardBorder key={index} height="290px" width="564px">
                            <div className="flex flex-col items-start gap-4   text-left text-white px-[32px] py-[40px]">
                                <div className="bg-[#00AEEF] rounded-[8px] w-[64px] h-[64px] flex items-center justify-center">
                                    <img src={card.icon} alt="icon" className="w-[40px] h-[40px]" />
                                </div>
                                <div>
                                    <h2 className="text-[24px] font-medium mb-1">{card.title}</h2>
                                    <p className="text-[18px] text-white leading-snug">{card.desc}</p>
                                </div>
                            </div>
                        </CardBorder>
                    ))}
                </div>
            </section>

            <section className="bg-transparent container mx-auto md:px-6 py-16">
                <div className="text-center text-white font-bold mb-12">
                    <h1 className="text-3xl md:text-[40px] mb-4">
                        Our Esteemed Distribution Partners
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 justify-items-center">
                    {titles.map((title, index) => (
                        <SimpleCard
                            key={index}
                            designedTitle={title}
                            h="148px"
                            w="342px"
                        />
                    ))}
                </div>
            </section>

            <section className="bg-transparent container mx-auto md:px-6 py-16">
                <div className="text-center text-white font-bold mb-6">
                    <h1 className="text-3xl md:text-[40px]">
                        Getting Started is Easy
                    </h1>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
                    <CardBorder width="567px" height="279px">
                        <div className="text-white px-[10px] md:px-[30px] py-[50px]">
                            <h1 className="font-medium text-[24px] mb-4">Contact Your Distributor</h1>
                            <p className="text-left text-[18px]">Reach out to your account manager at any of our listed <br /> distribution partners and ask for Vijilan's managed security <br /> services and solutions.</p>
                        </div>
                    </CardBorder>
                    <CardBorder width="567px" height="279px">
                        <div className="text-white px-[10px] md:px-[30px] py-[50px]">
                            <h1 className="font-medium text-[24px] mb-4">Connect with Us</h1>
                            <p className="text-left text-[18px]">Your distributor's representative will work directly with our <br /> channel team to scope your specific needs and generate a <br /> quote through their system.</p>
                        </div>
                    </CardBorder>
                </div>
            </section>

            <section className="bg-transparent container mx-auto md:px-6">

                <NavyBlueBackground borderCancel={true} smallPadding={true}>
                    <div className="  md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className='px-2 md:px-5 py-8 flex flex-col items-center justify-center border-[1px] rounded-2xl border-[#00AEEF3D]'>
                                <div className=" w-[45px] h-[45px] md:w-[61px] md:h-[61px] rounded-full flex items-center justify-center mx-auto mb-2"
                                    style={{
                                        background: `linear-gradient(0deg, rgba(196, 196, 196, 0.5), rgba(196, 196, 196, 0.5)),linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                                        backgroundBlendMode: "overlay"
                                    }}>

                                    <h3 className="text-[20px] font-bold text-white ">JN</h3>
                                </div>
                                <h3 className="text-[20px] font-bold text-white mb-6">JEN AI</h3>

                                <p className="text-white text-[16px] text-center mb-12">
                                    "Have a question about a specific distributor or <br /> how to add Vijilan to your next order? I can help <br /> guide you."
                                </p>

                                <div className="border border-[#00AEEF] rounded-[6px]">
                                    <button className="border border-[#00AEEF] font-medium rounded-[6px] text-white text-[13px] p-[16px]">ASK JEN AI</button>
                                </div>
                            </div>
                            <div class="w-full p-3 md:p-8  rounded-lg ">
                                <h1 class="text-2xl md:text-[36px] font-bold text-white mb-5">Don't See Your Distributor?</h1>
                                <p class="text-white text-[18px] text-center mb-6 leading-relaxed">
                                    We're always expanding our distribution network. <br />
                                    Contact our channel team to discuss adding your <br /> preferred distributor or to learn more about our <br /> procurement options.
                                </p>
                                <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                
                                    <GradientButton children={"Schedule a compliance strategy call"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </NavyBlueBackground>
            </section>
        </div>
    </>
}

export default DestribuationPartner;