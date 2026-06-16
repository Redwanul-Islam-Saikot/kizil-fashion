import type { Route } from "./+types/home";
import Hero from "../../components/hero";
import ShopByCategory from "../../components/category";
import FlashDeals from "../../components/flashdeals";
import NewArrivals from "../../components/newarrivals";
import TopPickOfTheSeason from "../../components/pickofseason";
import PopularBundles from "../../components/popularbundles";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kizil Fashion" },
  ];
}

export default function Home() {
  return <>
    <Hero />
    <ShopByCategory />
    <FlashDeals />
    <NewArrivals />
    <TopPickOfTheSeason />
    <PopularBundles />
  </>
}
