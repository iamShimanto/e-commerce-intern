import Accordion from "@/app/components/faq/Accordion";
import Breadcrumb from "@/app/ui/Breadcrumb";
import faqData from "@/app/components/faq/faqData";
import faq1 from "@/public/images/faq1.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-20 ">
      <Breadcrumb items={[{ label: "FAQs" }]} />
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-18">
          <div className="mt-27">
            <h2 className="text-4xl md:text-5xl font-bold text-black_main leading-tight max-w-3xl">
              Welcome, Let’s Talk About Our Ecobazar
            </h2>

            <Accordion items={faqData} />
          </div>
          <div>
            <Image src={faq1} alt="faq" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
