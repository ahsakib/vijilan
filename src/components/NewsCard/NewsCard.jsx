// src/components/NewsCard.jsx
import React from 'react';

const NewsCard = ({ imageUrl, title }) => {
  return (
    <div className="flex gap-4 border-b pb-4 mb-4">
      <img
        src={imageUrl}
        alt="News"
        className="w-40 h-24 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold leading-snug hover:underline cursor-pointer">
        {title}
      </h2>
    </div>
  );
};

export default NewsCard;
