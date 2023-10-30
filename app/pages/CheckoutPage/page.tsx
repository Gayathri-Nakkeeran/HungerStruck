"use client";
import Header from "@components/Header";
import Cart from "@components/Cart";
import CheckOut from "@components/Checkout";
export default function HomePage() {
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
