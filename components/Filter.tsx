import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const handleSearch = (e: any) => {
    dispatch({ type: "setSearch", payload: e.target.value });
  };
  return (
    <div className="inline-block border border-red-200 rounded py-1 px-3 m-2 w-2/4">
      <input
        className="w-3/4 focus:outline-none"
        type="text"
        placeholder="I'm looking for...."
        onChange={(e) => {
          handleSearch(e);
        }}
      ></input>
      <i className="fa fa-search float-right" aria-hidden="true"></i>
    </div>
  );
}
