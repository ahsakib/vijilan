// Responsive Complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import DashboardSideText from '../component/DashboardSideText';
import ProfileHRCard from '../component/ProfileHRCard';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import { detectionArray } from '@app/Constant/Constant';
import DashBoardCard from '../component/DashBoardCard';
import { Link } from 'react-router-dom';

const SMB_Runsomware = () => {

    const numberArray = [
        {
            number: "0%",
            link: "Data Loss"
        },
        {
            number: "< 4",
            link: "Hours to Recovery"
        },
        {
            number: "None",
            link: "Business Disruption"
        },
        {
            number: "100%",
            link: "Attack Contained"
        }
    ]


    const list1 = [
        "Limited Security Budget: As a 30-employee firm, they couldn't afford an in-house security team or enterprise-grade security stack",
        "False Sense of Security: Relied on traditional antivirus, believing it would protect against modern threats",
        "Sophisticated Attack Vector: The ransomware used fileless techniques and encryption methods that bypassed signature-based defenses",
        "After-Hours Vulnerability: With no IT staff monitoring systems overnight, attacks during off-hours could run unchecked",
        "Ransomware as Biggest Fear: The owner knew a successful ransomware attack could destroy their business",
        "MSP Resource Constraints: Their MSP wanted to provide better security but lacked 24/7 SOC capabilities"
    ]

    const madeDifference = [
        {
            "label": "24/7 Expert Monitoring",
            "text": "While the business slept, Vijilan's US-based SOC analysts were actively monitoring their systems, ready to respond instantly to any threat."
        },
        {
            "label": "Behavioral Detection",
            "text": "Advanced EDR technology detected the ransomware based on behavior, not signatures - catching what traditional antivirus missed."
        },
        {
            "label": "Active Remediation",
            "text": "Vijilan didn't just alert - they took immediate action to contain and eliminate the threat, preventing spread and minimizing damage."
        },
        {
            "label": "MSP Partnership Model",
            "text": "The MSP maintained the client relationship while Vijilan provided the deep security expertise and 24/7 coverage they couldn't build alone."
        }
    ]
    const card = [
        {
            label: "2",
            text: "Minutes to Detection",
            desc: "From attack start to SOC alert"
        },
        {
            label: "5",
            text: "Minutes to Containment",
            desc: "Preventing lateral spread"
        },
        {
            label: "28",
            text: "Minutes to Remediation",
            desc: "Complete threat elimination"
        },
        {
            label: "< 4",
            text: "Hours Total",
            desc: "To full business recovery"
        }
    ];

    const protectionStack = [
        "Vijilan ThreatRemediate",
        "24/7 SOC Monitoring",
        "Managed EDR",
        "Behavioral Analysis",
        "Active Containment",
        "Expert Remediation",
        "MSP Partnership"
    ];

    const protectionInsights = [
        {
            label: "24/7 Expert SOC: The Game Changer",
            text: "For an SMB, an overnight attack would typically be devastating. Vijilan's continuous monitoring and expert response turned a potential catastrophe into a minor incident."
        },
        {
            label: "Active Remediation: Beyond Alerts",
            text: "Vijilan doesn't just send alerts - the SOC takes direct action to contain and eliminate threats. This is the critical difference that minimizes damage and saves businesses."
        },
        {
            label: "Empowering the Partner",
            text: "The MSP maintained their client relationship while gaining access to enterprise-grade security capabilities they couldn't build alone. This is the power of partnership."
        },
        {
            label: "Affordable Enterprise-Grade Security",
            text: "Through the MSP channel, Vijilan makes advanced EDR and 24/7 SOC services accessible to SMBs at a price point they can afford - democratizing cybersecurity."
        }
    ];
    const businessImpact = [
        {
            label: "0%",
            text: "Data Loss"
        },
        {
            label: "< 4 Hours",
            text: "Recovery Time"
        },
        {
            label: "None",
            text: "Business Disruption"
        },
        {
            label: "100%",
            text: "Containment Success"
        }
    ];


    return (
        <div className='max-w-[90%] mx-auto'>
            {/* top part */}
            <section className="px-6">
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
                        <span className="!text-blue-600  text-[13px]" > SMB Ransomeware Recovery</span>
                    </nav>
                </div>
            </section>

            {/* button */}
            <section className='flex justify-center'>
                <button className="py-3 bg-gradient-to-l from-[#FF0F7B] to-[#F89B29]  px-5 text-lg font-medium rounded-4xl text-white inline-flex items-center space-x-3" >  Ransomware Response
                </button>
                {/* heading button */}


            </section>
            <Heading_Btn
                h1="SMB Ransomware Recovery: From Active Attack to Full Recovery in 4 Hours"
                desc="Discover how a small business avoided catastrophic damage when their MSP, powered by Vijilan, stopped a ransomware attack overnight - proving the value of 24/7 managed security.."
            />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    numberArray.map(card => <NumberShow link={card.link} number={card.number} />)
                }
            </div>


            {/* divided 2 cols */}

            <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-12'>

                <div className='grid-cols-1'>


                    <CommonTextCard
                        heading1="🛡️ The Story That Every Small Business Needs to Hear"
                        p1="It was 2:17 AM on a Monday night when the ransomware began its attack. The small professional services firm's employees were sleeping, unaware that a sophisticated threat actor had bypassed their traditional antivirus and was actively encrypting files on an endpoint.This is the nightmare scenario that keeps business owners awake at night. But for this company, their story had a different ending - thanks to their local MSP's partnership with Vijilan."
                        p2="Within minutes of the attack beginning, Vijilan's 24/7 SOC detected the suspicious encryption behavior. What happened next demonstrates the critical difference between traditional security tools and active, expert-led protection."

                    />


                    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>



                        <h1 className='  mb-4 text-left mt-8 font-semibold'>⏱️ The 4-Hour Incident Timeline</h1>
                        <p className=' my-3'>Every second counts in a ransomware attack. Here's how Vijilan's rapid response saved this business:
                        </p>

                        <h3 className='my-5 text-xl text-center font-semibold'>From Detection to Full Recovery </h3>

                        <div className='flex flex-col gap-5'  >

                            {
                                detectionArray.map(card =>
                                    <div className='flex flex-col lg:flex-row items-center justify-between gap-5'>
                                        <p className='w-full lg:w-1/4 bg-[#F1511B] py-3 px-5 rounded-3xl text-center font-semibold'>{card.time}</p>

                                        <div className='w-full lg:w-3/4 bg-[#566674] p-6'>
                                            <h6 className='my-3 font-semibold'>{card.label}</h6>
                                            <p className='mt-3'>{card.text}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                    </div >


                    {/*  Traditional Security */}
                    <div>
                        <ListComponent
                            heading="⚠️ Why Traditional Security Failed"
                            bg={true}
                            p1="Like many small businesses, this professional services firm faced common but critical security challenges:"
                            array={list1}
                        />
                    </div>


                    <div className='mt-5'>
                        <CommonTextCard
                            array={madeDifference}
                            li={true}
                            heading="💡 How Vijilan Made the Difference"
                            p1="The MSP had proactively deployed Vijilan's ThreatRemediate service across their client base, providing enterprise-grade protection at SMB-friendly pricing:"
                        />

                    </div>
                    <div className='mt-5'>
                            <CommonTextCard
                                heading="The Power Rapid Response"
                                numCard={card}
                            />
                        </div>


                </div>

                <div className='grid-cols-1'>


                    <ProfileHRCard
                        h1="Client Profile"
                        l1l="Industry"
                        l1r="Professional Services"
                        l2l="Company Size"
                        l2r="30 Employees"
                        l3l="IT Support"
                        l3r="Local MSP"
                        l4l="Previous Security"
                        l4r="Basic Antivirus"
                        l5l="Attack Type"
                        l5r="Ransomware"
                        l6l="Attack Time"
                        l6r="2:17 AM Monday"
                    />

                    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>
                        <h1 className='text-center mt-8 font-semibold my-6'>Protection Stack</h1>
                        <div className='w-2/4 mx-auto'>
                            {
                                protectionStack.map(li => <li className='list-disc mt-3'>{li} </li>)
                            }
                        </div>
                    </div>


                    <div className="p-[1px]  my-5 rounded-lg bg-gradient-to-l to-[#F89B29] from-[#FF0F7B] mt-8">
                        <div
                            className="p-[18px] text-lg font-medium  bg-[#66637C] w-full text-white inline-flex items-center space-x-3  rounded-lg"

                        >
                            <Heading_Btn
                                h1="MSP as Hero"
                                h3="Partner Success"
                                desc=" The MSP became the hero by providing enterprise-grade security through Vijilan's partnership."
                                btn1="Become A partner"
                                btn2="Learn More"
                                url={"/become-a-partner"}
                            />
                        </div>
                    </div>




                    <div className='mt-5'>
                        <CommonTextCard
                        array={protectionInsights}
                        heading=" 🚀 Why This Story Matters"
                    />
                    </div>
                </div>
            </div>



            <div className='mt-5'>
                <CommonTextCard
                    heading="The Business Impact"
                    numCard={businessImpact}
                    grid_4={true}
                />
            </div>
            <DashboardSideText
                desc="We came in Tuesday morning to an alert that we had been saved from a ransomware attack overnight. Our MSP and Vijilan stopped it before we even knew it was happening. They didn't just save our data; they saved our business"
                author="Owner, Small Business Client"
            />
            <DashboardSideText
                desc="This is exactly why we partner with Vijilan. We can provide our SMB clients with affordable, enterprise-grade protection and the peace of mind that comes from a 24/7 SOC. When the inevitable happens, Vijilan's active remediation makes us look like rockstars."
                author="CEO, Managed Service Provider"
            />




            <Heading_Btn
                h1="Don't Wait for Your Ransomware Story"
                desc="Whether you're an MSP looking to protect your clients or a business seeking better security through your IT provider, Vijilan has the solution."
                btn1="msps become a partner"
                btn2="buissness find protection"    
                url={"/become-a-partner"}           
            />
        </div>
    );
};

export default SMB_Runsomware;