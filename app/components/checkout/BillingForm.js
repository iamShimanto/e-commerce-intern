"use client";

export default function BillingForm() {
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Billing Information</h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            required
            type="text"
            placeholder="Your first name"
            className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your last name"
            className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company name (optional)"
            className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Street Address"
          className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full bg-white focus:outline-none">
            <option>Select Country / Region</option>
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <select className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full bg-white focus:outline-none">
            <option>Select State</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Rajshahi</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="ship-different" />
          <label htmlFor="ship-different" className="text-sm text-gray-700">
            Ship to a different address
          </label>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Additional Info</h3>
          <textarea
            rows="4"
            placeholder="Notes about your order, e.g. special notes for delivery"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none resize-none"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
