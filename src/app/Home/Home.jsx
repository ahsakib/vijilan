// responsive complete

import { ChevronDown, Shield, Users, Building, Lightbulb, MapPin, Zap, Star } from "lucide-react"
import Header from "@components/Header"
import EmergencyBanner from "@components/EmergencyBanner"
import HeroSection from "./HeroSection"
import GroupIcon from '../../images/Group.svg';
import GroupIcon2 from '../../images/Group (1).svg';
import CardContent from "@components/CardContent"
import Partnership from "@app/Landing/Partnership"
import Quotes from "@app/Landing/Quotes"
import JoinMissionSection from "@components/JoinMissionSection";
import image from "../../Assets/image.png";
import setting from "../../Assets/setting.png";
import target from "../../Assets/target.png";
import light from "../../Assets/light.png";
import object from "../../Assets/object.png";
import question from "../../Assets/question.png";
import quote from "../../Assets/quote.png";
import aws from "../../Assets/aws.png";
import corelight from "../../Assets/corelight.png";
import microsoft from "../../Assets/microsoft.png";
import crible from "../../Assets/crible.png";
import rowstrike from "../../Assets/rowstrike.png";
import fortinet from "../../Assets/fortinet.png";
import badge from "../../Assets/badge.png";
import avater from "../../Assets/avater.png";
import vector from "../../Assets/Vector.png";
import vendor from "../../Assets/vendor.png";
import mask from "../../Assets/mask.png";
import lights from "../../Assets/lights.png"
import objects from "../../Assets/objects.png";
import dollar from "../../Assets/dollar.png"
import { Link } from "react-router-dom";

import { ChevronLeft, ChevronRight } from "lucide-react"

const data = [
  {
    category: "Security Infrastructure & Network Security",
    items: ["Fortinet", "Palo Alto", "Cisco", "Juniper", "Check Point"],
  },
  {
    category: "Cloud Security & SaaS Platforms",
    items: ["SonicWall", "WatchGuard", "Sophos", "UniFi (Ubiquiti)"],
  },
  {
    category: "Endpoint Detection & Response (EDR)",
    items: ["pfSense", "Windows (WEF)", "Windows (Syslog)", "Microsoft IIS"],
  },
  {
    category: "ITSM & Ticketing System Integration",
    items: [
      "MS Exchange",
      "Netskope (syslog)",
      "Ordr (syslog)",
      "RSA (syslog)",
      "Linux (Syslog)",
    ],
  },
];



const Home = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      {/* Background Pattern */}

      {/* Content Overlay */}
      <div className="relative z-10">

        {/* Hero Section */}
        <HeroSection />



        {/* Tailored Solutions Section */}
        <section className="container mx-auto pb-20">
          <div className="">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-[40px] font-bold mb-4" style={{ color: "#00AEEF" }}>
                Tailored Cybersecurity Solutions
              </h1>
              <h2 className="text-4xl md:text-[40px] font-bold text-white">For Your Needs </h2>
            </div>

            {/* Cards Container */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Card - MSPs */}

              <CardContent
                icon={GroupIcon}
                head="For MSPs, VARs & MSSPs"
                sub="Elevate Your Cybersecurity Offerings. Partner with Vijilan to deliver enterprise-grade security, enhance your service portfolio, and drive profitable growth."
                buttonText="EMPOWER YOUR MSP/VAR/MSSP"
                isLeft={true}
                url="visilan-msg-partner"
              />

              {/* Right Card - SMBs */}
              <CardContent
                icon={GroupIcon2}
                head="For SMBs & Mid-Market Enterprises"
                sub="Affordable, Expert Protection. Secure your business with our comprehensive managed security services,
                    tailored to your size and industry needs."
                buttonText="SECURE YOUR BUSINESS"
                isLeft={true}
                url="smb"
              />
            </div>
          </div>
        </section>



        {/* Threat Landscape Section */}
        <section
          className="relative container mx-auto px-6 rounded-[24px] overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 "
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(0deg, rgba(8,34,53,0.8) 53.83%, rgba(0,174,239,0.8) 328.5%)",
            }}
          ></div>
          <div className="relative z-20 container mx-auto px-6 py-16 rounded-[24px]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  The Evolving Threat
                  <br />
                  Landscape Demands
                  <br />
                  a New Defense
                </h2>
                <Link to={"contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  <button
                    className="p-[20px] text-lg mt-[12px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                    style={{
                      background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                    }}>

                    <span>GET STARTED FREE</span>
                    <div className="w-6 h-6  flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 16 16 12 12 8"></polyline>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="relative text-white text-[18px] bg-[#00AEEF3D] rounded-[24px] p-[24px] space-y-4 leading-relaxed overflow-hidden">
                <div
                  className="absolute inset-0 rounded-[24px] p-[1px] z-0 h-full "
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                <p>
                  Modern cyber threats are more sophisticated and faster than ever. Adversaries execute complex cross-domain attacks, exploiting vulnerabilities across endpoints, identities, and cloud environments simultaneously. A staggering 75% of attacks are now malware-free, often leveraging stolen credentials to bypass traditional defenses. Siloed security tools can't keep up, leaving your organization exposed.
                </p>

                <p>
                  <span className="text-[#00AEEF]">Vijilan's Unified Security Platform</span> – powered by industry leaders like CrowdStrike, Fortinet, Corelight, Cribl, and an extensive integration ecosystem – combined with our 24/7 Expert Services, provides the comprehensive answer.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Vijilan Advantage Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold text-white mb-4">
              <span className="text-[#00AEEF]"> The Vijilan Advantage</span>:<br />
              Secure. Compliant. Partner-Focused.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1st */}
            <div className="relative lg:h-[390px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={target} alt="" />
              </div>
              <h3 className="text-[24px] font-medium text-white mb-3">24/7 US-Based SOC</h3>
              <p className="text-white text-[18px] text-center">
                Expert eyes on your security, around <br /> the clock. Our certified analysts <br /> provide continuous monitoring and <br /> rapid incident response from our SOC 2 <br /> Type 2 certified Security Operations <br /> Center.
              </p>
            </div>

            <div className="relative lg:h-[300px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[90px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={light} alt="" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-3">AI-Powered Intelligence</h3>
              <p className="text-white text-[18px] text-center">
                Advanced analytics and AI to detect <br /> known and unknown threats faster, <br /> reducing false positives and enabling <br /> proactive defense.
              </p>
            </div>

            <div className="relative lg:h-[434px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[130px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={setting} alt="" />
              </div>
              <h3 className="text-[23px] font-bold text-white mb-3 text-center">Powered by Industry Leaders <br /> & Broad Integrations</h3>
              <p className="text-white text-[18px] text-center">
                Leveraging best-in-class technology <br /> from CrowdStrike, Fortinet, Corelight, <br /> and Cribl, and seamlessly integrating <br /> with your existing ecosystem including <br /> Palo Alto, Cisco, Microsoft 365, AWS, <br />Azure, SentinelOne, Okta, and many <br /> more.
              </p>
            </div>

            <div className="relative lg:-mt-[40px] lg:h-[335px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[156px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={question} alt="" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-3">Proactive Remediation</h3>
              <p className="text-white text-[18px] text-center">
                We don't just alert; our experts act to <br /> contain and neutralize threats, <br /> minimizing impact and ensuring <br /> business continuity.
              </p>
            </div>
            {/* 5th */}
            <div className="relative lg:-mt-[130px] lg:h-[405px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[110px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={target} alt="" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-3">Partner-Centric Model</h3>
              <p className="text-white text-[18px] text-center">
                Dedicated to empowering MSP, VAR, <br /> and MSSP success with comprehensive <br /> enablement (including our unique <br /> Partner Sales & Marketing Portal), <br /> flexible programs, and a focus on your <br /> growth.
              </p>
            </div>

            <div className="relative lg:h-[420px] bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center">
              <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <div className="w-[197px] h-[110px]  rounded-lg flex items-center justify-center mb-4">
                <img src={object} alt="" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-3">SOC 2 Type 2 Certified</h3>
              <p className="text-white text-center text-[14px]">
                Our commitment to the highest <br /> security and operational standards is <br /> validated by our SOC 2 Type 2 <br /> certification by A-LIGN, giving you <br /> independently verified trust.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <div className="relative container mx-auto overflow-hidden " style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
          {/* Left side solid background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
            }}
          />

          {/* Right side pattern with smooth blend */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${mask})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8,
              maskImage:
                "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
            }}
          />

          {/* Overlay for color consistency */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
            }}
          />

          {/* Background decorative circles */}
          <div className="absolute w-[243px] h-[152px]">
            <img src={quote} alt="" />
          </div>


          <div className="relative max-w-6xl mx-auto px-8">
            {/* Header Section */}
            <div className="text-center py-10 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white ">
                <span className="text-[#00AEEF]">Trusted by Leaders,</span>
                <br />
                <span className="text-white">Powered by Innovation</span>
              </h2>

              {/* Company Logos */}
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {[
                  { src: rowstrike, },
                  { src: fortinet, },
                  { src: corelight },
                  { src: crible },
                  { src: microsoft },
                  { src: aws },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#00AEEF] w-fit h-[40px] flex items-center justify-center rounded-[8px] px-[16px] py-[10px]"
                  >
                    <img src={item.src} alt="" className={item.height || "h-[24px]"} />
                  </div>
                ))}
              </div>


              <p className="text-white text-[18px] max-w-3xl mx-auto">
                Our platform is built on leading technologies and integrates with hundreds of <br /> security products and cloud
                services you already use.
              </p>
            </div>

            {/* Testimonial and Certification Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Testimonial */}
              <div className=" mx-auto max-w-md ">
                <div className="flex flex-col space-y-5 text-left">
                  <div className=" gap-4">
                    <div className="text-left w-16 h-16 rounded-full overflow-hidden ">
                      <img
                        src={avater}
                        alt="Customer testimonial"
                        width={52}
                        height={52}
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>

                  <blockquote className="text-white text-[15px] leading-relaxed">
                    "Vijilan has transformed our security posture and <br /> empowered our team to focus on strategic growth <br /> while
                    ensuring our clients are protected with <br /> enterprise-grade cybersecurity."
                  </blockquote>

                  <div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-[#FFD300] text-[#FFD300]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#00AEEF] text-[15px]">Leading MSP Partner</p>
                </div>
              </div>

              {/* Certification Badge */}
              <div className=" flex justify-center">
                <div className="relative  bg-[#00AEEF3D] py-[50px] rounded-[24px] px-[24px] text-center backdrop-blur-sm space-y-3">
                  <div
                    className="absolute inset-0 rounded-[24px] p-[1px] z-0 h-full"
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude"
                    }}
                  />
                  <div className="w-[100px] h-[100px] mx-auto">
                    <div className="text-white font-bold text-xs">
                      <img src={badge} alt="" />
                    </div>
                  </div>
                  <h3 className="text-white text-[24px] font-medium mb-2">SOC 2 Type 2 Certified</h3>
                  <p className="text-white text-[15px]">
                    Independently audited for security, availability, processing <br />integrity, confidentiality, and privacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex ml-[110px]  gap-4 mt-5">
              <div className='bg-[#00AEEF] rounded-[6px] p-2'>
                <img src={vector} alt="" className='w-[22px] h-[22px] flex justify-center items-center' />
              </div>
              <div className='bg-[#00AEEF] rounded-[6px] p-2'>
                <img src={vector} alt="" className='w-[22px] h-[22px] flex justify-center items-center' />
              </div>
            </div>
            {/* vendor image */}
            <div className="pb-[60px]">
              <img src={vendor} alt="" />
            </div>
          </div>
        </div>
        <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center justify-center mt-5">
          <button
            className="p-[20px] text-lg mt-[12px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
            style={{
              background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
            }}>

            <span className="uppercase">Read More Success Stories</span>
            <div className="w-6 h-6  flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </button>
        </Link>

        {/* Integrations Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-[40px] font-bold text-white mb-4">
              <span className="text-[#00AEEF]">Comprehensive Security</span>
              <br />
              Ecosystem Integrations
            </h2>
            <p className="text-[18px] text-white">Vijilan seamlessly integrates with your existing security infrastructure, providing <br /> unified visibility and management across all your security tools and platforms.</p>
          </div>
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left Side - Categories */}
              <div className="flex flex-col gap-4">
                {data.map((section, index) => (
                  <div
                    key={index}
                    className={`relative rounded-md px-4 py-3 text-white font-medium text-sm ${index === 0
                      ? "bg-[#0A7FBF] text-white"
                      : "bg-[#2D2D2D] border border-[#00AEEF80]"
                      }`} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}
                  >
                    <div
                      className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                      style={{
                        background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",

                      }}
                    />
                    {section.category}
                  </div>
                ))}
              </div>

              {/* Right Side - Tags */}
              <div className="flex flex-wrap gap-3 items-start">
                {data.map((section) =>
                  section.items.map((item, i) => (
                    <div
                      key={item + i}
                      className="bg-[#00AEEF] text-white text-[16px] px-[16px] py-[10px] rounded-[8px]"
                    >
                      {item}
                    </div>
                  ))
                )}
              </div>
            </div>


          </div>
          <div className="text-center mt-10">
            <p className="text-gray-300 mb-5">
              Don't see your security tool listed? Our platform supports hundreds of integrations <br /> through APIs, syslog, and custom connectors.
            </p>
            <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <button
                className="p-[20px] text-lg mt-[12px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                style={{
                  background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                }}>

                <span className="uppercase">Request Integration Consultation</span>
                <div className="w-6 h-6  flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 16 16 12 12 8"></polyline>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-[40px] font-bold text-white">
              Our Partners' <span className="text-[#00AEEF]">Success Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "MSP Achieves 300% Growth with Vijilan",
                description:
                  "TechSecure MSP transformed their security offerings and achieved remarkable growth by partnering with Vijilan.",
              },
              {
                title: "MSSP Reduces SOC Costs by 40% with Intelligent Automation",
                description:
                  "SecureOps MSSP streamlined operations and reduced costs while improving service quality through automation.",
              },
              {
                title: "Enterprise Achieves Full Security Visibility with Optimization",
                description:
                  "Global Manufacturing Corp enhanced their security posture and achieved comprehensive visibility across their infrastructure.",
              },
            ].map((story, index) => (
              <div key={index} className="relative bg-[#00AEEF3D] rounded-[24px] backdrop-blur-sm  p-[40px]">
                <div
                  className="absolute inset-0 rounded-[24px] p-[2px] z-0 h-full"
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                <h3 className="text-[24px] font-medium text-white mb-3 text-center">{story.title}</h3>
                <p className="text-white text-[15px] mb-4 leading-relaxed text-center">{story.description}</p>
                <div className="text-[#00AEEF] text-[15px] cursor-pointer text-center">Read Full Story →</div>
              </div>
            ))}
          </div>
          <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>


            <div className="flex items-center justify-center mx-auto mt-5">
              <button
                className="p-[20px] text-lg mt-[12px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                style={{
                  background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                }}>

                <span className="uppercase">View All Partner Success Stories</span>
                <div className="w-6 h-6  flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 16 16 12 12 8"></polyline>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
              </button>
            </div>
          </Link>
        </section>

        {/* Deep Dive Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-[40px] font-bold text-white">
              <span className="text-[#00AEEF]">Dive Deeper</span> Into Vijilan's
              <br />
              Cybersecurity Ecosystem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <img src={lights} alt="" className="w-[164px] h-[110px]" />,
                title: "Our Solutions",
                description:
                  "Discover our full suite of managed security services, from mXDR and ThreatRemediate to specialized cloud and identity protection.",
                buttonText: "Explore All Solutions",
                url: "resources"
              },
              {
                icon: <img src={objects} alt="" className="w-[164px] h-[110px]" />,
                title: "Our Technology & Integrations",
                description:
                  "Learn how our platform, powered by CrowdStrike, AI, and extensive integrations (Fortinet, Palo Alto, Microsoft 365, etc.), delivers unparalleled visibility and control.",
                buttonText: "View Our Integrations",
                url: "resources"
              },
              {
                icon: <img src={dollar} alt="" className="w-[100px] h-[110px]" />,
                title: "Resources & Insights",
                description:
                  "Stay informed with our latest threat research, whitepapers, cybersecurity guides, and expert blog posts.",
                buttonText: "Access Security Resources",
                url: "resources",

              },
            ].map((item, index) => (
              <div key={index} className="relative bg-[#00AEEF3D] backdrop-blur-sm p-6 rounded-[24px] flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 rounded-[24px] p-[2px] z-0 h-full"
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                  linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                <div className=" mb-4">{item.icon}</div>
                <h3 className="text-[24px] text-center font-medium text-white mb-3">{item.title}</h3>
                <p className="text-white text-[18px] mb-4 leading-relaxed text-center">{item.description}</p>
                <Link to={item.url ? item.url : ""} className="mt-auto z-10 bg-[#FFFFFF] rounded-[8px] p-[16px] text-[18px] font-medium  " style={{ color: "#082235" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                  {item.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </section>


        <JoinMissionSection
          title="Ready to Elevate Your"
          highlightedText="Security"
          subtitle="Let's discuss your unique cybersecurity challenges and how Vijilan can provide the protection and peace of mind you need."
          buttonText="Get Your Free Security Consultation"
          url="contact"
        />
      </div>
    </div>
  )
}

export default Home
