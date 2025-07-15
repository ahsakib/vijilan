import React, { act } from "react";
import Heading_Btn from "@components/Heading_Btn";
import InputSection from "@components/InputSection";
import phishing from "../../Assets/phising.svg";
import mfa from "../../Assets/mfa.svg";
import movement from "../../Assets/movement.svg";
import privilenge from "../../Assets/privilenge.svg";
import takeover from "../../Assets/takeover.svg";
import insiderThreat from "../../Assets/insiderThreat.svg";
import azure from "../../Assets/azure.png";
import okta from "../../Assets/okta.png";
import ping from "../../Assets/ping.png";
import active from "../../Assets/active.png";
import key from "../../Assets/key.png";
import google from "../../Assets/google.png";
import GradientButton from "@components/GradientButton";
import OutlineGradientButton from "@components/OutlineGradientButton";
import SuccessCard from "@components/SuccessCard";
import CardBorder from "@components/CardBorder";
import { Link } from "react-router-dom";

const ManagedAutomation = ({ }) => {
    const businessFields = [
        {
            label: "Primary Identity Provider",
            placeholder: "Select Your provider",
            options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
        },
        {
            label: "Total User Count",
            placeholder: "500",
            options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
        },
        {
            label: "MFA Implementation",
            placeholder: "Select status",
            options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
        },
    ];

    const businessFields2 = [
        {
            label: "Privileged Accounts",
            placeholder: "Select Your provider",
            options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
        },
        {
            label: "Connected Cloud Apps",
            placeholder: "Select Range",
            options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
        },
        {
            label: "Previous Identity Incidents",
            placeholder: "Select status",
            options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
        },
    ];
    const categories = [
        { title: "MSP/VAR", desc: "Managed service provider seeking growth", icon: phishing },
        { title: "Enterprise", desc: "Large organization needing security", icon: movement },
        { title: "Manufacturing", desc: "Industrial/operational technology", icon: insiderThreat },
        { title: "Healthcare", desc: "Compliance-focused organization", icon: takeover },
        { title: "Financial Services", desc: "Banks, credit unions, fintech", icon: mfa },
        { title: "Government", desc: "Federal, state, local agencies", icon: privilenge },
    ];

    const integrations = [
        {
            icon: azure,
            title: "AZURE AD / ENTRA ID",
            description: "FULL API INTEGRATION",
        },
        {
            icon: okta,
            title: "Okta",
            description: "Native connector available",
        },
        {
            icon: ping,
            title: "PingIdentity",
            description: "SAML/OIDC integration",
        },
        {
            icon: active,
            title: "Active Directory",
            description: "On-premise integration",
        },
        {
            icon: key,
            title: "AWS IAM",
            description: "Cloud identity monitoring",
            uppercase: true,
        },
        {
            icon: google,
            title: "Google Workspace",
            description: "API-based monitoring",
            uppercase: true,
        },
    ];

    return <>
        <div className="max-w-[90%] mx-auto ">
            <div className="pb-16">
                <Heading_Btn
                    h1="Combat the #1 Attack Vector: Identity Threats"
                    desc={`Attackers don't break in—they log in. Our Managed ITDR service, powered by\ncrowdStrike Falcon Identity Protection, provides 24/7 monitoring and real-time\nresponse to stop breaches that start with compromised credentials.`}

                />
                <div className="max-w-4xl mx-auto -mt-[70px] grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <CardBorder height="171px" width="166px">
                        <div className='px-6 py-10'>
                            <div className="text-white text-[32px] font-bold mb-2">80%</div>
                            <div className=" text-[10px] font-medium px-10">
                                of breaches involve identity
                            </div>
                        </div>
                    </CardBorder>
                    <CardBorder height="171px" width="166px">
                        <div className='px-6 py-10'>
                            <div className="text-white text-[32px] font-bold mb-2">5mins</div>
                            <div className="text-[10px] font-medium px-10">
                                average containment time
                            </div>
                        </div>
                    </CardBorder>
                    <CardBorder height="171px" width="166px">
                        <div className='px-6 py-10'>
                            <div className="text-white text-[32px] font-bold mb-2">24/7</div>
                            <div className="text-[10px] font-medium px-10">
                                expert monitoring
                            </div>
                        </div>
                    </CardBorder>
                </div>
                <div className="flex gap-10 mt-14 items-center justify-center mx-auto ">
                    <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <GradientButton children={"START RISK ASSESSMENT"} />
                    </Link>
                    <Link to={"/threat-respond-service"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <OutlineGradientButton children={"SEE THREAT SIMULATION"} />
                    </Link>
                </div>
            </div>

            <section className="md:px-6 py-16 container mx-auto">
                <div className="mx-auto text-center text-white">
                    <h2 className=" text-2xl md:text-[40px] font-bold mb-3">Interactive Identity Risk Assessment</h2>
                    <p className="text-white text-center text-[18px] mb-12">
                        Get an instant risk score and personalized recommendations for your identity infrastructure.
                    </p>
                    <div className=" backdrop-blur-sm rounded-[24px] p-8" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                        <h3 className=" text-3xl md:text-[40px]  font-bold text-center">Identity Security Health Check</h3>
                        <p className="text-white text-center text-[18px] mb-10">Answer a few questions to assess your current identity threat exposure</p>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-10">
                            <InputSection title="Identity Infrastructure" fields={businessFields} />
                            <InputSection title="Threat Exposure" fields={businessFields2} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:px-6 container mx-auto py-16">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className=" text-3xl md:text-[40px]  font-bold mb-3">See How Identity Attacks Unfold</h2>
                    <p className="text-[18px] mb-12">
                        Interactive simulations show how attackers exploit identity vulnerabilities in real-time.
                    </p>

                    <div className="flex items-center justify-center max-w-7xl" >
                        <div className="max-w-6xl w-full rounded-2xl p-10 text-white" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                            {/* Title */}
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-[40px] font-bold mb-3">Identity Attack Scenarios</h2>
                                <p className="text-[18px]">
                                    Select a scenario to see how we detect and respond
                                </p>
                            </div>

                            {/* Categories */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 place-items-center">
                                {categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative bg-[#00AEEF3D] rounded-[10px] px-4 py-6 flex flex-col justify-center items-center space-y-1 w-[235.85px] h-[150.31px]">
                                        <div
                                            className="absolute inset-0 rounded-[10px] p-[1px] z-0 h-full"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        <img src={item.icon} alt="" className="w-[40px] h-[40px]" />
                                        <h3 className="font-medium text-[15px]">{item.title}</h3>
                                        <p className="text-[11px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap justify-center gap-5">
                                <Link to={"/request-demo"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    <GradientButton children={"request live demo"} icon={false} />
                                </Link>
                                <OutlineGradientButton icon={false} children={"view technology stack"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <div className="text-white text-center mb-14">
                    <h1 className="font-bold  text-3xl md:text-[40px]  mb-4">Seamless Integration with Your Stack</h1>
                    <p className="text-[18px] mb-6">CrowdStrike Falcon Identity Protection integrates with your existing identity infrastructure.</p>
                    <h3 className="font-bold text-[19px] ">Check Your Integration Compatibility</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {integrations.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white-900 border border-white-700 rounded-xl p-6 flex items-center gap-4 max-w-sm w-full shadow-lg"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-[64px] h-[65px] rounded-lg flex items-center justify-center">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3
                                    className={`text-white font-bold text-[16px] leading-tight ${item.uppercase ? "uppercase" : ""
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-[#BCBEC0] text-[15px] font-light mt-1 ${item.uppercase ? "uppercase" : ""
                                        }`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex justify-center mt-14">

                    <GradientButton children={"GET CUSTOM INTEGRATION QUOTE"} icon={false} />
                </Link>
            </section>
            <section className="container mx-auto md:px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <SuccessCard
                        showIcon
                        iconText="JN"
                        subheading="JEN AI"
                        description={`"Ask me how Managed ITDR integrates with \n your Okta or Azure AD environment. I can \n provide technical specifications and pricing in\n real-time."`}
                        buttonText="Find my success story"
                        bgColor="transparent"
                        url={"/case-studies"}
                    />
                    <SuccessCard
                        heading={`Ready to Secure Your Identities?`}
                        description={`Stop identity-based attacks before they \n become breaches. Our experts will design a \n custom ITDR solution for your environment.`}
                        buttonText="schedule a expert consultation"
                        isOutlineButton
                        outlineButtonText="explore full xdr platform"
                        bgColor="transparent"
                        url={"/contact"}
                    />
                </div>
            </section>
        </div>
    </>
}

export default ManagedAutomation;