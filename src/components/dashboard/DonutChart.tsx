import React, { useRef, useEffect } from "react";
import { Chart, registerables, ChartConfiguration, ChartType } from "chart.js";

Chart.register(...registerables);

function DonutChart() {
  // Type the ref as HTMLCanvasElement
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config: ChartConfiguration<"doughnut"> = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true, // Ensures the chart is responsive
      },
    };

    // Create a new Chart instance
    const chartInstance = new Chart(ctx, config);

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default DonutChart;
