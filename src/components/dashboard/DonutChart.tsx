import React, { useRef, useEffect, useState } from "react";
import { Chart, registerables, ChartConfiguration } from "chart.js";

Chart.register(...registerables);

function DonutChart({ repoName, repoOwner }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [languages, setLanguages] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  async function handleLanguagesData() {
    setIsLoading(true);
    try {
      const req = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/languages`
      );

      if (!req.ok) {
        throw new Error(`GitHub API error: ${req.statusText}`);
      }

      const data = await req.json();
      setLanguages(data);
    } catch (error) {
      console.error("Error fetching languages:", error);
      setLanguages({});
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleLanguagesData();
  }, [repoOwner, repoName]);

  useEffect(() => {
    if (!canvasRef.current || isLoading) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const languageNames = Object.keys(languages);
    const languageValues = Object.values(languages);

    const generateColors = (count: number) => {
      const colors = [];
      for (let i = 0; i < count; i++) {
        const hue = (i * 137.508) % 360;
        colors.push(`hsl(${hue}, 70%, 60%)`);
      }
      return colors;
    };

    let data;
    if (languageNames.length === 0) {
      data = {
        labels: ["No Data"],
        datasets: [
          {
            data: [1],
            backgroundColor: ["#e0e0e0"],
            hoverOffset: 0,
          },
        ],
      };
    } else {
      data = {
        labels: languageNames,
        datasets: [
          {
            data: languageValues,
            backgroundColor: generateColors(languageNames.length),
            hoverOffset: 4,
          },
        ],
      };
    }

    const config: ChartConfiguration<"doughnut"> = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            display: languageNames.length > 0,
          },
          title: {
            display: true,
            text:
              languageNames.length > 0
                ? "Repository Language Breakdown"
                : "No Language Data Available",
          },
        },
      },
    };

    const chartInstance = new Chart(ctx, config);

    return () => {
      chartInstance.destroy();
    };
  }, [languages, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <canvas ref={canvasRef}></canvas>;
}

export default DonutChart;
