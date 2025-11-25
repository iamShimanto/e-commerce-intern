"use client";

import { useState } from "react";
import { FiList, FiGrid } from "react-icons/fi";
import ListView from "./ListView";
import GridView from "./GridView";
import Breadcrumb from "../ui/BreadCrumb";

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
  const [view, setView] = useState("grid");

  const isList = view === "list";
  const isGrid = view === "grid";

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-3 relative z-50">
        <h2 className="text-lg sm:text-xl font-bold text-primary_color">
          All Products
        </h2>

        <div className="flex items-center bg-[#2A2B33] rounded-full overflow-hidden relative">
          <button
            type="button"
            onClick={() => setView("list")}
            className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition ${
              isList
                ? "bg-brand_color text-white"
                : "text-primary_color/60 hover:text-primary_color"
            }`}
          >
            <FiList className="text-lg" />
            List
          </button>

          <button
            type="button"
            onClick={() => setView("grid")}
            className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition ${
              isGrid
                ? "bg-brand_color text-white"
                : "text-primary_color/60 hover:text-primary_color"
            }`}
          >
            <FiGrid className="text-lg" />
            Grid
          </button>
        </div>
      </div>
      <div>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products" }
          ]}
        />
      </div>

      {isList && <ListView products={products} />}
      {isGrid && <GridView products={products} />}
    </div>
  );
}
