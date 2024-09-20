"use client";

import { fetchUserEvents } from "@/lib/features/userEventsSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TbTimelineEventText } from "react-icons/tb";
import { LuBookMarked } from "react-icons/lu";
import { VscSourceControl } from "react-icons/vsc";

function RightBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  const state = useSelector((item: any) => item.userevents);

  useEffect(() => {
    dispatch(fetchUserEvents()).finally(() => setLoading(false));
  }, [dispatch]);

  if (state.loading || loading) {
    return (
      <div className="flex flex-col items-start- justify-start ml-4 mt-8 mr-4">
        <div className="w-48 h-12 bg-gray-200/50 animate-pulse rounded-xl"></div>
        <div className="w-full h-48 bg-gray-200/50 animate-pulse rounded-xl mt-6"></div>
        <div className="w-full h-48 bg-gray-200/50 animate-pulse rounded-xl mt-6"></div>
        <div className="w-full h-48 bg-gray-200/50 animate-pulse rounded-xl mt-6"></div>
        <div className="w-full h-48 bg-gray-200/50 animate-pulse rounded-xl mt-6"></div>
      </div>
    );
  }

  return (
    <div className="ml-4 mt-8 mr-4">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <TbTimelineEventText className="text-green-500" /> Activity
      </h2>
      <div className="overflow-y-auto h-screen pb-20 scroll-block">
        {state.userEvent && state.userEvent.length > 0 ? (
          state.userEvent.map((item: any, index: number) => {
            const formattedDate = new Date(item.created_at).toLocaleDateString(
              "tr-TR",
              {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }
            );

            return (
              <div
                key={index}
                className="mt-6 pt-6 pb-6 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-2 ml-2">
                  <img
                    src={item.actor.avatar_url}
                    width={40}
                    height={40}
                    alt="useravatar"
                    className="rounded-full border-2 border-green-500"
                  />
                  <h2 className="text-lg font-semibold text-gray-900">
                    @{item.actor.display_login}
                  </h2>
                </div>

                <div className="flex items-center justify-start gap-1 mt-2 text-gray-600 ml-2">
                  <LuBookMarked className="text-xl text-gray-400" />
                  <h2 className="text-md">
                    {item.repo.name || "Unknown Repo"}
                  </h2>
                </div>
                <div className="mt-3 ml-2">
                  {item.payload.commits && item.payload.commits.length > 0 ? (
                    item.payload.commits.slice(0, 1).map((commit: any) => (
                      <div
                        key={commit.sha}
                        className="text-gray-700 text-sm font-light"
                      >
                        {commit.message && commit.message.length > 49 ? (
                          <p>
                            {commit.message.slice(0, 49)}
                            ...
                          </p>
                        ) : (
                          <p>
                            {commit.message || "No commit message provided."}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm font-light">
                      {item.type || "No commits available."}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between w-full mt-4 px-4">
                  {item.payload.commits && item.payload.commits.length > 0
                    ? item.payload.commits.slice(0, 1).map((commit: any) => (
                        <div
                          key={commit.sha}
                          className="text-gray-700 text-md font-light flex items-center"
                        >
                          <a
                            href={`https://github.com/${item.repo.name}/commit/${commit.sha}`}
                          >
                            <VscSourceControl className="text-gray-500" />
                          </a>
                        </div>
                      ))
                    : null}
                  <h2 className="text-sm text-gray-400">{formattedDate}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 mt-4">No recent events.</p>
        )}
      </div>
    </div>
  );
}

export default RightBar;
