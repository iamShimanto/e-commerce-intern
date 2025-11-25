"use client";

import Image from "next/image";

export default function ProductImagePreview() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src="/images/watch-preview.png"
        alt="Product Preview"
        width={280}
        height={280}
        className="rounded-xl object-contain"
      />
    </div>
  );
}
