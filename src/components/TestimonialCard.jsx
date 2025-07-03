import React from "react";
import { ArrowRight } from "lucide-react";
import CardBorder from "./CardBorder";

const TestimonialCard = ({
  badgeText,
  heading,
  description,
  stats = [],
  buttonText = "READ THE FULL STORY",
  onButtonClick,
}) => {
    const Badge = ({ children, className = "", ...props }) => {
        return (
            <div
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
                {...props}
            >
                {children}
            </div>
        )
    }
  return (
    <div
      className="p-8 shadow-2xl border backdrop-blur-sm"
      style={{
        borderRadius: "22.184px",
        background: "linear-gradient(0deg, #191624 16.11%, #00AEEF 328.5%)",
        borderColor: "rgba(0, 174, 239, 0.3)",
        borderWidth: "1px",
      }}
    >
      <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-6 px-4 py-2 text-sm font-semibold">
        {badgeText}
      </Badge>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
        {heading}
      </h3>

      <p className="text-slate-200 mb-4 text-base leading-relaxed">{description}</p>

      <div className="grid grid-cols-2 gap-0 mb-8">
        {stats.map((stat, index) => (
          <CardBorder key={index} height="171px" width="166px">
            <div>
              <div className="text-white text-[32px] font-bold mb-2">{stat.value}</div>
              <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
            </div>
          </CardBorder>
        ))}
      </div>

      <button
        onClick={onButtonClick}
        className="border-2 border-white text-slate-300 hover:bg-white/10 bg-transparent px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
      >
        {buttonText}
        <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
          <ArrowRight className="h-3 w-3 text-white" />
        </div>
      </button>
    </div>
  );
};

export default TestimonialCard;
