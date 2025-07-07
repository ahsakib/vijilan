import React from 'react';

const leftColumnServices = [
    {

        title: "MSPs (Bronze, Silver, Gold Tiers)",
        description: "Tiered partnership program designed for MSPs of all sizes - from micro-MSPs (5-15 employees) to large operations (60-100+). Grow your security portfolio profitably with our turnkey platform.",

    },
    {

        title: "VARs (Value-Added Resellers)",
        description:
            "Sales-focused partners offering hands-off, fully managed cybersecurity solutions. Clear value propositions, recurring revenue, and pre-built sales enablement materials.",

    },
    {

        title: "IT Consultants",
        description:
            "Recommend best-in-class cybersecurity solutions that deliver tangible value to your enterprise clients. Partner with us for mutually beneficial opportunities.",

    },
    {

        title: "vCISOs (Virtual CISOs)",
        description:
            "Enhance your clients' security posture with turn-key solutions that deliver strategic oversight and operational excellence. Access deep technical expertise and broader managed services.",

    },
    {

        title: "MSSPs (Managed Security Service Providers)",
        description:
            "Augment your existing SOC capabilities, modernize your SIEM with LogScale, or leverage co-managed services to scale your operations cost-effectively.",

    }
]

const rightColumnServices = [
    {

        title: "Technology Alliance Partners",
        description:
            "Strategic partnerships with CrowdStrike, Cribl, Corelight, Fortinet, Microsoft, Google Cloud, Palo Alto Networks, and SentinelOne for comprehensive security solutions.",
    },
    {

        title: "Distribution Channel Partners",
        description:
            "Available through leading distributors including TD SYNNEX, CDW, SHI, Sherweb, Pax8, and GuidePoint for simplified procurement.",
    },
    {

        title: "Partner Locator (for SMBs",
        description:
            "Find a trusted Vijilan partner in your region. Searchable directory of certified partners providing managed cybersecurity services for small and medium businesses.",
    },
    {

        title: "Become a Partner",
       
    },
    {

        title: "Partner Sales & Marketing Portal",
        
    }
]

const PartnersDropdown = () => {
    return (
        <div className="container px-6 mx-auto rounded-[24px] my-[50px]" style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            <div className="grid lg:grid-cols-2 gap-8 md:p-4">
                {/* Left Column - Managed Detection & Response */}
                <div className=" rounded-2xl p-4 md:p-6 lg:p-12 ">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        Partner Programs
                    </h2>
                    <div className="space-y-8">
                        {leftColumnServices.map((service, index) => (
                            <div key={index} className="flex gap-4">
                                
                                <div className="flex-1">
                                    <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">{service.title}</h3>
                                    <p className="text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - SIEM & Data Management */}
                <div className=" p-4 md:p-6 lg:p-12   lg:border-l lg:border-[#CAC4D0]">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        Technology & Distribution
                    </h2>
                    <div className="space-y-8">
                        {rightColumnServices.map((service, index) => (
                            <div key={index} className="flex gap-4">
                                
                                <div className="flex-1">
                                    <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">{service.title}</h3>
                                    <p className=" text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersDropdown;