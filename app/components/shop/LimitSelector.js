"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";

export default function LimitSelector({ limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLimitChange = (e) => {
    const newLimit = e.target.value;
    const skip = searchParams.get("skip") || "0";

    const params = new URLSearchParams();
    params.set("limit", newLimit);
    params.set("skip", skip);

    router.replace(`?${params.toString()}`, { scroll: false });
  };
 

  return (
    <div className="relative">
      <div className="border border-gray-300 px-4 py-2 rounded-lg bg-white flex items-center">
        <select
          defaultValue={String(limit)}
          onChange={handleLimitChange}
          className="appearance-none bg-transparent outline-none text-black_main text-sm pr-6 cursor-pointer"
        >
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>

        <FaChevronDown className="absolute right-3 text-gray-400 text-xs pointer-events-none" />
      </div>
    </div>
  );
}
