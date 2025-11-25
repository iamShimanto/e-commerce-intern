"use client";

import { FiCheck, FiX } from "react-icons/fi";

export default function UploadProgressList({ uploads }) {
  return (
    <div className="space-y-3">
      {uploads.map((file, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg px-3 py-2"
        >
          <p className="text-sm flex-1 truncate text-primary_color/80">
            {file.name}
          </p>

          <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand_color rounded-full transition-all duration-500"
              style={{ width: `${file.progress}%` }}
            />
          </div>

          {file.status === "done" ? (
            <FiCheck className="text-emerald-400 text-lg" />
          ) : (
            <FiX className="text-red-400 text-lg cursor-pointer" />
          )}
        </div>
      ))}
    </div>
  );
}
