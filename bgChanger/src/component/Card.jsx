import React from 'react';

function Card({
  imgIn = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  heading = "Card Heading",
  desc = "This is a brief description of the card content."
}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
        <img
          src={imgIn}
          alt={heading}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{heading}</h2>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
