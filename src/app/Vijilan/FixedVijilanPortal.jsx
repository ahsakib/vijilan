import { Monitor, Shield } from 'lucide-react';
import React from 'react';
import pc from "../../Assets/pc.png";

const FixedVijilanPortal = () => {
    return (
        <div className='container mx-auto px-6'>
            <div className="">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-[40px] font-bold mb-4">Build Your Security Quote</h1>
                    <p className="text-lg text-center">
                        Configure your ideal security solution and choose your onboarding path in just 3 simple steps.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-center items-center mb-16">
                    <div className="flex items-center space-x-8">
                        {/* Step 1 - Active */}
                        <div className="flex items-center">
                            <div className="w-[31px] h-[31px] bg-[#00AEEF] rounded-full flex items-center justify-center text-sm font-medium">
                                1
                            </div>
                            <span className="ml-3 text-[#757575]">Service Level</span>
                        </div>

                        {/* Connector Line */}
                        <div className="w-[150px] h-px bg-[#F5F5F5]"></div>

                        {/* Step 2 */}
                        <div className="flex items-center">
                            <div className="w-[31px] h-[31px] bg-[#EBEDEF] rounded-full flex items-center justify-center text-sm font-medium text-[#40464F]">
                                2
                            </div>
                            <span className="ml-3 text-[#757575]">Build Quote</span>
                        </div>

                        {/* Connector Line */}
                        <div className="w-[150px] h-px bg-[#F5F5F5]"></div>

                        {/* Step 3 */}
                        <div className="flex items-center">
                            <div className="w-[31px] h-[31px] bg-[#EBEDEF] rounded-full flex items-center justify-center text-sm font-medium text-[#40464F]">
                                3
                            </div>
                            <span className="ml-3 text-[#757575]">Choose Path</span>
                        </div>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
                    {/* ThreatRespond Card */}
                    <div className="bg-[#00AEEF3D] rounded-2xl p-8 backdrop-blur-sm">
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <img src={pc} alt="" className='w-[100px] h-[100px]' />
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium text-center mb-4">ThreatRespond</h2>

                        <p className=" text-center mb-6 text-[18px] leading-relaxed">
                            I have an IT team to perform remediation and need expert 24/7 detection and guided response.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center ">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">24/7 threat monitoring</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Expert threat detection</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Guided response playbooks</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Your team handles remediation</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Lower cost for self-service</span>
                            </li>
                        </ul>
                    </div>

                    {/* ThreatRemediate Card */}
                    <div className="bg-[#00AEEF3D] rounded-2xl p-8 backdrop-blur-sm">
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="relative inline-block">
                                    <img src={pc} alt="" className='w-[100px] h-[100px]' />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium text-center mb-4">ThreatRemediate</h2>

                        <p className="text-center mb-6 text-[18px] leading-relaxed">
                            I need a {"hands-off"} solution where Vijilan{"s"} SOC actively contains and remediates threats for me.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">24/7 threat monitoring</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Expert threat detection</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Active threat containment</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Full hands-on remediation</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-[18px]">Complete peace of mind</span>
                            </li>
                        </ul>
                    </div>
                </div>
                        
                <hr  className='bg-[#CAC4D0] mb-10'/>
                {/* Continue Button */}
                <div className="flex justify-end max-w-6xl mx-auto">
                    <button className="bg-[#00AEEF] text-white text-[16px] font-bold py-[12px] px-[24px] rounded-lg ">
                        CONTINUE TO QUOTE BUILDER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FixedVijilanPortal;