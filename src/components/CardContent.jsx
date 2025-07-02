import React from "react";

const CardContent = ({ icon, title, description, buttonText }) => {
  return (
    <div className="cyber-card">
      
    <div className="card-content text-center p-6">
      <div className="icon-container flex justify-center mb-4">
        <img src={icon} alt="Cybersecurity Illustration" className="icon w-16 h-16" />
      </div>
      <h3 className="title text-xl font-semibold mb-2">{title}</h3>
      <p className="description text-gray-300 mb-4">{description}</p>
      <button className="cta-button px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
        {buttonText}
      </button>
    </div>
    </div>
  );
};

export default CardContent;
