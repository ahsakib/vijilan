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
import { Link } from 'react-router-dom';

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
            <div className="container mx-auto px-6 relative z-10">
                <div className=" md:pt-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="">
                            <div className="-ml-[44px] sm:-ml-[22px] md:-ml-[0px] w-full flex justify-center  sm:justify-start">
                                {/* Footer Logo */}
                                <div className=" mb-6">
                                    <img src={logo} alt="company logo" className='w-[100px] h-[34px]' />
                                    <img src={logoSub} alt="logo text" className=' w-[56px] h-[5px] ml-[38px] -mt-[6px]' />
                                </div>
                            </div>
                        </Link>

                        <div className=" w-full flex justify-center sm:justify-start">
                            <div className="text-left">
                                <h4 className="text-[#00AEEF] text-[19px] sm:text-[18px] mb-4 md:text-left">Insights</h4>
                                <div className="space-y-3 text-gray-300">
                                    {[
                                        { to: "/blog", label: "Blog" },
                                        { to: "/event-page", label: "Events" },
                                        { to: "/case-studies", label: "Papers" },
                                        { to: "/podcast-security", label: "Podcast" },
                                        { to: "/videos-library", label: "Videos" },
                                        { to: "/resources", label: "Press release and news" },
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.to}
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className="flex gap-2 text-[17px] sm:text-[16px] items-center"
                                        >
                                            <img src={smallVendor} alt="vendor" className="h-[15px]" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=" w-full flex justify-center sm:justify-start -ml-4 sm:-ml-0">
                            <div className="text-left">
                                <h4 className="text-[#00AEEF] text-[19px] sm:text-[18px] mb-4">Platform</h4>
                                <div className="space-y-3 text-gray-300">
                                    {[
                                        { to: "/about", label: "About Us" },
                                        { to: "/become-a-partner", label: "Become a Partner" },
                                        { to: "/contact", label: "Contact Us" },
                                        { to: "/pricing-page", label: "Pricing" },
                                        { to: "/request-demo", label: "Request a Demo" }
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.to}
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className="flex gap-2 text-[17px] sm:text-[16px] items-center"
                                        >
                                            <img src={smallVendor} alt="vendor" className="h-[15px]" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=" w-full flex justify-center sm:justify-start">
                            <div className="text-left">
                                <h4 className="text-[#00AEEF] text-[19px] sm:text-[18px] mb-4">Others</h4>
                                <div className="space-y-3 text-gray-300 mb-6">
                                    {[
                                        { to: "/resources", label: "FAQ" },
                                        { to: "/information-security", label: "Information Security" },
                                        { to: "/privacy-policy", label: "Privacy Policy" },
                                        { to: "/term-condition", label: "Terms and Conditions" },
                                        { to: "/cookie-privacy", label: "Cookie Policy" }
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.to}
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                            className="flex gap-2 text-[17px] sm:text-[16px] items-center"
                                        >
                                            <img src={smallVendor} alt="vendor" className="h-[15px]" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="w-full flex justify-center sm:justify-start">
                            <Link to={"contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <div className="md:flex justify-end">
                                    <button
                                        className=" px-[24px] py-[16px] font-medium text-[18px] md:text-[16px] lg:text-[18px] rounded-[8px] text-white h-fit"
                                        style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                        }}>
                                        CONTACT US
                                    </button>

                                </div>
                            </Link>
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
