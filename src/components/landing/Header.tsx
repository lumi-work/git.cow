import React from "react";

import dashboardOverlay from "../../../public/dashboard_overlay.png";

import { FaArrowRight } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoMdImage } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import Image from "next/image";

function Header() {
  return (
    <div className="flex items-center justify-center text-white h-[95rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#323138] w-14 h-14 rounded-xl absolute flex items-center justify-center top-1/3 left-48 box">
          <BsCalendarDateFill className="text-[32px] text-gray-400" />
        </div>
        <div className="bg-[#323138] w-14 h-14 rounded-xl absolute flex items-center justify-center top-1/3 right-48 box2">
          <IoMdImage className="text-[32px] text-gray-400" />
        </div>
        <div className="bg-[#323138] w-14 h-14 rounded-xl absolute flex items-center justify-center top-1/2 left-36 box2">
          <FaFile className="text-[32px] text-gray-400" />
        </div>
        <div className="bg-[#323138] w-14 h-14 rounded-xl absolute flex items-center justify-center top-1/2 right-40 box">
          <FaDatabase className="text-[32px] text-gray-400" />
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1 rounded-2xl border border-gray-200/50">
          <h2 className="text-[15px]">Discover the all new Github Cow</h2>
          <p>
            <FaArrowRight />
          </p>
        </div>
        <div className="pt-4">
          <h2 className="text-[60px] font-bold text-center">
            Your <span className="text-pink-500">GitHub</span>, Organized <br /> and Optimized
          </h2>
        </div>
        <div className="text-center text-gray-400 flex items-center justify-center pt-2">
          <p className="w-[620px] text-[15px]">
            Easily monitor and manage your GitHub repositories with a centralized dashboard. Keep track of commits, issues, and pull requests in real-time, all in one place.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 pt-10">
          <div className="bg-white text-black text-center px-5 py-2.5 rounded-lg hover:cursor-pointer font-medium">Get Started</div>
          <div className="bg-[#27262A] text-white text-center px-5 py-2.5 rounded-lg hover: cursor-pointer font-medium">How It Works</div>
        </div>
        <div className="pt-24">
          <Image src={dashboardOverlay} className="w-full h-full rounded-xl" alt="dashboard_overlay" />
        </div>
      </div>
    </div>
  );
}

export default Header;
