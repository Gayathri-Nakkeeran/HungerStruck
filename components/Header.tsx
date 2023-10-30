import Image from "next/image";
import Link from "next/link";
import logo from "../public/res-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export default function Header() {
  const cartCount = useSelector((state: RootState) => state.cartCount);
  const handleMiniCart = () => {
    console.log("Trying to open mini cart");
    const miniCart = document.querySelector("#miniCart");
    const offCart = document.querySelector("#offCart");
    offCart?.classList.remove("col-span-3", "col-end-4");
    offCart?.classList.add("col-span-2", "col-end-3");
    miniCart?.classList.remove("hidden");

    console.log(miniCart);
  };
  return (
    <div className="grid items-center grid-cols-3 text-sm bg-gray-100 mb-1">
      <div className="logo m-2">
        <Image className="w-10 h-10 sm:w-12 sm:h-12" src={logo} alt="Logooo" />
        <h2 className="text-md sm:text-lg font-semibold  eczar">Tasty Treat</h2>
      </div>
      <div className="justify-self-center nav m-1 sm:m-2">
        <Link href="../pages/HomePage">
          <span className="font-semibold p-2 sm:p-4">Home</span>
        </Link>
        <Link href="../pages/FoodExplorePage">
          <span className="font-semibold p-2 sm:p-4">Foods</span>
        </Link>
        <Link href="../pages/CartPage">
          <span className="font-semibold p-2  sm:p-4">Cart</span>
        </Link>
        <Link href="../pages/CheckoutPage">
          <span className="font-semibold p-2 sm:p-4">Contact</span>
        </Link>
      </div>
      <div className=" justify-self-end logo m-2 p-2 sm:m-5 sm:p-4">
        <span className="relative m-4 ">
          <i
            className="fa fa-shopping-basket"
            aria-hidden="true"
            onClick={() => {
              handleMiniCart();
            }}
          ></i>

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
