import ClientsFilterBar from "@/app/components/clients/ClientsFilterBar";
import CustomersGrid from "@/app/components/clients/CustomersGrid";
import Breadcrumb from "@/app/components/ui/BreadCrumb";
import React from "react";

const page = () => {
  return (
    <div className="py-10 pl-6">
      <div className=" py-4 border-b border-white/5">
        <h3 className="text-xl sm:text-3xl font-bold text-primary_color pb-3">
          Customers List
        </h3>
        <div className="mb-3">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Clients" }]}
          />
        </div>
        <ClientsFilterBar />
      </div>
      <CustomersGrid />
    </div>
  );
};

export default page;
