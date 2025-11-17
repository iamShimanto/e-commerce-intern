import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const FilterBar = () => {
  return (
    <div className="w-full flex flex-wrap items-center gap-4 py-6 container">

      <div className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-3 text-sm bg-white cursor-pointer">
        <select className="bg-transparent outline-none text-black_main">
          <option>Select Category</option>
          <option>Vegetables</option>
          <option>Fruits</option>
          <option>Meat</option>
        </select>
        <FaChevronDown className="text-gray-400 text-xs" />
      </div>

      <div className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-3 text-sm bg-white cursor-pointer ml-auto">
        <select className="bg-transparent outline-none text-black_main">
          <option>Sort by: Latest</option>
          <option>Price: Low → High</option>
          <option>Price: High → Low</option>
        </select>
        <FaChevronDown className="text-gray-400 text-xs" />
      </div>

     
      <div className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-3 text-sm bg-white cursor-pointer">
        <select className="bg-transparent outline-none text-black_main">
          <option>Show: 16</option>
          <option>Show: 24</option>
          <option>Show: 32</option>
        </select>
        <FaChevronDown className="text-gray-400 text-xs" />
      </div>
    </div>
  );
};

export default FilterBar;
