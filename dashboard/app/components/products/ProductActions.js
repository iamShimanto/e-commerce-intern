"use client";

export default function ProductActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <button className="bg-brand_color text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-brand_color/90">
        Update
      </button>
      <button className="bg-red-600/90 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700/90">
        Delete
      </button>
      <button className="bg-black/40 text-primary_color/70 px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/10">
        Cancel
      </button>
    </div>
  );
}
