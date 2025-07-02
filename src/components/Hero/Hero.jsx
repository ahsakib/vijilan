// import profile from "../../../src/assets/kalvin.png";
// import backgroundImage from "../../../src/assets/Group 1171275311.png";

// function Hero() {
//     return (
//         <div className="relative w-full overflow-hidden min-h-[500px]">
//             {/* Background Layers */}
//             <div className="absolute inset-0 -z-20">
//                 {/* Background Image */}
//                 <div
//                 //  bg-[#f2971f65]

//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat "
//                     style={{ backgroundImage: `url(${backgroundImage})` }}
//                 ></div>

//                 {/* Gradient Overlay */}
//                 <div 
//                     className="absolute inset-0 opacity-80"
//                     style={{ 
//                         background: 'linear-gradient(135deg,#f2971f65 , #833594,  #0080C8)' 
//                     }}
//                 ></div>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 min-h-[500px] flex items-center justify-center px-6 py-16">
//                 <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
//                     {/* Left Content */}
//                     <div className="md:w-2/3 space-y-6">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                             <span className="text-sky-300">The Vijilan Difference:</span><br />
//                             <span className="text-white">Expertise, Technology,</span><br />
//                             <span className="text-white">and a True Partnership</span>
//                         </h1>
//                         <p className="text-lg text-gray-200 max-w-2xl">
//                             We are not just another security vendor. We are an integrated security partner,
//                             combining an experienced 24/7 SOC with an AI-driven platform to deliver
//                             unparalleled protection and value for your business and your clients.
//                         </p>
//                     </div>

//                     {/* Right Profile */}
//                     <div className="flex flex-col items-center md:w-[342px] space-y-4">
//                         <div className="relative w-64 h-64 md:w-72 md:h-72">
//                             <img
//                                 src={profile}
//                                 alt="Kevin Nejad"
//                                 className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-xl"
//                             />
//                             {/* Gradient Border Effect */}
//                             <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2] -z-10">
//                                 <div className="w-full h-full rounded-full bg-[#0f172a]"></div>
//                             </div>
//                         </div>

//                         {/* Name Tag */}
//                         <div className="p-[2px] w-full rounded-md bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2]">
//                             <div className="bg-[#1e293b] px-6 py-3 rounded-md flex items-center justify-between w-full">
//                                 <span className="text-white font-bold text-lg">Kevin Nejad</span>
//                                 <span className="text-sky-300 text-sm font-medium">Founder & CEO</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;















// import profile from "../../../src/assets/kalvin.png";
// import backgroundImage from "../../../src/assets/Group 1171275311.png";
// import waveClip from "../../../src/assets/clip.png"; // Import the drag wave image

// function Hero() {
//     return (
//         <div className="relative w-full overflow-hidden min-h-[500px] bg-[#0f0f1adc]">
//             {/* Drag Wave Decoration */}
//             <img 
//                 src={waveClip} 
//                 alt="wave decoration"
//                 className="absolute top-0 left-0 w-full object-cover z-[-10]"
//                 style={{ maxHeight: '300px' }}
//             />

//             {/* Background Layers */}
//             <div className="absolute inset-0 -z-20">
//                 {/* Background Image */}
//                 <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                     style={{ backgroundImage: `url(${backgroundImage})` }}
//                 ></div>

//                 {/* Gradient Overlay */}
//                 <div 
//                     className="absolute inset-0 opacity-80"

//                 ></div>

//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 min-h-[500px] flex items-center justify-center px-6 py-16">
//                 <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
//                     {/* Left Content */}
//                     <div className="md:w-2/3 space-y-6">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                             <span className="text-sky-300">The Vijilan Difference:</span><br />
//                             <span className="text-white">Expertise, Technology,</span><br />
//                             <span className="text-white">and a True Partnership</span>
//                         </h1>
//                         <p className="text-lg text-gray-200 max-w-2xl">
//                             We are not just another security vendor. We are an integrated security partner,
//                             combining an experienced 24/7 SOC with an AI-driven platform to deliver
//                             unparalleled protection and value for your business and your clients.
//                         </p>
//                     </div>

//                     {/* Right Profile */}
//                     <div className="flex flex-col items-center md:w-[342px] space-y-4">
//                         <div className="relative w-64 h-64 md:w-72 md:h-72">
//                             <img
//                                 src={profile}
//                                 alt="Kevin Nejad"
//                                 className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-xl"
//                             />
//                             {/* Gradient Border Effect */}
//                             <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2] -z-10">
//                                 <div className="w-full h-full rounded-full bg-[#0f172a]"></div>
//                             </div>
//                         </div>

//                         {/* Name Tag */}
//                         <div className="p-[2px] w-full rounded-md bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2]">
//                             <div className="bg-[#1e293b] px-6 py-3 rounded-md flex items-center justify-between w-full">
//                                 <span className="text-white font-bold text-lg">Kevin Nejad</span>
//                                 <span className="text-sky-300 text-sm font-medium">Founder & CEO</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;





























import profile from "../../../src/assets/kalvin.png";
import backgroundImage from "../../../src/assets/Group 1171275311.png";
import waveClip from "../../../src/assets/clip.png"; // Drag wave image

function Hero() {
    return (
        <div className="relative w-full overflow-hidden min-h-[500px] bg-[#0f0f1adc]">

            {/* Drag Wave Decoration */}
            <img
                src={waveClip}
                alt="wave decoration"
                className="absolute top-0 left-0 w-full object-cover z-[-10]"
                style={{ maxHeight: '300px' }}
            />

            {/* Background Layers */}
            <div className="absolute inset-0 -z-20">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>

                {/* Subtle Top Gradient to match wave */}
                <div
                    className="absolute inset-0 z-[-15]"
                    style={{
                        /* 1️⃣ red glow in the corner  |  2️⃣ your original green‑to‑transparent fade */
                        background: `
      radial-gradient(circle at 90% 0%,      /* position: top‑right */
                     rgba(255, 0, 0, 0.35) 0%,
                     transparent 60%),
      linear-gradient(to bottom,
                     rgba(99, 86, 41, 7.40) 0%,
                     rgba(29, 56, 41, 0.20) 20%,
                     transparent 60%)
    `
                    }}
                ></div>

                {/* Optional: Light dark overlay for contrast (can adjust/remove) */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-[500px] flex items-center justify-center px-6 py-16">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Left Content */}
                    <div className="md:w-2/3 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-sky-300">The Vijilan Difference:</span><br />
                            <span className="text-white">Expertise, Technology,</span><br />
                            <span className="text-white">and a True Partnership</span>
                        </h1>
                        <p className="text-lg text-gray-200 max-w-2xl">
                            We are not just another security vendor. We are an integrated security partner,
                            combining an experienced 24/7 SOC with an AI-driven platform to deliver
                            unparalleled protection and value for your business and your clients.
                        </p>
                    </div>

                    {/* Right Profile */}
                    <div className="flex flex-col items-center md:w-[342px] space-y-4">
                        <div className="relative w-64 h-64 md:w-72 md:h-72">
                            <img
                                src={profile}
                                alt="Kevin Nejad"
                                className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-xl"
                            />
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2] -z-10">
                                <div className="w-full h-full rounded-full bg-[#0f172a]"></div>
                            </div>
                        </div>

                        {/* Name Tag */}
                        <div className="p-[2px] w-full rounded-md bg-gradient-to-r from-[#FFC876] via-[#79FFF7] via-[#9F53FF] to-[#FF98E2]">
                            <div className="bg-[#1e293b] px-6 py-3 rounded-md flex items-center justify-between w-full">
                                <span className="text-white font-bold text-lg">Kevin Nejad</span>
                                <span className="text-sky-300 text-sm font-medium">Founder & CEO</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
