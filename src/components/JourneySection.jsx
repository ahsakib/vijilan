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
      <div className="max-w-[1160px] mx-auto h-[404px]">
        <div
          className="relative rounded-[24px] overflow-hidden"
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
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {heading}
                  </h2>
                )}

                {headingWithDesign && (
                  <h2 className="text-4xl font-bold text-white mb-6">
                    The Heart of Our Operation: <span className="text-[#00AEEF]">The 24/7 US-Based SOC</span>
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
                  <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] py-[40px] px-[24px] text-white overflow-hidden z-10">
                    <p className="leading-relaxed text-lg relative z-10">{description}</p>

                    {/* Gradient border using pseudo */}
                    <div className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                      style={{
                        background: "linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude"
                      }}
                    />
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
