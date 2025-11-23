"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiMoreVertical } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function TotalRevenue() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Direct",
        data: [30, 40, 25, 50, 35, 45, 30, 55, 20, 40, 25, 45],
        fill: true,
        backgroundColor: "rgba(115, 100, 219, 0.4)",
        borderColor: "rgba(115, 100, 219, 1)",
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: "Social",
        data: [20, 25, 15, 35, 25, 40, 20, 50, 30, 45, 20, 35],
        fill: true,
        backgroundColor: "rgba(244, 63, 94, 0.4)",
        borderColor: "rgba(244, 63, 94, 1)",
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 11 } },
      },
      y: {
        grid: { color: "rgba(255,255,255,0.05)" },
        ticks: { display: false },
        border: { display: false },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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
          Total Revenue
        </h3>
        <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
      </div>

      <div className="h-[200px] w-full mb-3">
        <Line data={data} options={options} />
      </div>

      <div className="flex items-center gap-5 mb-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="h-3 w-3 rounded-full bg-[rgba(115,100,219,1)]" />
          <span className="text-primary_color/80">Direct</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="h-3 w-3 rounded-full bg-[rgba(244,63,94,1)]" />
          <span className="text-primary_color/80">Social</span>
        </div>
      </div>

      <p className="text-xs text-primary_color/50 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  );
}
