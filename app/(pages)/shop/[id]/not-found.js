export default function NotFound() {
  return (
    <div className="container py-20 flex flex-col items-center text-center mt-20">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold text-primary_color mb-4">
          Product Not Found
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The product you are looking for may have been removed, is unavailable,
          or the link is incorrect.
        </p>

        <a
          href="/shop"
          className="bg-primary_color text-white px-8 py-3 rounded-full hover:bg-hardprimary transition text-lg font-semibold"
        >
          Back to Shop
        </a>
      </div>
    </div>
  );
}
