import { Play } from "lucide-react"
import detect from "../../Assets/detect.png"
import arrow from "../../Assets/arrow.png";
import right from "../../Assets/right.png";
import head from "../../Assets/head.png";
import wa from "../../Assets/wa.png";
import note from "../../Assets/note.png";
import Heading_Btn from "@components/Heading_Btn";
import SecurityCard from "@components/SecurityCard";
export default function Component() {

    const cardData = [
        {
            icon: detect,
            title: "Detect",
            description: `Add high-margin security services to <br /> your portfolio. Our model is built to <br /> maximize your Monthly Recurring <br /> Revenue and profitability`,
            height: "390px",
        },
        {
            icon: arrow,
            title: "Investigate & Validate",
            description: `Gain an immediate, SOC 2 Type 2 <br /> certified Security Operations Center <br /> without the overhead. Our experts <br /> become an extension of your team`,
            height: "300px",
        },
        {
            icon: wa,
            title: "Fully Managed Cloud SIEM",
            description: `Access our comprehensive <br /> ThreatRemediate™ Enablement Kit <br /> with co-brandable materials, sales <br /> decks, and proposal generators to win <br /> more deals.`,
            height: "434px",
        },
        {
            icon: head,
            title: "Always-On SOC Support",
            description: `Benefit from our channel-first <br /> approach with no minimum <br />commitments, full white-labeling, and a <br /> 30-day risk-free opt-out trial.`,
            height: "335px",
            marginTop: "40px",
        },
        {
            icon: note,
            title: "Deliver Actionable Guidance",
            description: `Effortlessly support your clients' <br /> compliance requirements, including <br /> HIPAA, GDPR, PCI DSS, and CMMC. <br /> Vijilan provides detailed reporting, <br /> audit-ready documentation, and <br /> compliance expertise—reducing your <br /> workload and minimizing regulatory <br /> risks.`,
            height: "405px",
            marginTop: "130px",
        },
        {
            icon: right,
            title: "Confirm & Close",
            description: `We work with your team via the portal <br /> or ticketing system to confirm the <br /> threat has been successfully resolved.`,
            height: "420px",
        },
    ];

    return (
        <div className=" max-w-[90%] mx-auto">

            {/* Hero Section */}
            <Heading_Btn
                h1=" Expert Detection. Actionable Guidance."
                desc="Vijilan ThreatRespond™ service provides 24/7 monitoring and threat detection from  our expert SOC, delivering clear, step-by-step instructions for your internal team to remediate threats quickly and effectively."
                btn1="Jwatch the service overview"
                btn2="get an instant quote"
            />


            {/* Video Section */}
            <section className="px-4 py-16 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl   md:text-[40px] font-bold   text-white sm:text-4xl">
                        Understand ThreatRespond in 90 Seconds
                    </h2>
                    <p className="mt-2 text-[18px] text-[#FFFFFF]">
                        See how our expert guidance empowers your internal team to handle threats efficiently.
                    </p>
                    <div className="mt-12 relative">
                        <div className="relative aspect-video w-auto md:w-[621px] mx-auto h-auto md:h-[500px] bg-[#00AEEF3D] rounded-[26px] flex items-center justify-center" >
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <button className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-300 transition-colors">
                                <Play className="w-8 h-8 text-white ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Comparison */}
            <section className="container mx-auto px-6 py-16  relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-96 h-96 border border-purple-500/20 rounded-full"></div>
                    <div className="absolute bottom-20 left-10 w-64 h-64 border border-purple-500/20 rounded-full"></div>
                    <svg
                        className="absolute top-40 right-1/4 w-32 h-32 text-purple-500/10"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                    >
                        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white mb-4">
                            The Right Service for Your In-House Team
                        </h2>
                        <p className="text-[18px] text-[#FFFFFF]">
                            Choose the solution that matches your organization's capabilities and needs
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Card */}
                        <div className="bg-[#082235] p-5 md:p-10 rounded-[10px] backdrop-blur-sm h-fit">
                            <h3 className="text-xl md:text-[24px] font-medium text-white mb-8">ThreatRespond is a perfect fit if you...</h3>
                            <ul className="space-y-6 text-[20px]">
                                <li className="flex items-start gap-4">
                                    <div className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...have an internal IT team capable of performing remediation.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...want to offload the burden of 24/7 alert monitoring.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...need expert investigation to eliminate false positives.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-white text-lg leading-relaxed">
                                        ...want clear, step-by-step guidance to resolve incidents.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Card */}
                        <div className="bg-[#082235] p-4 md:p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl md:text-[24px] font-bold text-white mb-6">Looking for hands-on, active remediation?</h3>
                            <p className="text-white text-sm md:text-[20px] font-medium leading-relaxed mb-8">
                                If you need a fully managed service where our SOC takes direct action to contain and remediate threats,
                                explore our flagship ThreatRemediate™ service.
                            </p>
                            <p className="text-[#00AEEF] text-sm md:text-[20px] leading-relaxed mb-6">
                                ThreatRemediate goes beyond guidance—our SOC actively isolates endpoints, disables compromised accounts,
                                and neutralizes threats in real-time while you sleep.
                            </p>
                            <button
                                className="p-2 md:p-[20px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                                style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                }}>

                                <span className="uppercase text-sm md:text-2xl">learn about threat remediate</span>
                                <div className="w-6 h-6  flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
                            From Detection to Guided Resolution
                        </h2>
                        <p className="mt-4 text-[18px] text-white">
                            Our comprehensive security process helps keep your organization secure from end to end.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cardData.map((item, index) => (
                            <SecurityCard key={index} data={item} />
                        ))}
                    </div>
                </div>

            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white mb-3">
                            Questions About Guided Response?
                        </h2>
                        <p className="text-[20px] text-white">Ask Jen AI, our 24/7 AI-powered Cyber Security Sales Agent.</p>
                    </div>

                    <div className="rounded-3xl px-8 py-14 " style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Chat Interface */}
                            <div className="space-y-6">
                                <div className="relative bg-[#00AEEF3D] rounded-[24px] p-4 md:p-[60px]">
                                    <div
                                        className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude"
                                        }}
                                    />
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-[45px] md:w-[60px]  h-[30px] md:h-[60px] rounded-full flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)),
                                                    linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`
                                            }}>
                                            <span className="text-white font-bold text-sm">JN</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-sm md:text-[20px]">JEN AI</h3>
                                            <p className="text-[#00AEEF] text-xs md:text-[13px] font-medium">Cyber security Sales Agent</p>
                                        </div>
                                    </div>
                                    <div className="relative bg-[#00AEEF4D] p-6 rounded-[16px] w-fit flex justify-center items-center mx-auto">
                                        <div
                                            className="absolute inset-0 rounded-[16px] p-[1px] z-0"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude"
                                            }}
                                        />
                                        <p className="text-white text-[13px] text-center leading-relaxed">
                                            Jen AI chatbot interface would be
                                            <br />
                                            embedded here
                                            <br />
                                            Interactive AI agent for real-time
                                            <br />
                                            Q&A
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Suggested Questions */}
                            <div className=" space-y-5">
                                <h3 className="text-2xl md:text-[40px] font-bold text-white">Try asking Jen AI:</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="relative p-2" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                                style={{
                                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",

                                                }}
                                            />
                                            <p className=" text-[13px] text-white">"What kind of guidance do you provide?"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-6 py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white">Ready to Empower Your Team?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative bg-[#00AEEF3D] p-2 md:p-8 rounded-[24px] text-center">
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8">
                                <h3 className="text-[24px] font-medium text-white mb-4">Become a Partner</h3>
                                <p className="text-white text-[18px] mb-6">
                                    Start the application <br /> process now. Get <br /> access to our portal <br /> and resources in <br /> minutes
                                </p>
                            </div>
                            <button

                                className="inline-block rounded-md  px-[26px] py-[16px] text-[18px] font-medium text-white" style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                }}
                            >
                                APPLY NOW
                            </button>
                        </div>

                        <div className="relative bg-[#00AEEF3D] p-4 md:p-8 rounded-[24px] text-center" >
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8 px-5">
                                <h3 className="text-[24px] font-medium text-white mb-4">Get a ThreatRespond Quote</h3>
                                <p className="text-white text-[18px] mb-6">
                                    Already a partner? Log <br /> in to our portal to build <br /> custom quotes and <br /> explore pricing <br /> scenarios.
                                </p>
                            </div>

                            <button

                                className="inline-block rounded-[8px]  px-[26px] py-[16px] text-[18px] font-medium text-white" style={{
                                    border: "1px solid",
                                    borderImageSource: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                    borderImageSlice: 1,
                                    borderRadius: "8px",
                                    backgroundColor: "transparent",
                                }}

                            >
                                ACCESS PRICING SIMULATOR
                            </button>
                        </div>

                        <div className=" relative bg-[#00AEEF3D] p-2 md:p-8 rounded-[24px] text-center">
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8">
                                <h3 className="text-[24px] font-medium text-white mb-4">Call Our AI Agent</h3>
                                <p className="text-white text-[18px] mb-6">
                                    For instant voice <br /> assistance, call Jen AI <br /> to get your questions <br /> answered now.

                                </p>
                                <p className="text-[#00AEEF] text-[18px] ">1 (954) 440-7608</p>
                            </div>

                            <button
                                className="inline-block rounded-[8px]  px-[26px] py-[16px] text-[18px] font-medium text-white" style={{
                                    border: "1px solid",
                                    borderImageSource: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                    borderImageSlice: 1,
                                    borderRadius: "8px",
                                    backgroundColor: "transparent",
                                }}

                            >
                                CALL NOW
                            </button>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
