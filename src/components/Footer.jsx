import React from "react";
import footerGradiant from "../images/footer-gradiant.png";
import v from "../images/logo/v.svg";
import i from "../images/logo/i.svg";
import j from "../images/logo/j.svg";
import l from "../images/logo/l.svg";
import a from "../images/logo/a.svg";
import n from "../images/logo/n.svg";
import logo from "../Assets/logo.png";
import logoSub from "../Assets/logoSub.png";
import footerBg from "../Assets/footer_bg_logo.png";
import vendor from "../Assets/vendor.png";
import smallVendor from "../Assets/smallVendor.png";

const Footer = () => {
    return (
        <footer
            className="relative z-10 px-6 pt-100 pb-10"
            style={{
                backgroundImage: `url('/footer-bg.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container mx-auto px-6 relative z-10"
                
            >
                <div className="pt-24">
                    <div className="grid md:grid-cols-5 gap-8 mb-12">
                        <div className="">
                            {/* Footer Logo */}
                            <div className=" flex flex-col mb-6">
                                <img src={logo} alt="company logo" className='w-[100px] h-[34px]' />
                                <img src={logoSub} alt="logo text" className=' w-[56px] h-[5px] ml-[38px] -mt-[6px]' />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[#00AEEF] text-[18px] mb-4">Insights</h4>
                            <div className="space-y-2 text-gray-300">
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> All Categories</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Blog</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Events</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Papers</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Podcast</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Videos</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Press release and news</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[#00AEEF] text-[18px] mb-4">Platform</h4>
                            <div className="space-y-2 text-gray-300">
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> About Us</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Become a partner</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Contact us</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Pricing</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Request a Demo</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[#00AEEF] text-[18px] mb-4">Others</h4>
                            <div className="space-y-2 text-gray-300 mb-6">
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> FAQ</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Information Security</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Privacy Policy</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Terms and Conditions</p>
                                <p className="flex gap-2 text-[16px] items-center"> <img src={smallVendor} alt="vendor" className="h-[15px]" /> Cookie Policy</p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="px-[24px] py-[16px] font-medium text-[18px] rounded-[8px] text-white h-fit"
                                style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                }}
                            >
                                CONTACT US
                            </button>

                        </div>
                    </div>

                    <img src={vendor} alt="vendor" className="w-full h-[1px]" />

                    <div className=" pt-6 text-center text-[#9C9A9B] text-[16px]">
                        <p>
                            Copyright © 2024 All Rights Reserved - Vijilan Security, LLC - 24/7 Cybersecurity Threat
                            Monitoring, SIEM, and SOC
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
