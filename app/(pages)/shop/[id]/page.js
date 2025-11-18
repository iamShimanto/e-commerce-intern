import Breadcrumb from "@/app/ui/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar, FaRegStar, FaPlus, FaMinus, FaHeart } from "react-icons/fa6";

export default async function ProductDetails({ params }) {
  const ids = await params;
  const id = ids.id;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    return notFound();
  }

  const product = await res.json();

  const {
    title,
    price,
    discountPercentage,
    rating,
    stock,
    description,
    brand,
    category,
    images = [],
    thumbnail,
  } = product;

  const oldPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="container py-20">
      <Breadcrumb
        items={[{ label: "Shop", href: "/shop" }, { label: `${title}` }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="w-full h-[420px] border rounded-xl overflow-hidden">
            <Image
              src={thumbnail || images[0]}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden cursor-pointer hover:border-primary_color transition"
              >
                <Image
                  src={img}
                  alt={title}
                  width={200}
                  height={150}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">{title}</h2>

          <div className="flex items-center gap-2 mt-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.round(rating) ? (
                <FaStar key={i} className="text-yellow-400" />
              ) : (
                <FaRegStar key={i} className="text-gray-300" />
              )
            )}
            <span className="text-sm text-gray-500">({rating})</span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold text-primary_color">${price}</p>
            <p className="line-through text-gray-400">${oldPrice}</p>
            <p className="text-red-500 text-sm font-semibold mt-1">
              Save {discountPercentage}% today!
            </p>
          </div>

          <p className="text-gray-600 mt-6">{description}</p>

          <p className="mt-4 text-sm">
            Stock:{" "}
            <span
              className={`font-semibold ${
                stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {stock > 0 ? `${stock} available` : "Out of Stock"}
            </span>
          </p>

          <div className="mt-6 text-sm">
            <p>
              Category:{" "}
              <span className="font-semibold capitalize">{category}</span>
            </p>
            <p>
              Brand:{" "}
              <span className="font-semibold">{brand || "Not Specified"}</span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="border rounded-full px-4 py-2 flex items-center gap-4">
              <button className="text-gray-600 hover:text-black_main">
                <FaMinus />
              </button>
              <span className="font-semibold">1</span>
              <button className="text-gray-600 hover:text-black_main">
                <FaPlus />
              </button>
            </div>

            <button className="bg-primary_color text-white px-8 py-3 rounded-full font-medium hover:bg-hardprimary transition">
              Add To Cart
            </button>

            <button className="border p-3 rounded-full hover:bg-gray-100 transition text-lg">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
