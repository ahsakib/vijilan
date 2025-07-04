
const NavyBlueBackground = ({ children, borderCancel,h,w }) => {
    return <>

        <section className="py-20 px-4 ">
            <div className={`container mx-auto ${w ? `w-[${w}]` : ""}`}>
                <div
                    className={`backdrop-blur-md rounded-3xl p-12 mx-auto}  ${borderCancel ? "" : "shadow-2xl border border-[#00AEEF]/40"} `}
                    style={{
                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                        ...(h ? { minHeight: h } : {}),
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    </>
}

export default NavyBlueBackground;

