"use client";
import Header from "@components/Header";
import Cart from "@components/Cart";
type stateType = {
  filterBy: string;
};

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="lg:mx-20 lg:my-10">
        <Cart />
      </div>
    </>
  );
}
