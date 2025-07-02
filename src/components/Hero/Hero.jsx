

import profile from "../../../src/assets/cr2.webp"; // use your image path

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center text-white gap-8">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-sky-500">The Vijilan Difference:</span><br />
            Expertise, Technology,<br /> and a True Partnership
          </h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-xl">
            We are not just another security vendor. We are an integrated security partner,
            combining an experienced 24/7 SOC with an AI-driven platform to deliver
            unparalleled protection and value for your business and your clients.
          </p>
        </div>

        {/* Right Profile */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={profile}
            alt="Kevin Nejad"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
          />
          <div className="text-center mt-4">
            <div className="font-semibold">Kevin Nejad</div>
            <button className="text-xs bg-gray-800 px-3 py-1 rounded-full border mt-1 mb-1">
              Founder & CEO
            </button>
            <div className="text-xs text-gray-400">Leading Vijilan Initiative</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


// bg->       bg-gradient-to-r from-gray-900 via-black to-gray-900