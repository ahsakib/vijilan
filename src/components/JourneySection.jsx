const JourneySection = ({
  tealBg,
  networkBg,
  heading,
  description,
  headingWithDesign,
  smHeading,
  videoPart,
  extraPaddingNeed,
}) => {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-[1185px] mx-auto h-auto lg:h-[404px]">
        <div
          className="relative rounded-[24px] overflow-hidden min-h-[400px] sm:min-h-[420px] lg:min-h-[404px]"
          style={{
            backgroundImage: `url(${tealBg}), url(${networkBg})`,
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/80"></div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-16">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${extraPaddingNeed ? extraPaddingNeed:""}`}>
              <div>
                {heading && (
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {heading}
                  </h2>
                )}

                {headingWithDesign && (
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                    The Heart of Our Operation: <span className="text-[#00AEEF]">The 24/7 US-Based SOC</span>
                  </h2>
                )}

                {smHeading && (
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {smHeading}
                  </p>
                )}
              </div>

              <div className="relative">
                {description && (
                  <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] py-6 px-4 sm:py-8 sm:px-6 text-white overflow-hidden z-10">
                    <p className="leading-relaxed text-sm sm:text-base lg:text-lg relative z-10">
                      {description}
                    </p>

                    {/* Gradient border */}
                    <div
                      className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                      style={{
                        background:
                          "linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  </div>
                )}

                {videoPart && (
                  <div className="bg-gray-400 rounded-lg mt-4 sm:mt-6 aspect-video w-full">
                    {/* Placeholder for SOC image/video */}
                  </div>
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
