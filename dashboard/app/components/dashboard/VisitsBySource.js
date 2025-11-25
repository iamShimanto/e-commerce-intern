"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FiMoreVertical } from "react-icons/fi";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function VisitsBySource() {
  const data = {
    labels: ["Direct", "Social", "Email", "Other"],
    datasets: [
      {
        data: [52, 32, 25, 28],
        backgroundColor: [
          "rgba(124, 58, 237, 1)", // purple
          "rgba(239, 68, 68, 1)", // red
          "rgba(250, 204, 21, 1)", // yellow
          "rgba(167, 139, 250, 1)", // light purple
        ],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    <div className="w-full rounded-2xl bg-dark_bg border border-white/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-x-hidden">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm sm:text-base font-semibold text-primary_color">
          Visits by Source
        </h3>
        <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
      </div>

      <div className="h-[200px] flex items-center justify-between">
        <div className="relative size-40]">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-primary_color">52%</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 ml-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[rgba(124,58,237,1)]"></span>
            <span className="text-primary_color/80">Direct</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[rgba(239,68,68,1)]"></span>
            <span className="text-primary_color/80">Social</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[rgba(250,204,21,1)]"></span>
            <span className="text-primary_color/80">Email</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[rgba(167,139,250,1)]"></span>
            <span className="text-primary_color/80">Other</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-primary_color/50 mt-4 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  );
}
