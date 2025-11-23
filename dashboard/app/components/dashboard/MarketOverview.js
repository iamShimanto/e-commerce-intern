"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FiMoreVertical } from "react-icons/fi";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function MarketOverview() {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Market Volume",
        data: [25, 40, 30, 35, 55, 70, 45],
        backgroundColor: "rgba(115, 100, 219, 1)",
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 24,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: (ctx) => {
            const label = ctx.tick.label;
            return label === "Sat" || label === "Sun" ? "#EF4444" : "#9CA3AF";
          },
          font: { size: 12 },
        },
      },
      y: {
        grid: { color: "rgba(255,255,255,0.05)" },
        border: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1F2128",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="w-full rounded-2xl bg-dark_bg border border-white/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm sm:text-base font-semibold text-primary_color">
          Market Overview
        </h3>
        <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
      </div>
      <div className="h-[240px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
