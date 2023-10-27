"use client";
import { useDispatch } from "react-redux";
import miniBurger from "../images/hamburger.png";
import miniPizza from "../images/pizza.png";
import miniBread from "../images/bread.png";
import Image from "next/image";
import { MouseEvent } from "react";

export default function PopularFood() {
  const dispatch = useDispatch();
  const handleFilter = (event: string) => {
    console.log(event);
    dispatch({ type: "storeFilter", payload: { event } });
  };
  return (
    <div className="bg-gray-100 mt-2">
      <div className="text-center eczar text-4xl font-bold pt-5 ">
        <h3>Popular Foods</h3>
      </div>

      <div className="bg-red-600 rounded text-center text-white m-4 py-4">
        <span
          className="py-1 px-4 mx-8 rounded hover:bg-white hover:text-red-600"
          onClick={() => {
            handleFilter("All");
          }}
        >
          All
        </span>
        <span
          className="py-1 px-4 mx-8 rounded hover:bg-white hover:text-red-600"
          onClick={() => {
            handleFilter("Burger");
          }}
        >
          <Image className="inline h-5 w-5 " src={miniBurger} alt="Burger" />
          <span className="p-2">Burger</span>
        </span>
        <span
          className="py-1 px-4 mx-8 rounded hover:bg-white hover:text-red-600"
          onClick={() => {
            handleFilter("Pizza");
          }}
        >
          <Image className="inline h-5 w-5" src={miniPizza} alt="Pizza" />
          <span className="p-2">Pizza</span>
        </span>
        <span
          className="py-1 px-4 mx-8 rounded hover:bg-white hover:text-red-600"
          onClick={() => {
            handleFilter("Bread");
          }}
        >
          <Image className="inline h-5 w-5" src={miniBread} alt="Bread" />
          <span className="p-2">Bread</span>
        </span>
      </div>
    </div>
  );
}
