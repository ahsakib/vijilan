import {
    Car,
    Plus,

} from "lucide-react"
import Clipboard from "@images/Clipboard Approve.png"
import GraphReport from "@images/Graph Report.png"
import CardContent from "@components/CardContent"

import chainIcon from "@images/chain-icons.png"
import RocketIcon from "@images/rocketIcon.png"
import sheildIcon from "../../Assets/sheildIcon.png";
import TaskCheck from "@images/task-check.png"
import TimeIcon from "@images/timeIcon.png"
import Heading_Btn from "@components/Heading_Btn"
import { CardContentData1 } from "@app/Constant/Constant"

// Custom Card Component
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};

const CardContentData = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};


export default function VijilianLanding() {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="relative z-10 px-6 py-20 text-center">

                <Heading_Btn
                    h1={"Build Your Profitable Security Practice on\nOur Platform"}
                    desc={"Leverage our 24/7 US-Based SOC, AI-driven technology, and channel-first model to\ndeliver enterprise-grade  cyber security. No minimums, no complexity, no high startup\ncosts."}
                    rating="★★★★★  |  Trusted by over 200 MSPs worldwide "
                    btn1="Apply to Become a partner"
                    btn2="DOWNLOAD PARTNER KIT"
                />
            </section >

            {/* Go-to-Market Section */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-[40px] font-bold text-center mb-10 text-white">Go-to-Market in Days not Months</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card
                            className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
                 linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}
                        >
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0 relative z-10">
                                <div className="flex items-center gap-5 mb-4">
                                    <img src={Clipboard} alt="" className="w-[40px] h-[50px]" />
                                    <span className="text-[#00AEEF] text-[18px]">1. Apply Online</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Our simple, no-obligation application takes less than 5 minutes to complete.
                                </p>
                            </CardContentData>
                        </Card>

                        <Card className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}>
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4 gap-5">
                                    <img src={RocketIcon} alt="" className="w-[34px] h-[40px]" />

                                    <span className="text-[#00AEEF] text-[18px]">2. Fast Onboarding</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Get access to our partner portal, training, and sales materials within 24 hours.
                                </p>
                            </CardContentData>
                        </Card>
                        <Card className="relative p-6 rounded-[24px] overflow-hidden"
                            style={{
                                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                                backgroundClip: "padding-box",
                            }}>
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    borderRadius: "24px",
                                }}
                            />
                            <CardContentData className="p-0">
                                <div className="flex items-center mb-4 gap-5">
                                    <img src={GraphReport} alt="" className="w-[36px] h-[50px] " />

                                    <span className="text-[#00AEEF] text-[18px]">3. Start Selling</span>
                                </div>
                                <p className="text-[16px] text-[#FFFFFF]">
                                    Use our comprehensive sales enablement kit to close your first deal this week.
                                </p>
                            </CardContentData>
                        </Card>
                    </div>
                </div>
            </section >

            {/* Partnership Features */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-[40px] font-bold text-center mb-10 text-white">
                        A Partnership Designed for Your Growth
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   mx-auto">
                        {
                            CardContentData1.map((card,index) => <CardContent
                                head={card.head}
                                Index={index}
                                sub={card.sub}
                                iconed={card.iconed}
                                hFit={true}
                            />)
                        }
                    </div>
                </div>
            </section >

            {/* Partnership Tiers */}
            < section className="relative z-10 py-16" >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-[40px] font-bold mb-2 text-white">
                        A Partnership Tier for Every Stage of
                        <br />
                        Your Growth
                    </h2>
                    <p className="text-[18px] text-[#FFFFFF] mb-10">
                        Our program is designed to meet you where you are and help you scale your security offerings <br /> profitably.
                    </p>
                    <Card
                        className="relative px-[30px] py-[20px] rounded-[8px] bg-[#00AEEF3D]"
                    >
                        <div
                            className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude"
                            }}
                        />
                        <CardContentData className="p-0">
                            <p className="text-white text-[18px] text-left">
                                A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented here, outlining
                                services, support, and benefits for each level as defined in the development plan.
                            </p>
                        </CardContentData>
                    </Card>
                </div>
            </section >


            {/* Testimonials */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card
                            className="p-8 rounded-[10px] border-l-2 border-[#00AEEF] bg-[#082235]">

                            <CardContentData className="p-0 text-center">
                                <h3 className="text-[24px] font-medium mb-6 text-white">What Our Partners say</h3>
                                <blockquote className="text-white mb-6 text-[20px] leading-relaxed">
                                    "Our security MRR increased by 30% within 6 months of partnering with Vijilan. Their SOC is
                                    world-class, and the active remediation in ThreatRemediate is a game- changer for our clients."
                                </blockquote>
                                <p className=" text-[14px] font-medium" style={{color: "#00AEEF"}}>— Alex Johnson, CEO of a Silver Tier MSP Partner</p>
                            </CardContentData>
                        </Card>

                        <Card
                            className="p-8 rounded-[10px] bg-[#082235]"
                        >
                            <CardContentData className="p-0 text-center">
                                <h3 className="text-[24px] font-medium mb-6 text-white">A Message to Our Future Partners</h3>
                                <blockquote className="text-white mb-6 text-[20px] leading-relaxed">
                                    "We built our partner program on a foundation of trust and mutual success. We succeed when you
                                    succeed. That's why we provide the best technology, an expert SOC, and the GTM support you need to
                                    win."
                                </blockquote>
                            </CardContentData>
                        </Card>
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="relative z-10 px-6 py-16" >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-[40px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                            "What does Vijilan do for MSPs?",
                        ].map((question, index) => (
                            <Card key={index} className="relative rounded-[8px]" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}>
                                <div
                                    className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                    style={{
                                        background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",

                                    }}
                                />
                                <CardContentData className="p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white text-[16px]">{question}</span>
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    </div>
                                </CardContentData>
                            </Card>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    )
}
