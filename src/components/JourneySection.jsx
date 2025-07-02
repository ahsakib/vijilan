const JourneySection = ({
    tealBg,
    networkBg,
    heading,
    description,
    headingWithDesign,
    smHeading,
    videoPart,
  }) => {
    return (
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${tealBg}), url(${networkBg})`,
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80"></div>
  
            <div className="relative z-10 p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    {heading && (
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            {heading}
                        </h2>
                    )}

                    {headingWithDesign && (
                         <h2 className="text-4xl font-bold text-white mb-6">
                         The Heart of Our Operation: <span className="text-teal-400">The 24/7 US-Based SOC</span>
                     </h2>
                    )}
                    {smHeading && (
                        <p className="text-gray-300 leading-relaxed">
                        {smHeading}
                    </p>
                    )}
                </div>
                <div className="relative">
                {description && (
                  <div
                    className="bg-teal-700/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(20, 83, 109, 0.8) 0%, rgba(6, 78, 102, 0.9) 100%)",
                    }}
                  >

                        <p className="leading-relaxed text-lg text-white">
                        {description}
                        </p>

                  </div>
                )}
                {videoPart && (

<div className="bg-gray-400 rounded-lg aspect-video">{/* Placeholder for SOC image/video */}</div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default JourneySection;
  