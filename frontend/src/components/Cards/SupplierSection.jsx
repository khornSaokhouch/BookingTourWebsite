import React from "react";

const SupplierSection = () => {
  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Who Can Become a Supplier?
        </h2>
        <p className="text-gray-600 mb-8">We welcome partners who offer:</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: List of features */}
          <ul className="flex-1 space-y-6">
            <li className="flex items-start">
              <div className="text-blue-500 mr-4">✔</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Guided tours and unique travel experiences.
                </h3>
                <p className="text-gray-600">
                  Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="text-blue-500 mr-4">✔</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Popular or hidden gem attractions.
                </h3>
                <p className="text-gray-600">
                  Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="text-blue-500 mr-4">✔</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Events or activities that bring enjoyment and fun to visitors.
                </h3>
                <p className="text-gray-600">
                  Aliquet rhoncus ornare dolor quam. Quis egestas aliquam.
                </p>
              </div>
            </li>
          </ul>

          {/* Right column: Images */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow p-4 text-center">
              <img
                className="w-full h-32 object-cover mb-2"
                src="/images/guided-tours.jpg"
                alt="Guided Tours"
              />
              <p className="text-gray-800">Guided Tours</p>
            </div>

            <div className="bg-white shadow p-4 text-center">
              <img
                className="w-full h-32 object-cover mb-2"
                src="/images/hidden-gems.jpg"
                alt="Hidden Gems"
              />
              <p className="text-gray-800">Hidden Gems</p>
            </div>

            <div className="bg-white shadow p-4 text-center">
              <img
                className="w-full h-32 object-cover mb-2"
                src="/images/events.jpg"
                alt="Events and Activities"
              />
              <p className="text-gray-800">Events and Activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;