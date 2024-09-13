import Image from "next/image";
import React from "react";

import logo from "../../../public/testlogo.svg";

function page() {
  return (
    <>
      <div className="w-64 h-64 bg-pink-500 blur-[250px] absolute top-1/4 left-3/4 z-0"></div>
      <div className="w-64 h-64 bg-pink-500 blur-[250px] absolute top-1/2 right-3/4 z-0"></div>
      <div className="flex flex-col items-center justify-center w-full h-screen relative z-10 pt-72">
        <Image src={logo} width={130} height={130} alt="logo" />
        <div className="font-black text-[64px] pt-8 text-pink-500">Cooking Our Website.</div>
        <div className="text-gray-500 font-medium pt-3">We are going to launch our website Very Soon.</div>
        <div className="text-gray-500 font-medium pt-2">Stay Tune.</div>
        <div className="flex items-end h-full pb-4">
          <h2 className="text-gray-500 font-medium">
            Powered by{" "}
            <a target="_blank" href="https://github.com/lumi-work" className="text-gray-600 underline decoration-wavy decoration-pink-500">
              lumi.work
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default page;
