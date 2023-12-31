"use client";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { RootState } from "../redux/store";
export default function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  let shippingCost = 30;
  let cartCost = useSelector((state: RootState) => state.cartTotalAmount);
  if (cartCost <= 0) {
    shippingCost = 0;
  }
  let totalCost = shippingCost + cartCost;

  const handlePayment = (e: any) => {
    toast("Hurray! The order has been placed.");
    dispatch({ type: "clearCart", payload: "" });
  };

  return (
    <div>
      <div className=" bg-[url('../images/banner.jpg')] bg-violet-400 brightness-50  bg-blend-multiply bg-cover p-20 px-40 bg-center mb-16">
        <h3 className="eczar font-bold text-4xl text-white">Checkout</h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 font-semibold ">
        <div className="col-start-1 col-span-2 m-4 p-2">
          <h4 className="font-semibold mb-4">Shipping Address</h4>
          <Form onSubmit={handleSubmit(handlePayment)}>
            <Form.Field>
              <input
                id="username"
                className="p-4 w-full focus:outline-none"
                type="text"
                placeholder="  Enter your name"
                {...register("firstName", { required: true, maxLength: 10 })}
                onChange={(e) => {
                  dispatch({ type: "setName", payload: e.target.value });
                }}
              ></input>
            </Form.Field>
            {errors.firstName && (
              <p className="text-red-400">Please Enter your Name</p>
            )}
            <hr />

            <Form.Field>
              <input
                id="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                onChange={(e) => {
                  dispatch({ type: "setEmail", payload: e.target.value });
                }}
                className="p-4 w-full focus:outline-none"
                type="email"
                placeholder="  Enter your email"
              ></input>
            </Form.Field>
            {errors.email && (
              <p className="text-red-400">Please enter valid Email</p>
            )}
            <hr />
            <Form.Field>
              <input
                id="phone"
                {...register("phone", { required: true, minLength: 10 })}
                onChange={(e) => {
                  dispatch({ type: "setPhone", payload: e.target.value });
                }}
                className="p-4 w-full focus:outline-none"
                type="tel"
                placeholder="  Phone number"
              ></input>
            </Form.Field>
            {errors.phone && (
              <p className="text-red-400">Please enter valid 10 digit number</p>
            )}
            <hr />
            <Form.Field>
              <input
                id="country"
                {...register("country", { required: true, maxLength: 30 })}
                onChange={(e) => {
                  dispatch({ type: "setCountry", payload: e.target.value });
                }}
                className="p-4 w-full focus:outline-none"
                type="text"
                placeholder="  Country"
              ></input>
            </Form.Field>
            {errors.country && (
              <p className="text-red-400">Please fill country</p>
            )}
            <hr />
            <Form.Field>
              <input
                id="city"
                {...register("city", { required: true, maxLength: 20 })}
                onChange={(e) => {
                  dispatch({ type: "setCity", payload: e.target.value });
                }}
                className="p-4 w-full  focus:outline-none"
                type="text"
                placeholder="  City"
              ></input>
            </Form.Field>
            {errors.city && <p className="text-red-400">Please fill city</p>}
            <hr />
            <Form.Field>
              <input
                id="postal"
                {...register("postal", { required: true, maxLength: 6 })}
                onChange={(e) => {
                  dispatch({ type: "setPostal", payload: e.target.value });
                }}
                className="p-4 w-full focus:outline-none"
                type="text"
                pattern="[0-9]{6}"
                placeholder="  Postal code"
              ></input>
            </Form.Field>
            {errors.postal && (
              <p className="text-red-400">Enter valid postal code</p>
            )}
            <hr />

            <Button
              type="submit"
              className="bg-red-600 text-white py-2 px-5 m-2 rounded"
            >
              Payment
            </Button>
            <ToastContainer position="top-center" />
          </Form>
        </div>

        {/* Total box for checkout */}
        <div className="bg-red-100 p-5 m-5  self-start col-span-3  sm:col-span-1   ">
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
