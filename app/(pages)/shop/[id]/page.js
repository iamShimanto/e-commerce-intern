import AddToCartButton from "@/app/ui/AddToCartButton";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar, FaRegStar, FaPlus, FaMinus, FaHeart } from "react-icons/fa6";

const productData = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      next: {
        revalidate: 30,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function ProductDetails({ params }) {
  const ids = await params;
  const id = ids.id;

  const product = await productData(id);

  if (!product) {
    return notFound();
  }

  const oldPrice = (
    product?.price /
    (1 - product?.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="container py-20">
      <Breadcrumb
        items={[
          { label: "Shop", href: "/shop" },
          { label: `${product?.title}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="w-full h-[420px] border rounded-xl overflow-hidden">
            <Image
              src={product?.thumbnail || product?.images[0]}
              alt={product?.title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {product?.images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden cursor-pointer hover:border-primary_color transition"
              >
                <Image
                  src={img}
                  alt={product?.title}
                  width={200}
                  height={150}
                  className="h-24 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">{product?.title}</h2>

          <div className="flex items-center gap-2 mt-2">
            {Array.from({ length: 5 }).map((_, i) =>
              i < Math.round(product?.rating) ? (
                <FaStar key={i} className="text-yellow-400" />
              ) : (
                <FaRegStar key={i} className="text-gray-300" />
              )
            )}
            <span className="text-sm text-gray-500">({product?.rating})</span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold text-primary_color">
              ${product?.price}
            </p>
            <p className="line-through text-gray-400">${oldPrice}</p>
            <p className="text-red-500 text-sm font-semibold mt-1">
              Save {product?.discountPercentage}% today!
            </p>
          </div>

          <p className="text-gray-600 mt-6">{product?.description}</p>

          <p className="mt-4 text-sm">
            Stock:{" "}
            <span
              className={`font-semibold ${
                product?.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {product?.stock > 0
                ? `${product?.stock} available`
                : "Out of Stock"}
            </span>
          </p>

          <div className="mt-6 text-sm">
            <p>
              Category:{" "}
              <span className="font-semibold capitalize">
                {product?.category}
              </span>
            </p>
            <p>
              Brand:{" "}
              <span className="font-semibold">
                {product?.brand || "Not Specified"}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <AddToCartButton
              product={product}
              title={"Add to Cart"}
              className={"bg-primary_color text-white"}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-600">{product?.description}</p>
      </div>
    </div>
  );
}
