// responsive complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import ProfileHRCard from '../component/ProfileHRCard';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import DashboardSideText from '../component/DashboardSideText';
import { coreTechnology, Datapipeline } from '@app/Constant/Constant';
import { FaArrowRight } from 'react-icons/fa';

import chart from "../../../Assets/chart.png";
import { Link } from 'react-router-dom';
const MSP_logscale_case = () => {

    const numberArray = [
        {
            "metric": "40%",
            "label": "Audit Findings"
        },
        {
            "metric": "3x",
            "label": "Faster Queries"
        },
        {
            "metric": "50%",
            "label": "Storage Reduction"
        },
        {
            "metric": "28%",
            "label": "Data Growth Rate"
        }
    ]

    const list1 = [
        "Prohibitive SIEM Costs: Spiraling data ingestion and licensing costs eroding service margins with 28% annual data growth",
        "Performance Bottlenecks: Slow query speeds hampering SOC analysts' ability to conduct rapid threat hunting and investigations",
        "Scalability Issues: Existing infrastructure could not scale to meet data volume from new and diverse client log sources",
        "Forced Data Compromises: High costs forcing risky decisions about which logs to drop, creating critical visibility gaps",
        "Operational Complexity: Onboarding new log sources was complex and time-consuming, slowing client acquisition",
        "Limited Analytics: Legacy platform struggled to provide real-time analytics needed for modern, fast-moving threats",
        "Client Service Impact: Slow investigations and delayed response times affecting client satisfaction and retention"
    ]
    const list2 =
        [
            "CrowdStrike Falcon LogScale: Modern, index-free SIEM platform with real-time search capabilities",
            "Managed Cribl Services: Advanced data optimization sitting at the front of the pipeline",
            "Cribl Stream: Intelligent routing, filtering, and enrichment of all incoming log data",
            "LogIngest Service: Consolidated third-party log management and normalization",
            "LogAlert Service: Real-time detection and alerting within LogScale environment",
            "Custom Parsers: Vijilan-developed workflows for seamless data onboarding"

        ]

    const transformationSIEM = [
        {
            "metric": "40%",
            "label": "SIEM Cost Reduction",
            "text": "Dramatic reduction in ingestion and licensing costs through data optimization"
        },
        {
            "metric": "3x",
            "label": "Query Performance",
            "text": "Index-free architecture enabling real-time threat hunting capabilities"
        },
        {
            "metric": "50%",
            "label": "Storage Reduction",
            "text": "Cribl optimization significantly reduced overall data footprint"
        },
        {
            "metric": "90%",
            "label": "Faster Onboarding",
            "text": "Streamlined process for adding new client log sources"
        },
        {
            "metric": "100%",
            "label": "Data Visibility",
            "text": "Eliminated forced compromises on log retention and analysis"
        },
        {
            "metric": "24/7",
            "label": "Enhanced SOC",
            "text": "Improved analyst efficiency and investigation capabilities"
        }
    ]

    const MSSP_value = [
        {
            "label": "Data Optimization Expertise (Cribl)",
            "text": "Unlike competitors who simply replace SIEM platforms, Vijilan's proficiency with Cribl addresses the \"data chaos\" problem at its source. This enables massive cost savings while ensuring only high-fidelity data reaches the SIEM, maximizing both performance and value."
        },
        {
            "label": "SIEM Modernization Specialist",
            "text": "Vijilan has deep expertise in deploying and managing both CrowdStrike LogScale and Falcon Next-Gen SIEM, providing MSSPs with flexible options that cater to diverse client needs from cost-effective log management to cutting-edge AI-native SIEM capabilities."
        },
        {
            "label": "Flexible Co-Management Model",
            "text": "The solution was tailored to the MSSP's operational model, allowing their SOC to leverage a superior platform while benefiting from Vijilan's data optimization expertise. This co-management approach enhanced their service delivery without disrupting established client relationships."
        },
        {
            "label": "End-to-End Professional Services",
            "text": "Vijilan handled the entire migration from architecture design and data source onboarding to custom content creation and team training. This comprehensive approach ensured a seamless transition and rapid time-to-value for the MSSP's investment."
        }
    ]

    const ProfessionalService = [
        {
            "label": "Architecture Design & Planning",
            "text": "Comprehensive assessment of existing data sources, performance requirements, and cost optimization opportunities. Development of phased migration strategy with parallel operations during transition."
        },
        {
            "label": "Data Source Onboarding",
            "text": "Systematic migration of all client log sources using custom parsers and workflows. Vijilan's experts handled the complex task of maintaining data fidelity while optimizing for cost and performance."
        },
        {
            "label": "Custom Content Creation",
            "text": "Development of specialized detection rules, dashboards, and reporting templates tailored to the MSSP's specific client needs and compliance requirements."
        },
        {
            "label": "SOC Team Training",
            "text": "Comprehensive training program ensuring the MSSP's analysts could leverage LogScale's advanced capabilities for more effective threat hunting and investigation."
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
                        <span className="!text-blue-500 text-[13px] font-medium" Home  >   MSSP SIEM Modernization</span>
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
                h1="MSSP Achieves 40% SIEM Cost Reduction and 3x Faster Queries with LogScale Modernization"
                desc="Discover how Vijilan's Cribl expertise and CrowdStrike LogScale implementation transformed an established MSSP's data infrastructure, solving 'data chaos' while dramatically improving performance and profitability."
            />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    numberArray.map(card => <NumberShow link={card.label} number={card.metric} />)
                }
            </div>



            {/* divided 2 cols */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>

                <div className='grid-cols-1'>


                    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 '>
                        <h1 className='  mb-4 lg:text-left mt-8 text-lg font-semibold'>🔧 Executive Summary</h1>
                        <p className=' my-3'>An established Managed Security Service Provider (MSSP) with their own 24/7 Security Operations Center faced a critical challenge: their legacy SIEM infrastructure was becoming unsustainable. With telemetry data growing at 28% CAGR, spiraling costs and performance bottlenecks were threatening their service delivery and profitability.</p>
                        <p className=' my-3'>Traditional approaches to SIEM modernization focus only on platform replacement, but Vijilan's unique approach addressed the root cause: data chaos. By combining CrowdStrike LogScale with advanced Cribl data optimization, Vijilan delivered a solution that didn't just replace the MSSP's legacy SIEM—it fundamentally transformed their data economics.</p>
                        <h3 className='my-5 text-xl text-center font-semibold'>SIEM Total Cost of Ownarship: Before After</h3>

                        <div className='w-3/4 mx-auto '>
                            <div className='flex justify-center'>
                                <img src={chart} alt="" className='w-full ' />
                            </div>
                            <div className='flex md:justify-center lg:justify-evenly mt-2 gap-5 font-semibold  '>
                                <p>Legacy SIEM Costs</p>
                                <p>LogScale + Cribl Solution</p>
                            </div>

                        </div>




                    </div >

                    {/*  ⚠️ Legacy SIEM Crisis */}
                    <div>
                        <ListComponent
                            heading=" ⚠️ Legacy SIEM Crisis "
                            p1="The MSSP was experiencing the classic 'data chaos' problem that plagues modern security operations. Their legacy SIEM (Splunk/QRadar) infrastructure was buckling under the pressure of exponential data growth and modern threat detection requirements:"
                            array={list1}
                        />
                    </div>


                    <div className='bg-gradient-to-t to-[#063853] from-[#082235] py-5 px-12 mt-12'>
                        {/* <h1 className='text-center mt-8 font-semibold'>{heading}</h1> */}
                        <h1 className='  mb-4 text-left mt-8 font-semibold'>🚀 Advanced SIEM Modernization Solution</h1>
                        <p className=' my-3'>Vijilan implemented a comprehensive SIEM modernization strategy that addressed both technology and data economics through a sophisticated, integrated approach:</p>

                        <div className='bg-gradient-to-t to-[#567182] from-[#566A7A] py-5 px-12 mt-12 border border-[#F86029]'>

                            <h4 className='text-center text-xl md:text-2xl mb-5'>Intelligent Data Pipeline Architecture</h4>
                            <div className='grid sm:grid-cols-1  lg:grid-cols-4 gap-5 justify-center'>
                                {Datapipeline.map((card, index) => (
                                    <div key={index} className="flex flex-col md:flex-row items-center">
                                        <div className="flex-1 flex flex-col items-center bg-[#2B3840] py-8 px-4 gap-5 rounded-lg text-center h-full">
                                            <img src={card.icon} className="" alt="" />
                                            <h4>{card.label}</h4>
                                            <p>{card.text}</p>
                                        </div>
                                        {/* Show arrow only if not last card */}
                                        {index !== Datapipeline.length - 1 && (
                                            <div className="my-4 md:my-0 md:mx-2 flex items-center justify-center">
                                                <FaArrowRight className="text-2xl text-black transform md:rotate-0 rotate-90" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>

                        <ListComponent
                            LeftHeading=" Core Technology Components"
                            bg={false}
                            array={list2}
                        />

                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                            {coreTechnology.map((card, index) => (
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
                            array={ProfessionalService}
                            heading=" ⚙️ Professional Services Excellence"
                            p1="Vijilan's end-to-end professional services approach ensured a seamless migration without disrupting the MSSP's 24/7 operations:"
                        />
                    </div>


                </div>

                <div className='grid-cols-1'>


                    <ProfileHRCard
                        h1="MSSP Profile"
                        l1l="Business Type"
                        l1r="Established MSSP"
                        l2l="SOC Operations"
                        l2r="24/7 In-House"
                        l3l="Client Portfolio"
                        l3r="Multi-Industry"
                        l4l="Data Growth Rate"
                        l4r="28% CAGR"
                        l5l="Legacy Platform"
                        l5r="Splunk/QRadar"
                        l6l="Primary Challenge"
                        l6r="Data Chaos & Costs"
                    />



                  <div className='mt-5'>
                      <MesurableComponentDashboard
                        heading="Transformational SIEM Modernization Results"
                        array={transformationSIEM}
                    />
                  </div>

                  <div className='mt-5'>
                      <DashboardSideText
                        desc="We were drowning in data costs and our SOC was being held back by a slow, legacy SIEM. Vijilan didn't just sell us a new platform; they solved our core data problem. Their expertise with Cribl was the game-changer, cutting our costs by 40% and making our threat hunters more effective overnight. It was a true SOC modernization."
                        author="SOC Director, MSSP Partner"
                    />
                  </div>


                    <div className='mt-5'>
                        <CommonTextCard
                        array={MSSP_value}
                        heading="🎯 Vijilan's Unique MSSP Value Proposition"
                    />
                    </div>
                </div>
            </div>

            {/* last section  */}

            <div>







                <Heading_Btn
                    h1="Ready to Modernize Your SIEM Infrastructure?"
                    desc="  Discover how Vijilan's LogScale implementation and Cribl expertise can solve your data chaos while dramatically reducing costs and improving performance."
                    btn1="explore logscale solutionss"
                    btn2=" schedule  siem assessment"
                />
            </div>
        </div>
    );
};

export default MSP_logscale_case;