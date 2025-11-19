import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="bread mb-2">
      <div className="flex items-center gap-2 text-sm py-6 container">
        <Link
          href="/"
          className="text-secondary_color hover:text-primary_color"
        >
          <FaHome className="text-lg" />
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaAngleRight className="text-secondary_color" />

            {item.href ? (
              <Link
                href={item.href}
                className="text-secondary_color hover:text-primary_color"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary_color font-medium">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
