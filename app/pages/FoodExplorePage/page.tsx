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

export default function FoodExplorePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "removeFilterSearch", payloaad: "" });
  });
  const filterBy = useSelector((state: stateType) => state.filterBy);
  return (
    <>
      <Header />
      <Foods />
      <Card category={filterBy} />
      <Footer />
    </>
  );
}
