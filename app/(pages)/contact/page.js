import ContactForm from "@/app/components/contact/ContactForm";
import ContactInfo from "@/app/components/contact/ContactInfo";
import Breadcrumb from "@/app/ui/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="container py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ====== left side info box ============= */}
        <ContactInfo />

        {/* ====== right side form ============= */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
