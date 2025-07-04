import React from "react";

const SecurityCard = ({ data }) => {
  const { icon, title, description, height, marginTop } = data;

  return (
    <div
      className={`relative bg-[#00AEEF3D] py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center ${
        marginTop ? `-mt-[${marginTop}]` : ""
      }`}
      style={{ height }}
    >
      <div
        className="absolute inset-0 rounded-[16px] p-[2px] z-0"
        style={{
          background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4">
        <img src={icon} alt={title} />
      </div>
      <h3 className="text-[24px] font-bold text-white mb-3">{title}</h3>
      <p
        className="text-white text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default SecurityCard;
