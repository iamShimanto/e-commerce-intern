"use client";

import { useEffect, useState } from "react";
import { FiList, FiGrid } from "react-icons/fi";
import ListView from "./ListView";
import GridView from "./GridView";
import Breadcrumb from "../ui/BreadCrumb";
import { productData } from "./productData";

const products = productData;

export default function AllProducts() {
  const [view, setView] = useState("grid");

  const isList = view === "list";
  const isGrid = view === "grid";

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-3 relative">
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
          items={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />
      </div>

      {isList && <ListView products={products} />}
      {isGrid && <GridView products={products} />}
    </div>
  );
}
