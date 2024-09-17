"use client";

import React, { useEffect, useState } from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

function PackagesContent() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/packages.json");
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="ml-8 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Packages{" "}
        <span className="text-gray-500 text-sm">({packages.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {packages && packages.length > 0
          ? packages.map((pkg: any, index: any) => (
              <div
                key={index}
                className="bg-gray-100 cursor-pointer p-6 w-full h-48 flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <a href={pkg.link} target="_blank">
                    <h2 className="text-xl font-semibold mb-2 flex items-center gap-1 hover:text-blue-500">
                      {pkg.title} <MdOutlineArrowOutward />
                    </h2>
                  </a>
                  <p className="text-gray-700 mb-4">{pkg.usage}</p>
                </div>
                <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full self-start flex items-center gap-2">
                  <IoMdDownload className="text-md" />
                  {pkg.downloads} downloads
                </span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default PackagesContent;
