"use client";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Card from "@components/Card";
import Home from "@components/Home";
import PopularFood from "@components/PopularFoods";
import Foods from "@components/Foods";
import Cart from "@components/Cart";
import CheckOut from "@components/Checkout";
import { useSelector } from "react-redux";
type stateType = {
  filterBy: string;
};

export default function HomePage() {
  const filterBy = useSelector((state: stateType) => state.filterBy);
  return (
    <div className="grid grid-cols-3">
      <div id="offCart" className="home col-start-1 col-span-3 col-end-4">
        <Header />
        <CheckOut />
      </div>
      <div id="miniCart" className="miniCart hidden">
        <Cart />
      </div>
    </div>
  );
}
