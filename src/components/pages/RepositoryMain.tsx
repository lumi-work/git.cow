"use client";

import { fetchRepository } from "@/lib/features/repositorySlice";
import { AppDispatch } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaCodeBranch, FaDownload } from "react-icons/fa";
import { FiLock, FiArchive, FiCheckCircle, FiXCircle } from "react-icons/fi";

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

  return (
    <div className="ml-8 mt-8 p-4 rounded-lg max-w-4xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex-1">
          Repository Stats
        </h2>
      </div>
      <div className="flex flex-col space-y-6">
        {repo && repo.length > 0 ? (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="font-medium text-xl">{repo[0].full_name}</h2>
              <div className="text-gray-500 text-sm">@{repo[0].id}</div>
              <div className="mt-5 space-y-2">
                <div className="flex items-center">
                  <FaCodeBranch className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-semibold">Branch:</span>{" "}
                  {repo[0].default_branch}
                </div>
                <div className="flex items-center">
                  <FaCodeBranch className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-semibold">Forks:</span> {repo[0].forks}
                </div>
                <div className="flex items-center">
                  <FaStar className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="font-semibold">Stars:</span>{" "}
                  {repo[0].stargazers_count}
                </div>
                <div className="flex items-center">
                  <FaDownload className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-semibold">Last Pushed:</span>{" "}
                  {new Date(repo[0].pushed_at).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-4">Repository Info</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  {repo[0].allow_forking ? (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Forking: Supported</span>
                    </>
                  ) : (
                    <>
                      <FiXCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">
                        Forking: Not Supported
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].archived ? (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Archived: Yes</span>
                    </>
                  ) : (
                    <>
                      <FiXCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">Archived: No</span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].disabled ? (
                    <>
                      <FiLock className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">Disabled: Yes</span>
                    </>
                  ) : (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Disabled: No</span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].has_downloads ? (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">
                        Downloads: Supported
                      </span>
                    </>
                  ) : (
                    <>
                      <FiXCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">
                        Downloads: Not Supported
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].has_issues ? (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Issues: Supported</span>
                    </>
                  ) : (
                    <>
                      <FiXCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">
                        Issues: Not Supported
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].is_template ? (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Template: Yes</span>
                    </>
                  ) : (
                    <>
                      <FiXCircle className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">Template: No</span>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  {repo[0].private ? (
                    <>
                      <FiLock className="h-5 w-5 text-red-500 mr-2" />
                      <span className="font-semibold">Private: Yes</span>
                    </>
                  ) : (
                    <>
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">Private: No</span>
                    </>
                  )}
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
