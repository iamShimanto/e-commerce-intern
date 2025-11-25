"use client";

export default function InfoBlock({
  icon: Icon,
  title,
  children,
  actionLabel,
}) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-full bg-white/5 grid place-items-center text-primary_color">
        <Icon className="text-xl" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-primary_color">{title}</p>
        <div className="text-sm text-primary_color/60 leading-relaxed">
          {children}
        </div>
        {actionLabel && (
          <button className="mt-2 text-xs px-3 py-1.5 rounded-md bg-brand_color/15 text-brand_color hover:bg-brand_color/25 transition">
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
