"use client";

import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";

const sellers = [
  {
    id: 1,
    name: "Esther Howard",
    brand: "Louis Vuitton",
    sales: 1045,
    amount: "$456.65",
    avatar: "/images/seller1.png",
  },
  {
    id: 2,
    name: "Wade Warren",
    brand: "Binford Ltd.",
    sales: 1003,
    amount: "$433.13",
    avatar: "/images/seller2.png",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    brand: "MasterCard",
    sales: 985,
    amount: "$446.61",
    avatar: "/images/seller3.png",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    brand: "Pizza Hut",
    sales: 875,
    amount: "$406.27",
    avatar: "/images/seller4.png",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    brand: "Apple",
    sales: 630,
    amount: "$396.84",
    avatar: "/images/seller5.png",
  },
  {
    id: 6,
    name: "Kristin Watson",
    brand: "Starbucks",
    sales: 563,
    amount: "$351.02",
    avatar: "/images/seller6.png",
  },
];

export default function BestSellers() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-dark_bg border border-white/10 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm sm:text-base font-semibold text-primary_color">
          Best Sellers
        </h3>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-primary_color/60 hover:text-primary_color transition"
          >
            <FiMoreVertical size={18} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 rounded-lg bg-[#1F2128] border border-white/10 shadow-xl text-sm z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-white/5 text-primary_color/90 cursor-pointer">
                  Sales report
                </li>
                <li className="px-4 py-2 hover:bg-white/5 text-primary_color/90 cursor-pointer">
                  Export report
                </li>
                <li className="px-4 py-2 hover:bg-white/5 text-primary_color/90 cursor-pointer">
                  Profit manage
                </li>
                <li className="px-4 py-2 hover:bg-white/5 text-primary_color/50 cursor-not-allowed">
                  Revenue report
                </li>
                <li className="px-4 py-2 hover:bg-red-500/10 text-red-400 cursor-pointer">
                  Remove widget
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {sellers.slice(0, 5).map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between text-sm text-primary_color/70 add"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={s.avatar}
                  alt={s.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-primary_color font-medium">{s.name}</p>
                <p className="text-xs text-primary_color/50">{s.brand}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-primary_color">{s.amount}</p>
              <p className="text-xs text-primary_color/50">{s.sales} sales</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
