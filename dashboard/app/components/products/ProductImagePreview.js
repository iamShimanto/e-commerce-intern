"use client";

import Image from "next/image";

export default function ProductImagePreview({ product }) {

  return (
    <div className="w-full flex justify-center">
      <Image
        src={product.thumbnail}
        alt="Product Preview"
        width={280}
        height={280}
        className="rounded-xl object-contain"
      />
    </div>
  );
}
