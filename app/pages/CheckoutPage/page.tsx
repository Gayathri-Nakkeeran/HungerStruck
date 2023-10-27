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
    <>
      <Header />
      <CheckOut />
    </>
  );
}
