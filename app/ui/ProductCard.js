import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaRegEye,
  FaShoppingBag,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const ProductCard = ({ img, title, price, rating , link = "/"}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
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
          src={img}
          alt={title}
          className="object-contain w-full"
          priority
        />
      </div>

      
      <Link href={link} className="mt-4">
        <h3 className="text-lg font-medium text-black_main">{title}</h3>
        <p className="text-xl font-semibold mt-1">${price}</p>

        
        <div className="flex items-center gap-1 mt-1 text-lg">
          {renderStars()}
        </div>
      </Link>

     
      <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gray-300 text-softprimary flex items-center justify-center text-lg hover:bg-green-600 hover:text-white duration-200 cursor-pointer">
        <FaShoppingBag />
      </button>
    </div>
  );
};

export default ProductCard;
