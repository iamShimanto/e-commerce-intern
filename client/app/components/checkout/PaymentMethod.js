"use client";

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  error,
  handlePlaceOrder,
  loading,
}) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Payment Method</h3>

      <div className="space-y-3">
        {["cod", "paypal", "amazon"].map((m) => (
          <label key={m} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value={m}
              checked={paymentMethod === m}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="accent-primary_color"
            />
            <span className="capitalize">
              {m === "cod" ? "Cash on Delivery" : m}
            </span>
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      
      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded-full font-medium text-sm transition flex justify-center items-center gap-2 
        ${
          loading
            ? "bg-hardprimary cursor-not-allowed"
            : "bg-primary_color hover:bg-hardprimary text-white"
        }`}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Processing...
          </>
        ) : (
          "Place Order"
        )}
      </button>
    </div>
  );
}
