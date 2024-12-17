import React from 'react';

const TourSection = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-6">We offer tours in a range of locations</h2>
      <p className="text-lg text-gray-600 mb-8">the most popular!</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img src="image1.jpg" alt="Tour Location 1" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img src="image2.jpg" alt="Tour Location 2" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img src="image3.jpg" alt="Tour Location 3" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img src="image4.jpg" alt="Tour Location 4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default TourSection;