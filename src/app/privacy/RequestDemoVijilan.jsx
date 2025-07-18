import React from 'react';
import { ChevronDown, Shield, Clock, Users, Award, CheckCircle } from "lucide-react"

const RequestDemoVijilan = () => {
    return (
        <div className='container mx-auto px-2'>
            {/* hero section */}
            <section className=' py-16'>
                {/* content */}
                <div className=''>
                    <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>See Vijilan in Action</h1>
                    <p className='text-[18px] text-center mt-8'>Experience firsthand how our ThreatRemediate™ platform goes beyond detection to <br /> actively stop breaches. Schedule your personalized demo today and discover the <br /> power of intelligent, resilient cybersecurity.</p>
                </div>
            </section>

            {/* input and content */}
            <section className=''>
                <div className="">
                    <div className="container mx-auto sm:px-4 lg:px-8 xl:px-4 py-8">
                        <div className='max-w-xl mb-12'>
                            <h1 className='text-center text-3xl md:text-[40px] font-bold mb-3'>Request a Demo</h1>
                            <p className='text-[18px] text-center'>Fill out the form below and we'll schedule a personalized demonstration tailored to your specific security needs and business requirements.</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {/* Left Side - Form */}

                            <div className="relative bg-[#00AEEF3D] rounded-[24px] p-6 lg:p-8">
                                <div
                                    className={`absolute inset-0 rounded-[24px] p-[2px] z-0`}
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                <form className="space-y-6">
                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                            required
                                        />
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            Email <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                            required
                                        />
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            Company Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                            required
                                        />
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            Job Title <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="jobTitle"
                                                className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80] "
                                                required>
                                                <option value="" style={{color: "black"}}>Select</option>
                                                <option value="ciso" style={{color: "black"}}>CISO</option>
                                                <option value="it-director" style={{color: "black"}}>IT Director</option>
                                                <option value="security-manager" style={{color: "black"}}>Security Manager</option>
                                                <option value="it-manager" style={{color: "black"}}>IT Manager</option>
                                                <option value="other" style={{color: "black"}}>Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">Company Size</label>
                                        <div className="relative">
                                            <select
                                                name="companySize"

                                                className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                            >
                                                <option value="" style={{color: "black"}}>Select</option>
                                                <option value="1-50" style={{color: "black"}}>1-50 employees</option>
                                                <option value="51-200" style={{color: "black"}}>51-200 employees</option>
                                                <option value="201-1000" style={{color: "black"}}>201-1000 employees</option>
                                                <option value="1000+" style={{color: "black"}}>1000+ employees</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            I am a <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="iAm"
                                                className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                                required
                                            >
                                                <option value="" style={{color: "black"}}> Select</option>
                                                <option value="decision-maker" style={{color: "black"}}>Decision Maker</option>
                                                <option value="influencer" style={{color: "black"}}>Influencer</option>
                                                <option value="end-user" style={{color: "black"}}>End User</option>
                                                <option value="consultant" style={{color: "black"}}>Consultant</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">
                                            Primary Interest <span className="text-red-400">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="primaryInterest"
                                                className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                                required
                                            >
                                                <option value="" style={{color: "black"}}>Select Primary Interest</option>
                                                <option value="threat-detection" style={{color: "black"}}>Threat Detection</option>
                                                <option value="incident-response" style={{color: "black"}}>Incident Response</option>
                                                <option value="compliance" style={{color: "black"}}>Compliance</option>
                                                <option value="managed-services" style={{color: "black"}}>Managed Services</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">Current Security Challenges</label>
                                        <textarea
                                            name="securityChallenges"
                                            placeholder="Tell us about your current security setup and challenges you are facing"
                                            rows={4}
                                            className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                                        />
                                    </div>

                                    <div className='relative z-10'>
                                        <label className="block text-[20px] font-bold mb-2">Preferred Demo Time</label>
                                        <div className="relative">
                                            <select
                                                name="demoTime"

                                                className="w-full p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]">
                                                <option value=""style={{color: "black"}}>Select preferred time</option>
                                                <option value="morning" style={{color: "black"}}>Morning (9 AM - 12 PM)</option>
                                                <option value="afternoon" style={{color: "black"}}>Afternoon (12 PM - 5 PM)</option>
                                                <option value="evening" style={{color: "black"}}>Evening (5 PM - 8 PM)</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 relative z-10">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            className="mt-1 w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                                        />
                                        <label className="text-[16px] leading-relaxed">
                                            I agree to receive communications from Vijilan regarding this demo request and related cybersecurity
                                            information. I understand I can unsubscribe at any time.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-[16px] text-white font-semibold py-3 px-6 rounded-[16px] "
                                        style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                        }}>
                                        Request Demo
                                    </button>
                                </form>
                            </div>

                            {/* Right Side - Information */}
                            <div className="space-y-8">
                                {/* What You'll Experience */}
                                <div >
                                    <h2 className="text-[24px] font-bold mb-4" style={{color: "#FFFFFFCC"}}>What You'll Experience</h2>
                                    <ul className="space-y-3 text-[16px] list-disc list-inside" >
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Live demonstration of threat detection and automated remediation
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Customized walkthrough based on your specific security environment
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Real-world attack scenarios and response capabilities
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Integration showcase with your existing security stack
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            ROI analysis and deployment timeline discussion
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Q&A with our cybersecurity experts
                                        </li>
                                    </ul>
                                </div>

                                {/* Why Choose Vijilan */}
                                <div>
                                    <h2 className="text-[24px] font-bold mb-4" style={{color: "#FFFFFFCC"}}>Why Choose Vijilan?</h2>
                                    <ul className="space-y-3 text-[16px] list-disc list-inside">
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Beyond Detection. We actively stop breaches, not just alert
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            <span>24/7/365 expert-led security operations center</span>
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Seamless integration with 300+ security tools
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Transparent, predictable pricing with no hidden costs
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Partner-first approach with white-label options
                                        </li>
                                        <li className="" style={{color: "#FFFFFFCC"}}>
                                            Compliance-ready documentation and reporting
                                        </li>
                                    </ul>
                                </div>

                                {/* Compliance Badges */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[#CDCDD466] rounded-lg px-[24px] py-[12px] text-center">
                                        <div className="text-[16px] font-bold">🛡️ SOC 2 Type II</div>
                                    </div>
                                    <div className="bg-[#CDCDD466] rounded-lg px-[24px] py-[12px] text-center">
                                        <div className="text-[16px] font-bold ">🔒 ISO 27001</div>
                                    </div>
                                    <div className="bg-[#CDCDD466] rounded-lg px-[24px] py-[12px] text-center">
                                        <div className="text-[16px] font-bold">⚕️ HIPAA Ready</div>
                                    </div>
                                    <div className="bg-[#CDCDD466] rounded-lg px-[24px] py-[12px] text-center">
                                        <div className="text-[16px] font-bold">💳 PCI DSS</div>
                                    </div>
                                </div>

                                <div className='flex items-center -mt-[15px] justify-center md:w-[264px] mx-auto'>
                                    <div className="bg-[#CDCDD466] w-full rounded-lg px-[24px] py-[12px] text-center">
                                        <div className="text-[16px] font-bold">💳 PCI DSS</div>
                                    </div>
                                </div>


                                {/* Testimonial */}
                                <div className="border-l-4 border-[#00AEEF] pl-2">
                                    <blockquote className="text-[20px] italic mb-3 ">
                                        "The Vijilan demo was a game-changer. <br /> Seeing their ThreatRemediate platform <br /> automatically stop a
                                        ransomware attack <br /> in real-time convinced us immediately. <br /> Implementation was seamless and results <br /> were
                                        immediate."
                                    </blockquote>
                                    <cite className="text-[20px]">— Sarah Chen, CISO, TechFlow Solutions</cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default RequestDemoVijilan;