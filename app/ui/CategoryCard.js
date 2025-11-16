import Image from "next/image";

const CategoryCard = ({ icon, title, count }) => {
  return (
    <div className="rounded-2xl border border-[#00B528] bg-white p-6 text-center shadow-md hover:shadow-green-200 duration-300 cursor-pointer h-52.5">
      <div className="flex justify-center mb-4">
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>

      <h3 className="text-lg font-semibold text-[#00A046]">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{count} Products</p>
    </div>
  );
};

export default CategoryCard;
