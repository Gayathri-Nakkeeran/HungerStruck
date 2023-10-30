import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartItems);

  const closeCart = () => {
    const miniCart = document.querySelector("#miniCart");
    miniCart?.classList.add("hidden");
    // miniCart?.classList.remove("col-span-3", "col-end-4");
    const offCart = document.querySelector("#offCart");
    offCart?.classList.remove("hidden");
    offCart?.classList.add("col-span-3", "col-end-4");
    console.log(offCart, "offfcarts");
  };
  return (
    <div className="grid">
      <div className="mx-5 my-3">
        <button
          className="bg-black rounded-full text-white px-2"
          onClick={() => closeCart()}
        >
          X
        </button>
      </div>
      {cartItems.length ? (
        cartItems.map((item: "string") => {
          console.log(item);
          return <CartItem key={item} id={item} />;
        })
      ) : (
        <p className="font-semibold sm:m-2 p-5">
          Add Items To Cart...Cart Is Empty !!
        </p>
      )}

      <div className="fixed w-1/3 bottom-0">
        <CartTotal />
      </div>
    </div>
  );
}
