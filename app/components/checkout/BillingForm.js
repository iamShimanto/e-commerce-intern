"use client";

export default function BillingForm({ billing, setBilling, errors }) {
  const handleChange = (e) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "border border-gray-300 px-4 py-3 rounded-lg text-sm w-full focus:outline-none";

  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Billing Information</h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
       
          <div>
            <input
              name="firstName"
              placeholder="Your first name"
              value={billing.firstName}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

         
          <input
            name="lastName"
            value={billing.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className={inputClass}
          />

         
          <input
            name="company"
            value={billing.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className={inputClass}
          />
        </div>

       
        <div>
          <input
            name="address"
            value={billing.address}
            onChange={handleChange}
            placeholder="Street Address"
            className={inputClass}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          <div>
            <select
              name="country"
              value={billing.country}
              onChange={handleChange}
              className={`${inputClass} bg-white`}
            >
              <option value="">Select Country / Region</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">{errors.country}</p>
            )}
          </div>

         
          <select
            name="state"
            value={billing.state}
            onChange={handleChange}
            className={`${inputClass} bg-white`}
          >
            <option value="">Select State</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Rajshahi</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          <div>
            <input
              name="email"
              value={billing.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

         
          <div>
            <input
              name="phone"
              value={billing.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
