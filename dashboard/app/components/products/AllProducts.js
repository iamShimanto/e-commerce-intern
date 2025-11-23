"use client";

import { useState } from "react";
import Image from "next/image";
import { FiList, FiGrid, FiMoreVertical } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import ListView from "./ListView";
import GridView from "./GridView";

const products = [
  {
    id: 1,
    name: "Cubitt Smart Watch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: 556,
    rating: 5,
    sales: "186 / 2058",
    image: "/images/watch1.png",
  },
  {
    id: 2,
    name: "Cubitt Smart Watch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: 556,
    rating: 5,
    sales: "186 / 2058",
    image: "/images/headphone1.png",
  },
  {
    id: 3,
    name: "Cubitt Smart Watch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: 556,
    rating: 5,
    sales: "186 / 2058",
    image: "/images/headphone2.png",
  },
  {
    id: 4,
    name: "Cubitt Smart Watch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$576.28",
    sku: "FROX-13563",
    status: "Active",
    qty: 556,
    rating: 5,
    sales: "186 / 2058",
    image: "/images/watch2.png",
  },
];

export default function AllProducts() {
  const [view, setView] = useState("list"); // "list" | "grid"

  return (
    <div className="w-full space-y-6">
      {/* ====== Header ============= */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-lg sm:text-xl font-bold text-primary_color">
          All Products
        </h2>

        <div className="flex items-center bg-[#2A2B33] rounded-full overflow-hidden">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition ${
              view === "list"
                ? "bg-brand_color text-white"
                : "text-primary_color/60 hover:text-primary_color"
            }`}
          >
            <FiList className="text-lg" /> List
          </button>
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition ${
              view === "grid"
                ? "bg-brand_color text-white"
                : "text-primary_color/60 hover:text-primary_color"
            }`}
          >
            <FiGrid className="text-lg" /> Grid
          </button>
        </div>
      </div>

      {/* ====== List View ============= */}
      {view === "list" && <ListView products={products} />}

      {/* ====== Grid View ============= */}
      {view === "grid" && <GridView products={products} />}
    </div>
  );
}
