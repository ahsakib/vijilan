import { resourceData } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import CardContent from '@components/CardContent';
import SearchBtn from '@components/SearchBtn';
import React from 'react';
import { Link } from 'react-router-dom';


const tabs = [
    'All', 'Webinars', 'Case Studies', 'Whitepaper', 'Blog',
]
const pages = [
    '1', '2', '3', '...', '8', '9'
]
const Resources = () => {
    return (
        <section className=' bg-transparent text-white my-6'>

            <div className='container px-6 mx-auto py-12  '>

                {/* Banner */}
                <div className='flex  flex-col md:flex-row items-center justify-between gap-5'>
                    <div className='w-full md:w-1/2 '>
                        <h1 className='text-2xl  md:text-6xl font-bold my-8'>Your Cybersecurity Knowledge Center</h1>
                        <p className='mt-8'>Explore our library of expert insights, strategic guides, and real-world case studies to navigate the evolving threat landscape and grow your security practice.</p>
                    </div>
                    <div className='w-full mg:w-1/2'>
                        <CardContent
                            title="The SMB & Mid-Market Cybersecurity Survival Guide"
                            description="Essential strategies for building resilient security programs that scale with your business growth."
                            grdBtn="Download The Guide Now"
                            Cardsticket="SMB & Mid-Market Cybersecurity Survival Guide"
                        />



                    </div>
                </div>

                {/* tabs and recourse */}
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between  mt-10 ">
                        <div className="w-full md:w-3/5  flex flex-wrap gap-3 md:gap-3">
                            {tabs.map((tab, index) => (
                                <p
                                    key={index}
                                    className={`inline px-5 py-3 cursor-pointer font-bold text-[14px] rounded-[40px] border border-[#00AEEF] ${index === 0 ? 'bg-[#00AEEF] text-white' : ''
                                        }`}
                                >
                                    {tab}
                                </p>
                            ))}
                        </div>

                        <div className="ml-4 w-full md:w-2/5">
                            <SearchBtn Input="Search" searchItem="Search Resource" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3  mt-10'>
                        {
                            resourceData.map(card => <CardContent
                                banner={card.banner}
                                badge={card.tab}
                                head={card.title}
                                description={card.description}
                                buttonText={card.cta}
                            />)
                        }
                    </div>
                    <div className='flex gap-3 md:gap-8 justify-center mt-8'>
                        {pages.map((n, index) => <p
                            key={index}
                            className={`text-lg md:text-[24px]   font-medium inline px-2 md:px-[21px] py-[8px] cursor-pointer rounded-[14px] border border-[#CDCDD466] hover:border-[#00AEEF]  ${index == 1 ? "text-blue-400 border-blue-400" : "text-gray-400 border-gray-400"}`}

                        >
                            {n}
                        </p>)}
                    </div>
                </div>

                {/* apply */}
                <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Blog_Subscribe_Component_Btn

                        H1="Ready to Apply These Insights?"
                        Desc="Knowledge is power, but action is key. Let's discuss how Vijilan's services can turn these strategies into a reality for your organization or your clients."
                        Btn="schedule a Strategic consultation"
                    />
                </Link>
            </div>
        </section>);
};

export default Resources;