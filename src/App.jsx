
// import './App.css'
// import Hero from './components/Hero/Hero'
// // import NewsCard from './components/NewsCard/NewsCard';
// import { FaShieldAlt, FaBolt, FaCogs, FaHandshake } from 'react-icons/fa';
// import "./index.css";
// import FeatureCard from './components/FeatureCard/FeatureCard';
// import TechnologyFoundation from './components/TechnologyFoundation/TechnologyFoundation';
// // import ExperienceSection from './components/ExperienceSection/ExperienceSection';
// function App() {

//   const features = [
//     {
//       icon: <FaShieldAlt />,
//       title: 'Unmatched Expertise & Enduring Trust',
//       description:
//         "Our US Based, SOC 2 Type 2 certified Security Operations Center is the heart of our service. It's staffed 24/7 by a team of elite threat hunters and remediation specialists who act as a direct extension of your team.",
//     },
//     {
//       icon: <FaCogs />,
//       title: 'Powered by the Cribl Data Engine',
//       description:
//         'Our deep alliance with Cribl allows us to solve ‘data chaos’. We optimize your data flows, reduce SIEM costs, and enrich raw data into actionable intelligence *before* it enters your security stack.',
//     },
//     {
//       icon: <FaBolt />,
//       title: 'A Proactive, Remediation-First Approach',
//       description:
//         'Unlike services that just send alerts, our ThreatRemediate™ service includes active, hands-on remediation. Our SOC contains and neutralizes threats directly, reducing the burden on your team and stopping breaches faster.',
//     },
//     {
//       icon: <FaHandshake />,
//       title: 'Committed to Partner Success',
//       description:
//         'We are a channel-first company. We empower our MSP partners with a turnkey platform, no minimums, a 30-day opt-out trial, full white-labeling options, and a comprehensive sales enablement kit to ensure your success.',
//     },
//   ];
//   return (
//     <>

//       <section className='max-w-7xl mx-auto'>

//         <Hero />

//         <div className="min-h-screen text-white py-16 px-6">
//           <h2 className="text-3xl font-bold text-center mb-12">What Truly Sets Us Apart</h2>
//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//               />
//             ))}
//           </div>
//         </div>

//         <TechnologyFoundation />

//       </section>

//     </>
//   )
// }

// export default App



// // bg=>        bg-gradient-to-br from-[#090d1f] to-[#1a203f]
















// import image from "../src/assets/Group 1171275311.png"; // use your image path


// import './App.css'
// import Hero from './components/Hero/Hero'
// import { FaShieldAlt, FaBolt, FaCogs, FaHandshake } from 'react-icons/fa';
// import "./index.css";
// import FeatureCard from './components/FeatureCard/FeatureCard';
// import TechnologyFoundation from './components/TechnologyFoundation/TechnologyFoundation';
// import ExperienceSection from './components/ExperienceSection/ExperienceSection';

// function App() {
//   const features = [
//     {
//       icon: <FaShieldAlt />,
//       title: 'Unmatched Expertise & Enduring Trust',
//       description:
//         "Our US Based, SOC 2 Type 2 certified Security Operations Center is the heart of our service. It's staffed 24/7 by a team of elite threat hunters and remediation specialists who act as a direct extension of your team.",
//     },
//     {
//       icon: <FaCogs />,
//       title: 'Powered by the Cribl Data Engine',
//       description:
//         "Our deep alliance with Cribl allows us to solve 'data chaos'. We optimize your data flows, reduce SIEM costs, and enrich raw data into actionable intelligence *before* it enters your security stack.",
//     },
//     {
//       icon: <FaBolt />,
//       title: 'A Proactive, Remediation-First Approach',
//       description:
//         'Unlike services that just send alerts, our ThreatRemediate™ service includes active, hands-on remediation. Our SOC contains and neutralizes threats directly, reducing the burden on your team and stopping breaches faster.',
//     },
//     {
//       icon: <FaHandshake />,
//       title: 'Committed to Partner Success',
//       description:
//         'We are a channel-first company. We empower our MSP partners with a turnkey platform, no minimums, a 30-day opt-out trial, full white-labeling options, and a comprehensive sales enablement kit to ensure your success.',
//     },
//   ];

//   return (
//     <>
// <section className="relative max-w-7xl mx-auto">
//   {/* Background Image with Overlay */}
//   <div 
//     className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
//     style={{ backgroundImage: `url(${image})` }}
//   >
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-black/50"></div>
//   </div>

//   {/* Content */}
//   <div className="relative z-10">
//     <Hero />

//     <div className="min-h-screen text-white py-16 px-6">
//       <h2 className="text-3xl font-bold text-center mb-12">What Truly Sets Us Apart</h2>
//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {features.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             icon={feature.icon}
//             title={feature.title}
//             description={feature.description}
//           />
//         ))}
//       </div>
//     </div>

//     <TechnologyFoundation />
//   </div>
// </section>
//     </>
//   )
// }

// export default App






















import './App.css'
import Hero from './components/Hero/Hero'
import { FaShieldAlt, FaBolt, FaCogs, FaHandshake } from 'react-icons/fa';
import "./index.css";
import FeatureCard from './components/FeatureCard/FeatureCard';
import TechnologyFoundation from './components/TechnologyFoundation/TechnologyFoundation';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';

function App() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Unmatched Expertise & Enduring Trust',
      description:
        "Our US Based, SOC 2 Type 2 certified Security Operations Center is the heart of our service. It's staffed 24/7 by a team of elite threat hunters and remediation specialists who act as a direct extension of your team.",
    },
    {
      icon: <FaCogs />,
      title: 'Powered by the Cribl Data Engine',
      description:
        "Our deep alliance with Cribl allows us to solve 'data chaos'. We optimize your data flows, reduce SIEM costs, and enrich raw data into actionable intelligence *before* it enters your security stack.",
    },
    {
      icon: <FaBolt />,
      title: 'A Proactive, Remediation-First Approach',
      description:
        'Unlike services that just send alerts, our ThreatRemediate™ service includes active, hands-on remediation. Our SOC contains and neutralizes threats directly, reducing the burden on your team and stopping breaches faster.',
    },
    {
      icon: <FaHandshake />,
      title: 'Committed to Partner Success',
      description:
        'We are a channel-first company. We empower our MSP partners with a turnkey platform, no minimums, a 30-day opt-out trial, full white-labeling options, and a comprehensive sales enablement kit to ensure your success.',
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <div className=" bg-gradient-to-br from-[#090d1f] to-[#1a203f] text-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Truly Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <TechnologyFoundation />
        </div>

        {/* Technology Foundation Section */}

      </section>
    </>
  )
}

export default App