import Image from "next/image";
import Banner from "./components/home/Banner";
import Feature from "./components/home/Feature";
import FeatureProduct from "./components/home/FeatureProduct";
import ShopByCategory from "./components/home/ShopByCategory";

export default function Home() {
  return (
   <>
    <Banner/>
    <Feature />
    <FeatureProduct />
    <ShopByCategory />
   </>
  );
}
