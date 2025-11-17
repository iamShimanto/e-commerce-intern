import Breadcrumb from "@/app/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb items={[{ label: "About Us" }]} />
    </div>
  );
};

export default page;
