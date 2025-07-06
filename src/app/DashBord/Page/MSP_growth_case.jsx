
// Responsive Complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import ProfileHRCard from '../component/ProfileHRCard';
import ListComponent from '../component/ListComponent';
import DashboardSideText from '../component/DashboardSideText';
import CommonTextCard from '../component/CommonTextCard';
import { coreTechnology, DeploymentTimeline, ThreatRemediate_Ultimate } from '@app/Constant/Constant';

const MSP_growth_case = () => {

    const numberArray = [
        {
            label: "30%",
            text: "MRR Growth",
        },
        {
            label: "3x",
            text: "Alert Reduction",
        },
        {
            label: "95%",
            text: "Client Retention",
        },
        {
            label: "4",
            text: "Weeks to Deploy",
        }
    ];

    const synergyBenefits = [
        {
            label: "Technology Synergy",
            text: "The integration of CrowdStrike, Corelight, and Cribl provided streamlined operations, cost-effective security, and rapid threat detection and remediation capabilities that would have been impossible to achieve with individual point solutions."
        },
        {
            label: "Managed Remediation Model",
            text: "Unlike detection-only solutions that simply generate more alerts, Vijilan's SOC provided end-to-end containment and remediation, removing the operational burden from the MSP's internal team while ensuring threats were actually stopped."
        },
        {
            label: "Partner-First Approach",
            text: "The white-labeled, partner-centric model allowed the MSP to deliver advanced security solutions under their own brand, reinforcing their market position and building stronger client trust without revealing the underlying technology partnerships."
        },
        {
            label: "Scalable Framework",
            text: "The solution scaled seamlessly with the MSP's growth, accommodating new clients without proportional increases in operational overhead, licensing complexity, or technical resource requirements."
        }
    ];


    const solutionComponents = [
        "ThreatRemediate Ultimate",
        "CrowdStrike Falcon XDR",
        "Corelight Network Detection",
        "Cribl Data Optimization",
        "Managed ITDR",
        "Exposure Management",
        "24/7 SOC Services"
    ];


    const list = [
        "     Scalability Crisis: Difficulty scaling security services profitably across their diverse client base",
        "Alert Fatigue: Technical team overwhelmed by excessive security notifications, impacting morale and efficiency",
        "High Operational Overhead: Complex management of multiple security tools creating operational burden",
        "Competitive Pressure: Struggled to differentiate their managed security offerings from competitors",
        "Compliance Requirements: Needed robust security for regulated clients (HIPAA, GLBA, SEC)",
        "Resource Limitations: Limited internal resources to scale security operations effectively",
        "Growing Threat Landscape: Increasing cybersecurity risks to their client base"


    ]

    const list1 = [
        "Premium pricing for enterprise-grade security services",
        "Higher client retention rates due to improved service quality",
        "Ability to win larger, more complex deals",
        "Cross-selling opportunities with existing clients"
    ];

    const list2 = [
        "Technical team could focus on strategic initiatives rather than alert triage",
        "Improved employee satisfaction and reduced turnover",
        "Enhanced response times for non-security IT issues",
        "More time for client relationship building and business development"
    ];

    const list3 = [
        "Clients felt more secure and protected from cyber threats",
        "Proactive threat hunting identified and stopped threats before impact",
        "Compliance requirements met more easily and comprehensively",
        "Enhanced trust in the MSP's technical capabilities"
    ];

    const MSP_Outcomes = [
        {
            "metric": "30%",
            "label": "Revenue Growth",
            "text": "Increased monthly recurring revenue through premium security services"
        },
        {
            "metric": "50%",
            "label": "Alert Reduction",
            "text": "Dramatically reduced technical team burnout and improved efficiency"
        },
        {
            "metric": "95%",
            "label": "Client Retention",
            "text": "Enhanced client satisfaction with proactive security services"
        },
        {
            "metric": "100%",
            "label": "Implementation",
            "text": "Rapid deployment without disrupting existing operations"
        }
    ];



    return (
        <div className='max-w-[90%] mx-auto text-white'>
            <div>

                {/* top part */}
                <section className="container mx-auto px-6">
                    <div className="mb-8">
                        <nav className="flex flex-wrap items-center text-[12px]">
                            <span className="text-white hover:text-blue-600 cursor-pointer">Home</span>
                            <ChevronRight className="text-white w-4 h-4 mx-2" />
                            <span className="text-white hover:text-blue-600 cursor-pointer">Resources</span>
                            <ChevronRight className="text-white w-4 h-4 mx-2" />
                            <span className="text-white hover:text-blue-600 cursor-pointer">Case Studies</span>
                            <ChevronRight className="text-white w-4 h-4 mx-2" />
                            <span className="text-blue-500 text-[13px] font-medium" Home  >Health Compliance Success</span>
                        </nav>
                    </div>
                </section>

                {/* button */}
                <section className='flex justify-center'>
                    <button
                        className="py-3  px-5 text-lg  rounded-4xl text-white bg-green-500 font-semibold">
                        Compliance Success
                    </button>
                    {/* heading button */}


                </section>




                <Heading_Btn
                    h1="How a Gold Tier MSP Achieved 30% MRR Growth with ThreatRemediate Ultimate"
                    desc="Discover how our flagship managed XDR solution transformed an established MSP's security practice, driving significant revenue growth while reducing operational overhead."
                />

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {
                        numberArray.map(card => <NumberShow link={card.text} number={card.label} />)
                    }
                </div>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 justify-between  items-start'>

                <div className='grid-cols-1'>


                    <CommonTextCard
                        heading1="🏥 Executive Summary"

                        p1=" A regional bank with multiple branches faced intense regulatory pressure and sophisticated cyber threats targeting financial institutions. Subject to stringent oversight from the SEC and GLBA regulations, they needed to elevate their security posture to protect sensitive customer financial data, prevent fraud, and demonstrate compliance to auditors.The bank required a solution that would not only defend against advanced persistent threats and financial fraud attempts, but also streamline their audit preparation process and provide the comprehensive documentation required by financial regulators."
                        heading2="Key Achievement"
                        card={MSP_Outcomes}


                    />


                    <ListComponent
                        heading="🚨 The Challenge"
                        p1="As a successful Gold Tier MSP managing over 100 clients across various industries, the company faced several critical obstacles that threatened their continued growth and profitability:"
                        array={list}
                        p2="The MSP's CEO explained:  We were at a crossroads. Our clients needed more sophisticated security, but we couldn't scale our current approach without dramatically increasing costs and complexity. We needed a solution that would let us grow our security practice without overwhelming our team."
                    />

                    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>
                        {/* <h1 className='text-center mt-8 font-semibold'>{heading}</h1> */}
                        <h1 className='  mb-4 text-left mt-8 font-semibold'>💡 The Solution: ThreatRemediate Ultimate</h1>
                        <p className=' my-3'>Vijilan deployed ThreatRemediate Ultimate, our flagship fully managed Extended Detection and Response (XDR) solution. This comprehensive platform integrated seamlessly with the MSP's existing infrastructure while providing enterprise-grade security capabilities.</p>


                        <div className='grid sm:grid-cols-1  lg:grid-cols-4 gap-5'>
                            {ThreatRemediate_Ultimate.map((card, index) => (
                                <div key={index} className='flex  items-center justify-center'>
                                    <div className='flex justify-center flex-col items-center bg-[#576675] py-8 px-4 gap-5 rounded-lg text-center  '>
                                        <img src={card.icon} alt="" />
                                        <h4 className='font-semibold'>{card.label}</h4>
                                        <p>{card.text}</p>
                                    </div>

                                </div>
                            ))}
                        </div>


                        <div>

                        </div>
                    </div >


                    <div className='mt-5'>

                        <CommonTextCard
                            array={DeploymentTimeline}
                            heading=" ⏱️ Implementation Timeline"

                            p1="The implementation was designed for minimal disruption while maximizing speed to value:"

                        />
                    </div>
                    <div className='mt-5'>

                        <ListComponent
                            heading="📈 Results & Business Impact"
                            p11="Revenue Growth (30% MRR Increase)"
                            p22="Operational Efficiency (50% Alert Reduction)"
                            p3="Client Satisfaction (95% Retention Rate)"
                            array={list1}
                            array2={list2}
                            array3={list3}
                            p1="The transformation was both immediate and sustained, with measurable improvements across all key business metrics:"

                        />
                    </div>



                    {/* <div className='mt-12'>

                        <CommonTextCard
                            heading1="🛡️ Comprehensive Healthcare Security Solution"
                            p1="Vijilan deployed a multi-layered security solution specifically tailored for the healthcare environment, centered on proactive defense and identity protection:"
                            heading2="Healthcare Security Architecture"
                            card={threatProtectionArray}

                        />
                    </div> */}



                </div>


                <div className='grid-cols-1'>


                    <ProfileHRCard
                        h1="Company Profile"
                        l1l="Company Type"
                        l1r="MSP (Gold Tier)"
                        l2l="Client Count"
                        l2r="100+ Clients"
                        l3l="Industry Focus"
                        l3r="General IT Services"
                        l4l="Geographic Region"
                        l4r="North America"
                        l5l="Team Size"
                        l5r="25-50 Employees"
                        l6l="Partnership Level"
                        l6r="Vijilan Gold Partner"
                    />

                    <ListComponent
                        heading="Solution Components"
                        array={solutionComponents}
                    />





                    <DashboardSideText
                        desc="Integrating Vijilan's ThreatRemediate Ultimate transformed our managed security practice. We grew revenue quickly, cut alert noise dramatically, and improved our team's efficiency and morale. Vijilan is now a cornerstone of our growth strategy."
                        author="CEO, Gold Tier MSP Partner"

                    />


                    <CommonTextCard
                        array={synergyBenefits}
                        heading="🎯 Why This Partnership Succeeded"

                    />


                    <div className='mt-8'>
                        <Heading_Btn
                            bg="#615F6A"
                            h1="Download Resources "
                            desc="Get the complete case study with detailed metrics and implementation guides."
                            btn1=" download case study"
                            btn="schedule  consultation"
                        />
                    </div>






                </div>

            </div>

        </div>
    );
};

export default MSP_growth_case;