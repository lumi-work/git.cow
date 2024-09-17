import React from "react";
import Image from "next/image";
import bug2 from "../../../public/bug2.svg";
import whale from "../../../public/whale.svg";
import octopus from "../../../public/octopus.svg";
import frog from "../../../public/frog.svg";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center h-[40rem] ">
      <h2 className="text-center text-[70px] font-bold">
        GitHub Analytics <br />
        and <span className="text-pink-500">Optimized</span>
      </h2>
      <div className=" absolute flex items-center justify-center top-48 left-28 box">
        <Image src={bug2} width={100} height={100} alt="bug" />
      </div>
      <div className=" absolute flex items-center justify-center top-96 left-16 box">
        <Image src={frog} width={100} height={100} alt="bug" />
      </div>
      <div className=" absolute flex items-center justify-center top-48 right-16 box">
        <Image src={octopus} width={100} height={100} alt="bug" />
      </div>
      <div className=" absolute flex items-center justify-center top-96 right-28 box">
        <Image src={whale} width={100} height={100} alt="bug" />
      </div>
      <p className="text-gray-600 text-center">
        Easily monitor and manage your GitHub repositories with a centralized{" "}
        <br />
        dashboard. Keep track of commits, issues, and pull requests in
        <br />
        real-time, all in one place.
      </p>
      <div className="flex">
        <button className="bg-pink-500 px-8 py-3 rounded-lg text-white font-medium mt-8">
          Docs
        </button>
      </div>
    </div>
  );
}

export default Header;
