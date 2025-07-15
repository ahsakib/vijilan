// Responsive complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import ProfileHRCard from '../component/ProfileHRCard';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import DashboardSideText from '../component/DashboardSideText';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import { financialService, usExucativeSummary } from '@app/Constant/Constant';
import { Link } from 'react-router-dom';

const Financial_Compliance_Case = () => {
    const numberArray = [
        {
            "metric": "0",
            "label": "Audit Findings"
        },
        {
            "metric": "60%",
            "label": "Faster Response"
        },
        {
            "metric": "100%",
            "label": "Compliance Rate"
        },
        {
            "metric": "24/7",
            "label": "Threat Hunting"
        }
    ]

    const list1 = [
        "Intense Regulatory Pressure: Significant burden in meeting and documenting compliance for GLBA and SEC cybersecurity requirements",
        "Sophisticated Threat Actors: Primary target for advanced cyberattacks aimed at financial theft and customer data exfiltration",
        "Slow Incident Response: Previous security solutions and internal processes were too slow to effectively respond to threats",
        "Audit Preparation Strain: Manual, time-consuming audit preparation process that drained significant internal resources",
        "Identity-Based Attacks: High risk of compromised credentials being used for fraudulent transactions",
        "Non-Public Information (NPI) Protection: Need to safeguard sensitive customer financial and personal data",
        "Real-Time Fraud Prevention: Requirement to detect and stop fraudulent activities before financial losses occur"
    ]

    const financialServiceCard = [
        {
            "metric": "0",
            "label": "Audit Findings",
            "text": "Perfect compliance record across SEC and GLBA examinations"
        },
        {
            "metric": "60%",
            "label": "Faster Response",
            "text": "Reduced mean time to contain and resolve financial threats"
        },
        {
            "metric": "100%",
            "label": "Fraud Prevention",
            "text": "Successfully prevented all attempted fraudulent access"
        },
        {
            "metric": "90%",
            "label": "Audit Prep Reduction",
            "text": "Automated compliance reporting eliminated manual preparation"
        },
        {
            "metric": "24/7",
            "label": "Threat Hunting",
            "text": "Continuous protection against sophisticated financial threats"
        },
        {
            "metric": "100%",
            "label": "Client Trust",
            "text": "Enhanced customer confidence through demonstrated security"
        }
    ]


    const excelList = [
        {
            "label": "Compliance & Audit Expertise",
            "text": "Vijilan understands the unique regulatory pressures of the financial industry and provides solutions with built-in, audit-ready reporting that simplifies compliance. Our team has deep expertise in SEC, GLBA, FFIEC, and other financial regulations."
        },
        {
            "label": "Active Remediation for Financial Assets",
            "text": "Vijilan's ability to perform full containment and remediation is critical when protecting financial assets. Our active response capabilities minimize the risk of financial loss from successful attacks, going beyond detection to actual threat neutralization."
        },
        {
            "label": "Trust & Certification",
            "text": "Vijilan's own SOC 2 Type 2 certification provides an additional layer of assurance for security-conscious financial clients, demonstrating that we maintain the same rigorous security controls for our own operations that we implement for our clients."
        },
        {
            "label": "Identity-Focused Security",
            "text": "The integrated ITDR service directly addresses the primary threat vector for financial fraud—compromised credentials—providing a level of protection that generic security solutions often miss. This focus on identity protection is essential in financial services."
        }
    ]

    return (
        <div className='max-w-[90%] mx-auto'>
            {/* top part */}
            <section className="  mx-auto px-6">
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
                        <span className="!text-blue-400 text-[13px] font-medium">Financial Services Compliance</span>
                    </nav>
                </div>
            </section>

            {/* button */}
            <section className='flex justify-center'>
                <button
                    className="py-3  px-5 text-lg  rounded-4xl text-white bg-yellow-400 font-semibold">
                    Financial Services Impact
                </button>
                {/* heading button */}


            </section>
            <Heading_Btn
                h1="Regional Bank Achieves Zero Audit Findings with ThreatRemediate Ultimate"
                desc="Discover how a regional bank achieved zero SEC and GLBA audit findings with 60% faster incident response through comprehensive financial services security and compliance automation."
            />


            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    numberArray.map(card => <NumberShow link={card.label} number={card.metric} />)
                }
            </div>


            {/* divided 2 cols */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>

                <div className='grid-cols-1'>

                    <CommonTextCard
                        heading1="Us Executive Summary"
                        p1="A regional bank with multiple branches faced intense regulatory pressure and sophisticated cyber threats targeting financial institutions. Subject to stringent oversight from the SEC and GLBA regulations, they needed to elevate their security posture to protect sensitive customer financial data, prevent fraud, and demonstrate compliance to auditors.The bank required a solution that would not only defend against advanced persistent threats and financial fraud attempts, but also streamline their audit preparation process and provide the comprehensive documentation required by financial regulators."
                        heading2="Regular compliance Achievement"
                        card={usExucativeSummary}

                    />
                    {/*  ⚠️ Financial Institution Security Challenges */}
                    <div>
                        <ListComponent
                            heading=" ⚠️ Financial Institution Security Challenges "
                            p1="Financial institutions face a unique combination of regulatory requirements and sophisticated threat actors specifically targeting their high-value assets and data:"
                            array={list1}
                        />
                    </div>





                    <div className='mt-5'>
                        <CommonTextCard
                            // array={securityArray}
                            card={financialService}
                            heading="Financial Service Threat Landscape"

                            // list={list2}
                            list_key="Key Solution Components:"
                        />
                    </div>


                </div>

                <div className='grid-cols-1'>


                    <div className='mt-5'>
                        <ProfileHRCard
                            h1="Financial Institution Profile"
                            l1l="Institution Type"
                            l1r="Regional Bank"
                            l2l="Size"
                            l2r="Mid-Sized"
                            l3l="Locations"
                            l3r="Multiple Branches"
                            l4l="Regulators"
                            l4r="SEC, FDIC"
                            l5l="Compliance Focus"
                            l5r="GLBA, SEC"
                            l6l="Service Level"
                            l6r="Gold Tier"
                        />
                    </div>



                    <div className='mt-5'>
                        <MesurableComponentDashboard
                            heading="Financial Service & Compliance Results"
                            array={financialServiceCard}
                        />
                    </div>

                  <div className='mt-5'>
                      <DashboardSideText
                        desc="For us, compliance isn't optional—it's foundational to our business. Vijilan's ThreatRemediate Ultimate service not only hardened our defenses against sophisticated attacks but also transformed our audit process. The detailed compliance reporting they provide is a game-changer. We went into our last audit more prepared and confident than ever before."
                        author="Chief Compliance Officer, Regional Bank"
                    />
                  </div>


                  <div className='mt-5'>
                      <CommonTextCard
                        array={excelList}
                        heading="🏦 Why Vijilan Excels in Financial Services Security"
                    />
                  </div>
                </div>
            </div>


            {/* last section  */}

            <div>




                <Heading_Btn
                    h1=" Achieve Perfect Financial Compliance & Security"
                    desc="  Discover how Vijilan's ThreatRemediate Ultimate can protect your financial institution while ensuring zero audit findings and streamlined regulatory compliance."
                    btn1="explore financial solutions"
                    btn2="  schedule  compliance assessment"
                />
            </div>

        </div>
    );
};

export default Financial_Compliance_Case;