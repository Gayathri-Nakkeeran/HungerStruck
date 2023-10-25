import Image from "next/image";
import Product from "./Product.js";
export default function Card() {
  return (
    <div className="grid grid-cols-4 m-4">
      {Product.map((item) => {
        return (
          <div
            key={item.id}
            className=" grid max-w-sm rounded border border-red-50 m-4"
          >
            <Image
              className=" justify-self-center h-20 w-20 m-7"
              src={item.image01}
              alt="food"
            />
            <span className="block text-center eczar font-semibold">
              {item.title}
            </span>
            <div>
              <span className="font-bold text-red-600 text-start float-left m-3">
                ${item.price}
              </span>
              <span className="text-end float-right my-3 mx-4">
                <button className="bg-red-600 text-white rounded px-5 ">
                  Add To Cart
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>

    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <Image className="w-full" src="/img/card-top.jpg" alt="food" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">Item</div>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       cost
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       add to cart
    //     </span>
    //     {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #winter
    //     </span> */}
    //   </div>
    // </div>
  );
}
