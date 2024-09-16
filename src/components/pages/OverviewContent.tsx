"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@/lib/store";
import GithubCalendar from "@/components/dashboard/GithubCalendar";
import { fetchUser } from "@/lib/features/userSlice";
import { fetchUserEvents } from "@/lib/features/userEventsSlice";

// Icons
import { FaMapMarkerAlt, FaBuilding, FaCodeBranch } from "react-icons/fa";

function OverviewContent() {
  const dispatch = useDispatch<AppDispatch>();

  const state = useSelector((item: any) => item.user);
  const events = useSelector((item: any) => item.userevents);

  const [averages, setAverageRate] = useState({
    commits: {
      average: 0,
      percentage: 0,
    },
    issues: {
      average: 0,
      percentage: 0,
    },
    pr: {
      average: 0,
      percentage: 0,
    },
    hp: {
      hour: 0,
      percentage: 0,
    },
  });

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserEvents());
  }, []);

  function calculateAverage() {
    const commitsRate =
      events.userEvent && events.userEvent.length > 0
        ? events.userEvent.filter((item: any) => {
            return item.type == "PushEvent";
          })
        : null;

    const issuesRate =
      events.userEvent && events.userEvent.length > 0
        ? events.userEvent.filter((item: any) => {
            return item.type == "IssuesEvent";
          })
        : null;

    const prRate =
      events.userEvent && events.userEvent.length > 0
        ? events.userEvent.filter((item: any) => {
            return item.type == "PullRequestEvent";
          })
        : null;
    const percentageHourspent = (commitsRate?.length + prRate?.length) / 3;

    const percentageCommits = (commitsRate?.length / events?.userEvent?.length) * 100;
    const percentageIssues = (issuesRate?.length / events?.userEvent?.length) * 100;
    const percentagePullRequest = (prRate?.length / events?.userEvent?.length) * 100;

    const averageHourSpent = (commitsRate?.length + prRate?.length) * 0.5;

    setAverageRate({
      commits: {
        average: commitsRate?.length,
        percentage: percentageCommits,
      },
      issues: {
        average: issuesRate?.length,
        percentage: percentageIssues,
      },
      pr: {
        average: prRate?.length,
        percentage: percentagePullRequest,
      },
      hp: {
        hour: averageHourSpent,
        percentage: percentageHourspent,
      },
    });
  }

  useEffect(() => {
    calculateAverage();
  }, [events.userEvent, events]);

  return (
    <div className="m-8">
      <h2 className="text-lg font-semibold text-gray-800 flex-1 mb-6">Overview</h2>
      <div className="w-full h-auto text-gray-800 rounded-lg p-6 space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <img src={state.userProfile.avatar_url} width={120} height={120} alt="userimage" className="border border-gray-200 rounded-full object-cover" />
            <div>
              <p className="text-2xl font-semibold text-gray-800">@{state.userProfile.login}</p>
              <p className="text-gray-600 text-sm">ID: {state.userProfile.id}</p>
              <p className="text-md text-gray-700">{state.userProfile.bio}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex-col items-center">
            <div className="flex items-center gap-5">
              <div>
                {state.userProfile.followers} <span className="text-gray-500">Followers</span>
              </div>
              <div>
                {state.userProfile.following} <span className="text-gray-500">Followers</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 pt-4">
              <FaMapMarkerAlt className="text-gray-700" /> {state.userProfile.location}
            </div>
            <div className="flex items-center justify-start gap-2 pt-1">
              <FaCodeBranch />
              {state.userProfile.public_repos} Repository
            </div>
            <div className="flex items-center justify-start gap-2 pt-1">
              <FaBuilding />
              {state.userProfile.company || "No company found."}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between w-full border-t border-gray-200 pt-6 h-36">
          <div>
            <h2 className="text-lg font-medium">Commits Rate</h2>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">{averages.commits.average}</p>
              </div>
              <div className={`${averages.commits.percentage > 30 ? "bg-green-400/40" : "bg-red-400/40"} rounded-lg px-2 py-1.5`}>
                <h2 className={`${averages.commits.percentage > 30 ? "text-green-600" : "text-red-600"}`}>
                  {averages.commits.percentage > 30 ? <p>+{averages.commits.percentage.toFixed(1)}%</p> : <p>-{averages.commits.percentage.toFixed(1)}%</p>}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">Issues Rate</h2>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">{averages.issues.average}</p>
              </div>
              <div className={`${averages.issues.percentage > 30 ? "bg-green-400/40" : "bg-red-400/40"} rounded-lg px-2 py-1.5`}>
                <h2 className={`${averages.issues.percentage > 30 ? "text-green-600" : "text-red-600"}`}>
                  {averages.issues.percentage > 30 ? <p>+{averages.issues.percentage.toFixed(1)}%</p> : <p>-{averages.issues.percentage.toFixed(1)}%</p>}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">Pull Requests Rate</h2>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">{averages.pr.average}</p>
              </div>
              <div className={`${averages.pr.percentage > 30 ? "bg-green-400/40" : "bg-red-400/40"} rounded-lg px-2 py-1.5`}>
                <h2 className={`${averages.pr.percentage > 30 ? "text-green-600" : "text-red-600"}`}>
                  {averages.pr.percentage > 30 ? <p>+{averages.pr.percentage.toFixed(1)}%</p> : <p>-{averages.pr.percentage.toFixed(1)}%</p>}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">Time Spent</h2>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">{averages.hp.hour}/hr</p>
              </div>
              <div className={`${averages.hp.percentage < averages.hp.hour ? "bg-green-400/40" : "bg-red-400/40"} rounded-lg px-2 py-1.5`}>
                <h2 className={`${averages.hp.percentage < averages.hp.hour ? "text-green-600" : "text-red-600"}`}>
                  {averages.hp.percentage < averages.hp.hour ? <p>+{averages.hp.percentage.toFixed(1)}%</p> : <p>-{averages.hp.percentage.toFixed(1)}%</p>}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 border-gray-200">
        <h2 className="text-lg font-medium mb-8">Contributions</h2>
        <GithubCalendar />
      </div>
    </div>
  );
}

export default OverviewContent;
