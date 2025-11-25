"use client";

import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import UploadProgressList from "./UploadProgressList";

export default function ProductGallery() {
  const [uploads] = useState([
    { name: "Product_thumbnail_1.png", progress: 45, status: "uploading" },
    { name: "Product_thumbnail_2.png", progress: 100, status: "done" },
    { name: "Product_thumbnail_3.png", progress: 100, status: "done" },
    { name: "Product_thumbnail_4.png", progress: 100, status: "done" },
    { name: "Product_thumbnail_5.png", progress: 100, status: "done" },
  ]);

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-primary_color">Product Gallery</p>

      <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center text-sm text-primary_color/60">
        <FiUploadCloud className="mx-auto mb-2 text-2xl text-primary_color/50" />
        Drop your image here, or{" "}
        <span className="text-brand_color cursor-pointer hover:underline">
          browse
        </span>
        <p className="text-xs mt-1 text-primary_color/40">
          JPG, PNG and GIF files are allowed
        </p>
      </div>

      <UploadProgressList uploads={uploads} />
    </div>
  );
}
