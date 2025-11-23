import Banner from "./components/dashboard/Banner";
import BestSellers from "./components/dashboard/BestSellers";
import MarketOverview from "./components/dashboard/MarketOverview";
import RecentPurchases from "./components/dashboard/RecentPurchases";
import SalesChart from "./components/dashboard/SalesChart";
import TotalRevenue from "./components/dashboard/TotalRevenue";
import VisitsBySource from "./components/dashboard/VisitsBySource";

export default function Home() {
  return (
    <>
      <div className="pt-9 md:pl-6">
        <Banner />
        <div className="flex flex-col xl:flex-row gap-4.5 mt-6.5">
          <SalesChart />
          <BestSellers />
        </div>
        <RecentPurchases />
        <div className="flex gap-6 mt-8">
          <MarketOverview />
          <VisitsBySource />
          <TotalRevenue />
        </div>
      </div>
    </>
  );
}
