import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegEye, FaShoppingBag } from "react-icons/fa";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ data }) => {
  return (
    <>
      <div className="group rounded-2xl border border-gray-300 hover:border-primary_color shadow-md p-4 bg-white relative hover:shadow-green-200 duration-300 overflow-hidden">
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-300 ">
          <button className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-600 hover:text-red-500 duration-200 cursor-pointer">
            <FaHeart />
          </button>

          <button className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-600 hover:text-green-500 duration-200 cursor-pointer">
            <FaRegEye />
          </button>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src={data?.thumbnail}
            alt={data?.title}
            className="object-contain w-full"
            width={100}
            height={100}
          />
        </div>

        <Link href={`/shop/${data?.id}`} className="mt-4">
          <h3 className="text-lg font-medium text-black_main">
            {data?.title.substring(0, 20)}...
          </h3>
          <p className="text-xl font-semibold mt-1">${data?.price}</p>
        </Link>

        <AddToCartButton product={data} />
      </div>
    </>
  );
};

export default ProductCard;
