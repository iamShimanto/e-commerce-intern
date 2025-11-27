import ProductActions from "@/app/components/products/ProductActions";
import ProductForm from "@/app/components/products/ProductForm";
import ProductGallery from "@/app/components/products/ProductGallery";
import ProductImagePreview from "@/app/components/products/ProductImagePreview";
import Breadcrumb from "@/app/components/ui/BreadCrumb";

const singleProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 30,
    },
  });
  return await res.json();
};

export default async function ProductEditor({ params }) {
  const param = await params;
  const id = param.id;

  const product = await singleProduct(id);
  // console.log(product);

  return (
    <div>
      <div className="heading ml-4 mt-10.5 mb-4.5">
        <h2 className="text-3xl font-bold text-primary_color mb-4">
          Product Details
        </h2>
        <div>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Products Details" },
            ]}
          />
        </div>
      </div>
      <div className="w-full rounded-2xl ml-4 bg-dark_bg border border-white/10 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
        <div className="flex flex-col justify-between">
          <ProductForm product={product} />
        </div>

        <div className="space-y-8">
          <ProductImagePreview product={product} />
          <ProductGallery />
          <ProductActions />
        </div>
      </div>
    </div>
  );
}
