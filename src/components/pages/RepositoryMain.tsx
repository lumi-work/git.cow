"use client";

import { fetchRepository } from "@/lib/features/repositorySlice";
import { AppDispatch } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCodeBranch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Dashboard from "@/components/dashboard/Line";
import DonutChart from "@/components/dashboard/DonutChart";

function RepositoryMain() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useSearchParams();
  const [repo, setRepo] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchRepository());
  }, [dispatch]);

  const state = useSelector((item: any) => item.repo);
  const paramsValue = params.get("repo");

  useEffect(() => {
    if (state.repository && state.repository.length > 0) {
      if (paramsValue) {
        const filteredData = state.repository.filter(
          (item: any) => item.id.toString() === paramsValue.toString()
        );
        setRepo(filteredData);
      } else {
        setRepo([]);
      }
    }
  }, [state.repository, paramsValue]);

  console.log(repo);

  return (
    <div className="mt-8 p-4 rounded-lg w-full">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex-1">
          Repository Stats
        </h2>
      </div>
      <div>
        {repo && repo.length > 0 ? (
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="border border-gray-400 rounded-full"
                  src={repo[0].owner.avatar_url}
                  alt="avatar_url"
                  width={45}
                  height={45}
                />
              </div>
              <div className="text-md font-medium">
                {repo[0].full_name}
                <span className="bg-gray-800 border border-gray-500 rounded-xl px-2.5 py-1 text-gray-200 ml-2">
                  Public
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaCodeBranch /> {repo[0].default_branch}
              </div>
              <div className="flex items-center gap-2">
                <FaCodeBranch /> {repo[0].forks_count}
              </div>
              <div className="flex items-center gap-2">
                <FaEye /> {repo[0].watchers_count}
              </div>
              <div className="flex items-center gap-2">
                <FaRegStar /> {repo[0].stargazers_count}
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="font-medium">Contributions Graph</h2>
              <div className="mt-6 flex items-center justify-between w-full">
                <div className="w-3/4">
                  <Dashboard />
                </div>
                <div className="w-1/4">
                  <DonutChart />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">No repository found.</div>
        )}
      </div>
    </div>
  );
}

export default RepositoryMain;
