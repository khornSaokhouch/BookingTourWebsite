import React from "react";

const TrendingDestinations = () => {
  return (
    <div className="container mx-auto px-20">
      <h2 className="text-center text-3xl font-bold mb-8">Trending Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="relative h-64">
          <img 
            src="https://i.pinimg.com/736x/7a/56/2e/7a562ecc26f31c61d10b2b5139a0b9df.jpg" 
            alt="Mountains" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-72">
          <img 
            src="https://i.pinimg.com/736x/52/a8/16/52a816854b7fb5bc7512e9f0a8b3f7de.jpg" 
            alt="Desert" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-56">
          <img 
            src="https://i.pinimg.com/736x/87/55/59/875559ddb2ca0802b238aa406f7f73c7.jpg" 
            alt="Forest" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-80">
          <img 
            src="https://i.pinimg.com/736x/e4/29/19/e42919874adba2af31ccf389c4d9d1b0.jpg" 
            alt="Beach" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-64">
          <img 
            src="https://i.pinimg.com/736x/10/00/0e/10000e026456411b41c9ead4b531ee94.jpg" 
            alt="City" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-72">
          <img 
            src="https://i.pinimg.com/236x/58/94/95/58949541387fca8e2cbfdb5b15242249.jpg" 
            alt="Island" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-56">
          <img 
            src="https://i.pinimg.com/736x/9b/b5/30/9bb530bbfa60ce254594cf00815eddf5.jpg" 
            alt="Ocean" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative h-80">
          <img 
            src="https://i.pinimg.com/736x/90/4b/e1/904be18bb4840cea3e6abf5387e43b6c.jpg" 
            alt="Waterfall" 
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;
