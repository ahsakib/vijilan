// src/components/TechnologyFoundation.jsx
// import React from 'react';
import ExperienceSection from '../ExperienceSection/ExperienceSection';


const partners = [
    'https://i.ibb.co/PpkQX8w/crowdstrike.png',
    'https://i.ibb.co/pjPYJXWC/fortinet.png',
    'https://i.ibb.co/LzrnMgvr/corelight.png',
    'https://i.ibb.co/Wv4rGNpK/cribl.png',
    'https://i.ibb.co/nsTSvqc8/microsoft.png',
    'https://i.ibb.co/bMC11Tjh/aws.png',
];

const TechnologyFoundation = () => {
    return (
        <div className=" text-white pt-20 px-6 ">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
                Built on an Elite <span className="text-cyan-400">Technology</span> <br className="md:hidden" /> Foundation
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-6 mb-12">
                {partners.map((src, idx) => (
                    <img

                        key={idx}
                        src={`${src}`}
                        alt="partner logo"
                        className=" px-4 py-2 w-[130px] h-[40px] rounded-[8px] bg-[#00AEEF] object-contain hover:scale-105 transition-transform"
                    />
                ))}
            </div>

            <div className="max-w-md mx-auto bg-[#00000062] text-white p-6 rounded-lg shadow-md border
            
            
            border-cyan-600">
                <div className="flex flex-col items-center"
                
                >
                    <div
                    className=" border- relative w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-center text-sm font-bold text-white mb-4">
                        SOC 2 <br /> Type 2
                    <button className="absolute -bottom-6 text-sm text-cyan-300 font-semibold mb-2 bg-[#202c3d] px-4 py-2 rounded">Certified</button>

                    </div>
                    <p className="text-sm text-gray-300 text-center">
                        Independently Audited & Certified for Your Peace of Mind<br />
                        Our customers can be sure of our commitment to data protection. We’re SOC 2 Type 2 compliant, a rigorous security standard that validates our service controls.
                        Frameworks include HIPAA, PCI DSS, GDPR, and CMMC.
                    </p>
                </div>
            </div>

            <ExperienceSection />

        </div>
    );
};

export default TechnologyFoundation;




// bg =>         bg-gradient-to-br from-[#090d1f] to-[#1a203f]





















// import React from 'react';

// const CertificationBadge = () => {
//   return (
//     <div className="flex items-center justify-center p-8">
//       {/* Circle Badge Container */}
//       <div className="relative w-64 h-64 rounded-full bg-blue-900 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden">
//         {/* Inner Circle */}
//         <div className="absolute w-56 h-56 rounded-full bg-blue-800 flex flex-col items-center justify-center text-center p-4">
//           {/* Top Text */}
//           <div className="text-white text-xl font-bold tracking-wider leading-tight">
//             SOC 2<br />Type 2
//           </div>
          
//           {/* Middle Line */}
//           <div className="w-24 h-1 bg-white my-3"></div>
          
//           {/* Bottom Text */}
//           <div className="text-white text-lg font-semibold uppercase tracking-widest">
//             Certified
//           </div>
//         </div>
        
//         {/* Optional outer ring decoration */}
//         <div className="absolute w-full h-full rounded-full border-8 border-blue-700 opacity-30"></div>
//       </div>
//     </div>
//   );
// };

// export default CertificationBadge;