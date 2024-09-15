"use client";

import { fetchUserEvents } from "@/lib/features/userEventsSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbTimelineEventText } from "react-icons/tb";
import { LuBookMarked } from "react-icons/lu";

function RightBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(true);
  const state = useSelector((item: any) => item.userevents);

  useEffect(() => {
    dispatch(fetchUserEvents()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <p className="text-gray-500 mt-4 text-center">Loading events...</p>;
  }

  return (
    <div className="ml-4 mt-8 mr-4">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
        <TbTimelineEventText className="text-green-500" /> Activity
      </h2>

      {state.userEvent && state.userEvent.length > 0 ? (
        state.userEvent.slice(0, 3).map((item: any, index: number) => {
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
              className="mt-6 border-t pt-6 pb-6 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full bg-gray-100 rounded-lg"
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
                <h2 className="text-md">{item.repo.name || "Unknown Repo"}</h2>
              </div>
              <div className="mt-3 ml-2">
                {item.payload.commits && item.payload.commits.length > 0 ? (
                  item.payload.commits.slice(0, 1).map((commit: any) => (
                    <div
                      key={commit.sha}
                      className="text-gray-700 text-sm font-light"
                    >
                      {commit.message || "No commit message provided."}
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm font-light">
                    No commits available.
                  </div>
                )}
              </div>
              <div className="flex items-center justify-end mt-2">
                <h2 className="text-sm text-gray-400">{formattedDate}</h2>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 mt-4">No recent events.</p>
      )}
    </div>
  );
}

export default RightBar;
