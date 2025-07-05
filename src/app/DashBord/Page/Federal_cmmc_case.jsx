import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import CommonTextCard from '../component/CommonTextCard';
import { awsCard, controllArray, IT_IO } from '@app/Constant/Constant';
import ListComponent from '../component/ListComponent';
import DashBoardCard from '../component/DashBoardCard';
import ProfileHRCard from '../component/ProfileHRCard';
import DashboardSideText from '../component/DashboardSideText';

const Federal_cmmc_case = () => {
    const numberArray = [
        {
            "label": "Weeks to Compliance",
            text: "6"
        },
        {
            "label": "Audit Success",
            text: "100%"
        },
        {
            "label": "CMMC Controls",
            text: "110"
        },
        {
            "label": "CUI Protection",
            text: "24/7"
        }
    ]

    const list1 = [
        "Complex Compliance Framework: The 110 controls required for CMMC 2.0 Level 2 were complex and overwhelming to implement and document independently",
        "Tight Deadline: Faced a looming deadline to achieve compliance or risk losing eligibility for critical federal contracts",
        "Protecting CUI: Mandate to protect Controlled Unclassified Information (CUI) but lacked advanced 24/7 monitoring and response capabilities",
        "Lack of In-House Expertise: Internal IT team did not have specialized cybersecurity expertise required to build and manage CMMC-compliant security program",
        "Resource Limitations: Lacked budget and personnel to build in-house 24/7 Security Operations Center (SOC)",
        "Contract Eligibility: Failure to achieve CMMC compliance would result in loss of major revenue streams from federal contracts",
        "Audit Documentation: Required detailed documentation and reporting to pass rigorous CMMC assessment"
    ]

    const list2 = [
        "24/7 Monitoring & Active Remediation: Continuous threat detection and response meeting CMMC incident response requirements",
        "Managed Endpoint Detection & Response (EDR): Advanced protection for systems handling CUI and sensitive government data",
        "Comprehensive Log Management: Detailed logging and reporting capabilities required for CMMC audit purposes",
        "Audit-Ready Documentation: Automated generation of compliance reports and evidence collection",
        "Expert Security Management: Professional SOC services eliminating need for internal cybersecurity hiring"
    ]

    const federalCard = [
        {
            "metric": "6",
            "label": "Weeks to Compliance",
            "text": "Record-time CMMC 2.0 Level 2 achievement through streamlined deployment"
        },
        {
            "metric": "100%",
            "label": "Audit Success",
            "text": "Perfect score on CMMC Level 2 assessment with zero findings"
        },
        {
            "metric": "110",
            "label": "Controls Implemented",
            "text": "Complete coverage of all CMMC 2.0 Level 2 security requirements"
        },
        {
            "metric": "$0",
            "label": "Contract Revenue Lost",
            "text": "Maintained eligibility for all DoD contracts and secured new ones"
        },
        {
            "metric": "24/7",
            "label": "CUI Protection",
            "text": "Continuous monitoring and protection of sensitive government data"
        },
        {
            "metric": "100%",
            "label": "Operational Burden Reduction",
            "text": "Turnkey solution eliminating need for additional cybersecurity staff"
        }
    ]



    const excelList = [
        {
            "label": "Compliance-as-a-Service",
            "text": "Vijilan provides a comprehensive solution that maps directly to complex compliance frameworks like CMMC, removing the guesswork for federal contractors. Our pre-built compliance mappings accelerate implementation and ensure complete coverage."
        },
        {
            "label": "Streamlined AWS Marketplace Procurement",
            "text": "Offering solutions through the AWS Marketplace simplifies the buying process for government contractors and enables rapid deployment. This eliminates lengthy procurement cycles and enables immediate compliance progress."
        },
        {
            "label": "Rapid Time-to-Value",
            "text": "Vijilan's efficient onboarding and expert management allow federal contractors to achieve their security and compliance goals in weeks, not months. Our proven methodology ensures successful compliance outcomes under tight deadlines."
        },
        {
            "label": "All-in-One Solution",
            "text": "Vijilan delivers the complete combination of technology (EDR, SIEM), process (24/7 monitoring), and people (expert SOC analysts) required to satisfy stringent government security mandates like CMMC 2.0."
        }
    ]

    return (
        <div className='max-w-[90%] mx-auto'>
            {/* top part */}
            <section className="container mx-auto px-6">
                <div className="mb-8">
                    <nav className="flex items-center text-[12px]">
                        <span className="hover:text-white cursor-pointer">Home</span>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="hover:text-white cursor-pointer">blog</span>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="hover:text-white cursor-pointer">Threat Intelligence</span>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-white text-[13px] font-medium">The Rise of Malware-Free Attacks</span>
                    </nav>
                </div>
            </section>

            {/* button */}
            <section className='flex justify-center'>
                <button
                    className="py-3  px-5 text-lg font-medium rounded-4xl text-white inline-flex items-center space-x-3"
                    style={{
                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                    }}>

                    Federal Success
                </button>
            </section>

            {/* heading button */}

            <Heading_Btn
                h1="Federal Contractor Achieves CMMC 2.0 Readiness in 6 Weeks"
                desc="Discover how a defense contractor achieved CMMC 2.0 Level 2 compliance in record time through Vijilan's AWS Marketplace solution, securing critical DoD contracts with 100% audit success."
            />


            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    numberArray.map(card => <NumberShow link={card.label} number={card.metric} />)
                }
            </div>



            {/* divided 2 cols */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>

                <div className='grid-cols-1'>

                    <div className='  bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12'>

                        <CommonTextCard
                            heading1="Us Executive Summary"
                            p1="A mid-sized federal government contractor specializing in Department of Defense (DoD) contracts faced an urgent business-critical challenge: achieving Cybersecurity Maturity Model Certification (CMMC) 2.0 Level 2 compliance to remain eligible for lucrative government contracts. With a tight deadline and complex compliance requirements involving 110 security controls, the contractor needed a rapid, comprehensive solution that would provide not only the necessary security capabilities but also the detailed documentation and audit readiness required for CMMC certification."
                            heading2="Production Continuity Achievement"
                            card={controllArray}

                        />




                    </div>
                    {/* ⚠️ Government Compliance Challenges */}
                    <div>
                        <ListComponent
                            heading="⚠️ Government Compliance Challenges "
                            p1="Federal contractors face unique cybersecurity challenges that combine complex regulatory requirements with the need to protect sensitive government information"
                            array={list1}
                        />
                    </div>




                    <div>
                        <CommonTextCard
                            // array={securityArray}
                            card={awsCard}
                            heading="☁️ AWS Marketplace Deployment Advantage"
                            p1="The contractor procured Vijilan's ThreatRemediate service directly through the AWS Marketplace, which significantly streamlined and accelerated both the procurement and deployment process:"
                            listHead="Comprehensive CMMC-Mapped Security Program"
                            list_p="The solution provided a complete security program that mapped directly to CMMC 2.0 controls, eliminating guesswork and ensuring comprehensive coverage of all 110 required security controls."
                            list={list2}
                            list_key="Key Solution Components:"
                        />
                    </div>
                    <div>
                        <Heading_Btn

                            h3="⏱️ 6-Week Compliance Timeline"
                            desc="   Vijilan's streamlined deployment process enabled the contractor to achieve full CMMC 2.0 Level 2 compliance in just 6 weeks:"
                        />


                        <div className='mt-8'>
                            <h1 className='my-4 text-center font-semibold'> 🛡️ Comprehensive IT/OT Security Solution</h1>
                            <div className='mx-16 grid grid-cols-2 gap-5'>
                                {
                                    IT_IO.map(card => <DashBoardCard icon={card.icon} head={card.label} desc={card.text} />)
                                }
                            </div>
                        </div>
                    </div>



                </div>

                <div className='grid-cols-1'>


                    <ProfileHRCard
                        h1="Federal Contractor Profile"
                        l1l="Contractor Type"
                        l1r="Defense Contractor"
                        l2l="Size"
                        l2r="Mid-Sized"
                        l3l="Primary Customer"
                        l3r="Department of Defense"
                        l4l="Compliance Requirement"
                        l4r="CMMC 2.0 Level 2"
                        l5l="Data Classification"
                        l5r="CUI Protection"
                        l6l="Deployment"
                        l6r="AWS Marketplace"
                    />


                    <MesurableComponentDashboard
                        heading="Manufacturing Security & Operational Results"
                        array={federalCard}
                    />

                    <DashboardSideText
                        desc="The CMMC deadline was a make-or-break moment for our business. We didn't have the time or expertise to build a compliant program from scratch. Finding Vijilan on the AWS Marketplace was a lifesaver. Their team got us deployed and audit-ready in just six weeks, and we passed our assessment without a single issue. We couldn't have done it without them."
                        author="CEO, Defense Contractor"
                    />


                    <CommonTextCard
                        array={excelList}
                        heading="Why Vijilan Excels in Government  Compliance"
                    />
                </div>
            </div>


            {/* last section  */}






            <Heading_Btn
                h1="Achieve CMMC Compliance Fast"
                desc=" Discover how Vijilan's AWS Marketplace solution can help your federal contracting business achieve CMMC 2.0 compliance in record time while securing critical government contracts."
                btn1="Get started on aws market place"
                btn2=" schedule  cmmc consultation"
            />
        </div>
    );
};

export default Federal_cmmc_case;