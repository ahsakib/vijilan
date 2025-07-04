import NavyBlueBackground from "./NavyBlueBackground";

const InfoSection = ({ position = "right", width, height, design1, design2, heading,subtitle,desc,btnText }) => {
    const content = (
        <>
            {design1 && (
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">From Ingestion to Action</h1>

                    <p className="mb-8 font-bold">
                        Every piece of security data follows a carefully orchestrated journey through our integrated platform, ensuring maximum value and minimum noise.
                    </p>

                    <ul className="space-y-4 list-disc pl-5 font-bold">
                        <li>Data is ingested from a client's firewall/endpoint</li>
                        <li>It's routed through Cribl for optimization and enrichment</li>
                        <li>It's analyzed in CrowdStrike LogScale</li>
                        <li>An actionable alert is generated in the ViSH Portal</li>
                        <li>A remediation action is taken by the SOC</li>
                    </ul>
                </div>
            )}

            {
                design2 && (
                    <div class="max-w-2xl bg-transparent text-white">
                        <h1 class="text-5xl font-bold mb-2 leading-tight">{heading}</h1>

                        <p class="text-lg mb-8 mt-4 font-bold">
                            {subtitle}
                        </p>

                        <p class="mb-8 font-bold text-xl">
                            {desc}
                        </p>

                        <div class="inline-block cursor-pointer font-semibold px-6 py-3 rounded-md 
border-2 border-solid border-[#00AEEF] text-[#00AEEF] bg-transparent
transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90
text-center select-none">
                            {btnText}
                        </div>
                    </div>
                )
            }
        </>
    );

    const image = (
        <div>
            <NavyBlueBackground h={height} w={width} />
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {position === "left" ? (
                <>
                    {image}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {image}
                </>
            )}
        </div>
    );
};

export default InfoSection;
