"use client";

import { fetchUser } from "@/lib/features/userSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { useDispatch, useSelector } from "react-redux";

function GithubCalendar() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const state = useSelector((item: any) => item.user);

  if (!state.userProfile) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex items-center justify-between h-36">
      <GitHubCalendar colorScheme="light" username={state.userProfile.login} />
      {/* box be here */}
    </div>
  );
}

export default GithubCalendar;
