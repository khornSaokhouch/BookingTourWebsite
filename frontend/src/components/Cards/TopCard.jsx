// TravelCard.jsx
import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"; // Importing a star icon from react-icons

const TravelCard = () => {
  const cardsData = [
    {
      destination: "Cambodian Museum",
      price: "$5,420",
      duration: "10 Days Trip",
      image:
        "https://www.conicaltravel.com/wp-content/uploads/2020/04/Cambodian-National-Museum.png",
    },
    {
      destination: "Angkor wat",
      price: "$6,200",
      duration: "7 Days Trip",
      image:
        "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos12280326xl-1717552903561.jpg",
    },
    {
      destination: "Shihanuk",
      price: "$4,800",
      duration: "12 Days Trip",
      image:
        "https://www.true.travel/wp-content/uploads/2023/12/AS_Cambodia_Song-Saa-Aerial-of-Island-1536x810.jpeg",
    },
  ];

  return (
    <div className="px-20">
      <h1 className="text-3xl text-center font-bold py-5">Top Destinations</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm h-[450px] rounded-lg overflow-hidden shadow-lg bg-white flex flex-col"
          >
            <img
              className="w-full h-[340px] object-cover"
              src={card.image}
              alt={card.destination}
            />
            <div className="p-4 flex-grow flex flex-col">
              <FaMapMarkerAlt className="text-black mr-1" />
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{card.destination}</h2>
                <span className="text-2xl font-semibold text-gray-800">
                  {card.price}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{card.duration}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500 mr-1" /> {/* Star icon */}
                <span className="text-gray-700">3.5</span> {/* Rating */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-6">
        <button className="bg-blue-500 px-3 text-white font-semibold py-2 rounded hover:bg-blue-600">
          See More
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
