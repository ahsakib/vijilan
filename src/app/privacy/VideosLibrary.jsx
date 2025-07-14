import { Play } from 'lucide-react';
import React from 'react';
import circlePlay from "../../Assets/circlePlay.png"
import { Eye } from "lucide-react"

const videosData = [
    {
        id: 1,
        date: "JANUARY 10, 2025",
        title: "THREATREMEDIATE: AUTOMATED RESPONSE DEMO",
        description:
            "See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.",
        views: "👁️ 2,345 VIEWS",
        thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 2,
        date: "JANUARY 10, 2025",
        title: "THREATREMEDIATE: AUTOMATED RESPONSE DEMO",
        description:
            "See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.",
        views: "👁️ 2,345 VIEWS",
        thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 3,
        date: "JANUARY 10, 2025",
        title: "THREATREMEDIATE: AUTOMATED RESPONSE DEMO",
        description:
            "See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.",
        views: "👁️ 2,345 VIEWS",
        thumbnail: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 4,
        date: "JANUARY 10, 2025",
        title: "THREATREMEDIATE: AUTOMATED RESPONSE DEMO",
        description:
            "See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.",
        views: "👁️ 2,345 VIEWS",
        thumbnail: "/placeholder.svg?height=200&width=400",
    },
]

const VideosLibrary = () => {
    return (
        <div>
            {/* hero section */}
            <section className='container mx-auto md:px-6 py-16'>
                <div className=''>
                    {/* content */}
                    <div className='mb-10'>
                        <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>🎥 Vijilan Video Library</h1>
                        <p className='text-[18px] text-center mt-10'>Learn cybersecurity best practices through our comprehensive video library. Watch <br /> product demos, training sessions, expert interviews, and real-world case studies <br /> designed to enhance your security knowledge and skills.</p>
                    </div>
                    {/* card */}
                    <div className=' flex justify-center flex-wrap gap-5'>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] bg-[#00AEEF] w-fit'>
                            All videos
                        </div>

                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Product Demos
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Training
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Expert interviews
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Case Studies
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Tutorials
                        </div>
                    </div>
                </div>

            </section>

            {/* video card */}
            <section className='container mx-auto md:px-6 py-16'>
                <div className="">
                    {/* Featured Video Section */}
                    <div className=" rounded-[24px] backdrop-blur-sm p-10 " style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>
                        {/* Title */}
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center  tracking-wide mb-10">
                            FEATURED: THREATREMEDIATE PLATFORM DEEP DIVE
                        </h1>

                        {/* Video Player Container */}
                        <div className=" relative w-full md:max-w-[820px] h-[287px] mx-auto bg-[#CDCDD466] rounded-[24px] aspect-video  overflow-hidden ">
                            {/* Video Background Overlay
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-700/40"></div> */}

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src={circlePlay} alt="" className='w-[100px] h-[85px]  md:w-[165px] md:h-[150px]' />
                            </div>

                            {/* Subtle grid pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                                        backgroundSize: "20px 20px",
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="mt-12 md:max-w-4xl mx-auto">
                            <p className=" text-[18px] leading-relaxed text-center">
                                Get an in-depth look at our ThreatRemediate platform, including automated threat <br /> detection, investigation
                                workflows, and remediation capabilities. Perfect for security <br /> teams evaluating XDR solutions and
                                experiencing the power of active threat <br /> remediation.
                            </p>
                        </div>
                    </div>

                    {/* Additional spacing for mobile */}
                    <div className="h-8 md:h-16"></div>
                </div>

            </section>

            {/* security video cards */}
            <section className='container mx-auto md:px-6 py-16'>
                <div className="relative z-10 ">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Latest Security Videos</h1>
                        <p className=" text-lg text-center leading-relaxed">
                            Stay current with the latest cybersecurity insights, product demonstrations, and <br /> expert guidance
                        </p>
                    </div>

                    {/* Videos Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {videosData.map((video) => (
                            <div
                                key={video.id}
                                className=" backdrop-blur-sm bg-[#CDCDD466] rounded-[24px] overflow-hidden " >
                                {/* Video Thumbnail */}
                                <div className="relative h-48" style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                    {/* DEMO Badge */}
                                    <div className="absolute top-10  z-10">
                                        <span className=" text-white px-[24px] py-[12px] rounded-lg font-bold text-[16px]" style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                        }}>
                                            DEMO
                                        </span>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-6 space-y-4">
                                    {/* Date */}
                                    <div className="text-[#00AEEF] text-[12px] font-medium tracking-wide">{video.date}</div>

                                    {/* Title */}
                                    <h3 className="text-white text-[16px] font-medium leading-tight">{video.title}</h3>

                                    {/* Description */}
                                    <p className=" text-[12px] leading-relaxed">{video.description}</p>

                                     {/* Views */}
                                        <div className="flex justify-between text-[12px] font-light">
                                            <span>{video.views}</span>
                                            <span>{video.views}</span>
                                        </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-center mx-auto pt-4">
                                        {/* Demo Button */}
                                        <button className=" text-white px-[24px] py-[12px] rounded-lg font-bold text-[16px]" style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                        }}>
                                            DEMO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideosLibrary;