import { useSelector } from "react-redux";
import Link from "next/link";
// import products from "./Product";
import { RootState } from "../redux/store";
export default function CartTotal() {
  const totalCartValue = useSelector(
    (state: RootState) => state.cartTotalAmount
  );
  return (
    <div className="bg-red-600 p-3 text-white w-screen sm:w-auto">
      <span>
        Subtotal:{" "}
        <span className="text-lg font-semibold">${totalCartValue}</span>
      </span>
      <Link href="../pages/CheckoutPage">
        {" "}
        <button className="float-right bg-white text-black px-3 py-1 rounded">
          Checkout
        </button>
      </Link>
    </div>
  );
}
