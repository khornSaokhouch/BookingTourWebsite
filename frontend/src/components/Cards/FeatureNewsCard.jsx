// src/FeatureNewsCard.jsx
import React from 'react';

const FeatureNewsCard = () => {
  const newsItems = [
    {
      date: 'February 20, 2024',
      title: 'Delicious restaurant at Hanalei Bay',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      imageUrl: 'https://gowanderly.com/site-content/uploads/2022/11/Grilled-seafood-platter-on-a-table.jpg',
    },
    {
      date: 'February 20, 2024',
      title: '10 most beautiful check-in spots in PH',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      imageUrl: 'https://gowanderly.com/site-content/uploads/2022/11/Grilled-seafood-platter-on-a-table.jpg',
    },
    {
      date: 'February 20, 2024',
      title: '5 newest services at Navagio Beach',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      imageUrl: 'https://gowanderly.com/site-content/uploads/2022/11/Grilled-seafood-platter-on-a-table.jpg',
    },
  ];

  return (
    <div className="container px-20">
   <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold relative z-10 px-20">Feature News</h2>
        <div className="flex px-20">
  <button className="text-gray-600 hover:text-gray-800 transition mx-2 py-2 px-4 border-2">
    &#60; {/* Left Arrow */}
  </button>
  <button className="text-gray-600 hover:text-gray-800 transition mx-2 py-2  px-4 border-2">
    &#62; {/* Right Arrow */}
  </button>
</div>
      </div>
      
      <div className="flex justify-center flex-wrap">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 m-4 max-w-sm"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[240px] object-cover"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href="#" className="inline-block text-blue-500 font-medium hover:underline">
                See more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4">
  <div className="flex space-x-2">
    <div className="w-3 h-3 bg-black rounded-full cursor-pointer"></div>
    <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
    <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
  </div>
</div>
    </div>
  );
};

export default FeatureNewsCard;