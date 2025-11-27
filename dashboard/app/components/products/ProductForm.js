"use client";

import { useState } from "react";

export default function ProductForm({ product }) {
  const [tags, setTags] = useState([
    "smartwatch",
    "Apple",
    "Watch",
    "smartphone",
    "iPhone13 max",
  ]);
  const [data, setData] = useState({
    title: product.title,
    availabilityStatus: product.availabilityStatus,
    brand: product.brand,
    category: product.category,
    description: product.description,
    discountPercentage: product.discountPercentage,
    images: [product.images],
    price: product.price,
    rating: product.rating,
    thumbnail: product.thumbnail,
    sku: product.sku,
    stock: product.stock,
  });
console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="space-y-5">
        <div>
          <label className="text-primary_color text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            value={data?.title}
            placeholder="Type name here"
            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none"
          />
        </div>

        <div>
          <label className="text-primary_color text-sm font-medium">
            Description
          </label>
          <textarea
            onChange={(e) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Type description here"
            rows={5}
            value={data.description}
            className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-primary_color text-sm font-medium">
              Category
            </label>
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, category: e.target.value }))
              }
              value={data.category}
              placeholder="Type Category here"
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Brand
            </label>
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, brand: e.target.value }))
              }
              value={data.brand}
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
              value={data.sku}
              readOnly
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Stock quantity
            </label>
            <input
              value={data.stock}
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
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
              value={data.price}
              className="mt-2 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-sm text-primary_color"
            />
          </div>
          <div>
            <label className="text-primary_color text-sm font-medium">
              Sale Price
            </label>
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, price: e.target.value }))
              }
              value={data.price}
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
