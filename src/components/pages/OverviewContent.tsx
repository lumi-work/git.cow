"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "@/lib/store";
import GithubCalendar from "@/components/dashboard/GithubCalendar";
import { fetchUser } from "@/lib/features/userSlice";
import { fetchUserEvents } from "@/lib/features/userEventsSlice";
import { LuCalendarDays } from "react-icons/lu";

import Tooltips from "@/components/dashboard/Tooltip";

import commitBadges from "../../../public/camping.svg";
import prBadges from "../../../public/ticket.svg";
import issuesBadges from "../../../public/magic.svg";
import hourBadges from "../../../public/clock.svg";
import firstBadges from "../../../public/fries.svg";

// Icons
import { FaMapMarkerAlt, FaBuilding, FaCodeBranch } from "react-icons/fa";
import Image from "next/image";

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
    total: {
      event: 0,
      percentage: 0,
    },
  });

  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchUserEvents());
  }, [dispatch]);

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

    const percentageCommits =
      (commitsRate?.length / events?.userEvent?.length) * 100;
    const percentageIssues =
      (issuesRate?.length / events?.userEvent?.length) * 100;
    const percentagePullRequest =
      (prRate?.length / events?.userEvent?.length) * 100;

    const averageHourSpent = (commitsRate?.length + prRate?.length) * 0.5;

    const averageEventTotal =
      commitsRate?.length + issuesRate?.length + prRate?.length;
    const percentageEventTotal = averageEventTotal / 30;

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
      total: {
        event: averageEventTotal / 2,
        percentage: percentageEventTotal,
      },
    });
  }

  function handleBadge() {
    setBadges((prevBadges) => {
      const newBadges = [...prevBadges];

      if (averages.commits.average > 8 && !newBadges.includes("commitBadge")) {
        newBadges.push("commitBadge");
      }

      if (averages.pr.average > 2 && !newBadges.includes("prBadge")) {
        newBadges.push("prBadge");
      }

      if (averages.issues.average > 5 && !newBadges.includes("issuesBadge")) {
        newBadges.push("issuesBadge");
      }

      if (averages.hp.hour > 5 && !newBadges.includes("hourBadge")) {
        newBadges.push("hourBadge");
      }

      if (!newBadges.includes("firstBadge")) {
        newBadges.push("firstBadge");
      }

      return newBadges;
    });
  }

  useEffect(() => {
    calculateAverage();
  }, [events.userEvent]);

  useEffect(() => {
    handleBadge();
  }, [averages]);

  if (state.loading && state.userProfile.length === 0) {
    return (
      <div className="flex flex-col items-start justify-start m-8 mt-16">
        <div className="flex items-center justify-between w-full">
          <div className="w-72 h-28 bg-gray-200/50 animate-pulse rounded-xl"></div>
          <div className="w-72 h-16 bg-gray-200/50 animate-pulse rounded-xl"></div>
        </div>
        <div className="w-56 h-8 bg-gray-200/50 animate-pulse rounded-xl mt-6"></div>
        <div className="w-48 h-8 bg-gray-200/50 animate-pulse rounded-xl mt-2"></div>
        <div className="w-40 h-8 bg-gray-200/50 animate-pulse rounded-xl mt-2"></div>
        <div className="w-48 h-8 bg-gray-200/50 animate-pulse rounded-xl mt-2"></div>
        <div className="mt-16">
          <div className="w-48 h-12 bg-gray-200/50 animate-pulse rounded-xl"></div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="w-64 h-36 bg-gray-200/50 animate-pulse rounded-xl"></div>
          <div className="w-64 h-36 bg-gray-200/50 animate-pulse rounded-xl"></div>
          <div className="w-64 h-36 bg-gray-200/50 animate-pulse rounded-xl"></div>
          <div className="w-64 h-36 bg-gray-200/50 animate-pulse rounded-xl"></div>
        </div>
        <div className="mt-16">
          <div className="w-48 h-12 bg-gray-200/50 animate-pulse rounded-xl"></div>
        </div>
        <div className="flex items-center justify-between w-full gap-6 mt-4">
          <div className="w-full h-56 bg-gray-200/50 animate-pulse rounded-xl"></div>
          <div className="w-72 h-56 bg-gray-200/50 animate-pulse rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="m-8">
      <h2 className="text-lg font-semibold text-gray-800 flex-1 mb-6">
        Overview
      </h2>
      <div className="w-full h-auto text-gray-800 rounded-lg p-6 space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <img
              src={state.userProfile.avatar_url}
              width={120}
              height={120}
              alt="userimage"
              className="border border-gray-200 rounded-full object-cover"
            />
            <div>
              <p className="text-2xl font-semibold text-gray-800">
                @{state.userProfile.login}
              </p>
              <p className="text-gray-600 text-sm">
                ID: {state.userProfile.id}
              </p>
              <p className="text-md text-gray-700 max-w-[600px]">
                {state.userProfile.bio && state.userProfile.bio.length > 149 ? (
                  <p>{state.userProfile.bio.slice(0, 149)}...</p>
                ) : (
                  state.userProfile.bio || "No bio available"
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="text-md font-medium">Achievements</div>
            <div className="flex items-center justify-center gap-3 pt-3">
              {badges && badges.length > 0 ? (
                badges.map((item: any, index: number) => {
                  if (item === "commitBadge") {
                    return (
                      <div
                        key={`commit-${index}`}
                        className="group hover:cursor-pointer"
                      >
                        <Image
                          src={commitBadges}
                          width={55}
                          height={55}
                          alt="Commit Badge"
                        />
                        <div className="opacity-0 group-hover:opacity-100 w-64 h-30 bg-gray-950 absolute rounded-xl text-white mt-4">
                          <div className="p-4 flex-col items-center">
                            <h2 className="font-medium">Commiter Badge</h2>
                            <p className="text-sm text-gray-300">
                              Awarded for consistently contributing commits that
                              drive the project forward.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item === "prBadge") {
                    return (
                      <div
                        key={`pr-${index}`}
                        className="group hover:cursor-pointer"
                      >
                        <Image
                          src={prBadges}
                          width={55}
                          height={55}
                          alt="Pull Requests Badge"
                        />
                        <div className="opacity-0 group-hover:opacity-100 w-64 h-30 bg-gray-950 absolute rounded-xl text-white mt-4">
                          <div className="p-4 flex-col items-center">
                            <h2 className="font-medium">Pull Request Badge</h2>
                            <p className="text-sm text-gray-300">
                              Recognized for submitting pull requests that
                              enhance the codebase and bring valuable features.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item === "issuesBadge") {
                    return (
                      <div
                        key={`issues-${index}`}
                        className="group hover:cursor-pointer"
                      >
                        <Image
                          src={issuesBadges}
                          width={55}
                          height={55}
                          alt="Issues Badge"
                        />
                        <div className="opacity-0 group-hover:opacity-100 w-72 h-30 bg-gray-950 absolute rounded-xl text-white mt-4">
                          <div className="p-4 flex-col items-center">
                            <h2 className="font-medium">Issues Badge</h2>
                            <p className="text-sm text-gray-300">
                              Given for identifying and reporting issues,
                              helping improve the overall project quality.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item === "hourBadge") {
                    return (
                      <div
                        key={`hour-${index}`}
                        className="group hover:cursor-pointer"
                      >
                        <Image
                          src={hourBadges}
                          width={55}
                          height={55}
                          alt="Hour Badge"
                        />
                        <div className="opacity-0 group-hover:opacity-100 w-64 h-30 bg-gray-950 absolute rounded-xl text-white mt-4">
                          <div className="p-4 flex-col items-center">
                            <h2 className="font-medium">Hour Badge</h2>
                            <p className="text-sm text-gray-300">
                              Earned by dedicating time and effort to the
                              project, ensuring steady progress.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else if (item === "firstBadge") {
                    return (
                      <div
                        key={`first-${index}`}
                        className="group hover:cursor-pointer"
                      >
                        <Image
                          src={firstBadges}
                          width={55}
                          height={55}
                          alt="First Badge"
                        />
                        <div className="opacity-0 group-hover:opacity-100 w-72 h-34 bg-gray-950 absolute rounded-xl text-white mt-4">
                          <div className="p-4 flex-col items-center">
                            <h2 className="font-medium">First Badge</h2>
                            <p className="text-sm text-gray-300">
                              Celebrating your first significant contribution to
                              the project, marking the start of your journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              ) : (
                <div>Not have a badge.</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex-col items-center">
            <div className="flex items-center gap-5">
              <div>
                {state.userProfile.followers}{" "}
                <span className="text-gray-500">Followers</span>
              </div>
              <div>
                {state.userProfile.following}{" "}
                <span className="text-gray-500">Following</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2 pt-4">
              <FaMapMarkerAlt className="text-gray-700" />{" "}
              {state.userProfile.location}
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
                <p className="font-medium text-lg">
                  {averages.commits.average}
                </p>
              </div>
              <div
                className={`${
                  averages.commits.percentage > 30
                    ? "bg-green-400/40"
                    : "bg-red-400/40"
                } rounded-lg px-2 py-1.5`}
              >
                <h2
                  className={`${
                    averages.commits.percentage > 30
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {averages.commits.percentage > 30 ? (
                    <p>+{averages.commits.percentage.toFixed(1)}%</p>
                  ) : (
                    <p>-{averages.commits.percentage.toFixed(1)}%</p>
                  )}
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
              <div
                className={`${
                  averages.issues.percentage > 30
                    ? "bg-green-400/40"
                    : "bg-red-400/40"
                } rounded-lg px-2 py-1.5`}
              >
                <h2
                  className={`${
                    averages.issues.percentage > 30
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {averages.issues.percentage > 30 ? (
                    <p>+{averages.issues.percentage.toFixed(1)}%</p>
                  ) : (
                    <p>-{averages.issues.percentage.toFixed(1)}%</p>
                  )}
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
              <div
                className={`${
                  averages.pr.percentage > 30
                    ? "bg-green-400/40"
                    : "bg-red-400/40"
                } rounded-lg px-2 py-1.5`}
              >
                <h2
                  className={`${
                    averages.pr.percentage > 30
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {averages.pr.percentage > 30 ? (
                    <p>+{averages.pr.percentage.toFixed(1)}%</p>
                  ) : (
                    <p>-{averages.pr.percentage.toFixed(1)}%</p>
                  )}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">
              Time Spent{" "}
              <Tooltips
                text={
                  "Time estimates are from commit history and may not be exact."
                }
              />
            </h2>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">{averages.hp.hour}/hr</p>
              </div>
              <div
                className={`${
                  averages.hp.percentage < averages.hp.hour
                    ? "bg-green-400/40"
                    : "bg-red-400/40"
                } rounded-lg px-2 py-1.5`}
              >
                <h2
                  className={`${
                    averages.hp.percentage < averages.hp.hour
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {averages.hp.percentage < averages.hp.hour ? (
                    <p>+{averages.hp.percentage.toFixed(1)}%</p>
                  ) : (
                    <p>-{averages.hp.percentage.toFixed(1)}%</p>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 border-gray-100 w-full">
        <h2 className="text-lg font-medium mb-8">Contributions</h2>
        <div className="flex items-center justify-between">
          <GithubCalendar />
          <div className="bg-gray-100 px-16 py-2 rounded-lg flex flex-col items-center justify-center">
            <div className="relative flex justify-center items-center">
              <h2 className="text-lg font-medium pt-2 flex justfiy-center items-center gap-2">
                <LuCalendarDays />
                Monthly
              </h2>
              <div className="absolute right-0 -top-1 transform translate-x-full translate-y-1 text-xl">
                <Tooltips
                  text={
                    "Your total contributions were used to calculate your daily average by dividing them by monthly."
                  }
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 pt-2">
              <div className="flex-col items-center justify-center text-center">
                <p className="text-gray-400 text-sm">Your Average</p>
                <p className="font-medium text-lg">
                  {averages.total.percentage.toFixed(2)}
                </p>
              </div>
              <div
                className={`${
                  averages.total.percentage < 0
                    ? "bg-green-400/40"
                    : "bg-red-400/40"
                } rounded-lg px-2 py-1.5`}
              >
                <h2
                  className={`${
                    averages.total.percentage < 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {averages.total.percentage < 0 ? (
                    <p>+{averages.total.event.toFixed(2)}%</p>
                  ) : (
                    <p>-{averages.total.event.toFixed(2)}%</p>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewContent;
