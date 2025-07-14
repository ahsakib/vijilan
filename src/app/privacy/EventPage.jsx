
import { Monitor, Search, PhoneCall, ClipboardList, ImageIcon } from "lucide-react"
import React from 'react';
import pc from "../../Assets/pc.png";
import investi from "../../Assets/Investigate.png";
import manCall from "../../Assets/callMane.png";
import writing from "../../Assets/writing.png";

const webinars = [
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        title: "",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        title: "Zero Trust Implementation: A Step-by-Step Guide",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        title: "Zero Trust Implementation: A Step-by-Step Guide",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        title: "Zero Trust Implementation: A Step-by-Step Guide",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        title: "Zero Trust Implementation: A Step-by-Step Guide",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
    {
        date: "January 18, 2025",
        time: "1:00 PM EST",
        title: "Zero Trust Implementation: A Step-by-Step Guide",
        description:
            "Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.",
        speakerName: "John Davis",
        speakerTitle: "Senior Security Architect",
        speakerInitials: "JD",
    },
]

const EventPage = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className=' py-16'>
                <div className=''>
                    {/* content */}
                    <div className='mb-10'>
                        <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>Events & Webinars</h1>
                        <p className='text-[18px] text-center mt-10'>Join cybersecurity experts for live training sessions, product demonstrations, and in- <br />depth discussions on the latest threats and security strategies. All events are free <br /> and designed for security professionals, MSPs, and business leaders.</p>
                    </div>
                    {/* card */}
                    <div className=' flex justify-center flex-wrap gap-5'>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] bg-[#00AEEF] w-fit'>
                            All Events
                        </div>

                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Upcoming
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Live now
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            On demand
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Webinars
                        </div>
                        <div className='text-[14px] font-bold rounded-[40px] px-[40px] py-[15px] border border-[#00AEEF] w-fit'>
                            Conferences
                        </div>
                    </div>
                </div>

            </section>

            {/*  */}
            <section className='py-16'>
                <div className='py-[65px] px-[20px] md:px-[58px] space-y-6' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <h1 className='text-[30px] md:text-4xl  lg:text-[48px] font-bold text-center'>Featured Event: Securing the AI-Driven <br /> Enterprise</h1>
                    <p className='text-[#00AEEF] text-[16px] font-medium text-center' style={{ color: "#00AEEF" }}>January 25, 2025 | 2:00 PM EST</p>
                    <p className='text-[18px] text-center'>Join our CISO and leading AI security experts as they discuss the unique challenges of <br /> securing AI-powered business processes, from data protection to model integrity. <br /> Learn practical strategies for implementing AI security controls and governance <br /> frameworks.</p>

                    <div className='flex flex-col md:flex-row items-center justify-center  gap-10'>

                        <div className="relative bg-[#00AEEF]  rounded-lg  ">
                            <button className="p-[18px] uppercase   m-[2px] text-lg rounded-[8px] text-white border-2 border-white inline-flex items-center space-x-3 ">

                                <span className='uppercase text-[18px] font-medium'>Register free</span>

                                <div className="w-6 h-6  flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="p-[18px] capitalize rounded-lg text-white border-1 border-[#00AEEF] inline-flex  items-center space-x-3">
                            <span className='uppercase text-[18px] font-medium'>add to calender</span>

                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 card */}
            <section className='py-16'>
                <div className="">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {webinars.map((webinar, index) => (
                            // <WebinarCard key={index} {...webinar} />
                            <div className="relative flex flex-col  overflow-hidden rounded-[22px] " style={{
                                background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                            }}>
                                <div className='h-44 relative'>
                                    {/* Top Tags */}
                                    <div className="absolute left-0 top-0 flex w-full justify-between p-4">
                                        <span className="rounded-full px-3 py-1 text-[10px] font-semibold text-[#F5F5F5]" style={{ background: "#191624" }}>Webinar</span>

                                        <span className="rounded-full bg-[#37D962D6] px-3 py-1 text-[10px] font-semibold text-[#F5F5F5]">Upcoming</span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-1 flex-col justify-between bg-[#CDCDD466]">
                                    <p className="text-[15px] mt-3 text-center font-semibold text-[#00AEEF]" style={{ color: "#00AEEF" }}>
                                        {webinar.date} | {webinar.time}
                                    </p>

                                    <div className='space-y-5 py-6'>
                                        <div className='space-y-3'>

                                            <h3 className="pl-5 text-[15px] text-white">{webinar.title}</h3>
                                            <p className=" text-[15px] pl-5 ">{webinar.description}</p>
                                        </div>

                                        {/* Speaker Info */}
                                        <div className=" flex items-center gap-3 pl-10">
                                            <div className="h-12 w-12 flex items-center justify-center bg-[#00AEEF] rounded-full text-[12px] font-medium text-white">
                                                <h1>{webinar.speakerInitials}</h1>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[12px] text-white">{webinar.speakerName}</p>
                                                <p className="text-[12px] font-light">{webinar.speakerTitle}</p>
                                            </div>
                                        </div>

                                        {/* Register Button */}
                                        <div className='flex items-center justify-center mx-auto'>
                                            <button className=" w-fit bg-[#00AEEF] rounded-[7px] py-[10px] px-[20px] text-white">REGISTER NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 card */}
            <section className="py-16">
                <div className=" text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="max-w-4xl text-center mb-12">
                        <h1 className="text-[30px] md:text-4xl lg:text-5xl font-bold mb-3">Cybersecurity Fundamentals Series</h1>
                        <p className="text-[18px]">
                            A comprehensive 6-part series covering essential cybersecurity topics for modern <br /> businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
                        {/* Card 1: Threat Landscape Overview */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[280px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0`}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={pc} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Threat Landscape Overview</h2
                                >
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Understanding current cyber threats <br /> and attack vectors
                            </h1>
                        </div>

                        {/* Card 2: Security Framework Selection */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[220px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={investi} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Security Framework <br /> Selection</h2
                                >
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Choosing the right framework for your <br /> organization
                            </h1>
                        </div>


                        {/* Card 3: Detection and Monitoring */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[241px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={manCall} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Detection and Monitoring </h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Building effective security monitoring <br /> capabilities
                            </h1>
                        </div>

                        {/* Card 4: Incident Response Planning */}
                        <div className="relative bg-[#00AEEF3D] lg:h-[233px] lg:-mt-[60px] text-white p-6 flex flex-col items-center text-center rounded-[12px]">
                            <div
                                className={`absolute inset-0 rounded-[12px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" mb-4">
                                <img src={writing} alt="" className="w-[70px] h-[70px]" />
                            </div>
                            <div className="p-0 mb-2">
                                <h2
                                    className="text-[17px] font-medium ">Incident Response Planning</h2>
                            </div>
                            <h1 className="p-0 text-[13px] ">
                                Developing and testing incident <br /> response procedures
                            </h1>
                        </div>

                    </div>
                </div>
            </section>


            {/* 1 card */}
            <section className="py-16">
                <div className="mb-12 text-center">
                    <h1 className="text-[30px] md:text-4xl lg:text-5xl font-bold mb-3">Recently Completed Events</h1>
                    <p className="text-[18px]">Catch up on recent sessions - all recordings are available on-demand.</p>
                </div>

                {/* card */}
                <div className="relative flex flex-col  overflow-hidden rounded-[22px] " style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className='h-44 relative'>
                        {/* Top Tags */}
                        <div className="absolute left-0 top-0 flex w-full justify-between p-4">
                            <span className="rounded-full px-3 py-1 text-[10px] font-semibold text-[#F5F5F5]" style={{ background: "#191624" }}>Webinar</span>

                            <span className="rounded-full bg-[#37D962D6] px-3 py-1 text-[10px] font-semibold text-[#F5F5F5]">Upcoming</span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col justify-between bg-[#CDCDD466] mb-14 rounded-b-[22px]">
                        <p className="text-[15px] mt-3 text-center font-semibold text-[#00AEEF]" style={{ color: "#00AEEF" }}>
                            January 18, 2025 | 1:00 PM EST
                        </p>

                        <div className='space-y-10 py-6'>
                            <div className='space-y-10 text-center'>

                                <h3 className="pl-5 text-[15px] text-white">Zero Trust Implementation: A Step-by-Step Guide</h3>
                                <p className=" text-[15px]  ">Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.</p>
                            </div>

                            {/* Speaker Info */}
                            <div className=" flex items-center justify-center gap-3">
                                <div className="h-12 w-12 flex items-center justify-center bg-[#00AEEF] rounded-full text-[12px] font-medium text-white">
                                    <h1>JD</h1>
                                </div>
                                <div>
                                    <p className="font-bold text-[12px] text-white">John Davis </p>
                                    <p className="text-[12px] font-light">Senior Security Architect</p>
                                </div>
                            </div>

                            {/* Register Button */}
                            <div className='flex items-center justify-center mx-auto'>
                                <button className=" w-fit bg-[#00AEEF] rounded-[7px] py-[10px] px-[20px] text-white">REGISTER NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* footer */}
            <section className='py-16 md:px-10'>
                <div className='border border-[#00AEEF] rounded-[24px] space-y-10 py-14'>
                    <h1 className='text-[30px] md:text-4xl lg:text-5xl font-bold text-center' style={{ color: "#00AEEF" }}>Want to Host a Private Event?</h1>
                    <p className='text-[18px] text-center'>We offer custom training sessions and workshops tailored to your organization's <br /> specific needs. Perfect for team training, partner events, or industry groups.</p>

                    <div className='flex items-center justify-center mx-auto'>
                        <button className='bg-[#00AEEF] text-[20px] font-medium p-[18px] rounded-[8px]' style={{ color: "#000000" }}>REQUEST A CUSTOM TRAINING</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventPage;