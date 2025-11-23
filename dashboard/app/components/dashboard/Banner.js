import React from "react";
import Breadcrumb from "../ui/BreadCrumb";
import StatCard from "../ui/StatCard";

const Banner = () => {
  return (
    <div className="">
      <h2 className="text-primary_color text-[28px] font-bold leading-8.5 mb-3">
        Dashboard
      </h2>
      <div>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dashboard", href: "/" },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-9">
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </div>
  );
};

export default Banner;
