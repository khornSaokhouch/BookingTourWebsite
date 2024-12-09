import React from "react";

const Card = ({ title, cookingTime, rating, image }) => {
  return (
    
    <div className="w-[320px] h-[340px] mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" >
      {/* Image Section */}
      <img
        src={image || "https://via.placeholder.com/300"}
        alt={title}
        className="w-full h-[220px] object-cover transition-transform duration-300 hover:scale-105"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h1 className="text-lg font-bold text-gray-800 hover:text-yellow-500 transition-colors duration-300">
          {title}
        </h1>

        {/* Cooking Time */}
        <h3 className="mt-2 text-sm text-gray-600 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 mr-2 text-gray-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          Cooking time: {cookingTime}
        </h3>

        {/* Rating Stars */}
        <div className="mt-2 flex items-center">
          <span className="text-yellow-400">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="ml-2 text-sm text-gray-600">({rating})</span>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const recipes = [
    {
      title: "Spaghetti Bolognese",
      cookingTime: "30 min",
      rating: 4.5,
      image: "https://via.placeholder.com/300/FF5733",
    },
    {
      title: "Chicken Curry",
      cookingTime: "40 min",
      rating: 4,
      image: "https://via.placeholder.com/300/FFBD33",
    },
    {
      title: "Grilled Salmon",
      cookingTime: "25 min",
      rating: 5,
      image: "https://via.placeholder.com/300/33FF57",
    },
    {
      title: "Vegetarian Pizza",
      cookingTime: "20 min",
      rating: 3.5,
      image: "https://via.placeholder.com/300/5733FF",
    },
    {
      title: "Vegetarian Pizza",
      cookingTime: "20 min",
      rating: 3.5,
      image: "https://via.placeholder.com/300/5733FF",
    },
    {
      title: "Vegetarian Pizza",
      cookingTime: "20 min",
      rating: 3.5,
      image: "https://via.placeholder.com/300/5733FF",
    },
    {
      title: "Vegetarian Pizza",
      cookingTime: "20 min",
      rating: 3.5,
      image: "https://via.placeholder.com/300/5733FF",
    },
    {
      title: "Vegetarian Pizza",
      cookingTime: "20 min",
      rating: 3.5,
      image: "https://via.placeholder.com/300/5733FF",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          title={recipe.title}
          cookingTime={recipe.cookingTime}
          rating={recipe.rating}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

export default CardGrid;
