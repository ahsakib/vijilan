import React from "react";
import footerGradiant from "../images/footer-gradiant.png";
import v from "../images/logo/v.svg";
import i from "../images/logo/i.svg";
import j from "../images/logo/j.svg";
import l from "../images/logo/l.svg";
import a from "../images/logo/a.svg";
import n from "../images/logo/n.svg";

const Footer = () => {
    return (
        <footer
            className="relative z-10 px-6 py-16"
            style={{
                backgroundImage: `url(${footerGradiant})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Background logo */}
            <div className="absolute top-8 left-0 right-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="flex items-center space-x-1 opacity-10">
                    <img src={v} alt="V" width={180} height={200} className="h-32 w-auto" />
                    <img src={i} alt="I" width={40} height={200} className="h-32 w-auto" />
                    <img src={j} alt="J" width={120} height={200} className="h-32 w-auto" />
                    <img src={i} alt="I" width={40} height={200} className="h-32 w-auto" />
                    <img src={l} alt="L" width={120} height={200} className="h-32 w-auto" />
                    <img src={a} alt="A" width={180} height={200} className="h-32 w-auto" />
                    <img src={n} alt="N" width={180} height={200} className="h-32 w-auto" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="pt-24">
                    <div className="grid md:grid-cols-5 gap-8 mb-12">
                        <div>
                            {/* Footer Logo */}
                            <div className="flex items-center space-x-1 mb-6">
                                <img src={v} alt="V" width={20} height={24} className="h-6 w-auto" />
                                <img src={i} alt="I" width={6} height={24} className="h-6 w-auto" />
                                <img src={j} alt="J" width={16} height={24} className="h-6 w-auto" />
                                <img src={i} alt="I" width={6} height={24} className="h-6 w-auto" />
                                <img src={l} alt="L" width={16} height={24} className="h-6 w-auto" />
                                <img src={a} alt="A" width={20} height={24} className="h-6 w-auto" />
                                <img src={n} alt="N" width={20} height={24} className="h-6 w-auto" />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-4">Insights</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>All Categories</p>
                                <p>Blog</p>
                                <p>Events</p>
                                <p>Papers</p>
                                <p>Podcast</p>
                                <p>Videos</p>
                                <p>Press release and news</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-4">Platform</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>About Us</p>
                                <p>Become a partner</p>
                                <p>Contact us</p>
                                <p>Pricing</p>
                                <p>Request a Demo</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-cyan-400 font-semibold mb-4">Others</h4>
                            <div className="space-y-2 text-gray-300 mb-6">
                                <p>FAQ</p>
                                <p>Information Security</p>
                                <p>Privacy Policy</p>
                                <p>Terms and Conditions</p>
                                <p>Cookie Policy</p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="px-6 py-2 font-semibold rounded-lg text-white h-fit"
                                style={{
                                    background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF6B35 100%)",
                                }}
                            >
                                CONTACT US
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-600 pt-8 text-center text-gray-400 text-sm">
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
