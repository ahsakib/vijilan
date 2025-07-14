import { ArrowRight, Play } from 'lucide-react';
import React from 'react';
import { Clock, User } from "lucide-react"
import Heading_Btn from '@components/Heading_Btn';

const episodes = [
    {
        id: 1,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
    {
        id: 2,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
    {
        id: 3,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
    {
        id: 4,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
    {
        id: 5,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
    {
        id: 6,
        episodeNumber: 126,
        date: "JANUARY 8 2025",
        title: "ZERO TRUST IN THE AGE OF AI",
        description:
            "exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.",
        guest: "🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert",
        duration: "⏱️ 28 min",
    },
]

const PodcastSecurity = () => {
    return (
        <div className='container mx-auto md:px-6'>
            {/* hero section */}
            <section className=' py-16'>
                <div className=''>
                    {/* content */}
                    <div className='mb-10'>
                        <h1 className=' text-3xl md:text-4xl lg:text-[48px] font-bold text-center'>🎧 Vijilan Security Podcast</h1>
                        <p className='text-[18px] text-center mt-10'>Weekly conversations with cybersecurity experts, threat researchers, and industry <br /> leaders. Get insider insights on the latest threats, defense strategies, and real-world <br /> incident response stories.</p>
                    </div>
                    {/* card */}
                    <div className=' flex justify-center flex-wrap gap-5'>
                        <div className='text-[16px] font-bold rounded-[8px] px-[22px] py-[12px] bg-[#CDCDD466] w-fit uppercase'>
                            Apple podcast
                        </div>

                        <div className='text-[16px] font-bold rounded-[8px] px-[22px] py-[12px] bg-[#CDCDD466] w-fit uppercase'>
                            SPOTIFY
                        </div>
                        <div className='text-[16px] font-bold rounded-[8px] px-[22px] py-[12px] bg-[#CDCDD466] w-fit uppercase'>
                            google podcast
                        </div>
                        <div className='text-[16px] font-bold rounded-[8px] px-[22px] py-[12px] bg-[#CDCDD466] w-fit uppercase'>
                            stitcher
                        </div>
                        <div className='text-[16px] font-bold rounded-[8px] px-[22px] py-[12px] bg-[#CDCDD466] w-fit uppercase'>
                            RSS FEED
                        </div>

                    </div>
                </div>

            </section>

            {/*  */}
            <section className='py-16'>
                <div className="rounded-[24px] flex items-center justify-center p-[20px] md:p-[40px] lg:p-[54px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="w-full max-w-4xl mx-auto">
                        {/* Main Title */}
                        <h1 className="text-white text-2xl sm:text-3xl md:text-[36px] font-bold text-center mb-8 leading-tight">
                            FEATURED EPISODE: THE PSYCHOLOGY OF SOCIAL <br /> ENGINEERING
                        </h1>

                        {/* Episode Content Card */}
                        <div className="bg-[#CDCDD466] rounded-[24px] p-[20px] md:p-[45px]">
                            {/* Play Button and Episode Info */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                                <button className="bg-[#00AEEF] text-[16px] font-bold px-[16px] py-[8px] rounded-lg flex items-center gap-2 w-fit">
                                    <Play className="w-4 h-4 fill-current" />
                                    PLAY EPISODE
                                </button>

                                <div className="text-[16px]">
                                    EPISODE 127 • 32 MINUTES • JANUARY 3, 2025
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-6">
                                <div className="w-full bg-[#EBEBEB] rounded-full h-1">
                                    <div
                                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"

                                        style={{
                                            background: "linear-gradient(90deg, #00AEEF 0%, #F24E1E 100%)", width: "25%"
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Episode Description */}
                            <p className="text-[18px] leading-relaxed">
                                Our CISO discusses the human element in cybersecurity attacks and how <br />organizations can build stronger
                                security awareness cultures. Learn practical <br /> strategies for identifying social engineering tactics and
                                implementing effective <br /> training programs.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/*  */}
            <section className='py-16'>
                <div className="relative z-10 ">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Latest Episodes</h1>
                        <p className=" text-lg leading-relaxed">
                            Stay current with the evolving cybersecurity landscape through expert analysis and <br /> real-world insights
                        </p>
                    </div>

                    {/* Episodes Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {episodes.map((episode) => (
                            <div
                                key={episode.id}
                                className=" backdrop-blur-sm rounded-[24px] p-[34px] " style={{
                                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                                }}>
                                {/* Episode Badge */}
                                <div className="mb-6">
                                    <span className="inline-block  text-white px-[24px] py-[12px] rounded-[8px] text-[16px] font-bold uppercase tracking-wide" style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                    }}>
                                        Episode {episode.episodeNumber}
                                    </span>
                                </div>

                                {/* Date */}
                                <div className=" text-[16px] font-bold mb-4 uppercase tracking-wider">{episode.date}</div>

                                {/* Title */}
                                <h2 className=" text-[16px] font-bold uppercase tracking-wide">{episode.title}</h2>

                                {/* Description */}
                                <p className=" text-[16px] leading-relaxed mb-6">{episode.description}</p>

                                {/* Episode Info */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className=" text-[14px] font-medium">
                                        <span>{episode.guest}</span>
                                    </div>
                                    <div className=" text-[14px] font-medium">
                                        <span>{episode.duration}</span>
                                    </div>
                                </div>

                                {/* Play Button */}
                                <button className="bg-[#00AEEF] text-white px-[14px] py-[8px] rounded-[7px] font-bold uppercase tracking-wide flex items-center">
                                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                    Play Episode
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <div className=" flex items-center justify-center px-[24px] py-[44px] rounded-[24px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Never Miss an Episode</h1>

                        {/* Description */}
                        <p className="text-lg mb-12 leading-relaxed">
                            Subscribe to our podcast newsletter and get notified about new episodes, exclusive <br /> content, and special guest
                            announcements. Join over 5,000 cybersecurity <br /> professionals who stay informed with our weekly insights.
                        </p>

                        {/* Email Subscription Form */}
                        <div className="relative z-10 bg-white rounded-[10px] p-2 flex items-center w-full md:max-w-md mx-auto mb-8 ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full flex-1 px-6 py-2 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none text-lg"
                            />
                            <button className=" text-white px-8 py-3 text-[16px] rounded-[16px] font-bold " style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>
                                Subscribe
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center -mt-[80px]">
                            <Heading_Btn
                                btn6={"GET EMAIL NOTIFICATIONS"}
                               

                            />
                           <div className='-mt-[140px] md:-mt-0'>
                             <Heading_Btn
                                btn7={"MORE RESOURCES"}

                            />
                           </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PodcastSecurity;