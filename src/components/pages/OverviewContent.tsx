import React, { useEffect } from "react";
import { AppDispatch } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../lib/features/userSlice";

// Icons
import { FaMapMarkerAlt, FaBuilding, FaCodeBranch } from "react-icons/fa";
import { FiUsers, FiUserCheck } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { BsPersonPlus } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import GithubCalendar from "@/components/dashboard/GithubCalendar";
import DonutChart from "@/components/dashboard/DonutChart";

function OverviewContent() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const state = useSelector((item: any) => item.user);

  console.log(state);

  return (
    <div className="m-8">
      <h2 className="text-lg font-semibold text-gray-800 flex-1 mb-6">
        Overview
      </h2>
      <div className="bg-gray-100 w-full h-auto text-gray-800 rounded-lg p-6 shadow-lg space-y-6">
        <div className="flex justify-between">
          {/*Avatar Bilgilendirme*/}
          <div className="flex items-center space-x-6">
            <img
              src={state.userProfile.avatar_url}
              width={120}
              height={120}
              alt="userimage"
              className="border-4 border-gray-500 rounded-full object-cover"
            />
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                @{state.userProfile.login}
              </p>
              <p className="text-gray-600 text-sm">
                ID: {state.userProfile.id}
              </p>
              <p className="text-md text-gray-700">{state.userProfile.bio}</p>
            </div>
          </div>

          {/* Sağ Kısım */}
          <div className="flex flex-col justify-between items-end space-y-4">
            <div className="flex space-x-4">
              <a
                href={state.userProfile.html_url}
                className="bg-black text-white font-semibold py-2 px-4 rounded-md flex items-center"
              >
                <FaGithub className="mr-2" /> Github
              </a>
            </div>

            <div className="text-gray-700 text-sm">
              <p>
                Total Contributions: <span className="font-bold">300</span>
              </p>
              <p>
                Last Active: <span className="font-bold">3 days ago</span>
              </p>
            </div>
          </div>
        </div>

        {/* Kullanıcı Verileri */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center space-x-2">
            <FiUsers className="text-pink-500" size={24} />
            <p className="text-gray-700">
              <span className="font-bold">{state.userProfile.followers}</span>{" "}
              Followers
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FiUserCheck className="text-green-500" size={24} />
            <p className="text-gray-700">
              <span className="font-bold">{state.userProfile.following}</span>{" "}
              Following
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <GoRepo className="text-blue-500" size={24} />
            <p className="text-gray-700">
              <span className="font-bold">
                {state.userProfile.public_repos}
              </span>{" "}
              Repositories
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCodeBranch className="text-purple-500" size={24} />
            <p className="text-gray-700">
              Website:{" "}
              <span className="font-bold">
                {state.userProfile.blog || "Not available"}
              </span>
            </p>
          </div>
        </div>

        {/* Daha Fazla Veri */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-500" size={24} />
            <p className="text-gray-700">
              {state.userProfile.location || "Location not specified"}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBuilding className="text-yellow-500" size={24} />
            <p className="text-gray-700">
              {state.userProfile.company || "Company not specified"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-medium mb-8">Contributions</h2>
        <GithubCalendar />
      </div>
      <div className="mt-16">
        <h2 className="text-lg font-medium">Graphics</h2>
        <DonutChart />
      </div>
    </div>
  );
}

export default OverviewContent;
