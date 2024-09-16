"use client";

import { fetchRepository } from "@/lib/features/repositorySlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdRefresh } from "react-icons/io";
import { CgHashtag } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoIosGitBranch } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";

function RepositoryContent() {
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((item: any) => item.repo);

  useEffect(() => {
    dispatch(fetchRepository());
  }, [refresh]);

  function handleRefresh() {
    setRefresh(!refresh);
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="ml-8 mt-8 h-screen">
      <div className="flex-col h-full pb-24 ">
        <div className="w-full flex items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 flex-1">
            Repository{" "}
            <span className="text-gray-500 text-sm">
              ({state.repository.length})
            </span>
          </h2>
          <IoMdRefresh
            onClick={handleRefresh}
            className="text-gray-600 font-medium text-2xl cursor-pointer hover:text-gray-800 transition ml-auto"
          />
        </div>

        <div className="h-full overflow-y-auto scroll-block space-y-10 ">
          {state.repository && state.repository.length > 0 ? (
            state.repository.map((item: any) => (
              <div
                key={item.id}
                className="p-6 rounded-lg shadow-sm bg-gray-100 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-5">
                  {item.name}
                </h3>

                <div className="mt-2 text-sm text-gray-600 grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <span className="bg-pink-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <CgHashtag className="inline-block mr-2 text-white font-bold" />
                      Language: {item.language || "Not Found!"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-yellow-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <FaRegStar className="inline-block mr-2 text-white" />
                      Stars: {item.stargazers_count}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <IoIosGitBranch className="inline-block mr-2 text-white" />
                      Default Branch: {item.default_branch}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <GoRepoForked className="inline-block mr-2 text-white" />
                      Forks: {item.forks}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-red-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <VscIssues className="inline-block mr-2 text-white" />
                      Open Issues: {item.open_issues_count}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-purple-500 text-white text-xs font-medium px-4 py-2 rounded-lg">
                      <FiEye className="inline-block mr-2 text-white" />
                      Watchers: {item.watchers_count}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-right">
                  <span className="font-medium">Last Updated:</span>{" "}
                  {formatDate(item.updated_at)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-6">
              No repositories found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RepositoryContent;
