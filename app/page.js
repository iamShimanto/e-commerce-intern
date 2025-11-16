import Image from "next/image";
import Banner from "./components/home/Banner";
import Feature from "./components/home/Feature";
import FeatureProduct from "./components/home/FeatureProduct";
import ShopByCategory from "./components/home/ShopByCategory";
import WhyChooseUs from "./components/home/WhyChooseUs";
import BestSellerProduct from "./components/home/BestSellertProduct";
import Blog from "./components/home/Blog";

export default function Home() {
  return (
   <>
    <Banner/>
    <Feature />
    <FeatureProduct />
    <ShopByCategory />
    <WhyChooseUs />
    <BestSellerProduct />
    <Blog />
   </>
  );
}
