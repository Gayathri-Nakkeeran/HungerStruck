import hero from "../images/hero.png";
import Image from "next/image";
import Foodtype from "./FoodType";
import cat1 from "../images/category-01.png";
import cat2 from "../images/category-02.png";
import cat3 from "../images/category-03.png";
import cat4 from "../images/category-04.png";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="grid lg:grid-cols-2 ">
        <div className=" p-10 self-center my-10 mx-14">
          <p className="eczar font-semibold my-10">Easy way to Make an Order</p>
          <p className="eczar font-semibold text-4xl my-10 mr-20">
            <span className="text-red-600 text-4xl font-semibold">
              HUNGRY?{" "}
            </span>{" "}
            Just wait food at <span className="text-red-600">your door </span>
          </p>
          <p className="text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="my-5 text-left ">
            <button className="bg-red-600 text-white px-6  py-2 rounded-md my-3">
              Order now {">"}
            </button>
            <button className="px-6 rounded-md border text-red-600 py-2 md:mx-4 border-red-600">
              See all foods
            </button>
          </div>

          <div className="py-5 text-left">
            <span className="md:px-3 block md:inline">
              <i className="fa fa-car bg-red-500 rounded-full p-1"></i>
              No shipping charges
            </span>
            <span className="md:px-3">
              <i className="fa fa-shield bg-red-500 rounded-full px-1.5 py-1"></i>
              100% secure checkout
            </span>
          </div>
        </div>
        <div className="  md:mr-9">
          <Image src={hero} alt="Delivery Guy" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 my-1 mx-14 eczar font-semibold">
        <Foodtype image={cat1} categoryName="Fastfood" />
        <Foodtype image={cat2} categoryName="Pizza" />
        <Foodtype image={cat3} categoryName="Asian Food" />
        <Foodtype image={cat4} categoryName="Raw Meat" />
      </div>
    </div>
  );
}
