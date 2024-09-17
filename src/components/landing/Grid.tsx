import React from "react";

function Grid() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Kart 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold">
            The Dawn of Innovation
          </h2>
          <p className="text-gray-600 mt-4">
            Explore the birth of groundbreaking ideas and inventions.
          </p>
        </div>

        {/* Kart 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold">
            The Digital Revolution
          </h2>
          <p className="text-gray-600 mt-4">
            Dive into the transformative power of technology.
          </p>
        </div>

        {/* Kart 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold">
            The Art of Design
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the beauty of thoughtful and functional design.
          </p>
        </div>

        {/* Kart 4 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-lg font-semibold">
            The Power of Communication
          </h2>
          <p className="text-gray-600 mt-4">
            Understand the impact of effective communication in our lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
