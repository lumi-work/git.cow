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

        <div className="h-full overflow-y-auto scroll-block space-y-4 ">
          {state.repository && state.repository.length > 0 ? (
            state.repository.map((item: any) => (
              <div
                key={item.id}
                className="p-6 rounded-lg shadow-sm border bg-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-5">
                  {item.name}
                </h3>

                <div className="mt-2 text-sm text-gray-600 grid grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <CgHashtag className="text-gray-500" />
                    <p>
                      <span className="font-medium">Language:</span>{" "}
                      {item.language || "Not Found!"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaRegStar className="text-gray-500" />
                    <p>
                      <span className="font-medium">Stars:</span>{" "}
                      {item.stargazers_count}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoIosGitBranch className="text-gray-500" />
                    <p>
                      <span className="font-medium">Default Branch:</span>{" "}
                      {item.default_branch}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GoRepoForked className="text-gray-500" />
                    <p>
                      <span className="font-medium">Forks:</span> {item.forks}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <VscIssues className="text-gray-500" />
                    <p>
                      <span className="font-medium">Open Issues:</span>{" "}
                      {item.open_issues_count}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiEye className="text-gray-500" />
                    <p>
                      <span className="font-medium">Watchers:</span>{" "}
                      {item.watchers_count}
                    </p>
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
