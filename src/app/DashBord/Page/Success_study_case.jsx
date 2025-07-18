// responsive complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight, Section } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import DashBoardCard from '../component/DashBoardCard';
import { benefitsData, ExucativeSummary, SalesProcess, SMBCard } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import ProfileHRCard from '../component/ProfileHRCard';
import DashboardSideCard from '../component/DashboardSideCard';
import DashboardSideText from '../component/DashboardSideText';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import { Link } from 'react-router-dom';

const Success_study_case = () => {

    const NumberArray = [
        {
            label: "2x",
            text: "Attach Rate Increase"
        },
        {
            label: "40%",
            text: "Margin Growth"
        },
        {
            label: "100%",
            text: "Hands-Off"
        },
        {
            label: "1 wk",
            text: "Time to First Sale"
        }
    ]

    const list1 = [
        "Sales Complexity: Existing security products required deep technical expertise to sell, creating barriers for the sales team",
        "Operational Overhead: Lacked internal SOC or technical staff to manage complex security services post-sale",
        "Profit Margins: Needed a solution with strong, predictable margins that contributed to recurring revenue",
        "Client Value Proposition: Required a solution with clear, easy-to-understand benefits that clients could quickly approve",
        "Competitive Positioning: Needed credible security offering to compete with established security-focused competitors",
        "Resource Allocation: Post-sale management of other security solutions drained resources from core sales activities",
        "Sales Enablement: Lacked the materials and expertise to effectively position and sell security services"
    ]

    const list2 = [

        "CrowdStrike-Powered XDR: Market-leading endpoint detection and response with brand recognition",
        "Automated Containment: Immediate threat isolation without manual intervention",
        "Full Remediation: Complete threat removal performed by Vijilan's expert SOC team",
        "24/7 Monitoring: Round-the-clock security operations center coverage",
        "Incident Response: Professional incident management and communication",
        "Compliance Reporting: Automated reports for regulatory requirements"

    ]

    const list3 = [
        "ThreatRemediate Enablement Kit: Complete sales and marketing toolkit",
        "Quick Sell Guide: Simplified sales process documentation",
        "Co-Brandable Materials: Customizable presentations, datasheets, and proposals",
        "Proposal Generation Tool: Automated proposal creation for faster response times",
        "Competitive Battle Cards: Positioning against Arctic Wolf and other competitors",
        "ROI Calculators: Tools to demonstrate clear client value"
    ]

    const fitForSales = [
        {
            label: "Hands-Off Management",
            text: "Vijilan's fully managed service means the VAR doesn't need to build or maintain a SOC, handle incident response, or manage complex security tools. This aligns perfectly with a sales-focused business model, allowing the team to concentrate on what they do best: selling."
        },
        {
            label: "Easy to Sell & Profitable",
            text: "The service provides a comprehensive, simplified security solution with a recurring revenue model. Pre-built sales and marketing materials make it easy for VARs to position, sell, and profit from the offering without requiring deep security expertise."
        },
        {
            label: "Clear Client Value",
            text: "ThreatRemediate Complete provides SMBs with enterprise-grade XDR protection, reducing their operational burden and ensuring rapid threat containment and remediation. The value proposition is clear and easy for clients to understand and approve."
        },
        {
            label: "CrowdStrike Credibility",
            text: "Leveraging the power and brand recognition of CrowdStrike adds significant market appeal and credibility to the offering, making it easier to compete against established security providers and justify premium pricing."
        }
    ]

    const MeasurabeCard = [
        {
            "label": "Attach Rate",
            "metric": "2x",
            "text": "Doubled security service attachment to existing deals"
        },
        {
            "label": "Attach Rate",
            "metric": "40%",
            "text": "Doubled security service attachment to existing deals"
        },
        {
            "label": "Hands-Off",
            "metric": "100%",
            "text": "Zero post-sale management required from VAR team"
        },
        {
            "label": "First Sale",
            "metric": "1 wk",
            "text": "Time from enablement to first successful deal"
        },
        {
            "label": "Close Rate",
            "metric": "85%",
            "text": "Higher close rate on security opportunities"
        },
        {
            "label": "Deal Size Growth",
            "metric": "30%",
            "text": "Average contract value increase with security add-on"
        }
    ]


    const businessModel = [
        {
            "label": "Revenue Stream Diversification",
            "text": "The addition of ThreatRemediate Complete created a high-margin recurring revenue stream that complemented the VAR's traditional hardware and software sales. This recurring component provided predictable income and improved overall business stability."
        },
        {
            "label": "Sales Team Efficiency",
            "text": "The comprehensive sales enablement materials and simplified value proposition allowed the existing sales team to effectively sell security services without additional training or security expertise. This efficiency translated directly into improved sales performance."
        },
        {
            "label": "Competitive Differentiation",
            "text": "Offering enterprise-grade security powered by CrowdStrike provided significant competitive differentiation, allowing the VAR to win deals against competitors who couldn't match the security offering or were limited to basic antivirus solutions."
        },
        {
            "label": "Client Relationship Enhancement",
            "text": "The security service transformed client relationships from transactional hardware/software purchases to ongoing strategic partnerships, resulting in higher client lifetime value and increased referral opportunities."
        }
    ]


    return (
        <div className='max-w-[90%] mx-auto'>
            {/* top part */}
            <section className="container mx-auto px-6">
                <div className="mb-8">
                    <nav className="flex flex-wrap items-center text-[12px]">
                        <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <span className="hover:text-white cursor-pointer">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link to={"/resources"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <span className="hover:text-white cursor-pointer">Resources</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <span className="hover:text-white cursor-pointer">Case Studies</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="!text-blue-400 text-[13px] font-medium">Var Growth Success</span>
                    </nav>
                </div>


            </section>

            {/* hero section */}
            <section>
                <div className='flex justify-center '>
                    <h6 className='bg-gray-400 px-5 py-3 rounded-4xl '>VAR Growth Outcomes</h6>
                </div>

                <Heading_Btn
                    h1="VAR Achieves 2x Attach Rate & 40% Margin Growth with ThreatRemediate Complete"
                    desc="Discover how a sales-focused Value-Added Reseller transformed their business with the perfect 'hands-off' cybersecurity solution that's easy to sell and highly profitable."
                />
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {
                        NumberArray.map(card => <NumberShow number={card.label}
                            link={card.text}
                        />)
                    }
                </div>

            </section>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>

                {/* left col */}
                <div className='grid-cols-1'>
                    <div className='  bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12'>

                        <div className='text-left'>
                            <h1 className='font-semibold my-5'>📈 Executive Summary</h1>
                            <p className='my-5'>    A mid-sized Value-Added Reseller with a strong sales focus needed a cybersecurity solution that would complement their technology solutions and hardware sales without adding operational complexity. They required a "hands-off" security offering that was easy to sell, provided clear client value, and opened new recurring revenue streams.

                                Traditional security offerings were too complex to package and sell effectively, often slowing down sales cycles and creating post-sale management burdens that drained resources from core sales activities. The VAR needed a credible, market-leading solution to compete effectively with established players like Arctic Wolf.</p>
                        </div>

                        <div className='my-8'>
                            <h1 className='text-lg md:text-2xl lg:text-3xl font-semibold mt-3  mb-5 text-center'>ThreatRemotediate Complete /  Silver Tier Results</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>
                                {ExucativeSummary.map(card => <DashBoardCard
                                    icon={card.icon}
                                    head={card.label}
                                    desc={card.text}
                                />)}
                            </div>
                        </div>


                    </div>



                    <ListComponent
                        heading="🎯Sales & Operational Challenges"
                        p1="As a sales-focused VAR, the company faced unique challenges in adding cybersecurity to their portfolio"
                        array={list1}
                    />

                    <div className='  bg-gradient-to-t to-[#063853] from-[#082235] py-8 px-12 mt-12'>
                        <h1 className='text-lg md:text-xl text-center mt-8 font-semibold'>🛡️ ThreatRemediate Complete: The Perfect VAR Solution</h1>

                        <p className='text-left my-8'>
                            Vijilan deployed ThreatRemediate Complete with Silver Tier partnership benefits, specifically designed for sales-focused VARs needing a comprehensive yet simple security offering:
                        </p>
                        <p className='mt-2 font-extrabold'>Core Service Components</p>
                        <ul className=' list-item'>
                            {
                                list2.map(li => <li className='list-disc mt-3 ml-6'>{li}</li>)
                            }
                        </ul>

                        <p className='mt-6 font-extrabold'>Silver Tier Sales Enablement</p>
                        <ul className=' list-item'>
                            {
                                list3.map(li => <li className='list-disc mt-3 ml-6'>{li}</li>)
                            }
                        </ul>

                    </div>

                    {/* card */}

                    <div className='mt-8'>
                        <h1 className='my-4 text-center font-semibold'>Accelerated Sales Process</h1>
                        <div className='mx-6 lg:mx-16 grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {
                                SalesProcess.map(card => <DashBoardCard icon={card.icon} head={card.label} desc={card.text} />)
                            }
                        </div>
                    </div>

                    {/* last card */}



                    <div className='mt-5'>
                        <CommonTextCard
                            array={fitForSales}
                            heading="🎯  Perfect Fit for Sales-Focused VARs"
                        />
                    </div>


                </div>

                {/* right col */}

                <div className='grid-cols-1'>


                    <ProfileHRCard
                        h1="VAR Profile"
                        l1l="Business type"
                        l1r="Value Added Reseller"
                        l2l="Partnership Level"
                        l2r="Silver Tier"
                        l3l="Business Focus"
                        l3r="Sales-Driven"
                        l4l="Primary Services"
                        l4r="Technology Solutions"
                        l5l="Target Market"
                        l5r="SMB & Mid-Market"
                        l6l="Geographic Region"
                        l6r="Regional"
                    />


                    <div className='mt-5'>
                        <MesurableComponentDashboard
                            heading="Measurable Sales & Business Impact"
                            array={MeasurabeCard}
                        />
                    </div>

                    <div className='mt-5'>
                        <DashboardSideText
                            desc="Vijilan's ThreatRemediate Complete is the perfect solution for a sales-focused VAR. It's easy to sell, requires zero post-sale management from our team, and our margins have never been better. The partner enablement toolkit had our team closing deals in the first week. It's a true 'sell it and forget it' model with recurring revenue."
                            author="Director of Sales, VAR Partner"
                        />
                    </div>

                    <div className='mt-5'>

                        <CommonTextCard
                            array={businessModel}
                            heading="📊 Business Model Transformation"
                        />
                    </div>
                </div>
            </div>


            <div>



                <Heading_Btn
                    h1="Ready to Transform Your VAR Business?"
                    desc="Discover how ThreatRemediate Complete and our Silver Tier VAR program can drive similar growth and profitability for your technology reseller business.
Explore var  partner ship"
                    btn1="Explore var partnership"
                    btn2="schedule sale  consultation"
                    url={"/visilan-msg-partner"}
                />
            </div>

        </div>
    );
};

export default Success_study_case;