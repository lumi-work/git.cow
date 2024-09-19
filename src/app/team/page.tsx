import React from "react";
import TeamCard from "@/components/landing/TeamCard";
import Header from "@/components/landing/Nav";
import Footer from "@/components/landing/Footer";

import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <main className="h-auto">
      <div className="absolute inset-0 -z-1 h-[80vh] w-full mx-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="flex justify-center ">
          <div className="w-[1200px]">
            <div className="flex items-center justify-center relative z-0">
              <div className="w-64 h-32 blur-[200px] bg-[#4B4EE7] absolute "></div>
            </div>
            <Header />
            <div className="w-[1200px]">
              <h1 className="text-center text-[50px] font-semibold mt-20">
                Team
              </h1>
              <p className="text-center text-xl mt-2 text-gray-500">
                Hello, welcome to our team. We are best app and web developer.{" "}
                <br />U can join our team. We are friendly. Join our community
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
                <TeamCard
                  username="@spadeydev"
                  color="#FF0000"
                  rolename="Software Developer"
                  image="/profile1.png"
                />
                <TeamCard
                  username="@chefberke"
                  color="#1B00A9"
                  rolename="Software Developer"
                  image="/profile2.png"
                />
                <TeamCard
                  username="@eylularts"
                  color="#FFCD1B"
                  rolename="UI/UX Designer"
                  image="/profile3.png"
                />
                <TeamCard
                  username="@afratech"
                  color="#8276FF"
                  rolename="Bug Tester"
                  image="/profile4.png"
                />
                <TeamCard
                  username="@hiring"
                  color="#51CBDC"
                  rolename="Backend Developer"
                  image="/profile5.png"
                />
                <TeamCard
                  username="@hiring"
                  color="#FF8ABB"
                  rolename="Project Manager"
                  image="/profile6.png"
                />
              </div>
            </div>
            <div className="pt-24">
              <h2 className="text-[32px] font-semibold">
                Excited to join our team?
              </h2>
              <p className="text-gray-500 pt-1">
                We can&apos;t wait to hear from you! If you&apos;re interested
                in working with us, don&apos;t hesitate—reach out now!"
              </p>
              <div className="mt-6">
                <button className="bg-black text-white rounded-lg px-4 py-1.5 flex items-center gap-2">
                  <p className="text-lg">Contact Now</p>
                  <MdOutlineArrowOutward className="text-2xl" />
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
