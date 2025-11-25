"use client";

export default function PaymentAndNotes({ paymentInfo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
        <p className="text-sm font-semibold text-primary_color">Payment info</p>
        <div className="text-sm text-primary_color/60 space-y-1">
          <p>{paymentInfo.card}</p>
          <p>Business name: {paymentInfo.business}</p>
          <p>Phone: {paymentInfo.phone}</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-2">
        <p className="text-sm font-semibold text-primary_color">Notes</p>
        <textarea
          rows={4}
          placeholder="Type some note"
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-primary_color outline-none resize-none"
        />
      </div>
    </div>
  );
}
