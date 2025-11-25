"use client";

import ProductsList from "./ProductsList";
import Summary from "./Summary";


export default function ProductsSection({ items, summary }) {
  return (
    <div className="border-t border-white/5 pt-6 space-y-4">
      <p className="text-base font-semibold text-primary_color">Products</p>
      <ProductsList items={items} />
      <div className="pt-4">
        <Summary summary={summary} />
      </div>
    </div>
  );
}
