type cartItemPropType = {
  key: string;
  id: string;
};

import Image from "next/image";
import products from "./Product";
import { useSelector, useDispatch } from "react-redux";

export default function CartItem(props: cartItemPropType) {
  // console.log(props);

  const quantity = useSelector((state) => state.cartQuantity);
  const count = quantity[props.id];
  // console.log(quantity);
  const cartItem = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveCartItem = (e) => {
    // console.log("remove cart item clicked");
    console.log(e.target.id);

    // console.log(index);

    dispatch({
      type: "removeFromCart",
      payload: { id: e.target.id, price: products[e.target.id - 1]["price"] },
    });
    // let newCart = cartItem.splice(index, 1);
  };

  const increaseQuantity = (e) => {
    dispatch({
      type: "increaseQuantity",
      payload: { id: e.target.id, price: products[e.target.id - 1]["price"] },
    });
  };

  const decreaseQuantity = (e) => {
    dispatch({
      type: "decreaseQuantity",
      payload: { id: e.target.id, price: products[e.target.id - 1]["price"] },
    });
  };

  return (
    <div className="grid grid-cols-2 m-4  w-1/3 items-center">
      <div className="grid grid-cols-3">
        <div>
          <Image
            className="w-10 h-10"
            src={products[Number(props.id) - 1]["image01"]}
            alt="food"
          ></Image>
        </div>

        <div className="col-span-2">
          <span className="font-semibold">
            {products[Number(props.id) - 1]["title"]}
          </span>
          <div className=" mt-4 mb-4 pb-8">
            <span className="float-left">{count}x</span>

            <span className="float-right text-red-600 font-semibold">
              ${count * products[Number(props.id) - 1]["price"]}
            </span>
          </div>
          <div className="bg-red-200 text-black text-center rounded p-1 mb-4">
            <button
              id={props.id}
              className="float-left px-2"
              onClick={(e) => {
                increaseQuantity(e);
              }}
            >
              +
            </button>
            <span>{count}</span>
            <button
              id={props.id}
              className="float-right px-2"
              onClick={(e) => {
                decreaseQuantity(e);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>

      <div className="text-black font-bold justify-self-end m-4 ">
        <button
          id={props.id}
          onClick={(e) => {
            handleRemoveCartItem(e);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}