import Image from "next/image";
import { FaUser, FaCommentAlt, FaTag, FaArrowRight } from "react-icons/fa";

const BlogCards = ({
  image,
  date,
  month,
  category,
  admin,
  comments,
  title,
}) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-[0px_4px_40px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt="blog"
          className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 bg-white rounded-md shadow px-3 py-2 text-center">
          <p className="text-lg font-semibold text-black_main">{date}</p>
          <p className="text-xs text-secondary_color uppercase">{month}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-5 text-sm text-secondary_color mb-4">
          <div className="flex items-center gap-2">
            <FaTag className="text-primary_color" />
            {category}
          </div>

          <div className="flex items-center gap-2">
            <FaUser className="text-primary_color" />
            By {admin}
          </div>

          <div className="flex items-center gap-2">
            <FaCommentAlt className="text-primary_color" />
            {comments} Comments
          </div>
        </div>

        <h3 className="text-black_main text-lg font-medium leading-[150%] mb-4">
          {title}
        </h3>

        <button className="text-primary_color font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200 cursor-pointer">
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
