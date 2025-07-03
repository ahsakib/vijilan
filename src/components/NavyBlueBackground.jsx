
const NavyBlueBackground = ({ children }) => {
    return <>

        <section className="py-20 px-4 ">
            <div className="container mx-auto">
                <div
                    className="backdrop-blur-md rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl border border-[#00AEEF]/40"
                    style={{
                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    </>
}

export default NavyBlueBackground;

