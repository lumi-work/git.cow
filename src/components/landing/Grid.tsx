import React from "react";
import Image from "next/image";
import grid1 from "../../../public/grid1.png";
import grid2 from "../../../public/grid2.png";
import grid3 from "../../../public/grid3.png";
import grid4 from "../../../public/grid4.png";

function Grid() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">
        GitHub <span className="text-pink-500">Analytics</span>
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Track, customize, and focus on your GitHub projects with ease.
      </p>

      <div className="grid grid-rows-[auto_1fr] grid-cols-1 gap-4 mt-10">
        <div className="w-full bg-[#F3F2F5] h-[400px] mt-20 rounded-3xl shadow-md flex justify-between items-center border-gray-200 border-2 p-8">
          <div className="flex flex-col">
            <h1 className="text-pink-500 text-3xl font-semibold -mt-20">
              GitHub Project Overview
            </h1>
            <p className="text-gray-500 mt-5 text-xl">
              View your GitHub project summaries at a glance. <br />
              Organize, analyze, and manage your repositories <br />
              effortlessly with real-time insights.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={grid1}
              width={400}
              height={400}
              alt="grid1"
              className="border  rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#F3F2F5] shadow-md rounded-3xl h-[400px] border-gray-200 border-2 p-8">
            <div className="flex flex-col">
              <h1 className="text-pink-500 text-3xl font-semibold">
                Customizable Dashboards
              </h1>
              <p className="text-gray-500 mt-5 text-xl">
                Tailor your GitHub dashboard to display <br />
                the metrics that matter most, with flexible <br />
                layouts and personalized settings.
              </p>
              <Image
                src={grid2}
                width={400}
                height={400}
                alt="grid2"
                className="border rounded-3xl object-cover mt-5"
              />
            </div>
          </div>

          <div className="bg-[#F3F2F5] shadow-md rounded-3xl h-[400px] border-gray-200 border-2 p-8 overflow-hidden relative">
            <div className="flex flex-col">
              <h1 className="text-pink-500 text-3xl font-semibold ml-4">
                Focus on Key Metrics
              </h1>
              <p className="ml-4 text-gray-500 mt-3 text-xl">
                Stay focused on critical performance indicators <br />
                with a clean and organized interface, <br />
                designed for efficiency.
              </p>
              <div className="absolute right-5 bottom-5">
                <Image
                  src={grid3}
                  width={250}
                  height={250}
                  alt="grid3"
                  className="border rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
