import React from 'react';
import blog_ai from "../../Assets/blog_AI.png";
import Blog_Subscribe from '@components/Blog_Subscribe';
import LandingPageCard from '@components/LandingPageCard';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft } from 'react-icons/fa';
import { Blog_landing_Data } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import backgroundPattern from "../../images/Background pattern.png";
import vector from '../../Assets/Vector.png';

const tabs = [
    " All posts", " Threat and Intelligence", "Enterprise Security", "Compliance and Risk", "Product & Partner News"
]

const pages = [
    '1', '2', '3', '...', '8', '9'
]
const Blog_landing_page = () => {
    return (
        <section className='text-white mb-20'>

            <div className='container px-6 mx-auto py-12  '>
                <div className='grid grid-cols-1 md:grid-cols-6 justify-between space-y-10 md:space-y-0'>
                    <div className='col-span-1 md:col-span-3 space-y-5  '>
                        <div className="">
                            <span className="inline-block bg-[#00AEEF] text-white px-2 lg:px-[24px] py-[16px] rounded-[13px] text-[16px] font-medium uppercase tracking-wide">
                                THREAT INTELLIGENCE
                            </span>
                        </div>
                        <h1 className='text-xl md:text-3xl md:text-[47px] font-sans font-bold capitalize space-y-2'>
                            Threat Intelligence <br />
                            The Rise of Malware-Free Attacks: How to Defend Your Organization</h1>

                        <p className='text-sm md:text-[18px] '> Modern cyber attackers are increasingly leveraging legitimate tools and processes to infiltrate networks without deploying traditional malware. Learn the advanced detection strategies your organization needs to defend against these sophisticated threats.</p>

                        <div className='mt-8'>
                            <button className="p-[20px] pl-2  inline px-5 text-[18px]  rounded-[8px] font-medium ml-4 " style={{
                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                        }}> Read the full story</button>
                           
                        </div>

                    </div>

                    <div className='col-span-1 md:col-span-3  '>
                        <div className=' flex justify-end items-end '>
                            <img className='w-[500px] h-[458px]' src={blog_ai} alt="" />
                        </div>

                    </div>
                </div>


                {/* tabs */}
                <div className=' flex flex-wrap  gap-5 md:gap-7 mt-10'>
                    {tabs.map((tab, index) => (
                        <p
                            key={index}
                            className={`text-xl inline px-5 md:px-[40px] py-3 md:py-[15px] cursor-pointer font-bold text-[14px] rounded-[40px] border border-[#00AEEF] ${index === 0 ? 'bg-[#00AEEF] text-white' : ''
                                }`}
                        >
                            {tab}
                        </p>
                    ))}
                </div>


                {/* Subscribe Button  */}

                {/* <Blog_Subscribe /> */}
                {/* <Blog_Subscribe_Component_Btn H1="Get Security Insights Delivered to Your Inbox."

                    Desc="Subscribe to our newsletter for the latest threat analysis, partner strategies, and product updates from the experts at Vijilan."
                    // BtInn="Subscribe"
                    Input="Subscribe"
                /> */}

                <section className="relative z-10 py-16">
                    <div className="container mx-auto ">
                        <div
                            className="h-[304px] rounded-[24px] flex justify-center items-center relative overflow-hidden"
                            style={{
                                background: "linear-gradient(90deg, #082135 0%, #082135 40%, #1a3a4f 60%, #1a3a4f 100%)",
                            }}>
                            {/* Left side solid background */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
                                }}
                            />

                            {/* Right side pattern with smooth blend */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `url(${backgroundPattern})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: 0.8,
                                    maskImage:
                                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                                }}
                            />

                            {/* Overlay for color consistency */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
                                }}
                            />

                            <div className="relative z-10 text-center space-y-5 p-2">
                                <h2 className="text-[20px] md:text-[40px] font-bold text-white ">
                                    Get Security Insights Delivered to Your Inbox.
                                </h2>
                                <p className="text-[15px] md:text-[16px] font-medium text-white  leading-relaxed max-w-2xl mx-auto">
                                    Subscribe to our newsletter for the latest threat analysis, partner strategies, and product updates from the experts at Vijilan.
                                </p>
                                <div className="relative max-w-2xl w-full mx-auto">
                                    <input
                                        className="w-full py-[14px] pr-[130px] pl-[14px] text-[#0000007A] rounded-[10px]"
                                        placeholder="Enter Your Email"
                                        type="search"
                                    />

                                    <button
                                        className="absolute top-1/2 right-3 -translate-y-1/2 py-[6px] px-[16px] rounded-[16px] text-[16px] font-bold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
                                        style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Blog  Cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Blog_landing_Data.map((card, index) => (
                        <LandingPageCard
                            key={index}
                            banner={card.banner}
                            author={card.author}
                            title={card.category}
                            details={card.title}
                            date={card.date}

                        />
                    ))}
                </div>

                <div className='flex justify-between items-center mt-12'>
                    <div className="bg-blue-500 p-2 rounded  md:block">
                        <img src={vector} alt="" className="w-[22px] h-[22px] mx-auto" />
                    </div>

                    <div className='flex flex-wrap gap-3 md:gap-8 '>
                        {pages.map((n, index) => <p
                            key={index}
                            className='text-sm md:text-[24px] font-medium inline px-2  md:px-[21px] py-1 md:py-[8px] cursor-pointer rounded-[14px] border border-[#CDCDD466] hover:border-[#00AEEF'
                        >
                            {n}
                        </p>)}
                    </div>
                    {/* <FaAngleDoubleRight className='text-[#00AEEF] text-3xl' /> */}
                    <div className='bg-[#00AEEF] rounded-[6px] p-2  md:flex '>
                        <img src={vector} alt="" className='  md:block md:w-[22px] h-auto md:h-[22px] flex justify-center items-center' />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Blog_landing_page;