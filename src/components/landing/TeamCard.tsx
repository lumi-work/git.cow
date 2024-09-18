import React from "react";
import Image from "next/image";

function TeamCard({ username, color, rolename, image }: any) {
  return (
    <div className="flex p-4 rounded-lg bg-gray-100 w-full h-[130px] items-center">
      <Image
        src={image}
        alt={username}
        width={96}
        height={96}
        className="rounded-full border-2 border-gray-300 mr-4"
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{username}</h2>
        <p className="text-gray-600 text-lg font-semibold" style={{ color }}>
          {rolename}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
