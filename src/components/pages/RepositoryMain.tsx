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

  const [commitsLength, setCommitsLength] = useState(0);
  const [issuesLength, setIssuesLength] = useState(0);
  const [prLength, setPrLength] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  async function handleCommitsData() {
    try {
      const req = await fetch(
        `https://api.github.com/repos/${repo[0].owner.login}/${repo[0].name}/commits`
      );

      if (!req.ok) {
        throw new Error(`GitHub API error: ${req.statusText}`);
      }

      const data = await req.json();
      if (data) {
        setCommitsLength(data.length);
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  }

  async function handleIssuesData() {
    try {
      const req = await fetch(
        `https://api.github.com/repos/${repo[0].owner.login}/${repo[0].name}/issues`
      );

      if (!req.ok) {
        throw new Error(`GitHub API error: ${req.statusText}`);
      }

      const data = await req.json();
      if (data) {
        setIssuesLength(data.length);
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  }

  async function handlePrData() {
    try {
      const req = await fetch(
        `https://api.github.com/repos/${repo[0].owner.login}/${repo[0].name}/pulls`
      );

      if (!req.ok) {
        throw new Error(`GitHub API error: ${req.statusText}`);
      }

      const data = await req.json();
      if (data) {
        setPrLength(data.length);
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  }

  useEffect(() => {
    handleCommitsData();
    handleIssuesData();
    handlePrData();
  }, [repo]);

  function handleTimeSpent() {
    const totalTimes = (commitsLength + prLength) * 0.5 + issuesLength * 0.2;
    setTotalTime(totalTimes);
  }

  useEffect(() => {
    handleTimeSpent();
  }, [commitsLength, prLength, issuesLength]);

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
              <div>
                <h2 className="font-medium">Details Repository</h2>
              </div>
              <div className="flex items-center justify-between w-full pt-10">
                <div>
                  <h2 className="font-semibold">Total Commits</h2>
                  <p className="pt-2 text-center">
                    {commitsLength >= 30 ? (
                      <p>{commitsLength}+</p>
                    ) : (
                      <p>{commitsLength}</p>
                    )}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold">Total Issues</h2>
                  <p className="pt-2 text-center">
                    {issuesLength >= 30 ? (
                      <p>{issuesLength}+</p>
                    ) : (
                      <p>{issuesLength}</p>
                    )}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold">Total Pull Request</h2>
                  <p className="pt-2 text-center">
                    {prLength >= 30 ? <p>{prLength}+</p> : <p>{prLength}</p>}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold">Hour Spent</h2>
                  <p className="pt-2 text-center">{totalTime}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="font-medium">Contributions Graph</h2>
              <div className="mt-6 flex items-center justify-between w-full">
                <div className="w-3/4">
                  <Dashboard
                    repoName={repo[0].name}
                    repoOwner={repo[0].owner.login}
                  />
                </div>
                <div className="w-1/4">
                  <DonutChart
                    repoName={repo[0].name}
                    repoOwner={repo[0].owner.login}
                  />
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
