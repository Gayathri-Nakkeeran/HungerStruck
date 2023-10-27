import { useDispatch } from "react-redux";
export default function Dropdown() {
  const dispatch = useDispatch();
  const handleSort = (e) => {
    console.log("Sorting Now");
    dispatch({ type: "setSorting", payload: e.target.value });
    // console.log(e.target.value);
  };
  return (
    <span className="border border-red-200 rounded py-1 px-3 m-2 w-1/4 float-right ">
      <select
        className="w-full focus:outline-none"
        onChange={(e) => handleSort(e)}
      >
        <option value="default">Default</option>
        <option value="asc">Price (Low to High)</option>
        <option value="desc">Price(High to Low)</option>
      </select>
    </span>
  );
}
