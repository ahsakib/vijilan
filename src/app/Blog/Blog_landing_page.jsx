import React from 'react';
import blog_ai from "../../Assets/blog_AI.png";
import Blog_Subscribe from '@components/Blog_Subscribe_Component_Btn';
import LandingPageCard from '@components/LandingPageCard';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft } from 'react-icons/fa';
import { Blog_landing_Data } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';

const tabs = [
    " All posts", " Threat and Intelligence", "Enterprise Security", "Compliance and Risk", "Product & Partner News"
]

const pages = [
    '1', '2', '3', '...', '8', '9'
]
const Blog_landing_page = () => {
    return (
        <section className='common-bg text-white mb-20'>

            <div className='w-[95%] px-10 mx-auto py-12  '>
                <div className='grid grid-cols-1 md:grid-cols-6 justify-between '>
                    <div className='col-span-1 md:col-span-3  '>
                        <div className="mb-6">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500 text-white">
                                Threat Intelligence
                            </span>
                        </div>
                        <h1 className='text-7xl font-sans font-bold capitalize my-3 space-y-2'>
                            Threat Intelligence <br />
                            The Rise of Malware-Free Attacks: How to Defend Your Organization</h1>

                        <p className='my-5'> Modern cyber attackers are increasingly leveraging legitimate tools and processes to infiltrate networks without deploying traditional malware. Learn the advanced detection strategies your organization needs to defend against these sophisticated threats.</p>
                        <div className="mt-3 py-4 pl-2 w-2/5 bg-linear-to-l to-[#F89B29] from-[#FF0F7B] rounded font-semibold ml-4 "

                        >
                            Read the full story
                        </div>

                    </div>

                    <div className='col-span-1 md:col-span-3  '>
                        <div className=' text-left '>
                            <img className='' src={blog_ai} alt="" />
                        </div>

                    </div>
                </div>


                {/* tabs */}
                <div className=' flex flex-wrap gap-3 md:gap-7 mt-10'>
                    {tabs.map((tab, index) => (
                        <p
                            key={index}
                            className={`text-xl inline px-9 py-2 cursor-pointer rounded-2xl border border-[#00AEEF] ${index === 0 ? 'bg-[#00AEEF] text-white' : ''
                                }`}
                        >
                            {tab}
                        </p>
                    ))}
                </div>


                {/* Subscribe Button  */}


                <Blog_Subscribe_Component_Btn
                    H1='Get Security Insights Delivered to Your Inbox.'
                    Desc='Subscribe to our newsletter for the latest threat analysis, partner strategies, and product updates from the experts at Vijilan.'
                    Input='Subscribe'
                />


                {/* Blog  Cards */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
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
                    <FaAngleDoubleLeft className='text-[#00AEEF] text-3xl' />
                    <div className='flex gap-3 md:gap-10'>
                        {pages.map((n, index) => <p
                            key={index}
                            className='text-xl inline px-6 py-2 cursor-pointer rounded-2xl border border-[#00AEEF]'

                        >
                            {n}
                        </p>)}
                    </div>
                    <FaAngleDoubleRight className='text-[#00AEEF] text-3xl' />
                </div>

            </div>

        </section>
    );
};

export default Blog_landing_page;