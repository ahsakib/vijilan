// src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#072f4f] text-white p-6 rounded-lg border border-cyan-600 shadow-md">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
