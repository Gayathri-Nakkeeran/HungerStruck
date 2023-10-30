import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartItems);

  const closeCart = () => {
    const miniCart = document.querySelector("#miniCart");
    miniCart?.classList.add("hidden");
    const offCart = document.querySelector("#offCart");
    offCart?.classList.add("col-span-3", "col-end-4");
    console.log(offCart, "offfcarts");
  };
  return (
    <div className="grid bg-gray-100">
      <div className="mx-5 my-3">
        <button
          className="bg-black rounded-full text-white px-2"
          onClick={() => closeCart()}
        >
          X
        </button>
      </div>

      {cartItems.map((item: "string") => {
        console.log(item);
        return <CartItem key={item} id={item} />;
      })}

      <div className="self-end">
        <CartTotal />
      </div>
    </div>
  );
}
