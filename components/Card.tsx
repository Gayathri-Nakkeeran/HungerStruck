import Image from "next/image";
import Product from "./Product.js";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
type categoryFilter = {
  category?: string;
  searchBy?: string;
};
export default function Card(props: categoryFilter) {
  const dispatch = useDispatch();
  const searchBy = useSelector((state: RootState) => state.searchBy);
  const sortBy = useSelector((state: RootState) => state.sortBy);

  const handleAddToCart = (e: any) => {
    dispatch({
      type: "addToCart",
      payload: { id: e.target.id, price: Product[e.target.id - 1]["price"] },
    });
  };

  if (searchBy.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4">
        {Product.map((item) => {
          if (item.title.toLowerCase().indexOf(searchBy.toLowerCase()) > -1)
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
                <div className="mb-5">
                  <span className="font-bold text-red-600 text-start float-left m-3">
                    ${item.price}
                  </span>
                  <span className="text-end float-right my-3 mx-4">
                    <button
                      id={item.id}
                      onClick={(e) => {
                        handleAddToCart(e);
                      }}
                      className="bg-red-600 text-white rounded px-5 "
                    >
                      Add To Cart
                    </button>
                  </span>
                </div>
              </div>
            );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4">
      {Product.map((item) => {
        if (
          (props.category == "All" && Number(item.id) <= 8) ||
          item.category == props.category
        )
          return (
            <div
              key={item.id}
              className=" grid max-w-sm rounded border border-red-50 m-4"
            >
              <Image
                className=" justify-self-center h-40 w-40 md:h-20 md:w-20 m-7"
                src={item.image01}
                alt="food"
              />
              <span className="block text-center eczar font-semibold">
                {item.title}
              </span>
              <div className="mb-5">
                <span className="font-bold text-red-600 text-start float-left my-3 mx-10 md:m-3">
                  ${item.price}
                </span>
                <span className="text-end float-right my-3 mx-4">
                  <button
                    id={item.id}
                    className="bg-red-600 text-white rounded px-8 md:px-5 "
                    onClick={(e) => {
                      handleAddToCart(e);
                    }}
                  >
                    Add To Cart
                  </button>
                </span>
              </div>
            </div>
          );
      })}
    </div>
  );
}
