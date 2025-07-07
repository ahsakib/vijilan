import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import email from "../../Assets/email.png";
import location from "../../Assets/location.png";
import linkedin from "../../Assets/linkedin.png";
import call from "../../Assets/call.png"
import line from "../../Assets/line.png"
import Heading_Btn from '@components/Heading_Btn';

const MspPricingTool = () => {
    const [activeTab, setActiveTab] = useState("Sales Inquiry")
    const tabs = ["Sales Inquiry", "Become a partner", "Support"]
    return (
        <div className='container mx-auto px-6 '>
            <section className=" flex items-center justify-center p-8">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Header */}

                    <Heading_Btn
                        h1="Let's Connect"
                        desc="  Whether you're interested in our services, want to become a partner, or need <br /> support, our team is here to
                            help. Reach out and let's start the conversation."
                    />


                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sales & General Inquiries Card */}
                        <div className="bg-[#00AEEF3D] backdrop-blur-sm  rounded-2xl p-3 md:p-8 relative" >
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" flex justify-center items-center mx-auto">
                                <span className="bg-[#F1511B] text-white text-[10px] font-bold px-3 py-1 rounded-full">ADD ICON</span>
                            </div>
                            <div className="mt-5 md:mt-12">
                                <h3 className="text-2xl font-medium text-white mb-6">Sales & General Inquiries</h3>
                                <p className="text-white text-[18px] font-medium mb-8 leading-relaxed">
                                    Ready to explore how Vijilan can transform your security posture? Our sales team is here to help.
                                </p>
                                <div className="space-y-4">
                                    <p
                                        className="block text-[16px] underline">
                                        +1 (555) VIJILAN
                                    </p>
                                    <p
                                        className="block text-[14px] text-[#00AEEF] font-bold underline">
                                        sales@vijilan.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Address Card */}
                        <div className="bg-[#00AEEF3D] backdrop-blur-sm  rounded-2xl p-8 relative">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" flex justify-center items-center mx-auto">
                                <span className="bg-[#F1511B] text-white text-[10px] font-bold px-3 py-1 rounded-full">ADD ICON</span>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-2xl font-medium text-white mb-6">Our Address</h3>
                                <p className="text-white text-[18px] font-medium mb-8 leading-relaxed">
                                    Visit us at our state-of-the-art facility in South Florida's technology corridor.
                                </p>
                                <div className="text-white text-[16px] space-y-2">
                                    <p className="">Aventura Onyx Tower</p>
                                    <p>1010 S Federal Hwy</p>
                                    <p>Suite 1205</p>
                                    <p>Aventura, FL 33180</p>
                                </div>
                            </div>
                        </div>

                        {/* Partner & Customer Support Card */}
                        <div className="bg-[#00AEEF3D] backdrop-blur-sm  rounded-2xl p-8 relative">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" flex justify-center items-center mx-auto">
                                <span className="bg-[#F1511B] text-white text-[10px] font-bold px-3 py-1 rounded-full">ADD ICON</span>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-2xl font-medium text-white mb-6">Partner & Customer Support</h3>
                                <p className="text-white text-[18px] mb-8 leading-relaxed">
                                    For the fastest support, please use the official Partner Portal for tracked and prioritized
                                    assistance....
                                </p>
                                <div className="space-y-4 mb-6">
                                    <p

                                        className="block text-[16px] underline">
                                        +1 (555) VIJILAN
                                    </p>
                                    <p
                                        className="block text-[14px] text-[#00AEEF] font-bold underline">
                                        sales@vijilan.com
                                    </p>
                                </div>
                                <div className='border border-[#00AEEF] rounded-[7px] '>
                                    <button className="  text-white px-[13px] py-[14px] ">
                                        ACCESS PORTAL SUPPORT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className=" relative overflow-hidden ">
                <div className="relative z-10 container mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className=" md:text-5xl font-bold text-white mb-4">Get in Touch with the Right Team</h1>
                        <p className="text-white text-lg ">
                            Choose the option that best fits your needs and we'll connect you with the right <br /> specialist.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-6xl mx-auto">
                        <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-3xl p-8 ">
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className="md:flex gap-12">
                                {/* Left Side - Contact Info */}
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-[32px] font-bold text-white mb-4">Get in Touch with the <br /> Right Team</h2>
                                        <p className="text-white text-[18px] mb-8">
                                            Choose the option that best fits your needs <br /> and we'll connect you with the right <br /> specialist.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Phone */}
                                        <div className="flex items-center space-x-4">
                                            <div className="">
                                                <img src={call} alt="" className='w-[56px] h-[56px]' />
                                            </div>
                                            <span className="text-white text-lg">954-334-9988</span>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center space-x-4">
                                            <div className="">
                                                <img src={email} alt="" className='w-[56px] h-[56px]' />
                                            </div>
                                            <span className="text-white text-lg">info@vijilan.com</span>
                                        </div>

                                        {/* LinkedIn */}
                                        <div className="flex items-center space-x-4">
                                            <div className="">
                                                <img src={linkedin} alt="" className='w-[56px] h-[56px]' />
                                            </div>
                                            <span className="text-white text-lg">www.linkedin.com/vijilan</span>
                                        </div>

                                        {/* Address */}
                                        <div className="flex items-start space-x-4">
                                            <div className="">
                                                <img src={location} alt="" className='w-[56px] h-[56px]' />
                                            </div>
                                            <div className="text-white text-lg">
                                                <div>20803 Biscayne Blvd #302 -</div>
                                                <div>Aventura, Florida 33180</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:flex justify-center items-center  h-full">
                                    <img
                                        src={line}
                                        alt="Divider"
                                        className="h-full"
                                    />
                                </div>
                                {/* Right Side - Form */}
                                <div className=" space-y-6 ">
                                    {/* Tabs */}
                                    <div className=" flex space-x-1 bg-[#00AEEF3D] p-1 rounded-lg">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`flex-1 py-3 px-4 rounded-md text-[15px] font-bold ${activeTab === tab ? " text-white" : "text-[#00AEEF] border-[#00AEEF]"
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Form Fields */}
                                    <div className="relative z-10 grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Muhammad I"
                                            className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name *"
                                            className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                    </div>
                                    <div className="relative z-10 grid grid-cols-2 gap-4">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Work email *"
                                            className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number *"
                                            className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                    </div>

                                    <div className="text-white text-sm mb-2">I'm interested in..</div>

                                    <div className=" relative z-10 grid grid-cols-2 gap-4">
                                        <select
                                            name="solution"
                                            className="bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border rounded-[16px] px-4 py-3 text-white outline-none focus:border-[#FFFFFF80] focus:ring-1 focus:ring-[#FFFFFF80]">
                                            <option value="">Select a solution</option>
                                            <option value="cybersecurity" className='text-black'>Cybersecurity</option>
                                            <option value="consulting" className='text-black'>Consulting</option>
                                            <option value="support" className='text-black'>Support</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company"
                                            className="w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                    </div>

                                    <textarea
                                        name="message"
                                        placeholder="Enter your message..."
                                        rows={4}
                                        className="relative z-10 w-full p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                    />

                                    <button className="w-full text-white text-[16px] font-semibold py-4 rounded-[16px] " style={{ background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)" }}>
                                        Send message to sales
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MspPricingTool;