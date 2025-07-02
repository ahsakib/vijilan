import React from "react";

import ctaBgPattern from "../images/Background pattern.png";

const JoinMissionSection = ({ title, highlightedText, subtitle, buttonText }) => {
  return (
    <section className="relative z-10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #082135 0%, #082135 40%, #1a3a4f 60%, #1a3a4f 100%)",
          }}
        >
          {/* Left side solid background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
            }}
          />

          {/* Right side pattern with smooth blend */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${ctaBgPattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8,
              maskImage:
                "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
            }}
          />

          {/* Overlay for color consistency */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
            }}
          />

          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              {title} <span className="text-cyan-400">{highlightedText}</span>
            </h2>
            <p className="text-xl text-white mb-12 leading-relaxed max-w-4xl mx-auto">
              {subtitle}
            </p>
            <button
              className="px-8 py-4 text-lg font-bold rounded-2xl text-white inline-flex items-center space-x-3 transition hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF1744 100%)",
                boxShadow: "0 8px 32px rgba(255, 107, 53, 0.3)",
              }}
            >
              <span>{buttonText}</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMissionSection;
