"use client";

import { Line } from "react-chartjs-2";
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

export default function SalesChart() {
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
        label: "Completed",
        data: [20, 10, 25, 5, 15, 12, 6, 8, 10, 9, 7, 3],
        fill: true,
        backgroundColor: "rgba(239, 68, 68, 0.4)",
        borderColor: "rgba(239, 68, 68, 1)",
        tension: 0.4,
      },
      {
        label: "Pending",
        data: [5, 7, 18, 22, 14, 9, 8, 6, 12, 10, 8, 4],
        fill: true,
        backgroundColor: "rgba(244, 114, 182, 0.4)",
        borderColor: "rgba(244, 114, 182, 1)",
        tension: 0.4,
      },
      {
        label: "Unpaid",
        data: [2, 4, 6, 10, 15, 20, 18, 25, 12, 10, 8, 6],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.4)",
        borderColor: "rgba(59, 130, 246, 1)",
        tension: 0.4,
      },
      {
        label: "Delivered",
        data: [0, 3, 5, 7, 10, 15, 14, 16, 18, 20, 22, 25],
        fill: true,
        backgroundColor: "rgba(147, 197, 253, 0.4)",
        borderColor: "rgba(147, 197, 253, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#A1A1AA" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#A1A1AA", stepSize: 10 },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "start",
        labels: {
          color: "#fff",
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
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
    <div className="w-full bg-dark_bg border border-white/10 rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-semibold text-primary_color">
          Sales Performance
        </h3>
        <div className="flex items-center gap-4 text-sm">
          <button className="text-primary_color/60 hover:text-primary_color transition">
            Today’s
          </button>
          <button className="text-brand_color font-semibold">Monthly</button>
          <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
        </div>
      </div>
      <div className="h-80 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
