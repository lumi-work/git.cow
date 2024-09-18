"use client";

import { fetchRepository } from "@/lib/features/repositorySlice";
import { AppDispatch } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RepositoryMain() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useSearchParams();

  const [repo, setRepo] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchRepository());
  }, []);

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
  }, [state.repository]);

  console.log(repo);

  return (
    <div className="ml-8 mt-8">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 flex-1">
          Repository Stats
        </h2>
      </div>
      <div className="flex flex-col">
        {repo && repo.length > 0 ? (
          <div className="mt-6">
            <div>
              <h2 className="font-medium text-md">{repo[0].name}</h2>
            </div>
            <div className="text-gray-500 text-sm">@{repo[0].id}</div>
          </div>
        ) : (
          <div>No repository found.</div>
        )}
      </div>
    </div>
  );
}

export default RepositoryMain;
