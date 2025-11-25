"use client";

import StatusPill from "./StatusPill";

export default function Summary({ summary }) {
  return (
    <div className="w-full md:max-w-[320px] ml-auto space-y-2 text-sm text-primary_color/60">
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span>${summary.subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax(20%):</span>
        <span>${summary.tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Discount:</span>
        <span>${summary.discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between pt-2 text-base font-semibold text-primary_color">
        <span>Total:</span>
        <span>{summary.total.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center pt-2">
        <span>Status:</span>
        <StatusPill value={summary.status} />
      </div>
    </div>
  );
}
