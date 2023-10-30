"use client";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Card from "@components/Card";
import Home from "@components/Home";
import PopularFood from "@components/PopularFoods";
import Foods from "@components/Foods";
import Cart from "@components/Cart";
import CheckOut from "@components/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
type stateType = {
  filterBy: string;
};

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "removeSearch", payload: "" });
  });

  const filterBy = useSelector((state: stateType) => state.filterBy);
  return (
    <div className="grid lg:grid-cols-3">
      <div id="offCart" className="home col-start-1 col-span-3 col-end-4">
        <Header />
        <Home />
        <PopularFood />
        <Card category={filterBy} />
        <Footer />
      </div>

      <div id="miniCart" className="miniCart hidden z-50">
        <Cart />
      </div>
    </div>
  );
}
