import React from "react";
import Image from "next/image";

import Avatars from "@/components/landing/Avatars";

import bug2 from "../../../public/bug2.svg";
import whale from "../../../public/whale.svg";
import octopus from "../../../public/octopus.svg";
import frog from "../../../public/frog.svg";
import overlay from "../../../public/Git_cow.jpeg";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center h-[98rem] ">
      <h2 className="text-center text-[70px] font-bold">
        GitHub Analytics <br />
        and <span className="text-pink-500">Optimized</span>
      </h2>
      <div className="absolute flex items-center justify-center top-48 left-12 box">
        <Image src={bug2} width={80} height={80} alt="bug" />
      </div>
      <div className="absolute flex items-center justify-center top-96 left-12 box">
        <Image src={frog} width={80} height={80} alt="bug" />
      </div>
      <div className="absolute flex items-center justify-center top-48 right-12 box">
        <Image src={octopus} width={80} height={80} alt="bug" />
      </div>
      <div className="absolute flex items-center justify-center top-96 right-12 box">
        <Image src={whale} width={80} height={80} alt="bug" />
      </div>
      <p className="text-gray-600 text-center">
        Easily monitor and manage your GitHub repositories with a centralized{" "}
        <br />
        dashboard. Keep track of commits, issues, and pull requests in
        <br />
        real-time, all in one place.
      </p>

      <div className="flex items-center justify-center gap-8 mt-10">
        <div className="px-8 py-2 rounded-lg bg-black text-white font-medium">
          Docs
        </div>
        <div>
          <Avatars />
        </div>
      </div>

      <div className="w-full mt-36">
        <Image src={overlay} alt="overlay" className="rounded-2xl" />
      </div>
    </div>
  );
}

export default Header;
