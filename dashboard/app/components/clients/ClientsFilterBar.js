"use client";

import { FiChevronDown, FiCalendar, FiFilter } from "react-icons/fi";

const SelectField = ({ value, onChange, placeholder, options = [] }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-11 sm:h-12 appearance-none rounded-lg bg-dark_bg border border-white/10 px-4 pr-10 text-sm text-primary_color/70 outline-none focus:border-white/20 transition"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
      <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary_color/40 text-lg" />
    </div>
  );
};

const DateField = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-11 sm:h-12 rounded-lg bg-dark_bg border border-white/10 px-4 pr-10 text-sm text-primary_color/70 outline-none focus:border-white/20 transition"
      />
      <FiCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary_color/40 text-lg" />
    </div>
  );
};

export default function ClientsFilterBar({
  category,
  status,
  date,
  onCategoryChange,
  onStatusChange,
  onDateChange,
  onOpenFilters,
  categories = [
    { value: "all", label: "All Category" },
    { value: "laptops", label: "Laptops" },
    { value: "phones", label: "Mobile phones" },
    { value: "desktops", label: "Desktops" },
    { value: "accessories", label: "Accessories" },
  ],
  statuses = [
    { value: "all", label: "Status" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "blocked", label: "Blocked" },
  ],
}) {
  return (
    <div className="w-full">
      <div className="w-full rounded-xl bg-dark_bg border border-white/10 p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[260px_180px_180px_auto] gap-3 sm:gap-4 items-center">
          <SelectField
            value={category}
            onChange={onCategoryChange}
            placeholder="All Category"
            options={categories}
          />

          <DateField value={date} onChange={onDateChange} />

          <SelectField
            value={status}
            onChange={onStatusChange}
            placeholder="Status"
            options={statuses}
          />

          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <button
              onClick={onOpenFilters}
              className="w-full lg:w-auto h-11 sm:h-12 px-4 sm:px-5 rounded-lg bg-white/5 border border-white/10 text-sm text-primary_color/70 flex items-center justify-center gap-2 hover:bg-white/10 hover:text-primary_color transition"
            >
              <FiFilter className="text-lg" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
