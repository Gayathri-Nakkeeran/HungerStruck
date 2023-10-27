import Image from "next/image";
import Link from "next/link";
import logo from "../public/res-logo.png";
import { useSelector } from "react-redux";
export default function Header() {
  const cartCount = useSelector((state) => state.cartCount);
  return (
    <div className="grid items-center grid-cols-3 text-sm bg-gray-100 mb-1">
      <div className="logo m-2">
        <Image className="w-12 h-12" src={logo} alt="Logooo" />
        <h2 className="text-lg font-semibold  eczar">Tasty Treat</h2>
      </div>
      <div className="justify-self-center nav m-2">
        <Link href="../pages/HomePage">
          <span className="font-semibold p-4">Home</span>
        </Link>
        <Link href="../pages/FoodExplorePage">
          <span className="font-semibold p-4">Foods</span>
        </Link>
        <Link href="../pages/CartPage">
          <span className="font-semibold p-4">Cart</span>
        </Link>
        <Link href="../pages/CheckoutPage">
          <span className="font-semibold p-4">Contact</span>
        </Link>
      </div>
      <div className=" justify-self-end logo m-5 p-4">
        <span className="relative m-4 ">
          <Link href="../pages/CartPage">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          </Link>
          <span className="absolute -top-3.5 -right-3.5 bg-red-600 rounded-full px-1.5">
            {cartCount}
          </span>
        </span>
        <span className="m-4">
          <i className="fa fa-user-o" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}
