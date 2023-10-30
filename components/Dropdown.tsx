import { useDispatch } from "react-redux";
export default function Dropdown() {
  const dispatch = useDispatch();
  const handleSort = (e: any) => {
    dispatch({ type: "setSorting", payload: e.target.value });
  };
  return (
    <span className=" border border-red-200 w-40 rounded py-1 px-3 m-2 sm:w-1/4 float-right ">
      <select
        className="w-full focus:outline-none"
        onChange={(e) => handleSort(e)}
      >
        <option className="text-xs sm:text-base m-0 p-0" value="default">
          Default
        </option>
        <option className="text-xs sm:text-base m-0 p-0" value="asc">
          Price (Low to High)
        </option>
        <option className="text-xs sm:text-base m-0 p-0" value="desc">
          Price(High to Low)
        </option>
      </select>
    </span>
  );
}
