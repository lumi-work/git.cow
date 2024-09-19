"use client";

import LineChart from "@/components/dashboard/LineChart";
import { useEffect, useState } from "react";

const Dashboard = ({ repoName, repoOwner }: any) => {
  const [commits, setCommits] = useState<number[]>(Array(12).fill(0));
  const [issues, setIssues] = useState<number[]>(Array(12).fill(0));
  const [pulls, setPulls] = useState<number[]>(Array(12).fill(0));

  async function handleLineData() {
    try {
      const [commitsData, issuesData, pullsData] = await Promise.all([
        fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/commits`
        ).then((res) => res.json()),
        fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/issues`
        ).then((res) => res.json()),
        fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/pulls`
        ).then((res) => res.json()),
      ]);

      processCommitData(commitsData);
      processIssuesData(issuesData);
      processPullsData(pullsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function processCommitData(commitData: any[]) {
    const commitCounts = Array(12).fill(0);
    commitData.forEach((commit) => {
      const date = new Date(commit.commit.committer.date);
      const month = date.getMonth();
      commitCounts[month]++;
    });
    setCommits(commitCounts);
  }

  function processIssuesData(issueData: any[]) {
    const issueCounts = Array(12).fill(0);
    issueData.forEach((issue) => {
      const date = new Date(issue.created_at);
      const month = date.getMonth();
      issueCounts[month]++;
    });
    setIssues(issueCounts);
  }

  function processPullsData(pullData: any[]) {
    const pullCounts = Array(12).fill(0);
    pullData.forEach((pull) => {
      const date = new Date(pull.created_at);
      const month = date.getMonth();
      pullCounts[month]++;
    });
    setPulls(pullCounts);
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
      <LineChart
        labels={labels}
        datasets={[
          {
            label: "Commits",
            data: commits,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
          {
            label: "Issues",
            data: issues,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
          {
            label: "Pull Requests",
            data: pulls,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
