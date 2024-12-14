import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Weekend = () => {
    const tours = [
        {
            image: './weekend.png',
            title: 'California Sunset/Twilight Boat Cruise',
            price: '$48.25',
            duration: '2 days / 3 nights - Family',
            reviews: '4.5 (1,272 reviews)',
        },
        {
            image: './weekend.png',
            title: 'California Sunset/Twilight Boat Cruise',
            price: '$48.25',
            duration: '2 days / 3 nights - Family',
            reviews: '4.5 (1,272 reviews)',
        },
        {
            image: './weekend.png',
            title: 'California Sunset/Twilight Boat Cruise',
            price: '$48.25',
            duration: '2 days / 3 nights - Family',
            reviews: '4.5 (1,272 reviews)',
        },
        {
            image: './weekend.png',
            title: 'California Sunset/Twilight Boat Cruise',
            price: '$48.25',
            duration: '2 days / 3 nights - Family',
            reviews: '4.5 (1,272 reviews)',
        },
    ];

    return (
        <div className="px-20 py-5">
            <h1 className="text-4xl font-bold p-2 ">Deals for the weekend</h1>
            <div className="text-right mb-8">
                <button className="text-blue-500 font-semibold">See All</button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {tours.map((tour, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden relative">
                        <img src={tour.image} alt={tour.title} className="w-full h-[300px] object-cover" />
                        <i className="fas fa-heart absolute top-2 right-2 text-red-500 bg-white p-1 rounded-full shadow-md"></i>
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <i className="fas fa-star text-yellow-500 mr-1"></i>
                                    <span className="text-sm text-gray-500">{tour.reviews}</span>
                                </div>
                                <span className="text-lg font-bold">{tour.price}</span>
                            </div>
                            <h2 className="text-lg font-semibold mt-2">{tour.title}</h2>
                            <p className="text-gray-500">{tour.duration}</p>
                            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                 Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Weekend;