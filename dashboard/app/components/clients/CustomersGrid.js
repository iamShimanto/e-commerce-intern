"use client";
import CustomerCard from "./CustomerCard";
import { CustomersData } from "./CustomersData";

const customers = CustomersData;

export default function CustomersGrid() {
  return (
    <section className="w-full min-w-0">
      <div className="w-full rounded-2xl bg-dark_bg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {customers.map((c) => (
            <CustomerCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
