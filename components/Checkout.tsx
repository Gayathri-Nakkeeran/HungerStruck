"use client";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CheckOut() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);
  const country = useSelector((state) => state.country);
  const city = useSelector((state) => state.city);
  const postal = useSelector((state) => state.postal);

  let shippingCost = 30;
  let cartCost = useSelector((state) => state.cartTotalAmount);
  if (cartCost <= 0) {
    shippingCost = 0;
  }
  let totalCost = shippingCost + cartCost;

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("All details submitted");
    console.log();
    if (
      name.length > 0 &&
      email.length > 0 &&
      phone.length == 10 &&
      country.length > 0 &&
      city.length > 0 &&
      postal.length == 6
    ) {
      console.log("Hurray!!!!!!!!!!");
      toast("Hurray! The order has been placed.");
    } else {
      alert("form must be filled out");
      console.log("Fill the form 66666666");
    }
  };

  return (
    <div>
      <div className=" bg-[url('../images/banner.jpg')] bg-violet-400 brightness-50  bg-blend-multiply bg-cover p-20 px-40 bg-center mb-16">
        <h3 className="eczar font-bold text-4xl text-white">Checkout</h3>
      </div>

      <div className="grid grid-cols-3 font-semibold ">
        {/* Address entering field */}
        <div className="col-start-1 col-span-2 m-4 p-2">
          <h4 className="font-semibold mb-4">Shipping Address</h4>
          <form>
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setName", payload: e.target.value });
              }}
              className="p-4 w-full focus:outline-none"
              type="text"
              placeholder="  Enter your name"
            ></input>
            <hr />
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setEmail", payload: e.target.value });
              }}
              className="p-4 w-full focus:outline-none"
              type="email"
              placeholder="  Enter your email"
            ></input>
            <hr />
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setPhone", payload: e.target.value });
              }}
              className="p-4 w-full focus:outline-none"
              type="tel"
              placeholder="  Phone number"
            ></input>
            <hr />
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setCountry", payload: e.target.value });
              }}
              className="p-4 w-full focus:outline-none"
              type="text"
              placeholder="  Country"
            ></input>
            <hr />
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setCity", payload: e.target.value });
              }}
              className="p-4 w-full  focus:outline-none"
              type="text"
              placeholder="  City"
            ></input>
            <hr />
            <input
              required
              onChange={(e) => {
                dispatch({ type: "setPostal", payload: e.target.value });
              }}
              className="p-4 w-full focus:outline-none"
              type="text"
              pattern="[0-9]{6}"
              placeholder="  Postal code"
            ></input>
            <hr />

            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-5 m-2 rounded"
              onClick={(e) => {
                handlePayment(e);
              }}
            >
              Payment
            </button>
            <ToastContainer position="top-center" />
          </form>
        </div>

        {/* Total box for checkout */}
        <div className="bg-red-100 p-5 m-5 self-start ">
          <div>
            <span>SubTotal: </span>
            <span className="float-right">${cartCost}</span>
          </div>
          <div className="mb-3">
            <span>Shipping: </span>
            <span className="float-right">${shippingCost}</span>
          </div>

          <hr />

          <div className="eczar font-bold mt-3 text-lg">
            <span>Total: </span>
            <span className="float-right">${totalCost}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
