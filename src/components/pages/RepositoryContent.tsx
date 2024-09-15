"use client";

import { fetchRepository } from "@/lib/features/repositorySlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IoMdRefresh } from "react-icons/io";

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

  return (
    <div className="ml-8 mt-8 h-screen">
      <div className="flex-col h-full pb-24">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-800">
            Repository <span className="text-gray-500 text-sm">({state.repository.length})</span>
          </h2>
          <p className="mr-8">
            <IoMdRefresh onClick={handleRefresh} className="text-gray-600 font-medium text-xl" />
          </p>
        </div>
        <div className="h-full overflow-y-auto scroll-block">
          {state.repository && state.repository.length > 0
            ? state.repository.map((item: any) => (
                <div key={item.id} className="bg-gray-100 py-12 mt-4 rounded-lg">
                  {item.name}
                  {item.language === null ? <div>Not Found!</div> : <div>{item.language}</div>}
                  {item.stargazers_count}
                  {item.updated_at}
                  {item.default_branch}
                  {item.forks}
                  {item.open_issues_count}
                  {item.watchers_count}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default RepositoryContent;
