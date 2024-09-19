"use client";

import LineChart from "@/components/dashboard/LineChart";
import { useEffect, useState } from "react";

const Dashboard = ({ repoName, repoOwner }: any) => {
  const [commits, setCommits] = useState<any>([]);
  const [dataPoints, setDataPoints] = useState<number[]>(Array(12).fill(0));

  async function handleLineData() {
    try {
      const req = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
      );

      if (!req.ok) {
        throw new Error(`GitHub API error: ${req.statusText}`);
      }

      const data = await req.json();
      if (data) {
        setCommits(data);
        processCommitData(data);
      }
    } catch (error) {
      console.error("Error fetching commits:", error);
    }
  }

  function processCommitData(commitData: any[]) {
    const commitCounts = Array(12).fill(0);

    commitData.forEach((commit) => {
      const date = new Date(commit.commit.committer.date);
      const month = date.getMonth();
      commitCounts[month]++;
    });

    setDataPoints(commitCounts);
  }

  useEffect(() => {
    handleLineData();
  }, [repoName, repoOwner]);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full">
      <LineChart labels={labels} dataPoints={dataPoints} />
    </div>
  );
};

export default Dashboard;
