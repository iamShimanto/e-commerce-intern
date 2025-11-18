import Breadcrumb from "@/app/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="mt-20">
      <Breadcrumb items={[{ label: "Checkout" }]} />
    </div>
  );
};

export default page;
