"use client";

import { fetchUserEvents } from "@/lib/features/userEventsSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LuBookMarked } from "react-icons/lu";

function RightBar() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserEvents());
  }, []);

  const state = useSelector((item: any) => item.userevents);

  return (
    <div className="ml-8 mt-8">
      <h2 className="text-lg font-medium text-gray-800">Events</h2>
      {state.userEvent && state.userEvent.length > 0
        ? state.userEvent.slice(0, 3).map((item: any, index: number) => {
            const formattedDate = new Date(item.created_at).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });

            return (
              <div key={index} className="mt-4 border-t mr-8 py-3">
                <div className="flex items-center justify-start">
                  <img src={item.actor.avatar_url} width={40} height={40} alt="useravatar" />
                  <h2 className="text-lg font-medium text-gray-800">@{item.actor.display_login}</h2>
                </div>
                <div>
                  <h2>{item.payload.commits.length > 0 ? item.payload.commits.slice(0, 1).map((commit: any) => <div key={index}>{commit.message}</div>) : null}</h2>
                </div>
                <div className="flex items-center justify-start gap-1 mt-1">
                  <LuBookMarked className="text-xl text-gray-500" />
                  <h2 className="text-gray-600">{item.repo.name}</h2>
                </div>
                <div>
                  <h2 className="text-sm text-gray-400 flex items-center justify-end pt-1">{formattedDate}</h2>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default RightBar;
