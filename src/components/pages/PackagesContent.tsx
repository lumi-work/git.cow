import React from "react";

const packages = [
  {
    title: "Lodash",
    usage: "Utility library for arrays, objects, and functions.",
    downloads: "35M+",
  },
  {
    title: "Axios",
    usage: "Promise-based HTTP client for the browser and Node.js.",
    downloads: "30M+",
  },
  {
    title: "Dotenv",
    usage: "Loads environment variables from .env files.",
    downloads: "30M+",
  },
  {
    title: "Prettier",
    usage: "Code formatter that ensures consistent code style.",
    downloads: "25M+",
  },
];

function PackagesContent() {
  return (
    <div className="ml-8 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Packages <span>({packages.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gray-100 cursor-pointer p-6 w-full h-48 flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
              <p className="text-gray-700 mb-4">{pkg.usage}</p>
            </div>
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full self-start">
              {pkg.downloads} downloads
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackagesContent;
