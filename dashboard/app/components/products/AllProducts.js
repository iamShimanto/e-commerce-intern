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
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setData(result.products);
    })();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-3 relative">
        <h2 className="text-lg sm:text-xl font-bold text-primary_color">
          All Products
        </h2>

        <div className="flex items-center bg-[#2A2B33] rounded-full overflow-hidden relative"></div>
      </div>
      <div>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />
      </div>

      <GridView products={data} />
    </div>
  );
}
