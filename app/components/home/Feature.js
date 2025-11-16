import FeatureCard from "@/app/ui/FeatureCard";
import React from "react";
import feature1 from "@/public/images/feature1.png";
import feature2 from "@/public/images/feature2.png";
import feature3 from "@/public/images/feature3.png";
import feature4 from "@/public/images/feature4.png";

const Feature = () => {
  const features = [
    {
      icon: feature1,
      title: "Free Shipping",
      body: "Free shipping with discount",
    },
    {
      icon: feature2,
      title: "Great Support 24/7",
      body: "Instant access to Contact",
    },
    {
      icon: feature3,
      title: "100% Secure Payment",
      body: "We ensure your money is safe",
    },
    {
      icon: feature4,
      title: "Money-Back Guarantee",
      body: "30 days money-back",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
