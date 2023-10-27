import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  const closeCart = () => {};
  // console.log(typeof cartItems);

  return (
    <div className="grid">
      <div className="mx-5 my-3 w-1/3">
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
