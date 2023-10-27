import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  const closeCart = () => {
    const miniCart = document.querySelector("#miniCart");
    miniCart?.classList.add("hidden");
    const offCart = document.querySelector("#offCart");
    // offCart?.classList.remove("col-span-2", "col-end-3");
    offCart?.classList.add("col-span-3", "col-end-4");
    console.log(offCart, "offfcarts");
    // offCart?.classList.add('')
  };
  // console.log(typeof cartItems);

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

      {/* {Object.keys(cartItems).map((key, index) => {
        console.log(key, index);
        return <CartItem key={key} id={key} />;
      })} */}
      {/* {cartItems.forEach((key, value) => {
        // return <div>Gayu</div>;
        console.log(key, value);
      })} */}

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
