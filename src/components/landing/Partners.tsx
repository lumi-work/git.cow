// "use client";

import React from "react";

function Partners() {
  // async function fetchUser(username: any) {
  //   const res = await fetch(`https://api.github.com/users/${username}`);
  //   const data = await res.json();

  //   console.log(data);
  // }

  // fetchUser("spadeydev");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div>
        <h2 className="text-white text-lg font-medium underline decoration-wavy decoration-pink-500 ">Trusted by company</h2>
      </div>
      <div className="pt-12">
        <ul className="text-gray-300 flex items-center justify-center w-full gap-36 font-black text-2xl">
          <li>github</li>
          <li>lumi</li>
          <li>devlances</li>
          <li>zoey.agency</li>
          <li>duckie.works</li>
        </ul>
      </div>
    </div>
  );
}

export default Partners;
