"use client";

import { useState } from "react";

export default function ProductForm() {
  const [tags, setTags] = useState([
    "smartwatch",
    "Apple",
    "Watch",
    "smartphone",
    "iPhone13 max",
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="space-y-5">
        <div>
          <label className="text-primary_color text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Type name here"
            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none"
          />
        </div>

        <div>
          <label className="text-primary_color text-sm font-medium">
            Description
          </label>
          <textarea
            placeholder="Type description here"
            rows={5}
            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary_color text-sm font-medium">
              Category
            </label>
            <input
              placeholder="Type Category here"
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Brand
            </label>
            <input
              placeholder="Type Brand name here"
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary_color text-sm font-medium">
              SKU
            </label>
            <input
              readOnly
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Stock quantity
            </label>
            <input
              readOnly
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary_color text-sm font-medium">
              Regular Price
            </label>
            <input
              
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Sale Price
            </label>
            <input
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary_color text-sm font-medium">
              Tax status
            </label>
            <select className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color">
              <option>Taxable</option>
              <option>Non-taxable</option>
            </select>
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Tax class
            </label>
            <select className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color">
              <option>Standard</option>
              <option>Reduced</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
